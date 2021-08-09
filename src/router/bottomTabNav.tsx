import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import MainHomeScreen from '../screens/MainHomeScreen';
import {AntDesign,Feather, Entypo} from '@expo/vector-icons';
import HomeStack from './HomeStack';
import ShoppingCartStack from './ShoppingCartStack';
import Home from '../screens/PagerView/Home';


const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <Tab.Navigator 
      tabBarOptions={{
        showLabel: true,
        inactiveTintColor: 'gray',
        activeTintColor: '#F83251',
        tabStyle:{
          backgroundColor:'white',
          
          
        }
        
        
        
      }}>
      <Tab.Screen
        component={HomeStack}
        name="Home"
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="home" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        component={Home}
        name="profile"
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="user" color={color} size={30}  />
          ),
        }}
      />
      <Tab.Screen
        component={ShoppingCartStack}
        name="Cart"
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="shopping-cart" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        component={HomeScreen}
        name="more"
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="menu" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNav;