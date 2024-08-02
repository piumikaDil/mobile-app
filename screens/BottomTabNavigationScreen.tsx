import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ExamScreen from '../screens/ExamScreen';
import ProfileScreen from '../screens/ProfileScreen';
import NotificationScreen from '../screens/NotificationScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon6 from 'react-native-vector-icons/Entypo';
import Icon7 from 'react-native-vector-icons/MaterialIcons';
import {StyleSheet} from 'react-native';

const Tab = createBottomTabNavigator();

const BottomTabNavigationScreen = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#FFC55A',
          tabBarInactiveTintColor: '#5F27CD',
          tabBarLabelStyle: [style.tabLable],
          tabBarStyle: [style.tabBarContainer],
          headerShown: false,
          tabBarHideOnKeyboard: true,
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
            tabBarIcon: ({focused, color, size}) => {
              return <Icon6 name="user" color={color} size={30} />;
            },
          }}
        />
        <Tab.Screen
          name="Notification"
          component={NotificationScreen}
          options={{
            // headerShown: false,
            tabBarIcon: ({focused, color, size}) => {
              return <Icon7 name="notifications" color={color} size={30} />;
            },
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default BottomTabNavigationScreen;

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
