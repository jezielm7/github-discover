import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TabRouter from './tab.routes';
import Landing from '../screens/Landing';

const { Navigator, Screen } = createStackNavigator();

const StackRouter = () => {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Landing"
        screenOptions={{ headerShown: false }}
      >
        <Screen name="Landing" component={Landing} />
        <Screen name="Search" component={TabRouter} />
      </Navigator>
    </NavigationContainer>
  );
}

export default StackRouter;