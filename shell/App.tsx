import { StatusBar } from 'expo-status-bar';
import React, { Suspense, useEffect } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from './navigation';
import { useUpdates, reloadAsync } from 'expo-updates';
import AppStack from './AppStack';



const App = () => {
    const { isUpdateAvailable, isUpdatePending } = useUpdates();
      useEffect(() => {    
        if(isUpdatePending) {      
          reloadAsync();
        }
      }, [isUpdatePending]);

    return (
        <NavigationContainer>
            <AppStack />
        </NavigationContainer>
    )
};

export default App;