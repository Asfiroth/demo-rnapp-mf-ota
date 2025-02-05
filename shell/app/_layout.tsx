import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import React, { Suspense, useEffect } from 'react';
import { useFonts } from 'expo-font';
import { useUpdates, reloadAsync } from 'expo-updates';
import { Stack } from 'expo-router';
import { View, Text } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import LoadingScreen from './loading';
import { NavigationContainer } from '@react-navigation/native';
import "react-native-reanimated";
import { StatusBar } from "expo-status-bar";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { isUpdateAvailable, isUpdatePending } = useUpdates();
  useEffect(() => {    
    if(isUpdatePending) {      
      reloadAsync();
    }
  }, [isUpdatePending]);

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name="index" options={{ title: "Authentication" }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
      </ThemeProvider>
  );
}