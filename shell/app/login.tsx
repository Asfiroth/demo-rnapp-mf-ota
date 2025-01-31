import { Suspense } from 'react';
import { Text, View } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import React from 'react';
import LoadingScreen from './loading';

const LoginScreen = React.lazy(() => 
  import('auth-mfe').then((module) => ({ default: module.LoginScreen }))
);

const LoginPage = () => {
    const router = useRouter();
  
    return (
        <>
            <Stack.Screen options={{ headerShown: false }} />
            <Suspense fallback={<LoadingScreen />}>
                <LoginScreen navigation={router} />
            </Suspense>
        </>
    );
};

export default LoginPage;