const Stack = createStackNavigator<RootStackParamList>();
const LoginScreen = React.lazy(() => import('auth-mfe').then((module) => ({ default: module.LoginScreen })));
const MainNavigator = React.lazy(() => import('main-mfe').then((module) => ({ default: module.MainStackNavigation })));
import { StatusBar } from 'expo-status-bar';
import React, { Suspense, useEffect } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from './navigation';
import { useUpdates, reloadAsync } from 'expo-updates';

const MainNavigationStack = () => {
    return (
        <Stack.Navigator>        
                <Stack.Screen name="Login" options={{ headerShown: false, }}>
                {(props: StackScreenProps<RootStackParamList, 'Login'>) => (
                <Suspense fallback={<Text>Loading...</Text>}>
                    <LoginScreen {...props} />
                </Suspense>
                )}
                </Stack.Screen>
                <Stack.Screen name="Main" options={{ headerShown: false, }} >
                {(props: StackScreenProps<RootStackParamList, 'Main'>) => (
                <Suspense fallback={<Text>Loading...</Text>}>
                    <MainNavigator {...props} />
                </Suspense>
                )}
                </Stack.Screen>
            </Stack.Navigator>
    );
}

export default MainNavigationStack;