import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import ButtonComponent from '../components/ButtonComponent'; // Assuming this is a custom component
import Image from '../assets/screen_7_image.svg';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {verifyPassword} from '../js/controllers/auth-controller';
import cookieManager from '../js/storage/storage-controller';
import {cookieStorageIds} from '../enums/cookie-storage-ids';

const VerifyPassScreen = () => {
  const navigation: NavigationProp<any> = useNavigation();
  const [code, setCode] = useState('');

  const handlePress = async () => {
    const verified = await verifyPassword(code);
    if (verified) {
      await cookieManager.removeCookieByName(cookieStorageIds.EMAIL);
      navigation.navigate('login');
    }
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
        <View style={{margin: 15}}>
          <Text style={styles.fverifyPassText}>
            Enter your verification code
          </Text>
          <Text style={styles.subText}>
            We’ve sent a one-time verification code to the email address. Please
            enter the code below.
          </Text>
          <TextInput
            placeholder={'Code'}
            placeholderTextColor={'#AEAEAE'}
            onChangeText={setCode}
            value={code}
            keyboardType="number-pad" // Ensures numeric input
            style={styles.textInputStyle}
          />

          <ButtonComponent
            btnStyles={styles.button}
            txtStyles={styles.buttonText}
            text="Verify"
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
    marginTop: 40,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    marginTop: 2.5,
  },
  fverifyPassText: {
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
    marginBottom: 40,
    marginTop: 10,
  },
  textInputStyle: {
    color: 'black',
    backgroundColor: '#E6E6E6',
    borderRadius: 9,
    paddingHorizontal: 10,
  },
});

export default VerifyPassScreen;
