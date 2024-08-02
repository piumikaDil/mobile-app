import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import ButtonComponent from '../components/ButtonComponent';
import Image from '../assets/screen_8_image.svg';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {TextInput} from 'react-native';

const ResetPassScreen = () => {
  const navigation: NavigationProp<any> = useNavigation();

  const handlePress = () => {
    navigation.navigate('login');
  };
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{flexGrow: 1}}
      keyboardShouldPersistTaps="handled"
      style={styles.container}>
      <View style={styles.mainView}>
        <Image />
      </View>
      <View style={styles.subView}>
        <View style={{margin: 15, gap: 15}}>
          <Text style={styles.createPassText}>Create New Password</Text>
          <Text style={styles.subText}>
            Create your new password in app, keep in mind and remember it!
          </Text>
          <TextInput
            placeholder={'New password'}
            placeholderTextColor={'#AEAEAE'}
          />
          <TextInput
            placeholder={'Re-enter password'}
            placeholderTextColor={'#AEAEAE'}
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
    marginTop: 15,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    marginTop: 2.5,
  },
  createPassText: {
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
});

export default ResetPassScreen;
