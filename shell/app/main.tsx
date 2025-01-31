import { useRouter } from 'expo-router';
import React from 'react';
import { Suspense } from 'react';
import { Text, View } from 'react-native';
import LoadingScreen from './loading';

const MainNavigator = React.lazy(() => 
  import('main-mfe').then((module) => ({ default: module.MainStackNavigation }))
);

export default function MainPage() {
    const router = useRouter();
  return (
    <Suspense fallback={<LoadingScreen />}>
        <MainNavigator navigation={router} route={null} />
      </Suspense>
  );
}