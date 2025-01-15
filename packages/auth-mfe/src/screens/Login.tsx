import React from 'react';
import { View, Text, Button, SafeAreaView, StyleSheet, TextInput, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { CommonActions } from '@react-navigation/native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      justifyContent: 'center',
      backgroundColor: '#f5f5f5',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      padding: 10,
      marginBottom: 10,
      backgroundColor: '#fff',
    },
    errorInput: {
      borderColor: 'red',
    },
    errorText: {
      color: 'red',
      fontSize: 12,
      marginBottom: 10,
    },
  });

  const schema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });
  
//@ts-ignore
const LoginScreen = ({navigation} ) => {
    const onSubmit = (data: { email: string; }) => {
        // Handle login logic
        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{ name: 'Main' }],
            })
        );
      };

      const {
        control,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
      });

  return (
    <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>

            {/* Email Field */}
            <Controller
            name="email"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
                <View>
                <TextInput
                    style={[styles.input, errors.email && styles.errorInput]}
                    placeholder="Email"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}
                </View>
            )}
            />

            {/* Password Field */}
            <Controller
                name="password"
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                <View>
                    <TextInput
                    style={[styles.input, errors.password && styles.errorInput]}
                    placeholder="Password"
                    secureTextEntry
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    autoCapitalize="none"
                    />
                    {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}
                </View>
                )}
            />

            {/* Submit Button */}
            <Button title="Login" onPress={handleSubmit(onSubmit)} />
        </View>
    </SafeAreaView>
  );
};

export default LoginScreen;