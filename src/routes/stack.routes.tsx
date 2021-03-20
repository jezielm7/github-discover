import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import Landing from '../screens/Landing';

const { Navigator, Screen } = createStackNavigator();

const stackRouter = () => {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Landing"
        screenOptions={{ headerShown: false }}
      >
        <Screen name="Home" component={Home} />
        <Screen name="Landing" component={Landing} />
      </Navigator>
    </NavigationContainer>
  );
}

export default stackRouter;