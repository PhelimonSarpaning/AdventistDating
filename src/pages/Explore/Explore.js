import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Layout, Text ,Icon} from '@ui-kitten/components';
import {FilterButton} from '../../components/FilterButton/FilterButton';
import CardImage from '../../components/SwipeCards/CardImage';
import {LocationButton} from '../../components/LocationButton/LocationButton';

const BottomTab = createBottomTabNavigator();

const UsersScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#d1d6d9' }}>
    <Text category='h1'>USERS</Text>
  </Layout>
);

const OrdersScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', backgroundColor:'#d1d6d9'}}>
    <FilterButton/>
    <CardImage/>
    
    {/* <LocationButton/> */}
    
    {/* <Text category='h1'>ORDERS</Text> */}
  </Layout>
);

const BottomTabBar = ({ navigation, state }) => {

  const onSelect = (index) => {
    navigation.navigate(state.routeNames[index]);
  };

  return (
    <SafeAreaView>
      <BottomNavigation selectedIndex={state.index} onSelect={onSelect}>
      <BottomNavigationTab title='EXPLORE'/>
      <BottomNavigationTab title='MATCHES'/>
      <BottomNavigationTab title='CHAT'/>
      <BottomNavigationTab title='PEOPLE'/>
        {/* <BottomNavigationTab title='USERS'/>
        <BottomNavigationTab title='ORDERS'/> */}
      </BottomNavigation>
    </SafeAreaView>
  );
};

const TabNavigator = () => (
  <BottomTab.Navigator tabBar={props => <BottomTabBar {...props} />}>
    <BottomTab.Screen name='Explore' component={OrdersScreen}/>
    <BottomTab.Screen name='Users' component={UsersScreen}/>
    <BottomTab.Screen name='Orders' component={OrdersScreen}/>
  </BottomTab.Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
      
    <TabNavigator/>
  </NavigationContainer>
);