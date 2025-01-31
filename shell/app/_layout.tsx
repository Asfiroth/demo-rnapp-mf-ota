// import { Stack, useRouter } from "expo-router";
// import { useEffect } from "react";
// import { Alert } from "react-native";
// import { useUpdates, reloadAsync } from "expo-updates";

// export default function Layout() {
//   const router = useRouter();
//   const { isUpdateAvailable, isUpdatePending } = useUpdates();

//   useEffect(() => {
//     if (isUpdatePending) {
//       reloadAsync();
//     }
//   }, [isUpdatePending]);

//   return <Stack />;
// }

import { StatusBar } from 'expo-status-bar';
import React, { Suspense, useEffect } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation';
import { useUpdates, reloadAsync } from 'expo-updates';
import LoadingScreen from './loading';

const Stack = createStackNavigator<RootStackParamList>();
const LoginScreen = React.lazy(() => import('auth-mfe').then((module) => ({ default: module.LoginScreen })));
const MainNavigator = React.lazy(() => import('main-mfe').then((module) => ({ default: module.MainStackNavigation })));

export default function RootLayout() {
  const { isUpdateAvailable, isUpdatePending } = useUpdates();
  useEffect(() => {    
    if(isUpdatePending) {      
      reloadAsync();
    }
  }, [isUpdatePending]);
  return (
    <Stack.Navigator>
        <Stack.Screen name="Login" options={{ headerShown: false, }}>
          {(props: StackScreenProps<RootStackParamList, 'Login'>) => (
          <Suspense fallback={<LoadingScreen />}>
            <LoginScreen {...props} />
          </Suspense>
        )}
        </Stack.Screen>
        <Stack.Screen name="Main" options={{ headerShown: false, }} >
          {(props: StackScreenProps<RootStackParamList, 'Main'>) => (
          <Suspense fallback={<LoadingScreen />}>
            <MainNavigator {...props} />
          </Suspense>
        )}
        </Stack.Screen>
      </Stack.Navigator>
  );
}