import React, { createContext, useContext, useRef } from 'react';
import { ScrollView } from 'react-native';
import { usePathname, useRouter } from 'expo-router';

type ScrollContextType = {
  scrollToSection: (sectionId: string) => void;
  setScrollViewRef: (ref: ScrollView | null) => void;
};

const ScrollContext = createContext<ScrollContextType>({
  scrollToSection: () => { },
  setScrollViewRef: () => { },
});

export const useScroll = () => useContext(ScrollContext);

export const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const scrollViewRef = useRef<ScrollView | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  const scrollToSection = (sectionId: string) => {
    if (pathname !== '/') {
      router.push('/');
      setTimeout(() => {
        const yOffset = sectionId === 'features' ? 600 : 1800;
        scrollViewRef.current?.scrollTo({ y: yOffset, animated: true });
      }, 100);
    } else {
      const yOffset = sectionId === 'features' ? 600 : 1800;
      scrollViewRef.current?.scrollTo({ y: yOffset, animated: true });
    }
  };

  return (
    <ScrollContext.Provider value={{ scrollToSection, setScrollViewRef: (ref) => scrollViewRef.current = ref }}>
      {children}
    </ScrollContext.Provider>
  );
}; 