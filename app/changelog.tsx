import { View, Text, ScrollView, Image } from 'react-native';
import { changelog, appInfo } from '@/constants/landing';
import { theme } from '@/constants/theme';
import { router } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import React from 'react';

type ChangeType = 'feature' | 'improvement' | 'fix';

interface ChangeTypeStyle {
  color: string;
  icon: keyof typeof FontAwesome.glyphMap;
  label: string;
}

export default function ChangelogScreen() {
  if (!changelog.enabled) {
    router.replace('/');
    return null;
  }

  const getChangeTypeStyle = (type: string): ChangeTypeStyle => {
    switch (type as ChangeType) {
      case 'feature':
        return {
          color: theme.colors.primary,
          icon: 'star',
          label: 'Features'
        };
      case 'improvement':
        return {
          color: theme.colors.secondary,
          icon: 'arrow-up',
          label: 'Improvements'
        };
      case 'fix':
        return {
          color: theme.colors.text,
          icon: 'wrench',
          label: 'Bug Fixes'
        };
      default:
        return {
          color: theme.colors.secondary,
          icon: 'info-circle',
          label: 'Updates'
        };
    }
  };

  const groupChangesByType = (changes: any[]) => {
    return changes.reduce((acc: any, change) => {
      const type = change.type as ChangeType;
      if (!acc[type]) {
        acc[type] = [];
      }
      acc[type].push(change);
      return acc;
    }, {});
  };

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="flex-1 items-center min-h-screen">
        <View className="w-full max-w-[50%] py-16">
          {/* App Header */}
          <View className="bg-white rounded-2xl shadow-sm px-8 py-6 mb-8">
            <View className="flex-row items-center space-x-4 justify-center">
              <View className="shadow-sm rounded-xl bg-gray-50 p-2">
                <Image
                  source={require('@/assets/images/icon.png')}
                  style={{ width: 48, height: 48, borderRadius: 12 }}
                />
              </View>
              <View>
                <Text className="text-2xl font-bold" style={{ color: theme.colors.text }}>
                  {appInfo.name}
                </Text>
                <Text className="text-sm text-gray-500">
                  Release Notes
                </Text>
              </View>
            </View>
          </View>

          {/* Versions List */}
          <View className="space-y-6">
            {changelog.versions.map((version, index) => {
              const groupedChanges = groupChangesByType(version.changes);
              const changeTypes: ChangeType[] = ['feature', 'improvement', 'fix'];

              return (
                <View key={index} className="bg-white rounded-2xl shadow-sm px-8 py-6">
                  <View className="space-y-6">
                    {/* Version Header */}
                    <View className="border-b border-gray-100 pb-4">
                      <View className="flex-row items-baseline justify-between">
                        <Text className="text-xl font-semibold" style={{ color: theme.colors.text }}>
                          Version {version.version}
                        </Text>
                        <Text className="text-sm text-gray-500">
                          {version.date}
                        </Text>
                      </View>
                    </View>

                    {/* Changes by Type */}
                    <View className="space-y-8">
                      {changeTypes.map((type) => {
                        if (!groupedChanges[type]?.length) return null;
                        const style = getChangeTypeStyle(type);

                        return (
                          <View key={type} className="space-y-4">
                            <View className="flex-row items-center space-x-3">
                              <View
                                style={{ backgroundColor: style.color + '10' }}
                                className="w-7 h-7 rounded-full items-center justify-center"
                              >
                                <FontAwesome name={style.icon} size={14} color={style.color} />
                              </View>
                              <Text className="text-sm font-medium" style={{ color: style.color }}>
                                {style.label}
                              </Text>
                            </View>

                            <View className="space-y-3 pl-10">
                              {groupedChanges[type].map((change: any, changeIndex: number) => (
                                <View key={changeIndex} className="flex-row items-start">
                                  <Text className="text-sm leading-relaxed" style={{ color: theme.colors.text }}>
                                    • {change.description}
                                  </Text>
                                </View>
                              ))}
                            </View>
                          </View>
                        );
                      })}
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </ScrollView>
  );
} 