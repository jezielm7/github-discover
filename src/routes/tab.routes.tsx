import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FavIcon from 'react-native-vector-icons/Feather';
import SearchIcon from 'react-native-vector-icons/Ionicons';

import Search from '../screens/Search';
import Favorites from '../screens/Favorites';

const { Navigator, Screen } = createBottomTabNavigator();

const TabRouter = () => {
  return (
      <Navigator
        tabBarOptions={{
          style: {
            height: 60,
            borderTopWidth: 0,
            backgroundColor: '#030812',
          },
          tabStyle: {
            alignItems: 'center',
            justifyContent: 'center',
          },
          iconStyle: {
            flex: 0,
            width: 24,
            height: 24,
          },
          labelStyle: {
            marginTop: 8,
            fontSize: 12,
          },
          activeTintColor: '#bf94ff',
          inactiveTintColor: '#efeff1',
          // activeBackgroundColor: '#fafafc',
          // inactiveBackgroundColor: '#ebebf8',
        }}
      >
        <Screen name="Search" component={Search} options={{
          tabBarLabel: 'Pesquisa',
          tabBarIcon: ({ size, focused }) => {
            return (
              <SearchIcon
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
              <FavIcon
                name="star"
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