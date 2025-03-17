import { View, Text, Image, Pressable } from 'react-native';

const logos = [
  {
    name: 'Primary Logo',
    description: 'Use this as the main logo in most contexts',
    image: require('@/assets/images/icon.png'),
    downloadUrl: '/logos/primary-logo.png'
  },
  {
    name: 'Icon Only',
    description: 'Use this when space is limited or for favicon',
    image: require('@/assets/images/favicon.png'),
    downloadUrl: '/logos/icon-only.png'
  },
  {
    name: 'Dark Mode',
    description: 'Use this version on dark backgrounds',
    image: require('@/assets/images/adaptive-icon.png'),
    downloadUrl: '/logos/dark-mode.png'
  },
];

export function BrandLogos() {
  const handleDownload = (url: string) => {
    const baseUrl = process.env.NEXT_PUBLIC_WEBSITE_URL || window.location.origin;
    const fullUrl = `${baseUrl}${url}`;
    const link = document.createElement('a');
    link.href = fullUrl;
    link.download = url.split('/').pop() || 'logo.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadAll = () => {
    logos.forEach((logo, index) => {
      setTimeout(() => {
        handleDownload(logo.downloadUrl);
      }, index * 500);
    });
  };

  return (
    <View className="my-6">
      <View className="flex-row justify-between items-center mb-6">
        <Text className="text-2xl font-bold text-gray-900">Logos</Text>
        <Pressable
          onPress={handleDownloadAll}
          className="bg-blue-500 px-4 py-2 rounded-lg active:bg-blue-600"
        >
          <Text className="text-white font-medium">Download All Logos</Text>
        </Pressable>
      </View>
      <View className="flex-row justify-center gap-8">
        {logos.map((logo) => (
          <View key={logo.name} className="w-[180px] items-center">
            <View className="w-32 h-32 bg-gray-100 rounded-xl justify-center items-center mb-3">
              <Image
                source={logo.image}
                className="w-28 h-28"
                resizeMode="contain"
                style={{ maxWidth: 112, maxHeight: 112 }}
              />
            </View>
            <Text className="text-base font-semibold text-gray-900 mb-1">{logo.name}</Text>
            <Text className="text-sm text-gray-500 text-center mb-2">{logo.description}</Text>
            <Pressable
              onPress={() => handleDownload(logo.downloadUrl)}
              className="bg-blue-500 px-4 py-2 rounded-lg active:bg-blue-600"
            >
              <Text className="text-white font-medium text-sm">Download</Text>
            </Pressable>
          </View>
        ))}
      </View>
    </View>
  );
} 