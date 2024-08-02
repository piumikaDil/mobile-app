import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import PasswordImage from '../assets/screen_6_image.svg';
import ButtonComponent from '../components/ButtonComponent';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {NavigationProp, useNavigation} from '@react-navigation/native';

const FrogetPasswordScreen = () => {
  const navigation: NavigationProp<any> = useNavigation();

  const handlePress = () => {
    navigation.navigate('verify');
  };
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{flexGrow: 1}}
      keyboardShouldPersistTaps="handled"
      style={styles.container}>
      <View style={styles.mainView}>
        <PasswordImage />
      </View>
      <View style={styles.subView}>
        <View style={{margin: 15, gap: 15}}>
          <Text style={styles.forgetPassText}>Forget Password</Text>
          <Text style={styles.subText}>
            Please enter your email address to receive a Verification code
          </Text>
          <TextInput
            placeholder={'Email'}
            placeholderTextColor={'#AEAEAE'}
            style={styles.textInputStyle}
          />

          <ButtonComponent
            btnStyles={styles.button}
            txtStyles={styles.buttonText}
            text="Send"
            onPress={handlePress}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainView: {
    flex: 1.3,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  subView: {
    flex: 2,
  },
  button: {
    backgroundColor: '#5F27CD',
    padding: 10,
    borderRadius: 9,
    width: '100%',
    height: 50,
    marginTop: 80,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    marginTop: 2.5,
  },
  forgetPassText: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    marginTop: 40,
    marginBottom: -13,
    color: 'black',
  },
  subText: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#9C9C9C',
  },
  textInputStyle: {
    color: 'black',
    backgroundColor: '#E6E6E6',
    borderRadius: 9,
    paddingHorizontal: 10,
  },
});

export default FrogetPasswordScreen;
