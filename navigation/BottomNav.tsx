import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/HomeScreen';
import Exam from '../screens/ExamScreen';
import Profile from '../screens/ProfileScreen';
import Notification from '../screens/NotificationScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ExamScreen from '../screens/ExamScreen';
import ProfileScreen from '../screens/ProfileScreen';
import NotificationScreen from '../screens/NotificationScreen';
import BackButtonComponent from '../components/BackButtonComponent';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon6 from 'react-native-vector-icons/Entypo';
import Icon7 from 'react-native-vector-icons/MaterialIcons';
import {Keyboard, StyleSheet} from 'react-native';

const Tab = createBottomTabNavigator();

const BottomNav = () => {

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#FFC55A',
        tabBarInactiveTintColor: '#5F27CD',
        tabBarLabelStyle: [style.tabLable],
        tabBarStyle: [style.tabBarContainer],
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return <Icon name="home" color={color} size={30} />;
          },
        }}
      />
      <Tab.Screen
        name="Exam"
        component={ExamScreen}
        options={{
          
          tabBarIcon: ({focused, color, size}) => {
            return <Icon name="list-ul" color={color} size={30} />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          //@ts-ignore
          tabBarVisible: false, // Disable bottom navigation bar for ProfileScreen
          tabBarIcon: ({focused, color, size}) => {
            return <Icon6 name="user" color={color} size={30} />;
          },
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          
          tabBarIcon: ({focused, color, size}) => {
            return <Icon7 name="notifications" color={color} size={30} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNav;

const style = StyleSheet.create({
  tabBarContainer: {
    height: 60,
  },
  tabLable: {
    fontSize: 10,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    marginBottom: 6,
  },
});
