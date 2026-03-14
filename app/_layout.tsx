import '../lib/config/global.css';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import InsetsHelper from '@/components/helpers/InsetsHelper.tsx';
import { LanguageHelper } from '@/components/helpers/LanguageHelper.tsx';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '@/store';
import { useColors } from '@/hooks/useColors.ts';
import { useAppSelector } from '@/store/hooks.ts';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { View } from 'react-native';

function AppContent() {
  const { theme } = useAppSelector((state) => state.app);
  const colors = useColors();

  const navigationTheme = {
    ...(theme === 'dark' ? DarkTheme : DefaultTheme),
    dark: theme === 'dark',
    colors: {
      ...(theme === 'dark' ? DarkTheme.colors : DefaultTheme.colors),
      primary: colors.primary,
      background: colors.background,
      card: colors.neutrals800,
      text: colors.foreground,
      border: colors.neutrals700,
      notification: colors.primary,
    },
  };

  return (
    <View style={{ flex: 1 }} className={theme === 'dark' ? 'dark' : ''}>
      <GestureHandlerRootView>
        <SafeAreaProvider>
          <BottomSheetModalProvider>
            <ThemeProvider value={navigationTheme}>
              <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              </Stack>
            </ThemeProvider>
            <StatusBar style="auto" />
            <LanguageHelper />
            <InsetsHelper />
          </BottomSheetModalProvider>
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </View>
  );
}

export default function RootLayout() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppContent />
      </PersistGate>
    </Provider>
  );
}
