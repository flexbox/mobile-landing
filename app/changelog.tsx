import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { router } from 'expo-router';
import { changelog } from '@/constants/landing';
import { theme } from '@/constants/theme';
import { translate } from '@/i18n/translate';
import { ScreenContainer } from '@/app/components/ScreenContainer';

export type ChangeType = 'feature' | 'improvement' | 'fix';

interface Change {
  type: ChangeType;
  id: string;
}

interface Version {
  version: string;
  date: string;
  changes: Change[];
}

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

  const getChangeTypeStyle = (type: ChangeType): ChangeTypeStyle => {
    switch (type) {
      case 'feature':
        return {
          color: theme.colors.primary,
          icon: 'star',
          label: translate('changelog.labels.features')
        };
      case 'improvement':
        return {
          color: theme.colors.secondary,
          icon: 'arrow-up',
          label: translate('changelog.labels.improvements')
        };
      case 'fix':
        return {
          color: theme.colors.text,
          icon: 'wrench',
          label: translate('changelog.labels.fixes')
        };
      default:
        return {
          color: theme.colors.secondary,
          icon: 'info-circle',
          label: translate('changelog.labels.updates')
        };
    }
  };

  const groupChangesByType = (changes: Change[]) => {
    return changes.reduce((acc: Record<ChangeType, Change[]>, change) => {
      if (!acc[change.type]) {
        acc[change.type] = [];
      }
      acc[change.type].push(change);
      return acc;
    }, {} as Record<ChangeType, Change[]>);
  };

  const versions = changelog.versions as Version[];

  return (
    <ScreenContainer
      frontMatter={{
        title: translate('changelog.title'),
        description: translate('changelog.description'),
      }}
    >
      <View className="px-4 py-8">
        <ScrollView className="flex-1 bg-gray-50">
          <View className="flex-1 items-center min-h-screen">
            <View className="w-full max-w-[50%] py-16">
              <View className="space-y-6">
                {versions.map((version, index) => {
                  const groupedChanges = groupChangesByType(version.changes);
                  const changeTypes: ChangeType[] = ['feature', 'improvement', 'fix'];

                  return (
                    <View key={index} className="bg-white rounded-2xl shadow-sm px-8 py-6">
                      <View className="space-y-6">
                        {/* Version Header */}
                        <View className="border-b border-gray-100 pb-4">
                          <View className="flex-row items-baseline justify-between">
                            <Text className="text-xl font-semibold" style={{ color: theme.colors.text }}>
                              {translate('changelog.version', { version: version.version })}
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
                                  {groupedChanges[type].map((change, changeIndex) => (
                                    <View key={changeIndex} className="flex-row items-start">
                                      <Text className="text-sm leading-relaxed" style={{ color: theme.colors.text }}>
                                        • {translate(`changelog.${change.id}`)}
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
      </View>
    </ScreenContainer>
  );
} 