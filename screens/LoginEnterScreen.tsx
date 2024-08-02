import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import ButtonComponent from '../components/ButtonComponent';
import ScreenImage from '../assets/screen_3_image.svg';
import {NavigationProp, useNavigation} from '@react-navigation/native';

const LoginEnterScreen = () => {
  const navigation: NavigationProp<any> = useNavigation();

  const handleLoginPress = () => {
    navigation.navigate('login');
  };

  const handleSignUpPress = () => {
    navigation.navigate('sign-up');
  };

  const handleHomePress = () => {
    navigation.navigate('drawer-navigate');
  };
  return (
    <View style={styles.container}>
      <View style={styles.mainView}>
        <ScreenImage />
      </View>
      <View style={styles.subView}>
        <View style={styles.underView}>
          <Text style={styles.txtWelcome}>
            Welcome to {'\n'}Smart Chemistry
          </Text>
          <Text style={styles.txtSub}>
            Introduces a new era of innovative solutions{'\n'} for chemical
            enthusiasts
          </Text>
          <ButtonComponent
            btnStyles={styles.button}
            text="Login"
            txtStyles={styles.buttonText}
            onPress={handleLoginPress}
          />
          <ButtonComponent
            btnStyles={styles.signUpButton}
            text="Sign Up"
            txtStyles={styles.signUpButtonText}
            onPress={handleSignUpPress}
          />
          <ButtonComponent
            btnStyles={styles.skipButton}
            text="Skip"
            txtStyles={styles.signUpButtonText}
            onPress={handleHomePress}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginTop: 110,
  },
  underView: {
    backgroundColor: '#5F27CD',
    height: 388,
    width: 385,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 60,
    alignItems: 'center',
  },
  txtWelcome: {
    fontFamily: 'Poppins-Medium',
    fontSize: 24,
    textAlign: 'center',
    color: 'white',
    marginTop: 25,
    marginBottom: 25,
  },
  txtSub: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    textAlign: 'center',
    color: 'white',
    marginBottom: 25,
  },
  button: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 5,
    width: 322,
  },
  signUpButton: {
    backgroundColor: 'transparent',
    padding: 8.5,
    marginTop: 12,
    marginBottom: 12,
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: '#ffffff',
    width: 322,
  },
  skipButton: {
    backgroundColor: 'transparent',
    padding: 5,
    width: 322,
    borderRadius: 5,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
  signUpButtonText: {
    color: '#ffffff',

    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
});

export default LoginEnterScreen;
