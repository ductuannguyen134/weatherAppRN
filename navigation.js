import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './screens/home';
import { DetailsScreen } from './screens/details';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Spinner, Layout, Text } from '@ui-kitten/components';
import Settings from './screens/settings';
import ChangeLocation from './screens/changeLocation';
import { useSelector } from "react-redux";

//stack navigation
const HomeStack = createStackNavigator();


const HomeStackScreen = () => (
    <HomeStack.Navigator headerMode="none">
        <HomeStack.Screen name="Home" component={HomeScreen} />
        <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
)

const DetailStack = createStackNavigator();

const DetailStackScreen = () => (
    <DetailStack.Navigator  headerMode="none">
        <DetailStack.Screen name="Details" component={DetailsScreen} />
        <DetailStack.Screen name="Home" component={HomeScreen} />
    </DetailStack.Navigator>
)

const SettingStack = createStackNavigator();

const SettingStackScreen = () => (
    <SettingStack.Navigator headerMode="none">
        <SettingStack.Screen name='Settings' component={Settings}/>
        <SettingStack.Screen name="ChangeLocation" component={ChangeLocation} />
    </SettingStack.Navigator>
)

//tab navigation
const Tab = createBottomTabNavigator();

const BottomTabBar = ({ navigation, state }) => (
    <BottomNavigation
      selectedIndex={state.index}
      onSelect={index => navigation.navigate(state.routeNames[index])}>
      <BottomNavigationTab title='Home'/>
      <BottomNavigationTab title='Settings'/>
    </BottomNavigation>
  );


const HomeNavigator = () => (
    <Tab.Navigator headerMode='none' tabBar={props=> <BottomTabBar {...props} />}>
      <Tab.Screen name='Home' component={HomeStackScreen}/>
      <Tab.Screen name='Settings' component={SettingStackScreen}/>
    </Tab.Navigator>
  );

export const AppNavigator = () => {

  const isLoading = useSelector((state) => state.loadStatus);

  return (
  <>
  <NavigationContainer>
    <HomeNavigator/>
  </NavigationContainer>
  </>
)};