import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import AppScreen from '../screens/App';
import DogImageScreen from '../screens/DogImageScreen';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import MovieScreen from '../screens/MovieScreen';
import ProfileScreen from '../screens/ProfileScreen';

export type RootStackParamList = {
  Login: undefined;
  Home: { expoPushToken?: string } | undefined;
  Profile: undefined;
  Movie: undefined;
  DogImage: undefined;
  App:undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* Auth */}
      <Stack.Screen name="Login" component={LoginScreen} />

      {/* Main Screens */}
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Movie" component={MovieScreen} />
      <Stack.Screen name="DogImage" component={DogImageScreen} />
      <Stack.Screen name="App" component={AppScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;

