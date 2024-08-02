import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AboutScreen from '../screens/AboutScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {View} from 'react-native';
import {StyleSheet} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import BottomTabNavigationScreen from '../screens/BottomTabNavigationScreen';
import CustomDrawerContent from '../components/CustomDrawerContent';
import PrivacyScreen from '../screens/PrivacyScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <View style={style.container}>
      <Drawer.Navigator drawerContent={() => <CustomDrawerContent />}>
        <Drawer.Screen
          name="DrawerHome"
          component={BottomTabNavigationScreen}
          options={{headerShown: false, drawerLabel: () => null}}
        />
        <Drawer.Screen
          name="About"
          component={AboutScreen}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="Privacy"
          component={PrivacyScreen}
          options={{headerShown: false}}
        />
      </Drawer.Navigator>
    </View>
  );
};

export default DrawerNavigator;

const style = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
});
