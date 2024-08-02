/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {JSX} from 'react/jsx-runtime';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Home from './screens/HomeScreen';
import Exam from './screens/ExamScreen';
import Profile from './screens/ProfileScreen';
import Notification from './screens/NotificationScreen';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import GetStartedScreen from './screens/GetStartedScreen';
import FrogetPasswordScreen from './screens/FrogetPasswordScreen';
import VerifyPassScreen from './screens/VerifyPassScreen';
import ResetPassScreen from './screens/ResetPassScreen';
import LoginEnterScreen from './screens/LoginEnterScreen';
import ExamScreen from './screens/ExamScreen';
// import GetStartedScreen from './screens/GetStartedScreen';
// import LoadingScreen from './screens/LoadingScreen';

import MyMarksScreen from './screens/MyMarksScreen';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerNavigator from './navigation/DrawerNavigator';
import ClassListScreen from './screens/ClassListScreen';
import SplashScreen from './screens/SplashScreen';
import ViewMessageScreen from './screens/ViewMessageScreen';

const Stack = createStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="splash">
        <Stack.Screen
          name="get-started"
          component={GetStartedScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="login-enter"
          component={LoginEnterScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="sign-up"
          component={SignUpScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="forget"
          component={FrogetPasswordScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="verify"
          component={VerifyPassScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="reset"
          component={ResetPassScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="exam"
          component={ExamScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="drawer-navigate"
          component={DrawerNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="my-marks"
          component={MyMarksScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="class-list"
          component={ClassListScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="splash"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="viewMessage"
          component={ViewMessageScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>

    // <SafeAreaView>
    //  <SplashScreen/>
    // </SafeAreaView>
  );
}

export default App;
