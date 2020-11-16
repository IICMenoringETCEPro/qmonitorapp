import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {
  HomeScreen,
  ProfileScreen,
  WalletScreen,
  GroupScreen,
  EditProfileScreen
} from '../screens';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: '#2e64e5',
          fontFamily: 'Kufam-SemiBoldItalic',
          fontSize:18
        },
        headerStyle: {
          shadowColor: '#fff',
          elevation: 0,
        },
        headerRight: () => (
          <View style={{marginRight: 10}}>
            <FontAwesome5.Button
              name="user"
              size={25}
              backgroundColor="#fff"
              color="#2e64e5"
              onPress={() => navigation.navigate('Profile')}
            />
          </View>
        ),
      }}
    />
  </Stack.Navigator>
);

const ProfileStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        headerShown:false
      }}
    />
    <Stack.Screen
      name="ProfileEdit"
      component={EditProfileScreen}
      options={{
        title:'Edit Profile',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: '#2e64e5',
          fontFamily: 'Kufam-SemiBoldItalic',
          fontSize:18
        },
        headerStyle: {
          shadowColor: '#fff',
          elevation: 0,
        }
      }}
    />

  </Stack.Navigator>
);

const GroupStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Group"
      component={GroupScreen}
      options={{
        headerShown:false
      }}
    />
  </Stack.Navigator>
);

const WalletStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Wallet"
      component={WalletScreen}
      options={{
        headerShown:false
      }}
    />
  </Stack.Navigator>
);

export default function AppStack(){
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#2e64e5',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="home-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Group"
        component={GroupStack}
        options={{
          tabBarLabel: 'Groups',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="account-group-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={WalletStack}
        options={{
          tabBarLabel: 'Wallet',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="wallet-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="account-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}