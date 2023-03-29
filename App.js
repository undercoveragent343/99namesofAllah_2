import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import IntroductionScreen from './screens/IntroductionScreen';
import {NameListScreen} from './screens/NameListScreen';
import NameDetailsScreen from './screens/NameDetailsScreen';
import {MemorizationToolsScreen} from './screens/MemorizationToolsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Introduction">
          <Stack.Screen
            name="IntroductionScreen"
            component={IntroductionScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="NameListScreen"
            component={NameListScreen}
            options={{ title: '99 Names of Allah' }}
          />
          <Stack.Screen
            name="NameDetailsScreen"
            component={NameDetailsScreen}
            options={({ route }) => ({ title: route.params.name })}
          />
          <Stack.Screen
            name="MemorizationToolsScreen"
            component={MemorizationToolsScreen}
            options={{ title: 'Memorization Tools' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
});
