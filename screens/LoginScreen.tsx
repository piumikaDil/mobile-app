import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import ButtonComponent from '../components/ButtonComponent';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import MainLogo from '../assets/sclogo.svg';
import {cookieStorageIds} from '../enums/cookie-storage-ids';
import cookieManager from '../js/storage/storage-controller';
import {login} from '../js/controllers/auth-controller';
import EyeIcon from 'react-native-vector-icons/Feather';
import AwesomeAlert from 'react-native-awesome-alerts';

const LoginScreen = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [emailVerify, setEmailVerify] = useState<boolean>(false);
  const [passwordVerify, setPasswordVerify] = useState<boolean>(false);

  const [showAlertField, setShowAlertField] = useState(false);

  const navigation: NavigationProp<any> = useNavigation();
  const {ID_TOKEN, REFRESH_TOKEN, EMAIL} = cookieStorageIds;
  useEffect(() => {
    const checkCookieAndRedirect = async () => {
      const accessToken = await cookieManager.getCookieByName(ID_TOKEN);

      if (accessToken) {
        navigation.navigate('drawer-navigate');
      }
    };

    checkCookieAndRedirect();
  }, [ID_TOKEN, navigation]);

  const handlePress = () => {
    navigation.navigate('forget');
  };

  const showAlertFieldHandler = () => {
    setShowAlertField(true);
  };

  const hideAlertFieldHandler = () => {
    setShowAlertField(false);
  };

  const handleSignUpPress = () => {
    navigation.navigate('sign-up');
  };

  const handleEmailInput = (e: any) => {
    // console.log('Email:', e);
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    setEmail(e);
    setEmailVerify(false);
    if (regex.test(e)) {
      setEmail(e);
      setEmailVerify(true);
    }
  };

  const handlePasswordInput = (e: any) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    setPassword(e);
    setPasswordVerify(false);
    if (passwordRegex.test(e)) {
      setPassword(e);
      setPasswordVerify(true);
    }
  };
  const handleSignInPress = async () => {
    console.log('Email:', email);
    console.log('Password:', password);

    if (email.length < 1 || password.length < 1) {
      showAlertFieldHandler();
    } else {
      try {
        const res = await login({email, password});
        console.log('Response:', res);

        await cookieManager.setCookieByName(ID_TOKEN, res.idToken);
        await cookieManager.setCookieByName(EMAIL, email);
        await cookieManager.setCookieByName(REFRESH_TOKEN, res.refreshToken);
        navigation.navigate('drawer-navigate');
      } catch (err: any) {
        Alert.alert('Login Faild', err.message);
      }
    }
  };

  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{flexGrow: 1}}
      keyboardShouldPersistTaps="handled"
      style={styles.container}>
      <View style={styles.mainView}>
        <MainLogo />
      </View>
      <View style={styles.middleView}>
        <View style={{margin: 15, gap: 15}}>
          <Text style={styles.loginText}>Login your account</Text>
          <TextInput
            placeholder={'Email'}
            onChangeText={e => handleEmailInput(e)}
            value={email}
            placeholderTextColor={'#AEAEAE'}
            style={styles.textInputStyle}
          />
          {email.length < 1 ? null : emailVerify ? null : (
            <Text style={{color: 'red'}}>Email is not valid</Text>
          )}
          <View style={styles.confPws}>
            <TextInput
              secureTextEntry={isPasswordVisible}
              placeholderTextColor={'#AEAEAE'}
              style={{
                color: 'black',
                width: '80%',
                paddingLeft: 10,
              }}
              placeholder="Password"
              onChangeText={e => handlePasswordInput(e)}
            />
            <TouchableOpacity
              onPress={togglePasswordVisibility}
              style={{left: 40}}>
              <EyeIcon
                name={isPasswordVisible ? 'eye-off' : 'eye'}
                size={20}
                color="#AEAEAE"
              />
            </TouchableOpacity>
          </View>
          {password.length < 1 ? null : passwordVerify ? null : (
            <Text style={{color: 'red'}}>Password is not valid</Text>
          )}
          {/* <Text style={styles.passwordText} onPress={handlePress}>
            Forget password?
          </Text> */}
          <ButtonComponent
            btnStyles={styles.button}
            txtStyles={styles.buttonText}
            onPress={handleSignInPress}
            text="Login"
          />
        </View>
      </View>
      <View style={styles.footerView}>
        <Text style={styles.accountText}>Don’t have an account?</Text>
        <Text style={styles.signUpText} onPress={handleSignUpPress}>
          Sign up
        </Text>
      </View>
      <AwesomeAlert
        show={showAlertField}
        showProgress={false}
        title="Smart Chemistry"
        message="Please fill all the fields correctly"
        closeOnTouchOutside={false}
        closeOnHardwareBackPress={false}
        showCancelButton={false}
        showConfirmButton={true}
        cancelText="Ok"
        confirmText="Cancel"
        confirmButtonColor="#5F27CD"
        onCancelPressed={hideAlertFieldHandler}
        onConfirmPressed={hideAlertFieldHandler}
      />
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainView: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
  },
  middleView: {
    flex: 7,
    gap: 20,
  },
  footerView: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  passwordText: {
    color: '#5F27CD',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    textAlign: 'right',
  },
  loginText: {
    color: 'black',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
  button: {
    backgroundColor: '#5F27CD',
    padding: 10,
    borderRadius: 9,
    width: '100%',
    height: 50,
    marginTop: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    marginTop: 2.5,
  },
  accountText: {
    fontSize: 15,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    color: 'black',
  },
  signUpText: {
    color: '#5F27CD',
    fontSize: 15,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
  textInputStyle: {
    color: 'black',
    backgroundColor: '#E6E6E6',
    borderRadius: 9,
    paddingHorizontal: 10,
  },
  confPws: {
    color: 'black',
    backgroundColor: '#E6E6E6',
    borderRadius: 9,
    marginTop: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default LoginScreen;
