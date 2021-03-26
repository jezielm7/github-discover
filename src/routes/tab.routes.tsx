import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';

import Search from '../screens/Search';
import Favorites from '../screens/Favorites';

import normalize from '../utils/normalize';

const { Navigator, Screen } = createBottomTabNavigator();

const TabRouter = () => {
  return (
      <Navigator
        tabBarOptions={{
          style: {
            height: normalize(60),
            borderTopWidth: 0,
            backgroundColor: '#030812',
          },
          tabStyle: {
            alignItems: 'center',
            justifyContent: 'center',
          },
          iconStyle: {
            flex: 0,
            width: normalize(24),
            height: normalize(24),
          },
          labelStyle: {
            marginTop: normalize(8),
            fontSize: normalize(12),
          },
          activeTintColor: '#bf94ff',
          inactiveTintColor: '#efeff1',
        }}
      >
        <Screen name="SearchScreen" component={Search} options={{
          tabBarLabel: 'Pesquisa',
          tabBarIcon: ({ size, focused }) => {
            return (
              <Icon
                name="search-outline"
                size={size}
                color={focused ? '#bf94ff' : '#efeff1'}
              />
            )
          }
        }} />
        <Screen name="Favorites" component={Favorites} options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ size, focused }) => {
            return (
              <Icon
                name="heart"
                size={size}
                color={focused ? '#bf94ff' : '#efeff1'}
              />
            )
          }
        }} />
      </Navigator>
  );
}

export default TabRouter;