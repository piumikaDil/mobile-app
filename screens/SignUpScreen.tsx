import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import ButtonComponent from '../components/ButtonComponent'; // Assuming this is a custom button component you've created
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import MainLogo from '../assets/sclogo.svg'; // Ensure this SVG is properly configured for React Native
import {register} from '../js/controllers/auth-controller';
import cookieManager from '../js/storage/storage-controller';
import {cookieStorageIds} from '../enums/cookie-storage-ids';
import {SelectList} from 'react-native-dropdown-select-list';
import {getAllClasses} from '../js/controllers/class-controller';
import EyeIcon from 'react-native-vector-icons/Feather';
import AwesomeAlert from 'react-native-awesome-alerts';

const SignUpScreen: React.FC = () => {
  const navigation: NavigationProp<any> = useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nic, setNic] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [classes, setClasses] = useState([]);

  const [selectedClass, setSelectedClass] = useState('');

  const [emailVerify, setEmailVerify] = useState<boolean>(false);
  const [passwordVerify, setPasswordVerify] = useState<boolean>(false);
  const [passwordConfirmVerify, setPasswordConfirmVerify] =
    useState<boolean>(false);
  const [nicVerify, setNicVerify] = useState<boolean>(false);

  const [showAlert, setShowAlert] = useState(false);
  const [showAlertField, setShowAlertField] = useState(false);

  const showAlertHandler = () => {
    setShowAlert(true);
  };

  const hideAlertHandler = () => {
    setShowAlert(false);
  };

  const showAlertFieldHandler = () => {
    setShowAlertField(true);
  };

  const hideAlertFieldHandler = () => {
    setShowAlertField(false);
  };

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await getAllClasses();
        const filteredClasses = response.map((item: any) => {
          return {id: item.publicId, value: item.alYear};
        });
        setClasses(filteredClasses);
      } catch (error) {
        console.error('Error fetching classes:', error);
      }
    };

    fetchClasses();
  }, []);

  const handlePress = () => {
    navigation.navigate('login');
  };

  const handleSignUp = async () => {
    if (name.length < 1) {
      showAlertFieldHandler();
      return;
    } else if (email.length < 1) {
      showAlertFieldHandler();
      return;
    } else if (nic.length < 1) {
      showAlertFieldHandler();
      return;
    } else if (password.length < 1) {
      showAlertFieldHandler();
      return;
    } else if (confirmPassword.length < 1) {
      showAlertFieldHandler();
      return;
    } else if (selectedClass.length < 1) {
      showAlertFieldHandler();
      return;
    } else {
      if (password === confirmPassword) {
        try {
          const response: any = await register({
            name,
            email,
            nic,
            password,
            classId: selectedClass,
          });
          console.log('Response', response);

          console.log(email, nic, password, selectedClass);

          await cookieManager.setCookieByName(cookieStorageIds.EMAIL, email);

          // if (response.status === 200) {
          //   showAlertHandler();
          //   setTimeout(() => {
          //     navigation.navigate('login');
          //     hideAlertHandler();
          //   }, 2500);
          // }
        } catch (err: any) {
          console.log('Error-my:', err.message);

          if (err.message === 'user registered successfully') {
            // Handle 401 error
          } else if (err.message === 'User already exists') {
            // Handle success
            Alert.alert('User already exists');
            // navigation.navigate('login');
          } else {
            Alert.alert('user registered successfully');
            navigation.navigate('login');
          }
        }
      } else {
        Alert.alert('Password and Confirm Password does not match');
      }
    }
    // console.log(name, email, nic, password, selectedClass);
  };

  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleEmail = (e: any) => {
    console.log('Email:', e);
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    setEmail(e);
    setEmailVerify(false);
    if (regex.test(e)) {
      setEmail(e);
      setEmailVerify(true);
    }
  };
  const handleNice = (e: any) => {
    const regex = /^(?:\d{9}[Vv]|\d{12})$/;
    setNic(e);
    setNicVerify(false);
    if (regex.test(e)) {
      setNic(e);
      setNicVerify(true);
    }
  };

  const handlePassword = (e: any) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    setPassword(e);
    setPasswordVerify(false);
    if (passwordRegex.test(e)) {
      setPassword(e);
      setPasswordVerify(true);
    }
  };

  const handleConfirmPassword = (e: any) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    setConfirmPassword(e);
    setPasswordConfirmVerify(false);
    if (passwordRegex.test(e)) {
      setConfirmPassword(e);
      setPasswordConfirmVerify(true);
    }
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
        <View style={{margin: 15}}>
          <Text style={styles.loginText}>Create your account</Text>
          <TextInput
            style={styles.input}
            placeholder={'Name'}
            placeholderTextColor={'#AEAEAE'}
            onChangeText={setName}
            value={name}
          />
          {name.length < 1 ? null : name.length > 4 ? null : (
            <Text style={{color: 'red', marginBottom: 10}}>
              Name is not valid
            </Text>
          )}
          <TextInput
            style={styles.input}
            placeholder={'Email'}
            placeholderTextColor={'#AEAEAE'}
            onChangeText={e => handleEmail(e)}
            value={email}
          />
          {email.length < 1 ? null : emailVerify ? null : (
            <Text style={{color: 'red', marginBottom: 10}}>
              Email is not valid
            </Text>
          )}
          <TextInput
            style={styles.input}
            placeholder={'NIC'}
            placeholderTextColor={'#AEAEAE'}
            onChangeText={e => handleNice(e)}
            value={nic}
          />
          {nic.length < 1 ? null : nicVerify ? null : (
            <Text style={{color: 'red', marginBottom: 10}}>
              NIC is not valid
            </Text>
          )}
          <SelectList
            setSelected={(value: string) => {
              //@ts-ignore
              const selectedClass = classes.find(item => item.value === value);
              if (selectedClass) {
                //@ts-ignore
                setSelectedClass(selectedClass.id);
                //@ts-ignore
              }
            }}
            data={classes}
            save="value"
            placeholder="Select the Class"
            dropdownTextStyles={styles.selectListStyle}
            boxStyles={{
              backgroundColor: '#E6E6E6',
              borderColor: '#E6E6E6',
              // borderRadius: 9,
            }}
            inputStyles={styles.textInputStyle}
          />
          <View style={styles.confPws}>
            <TextInput
              secureTextEntry={isPasswordVisible}
              placeholderTextColor={'#AEAEAE'}
              style={{
                color: 'black',
                width: '80%',
                paddingLeft: 10,
              }}
              placeholder="Enter Password"
              onChangeText={e => handlePassword(e)}
              value={password}
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

          {password.length < 1 ? (
            <View>
              <Text
                style={{
                  color: 'black',
                  fontSize: 11,
                  marginTop: 10,
                  fontFamily: 'Poppins-Regular',
                }}>
                At least eight characters
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontSize: 11,
                  fontFamily: 'Poppins-Regular',
                }}>
                Matches uppercase and lowercase letters, digits, and special
                characters
              </Text>
            </View>
          ) : passwordVerify ? null : (
            <Text style={{color: 'red', marginBottom: 10}}>
              Password is not valid
            </Text>
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
              placeholder="Confirm Password"
              onChangeText={e => handleConfirmPassword(e)}
              value={confirmPassword}
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
          {confirmPassword.length < 1 ? null : passwordConfirmVerify ? null : (
            <Text style={{color: 'red', marginBottom: 10}}>
              Confirm Password is not valid
            </Text>
          )}

          <ButtonComponent
            btnStyles={styles.button}
            txtStyles={styles.buttonText}
            text="Sign Up"
            onPress={handleSignUp}
          />
        </View>
      </View>

      <View style={styles.footerView}>
        <Text style={styles.accountText}>Do you have an account?</Text>
        <TouchableOpacity onPress={handlePress}>
          <Text style={styles.signUpText}>Login</Text>
        </TouchableOpacity>
      </View>

      <AwesomeAlert
        show={showAlert}
        showProgress={false}
        title="Smart Chemistry"
        message="Account created successfully"
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={false}
        showConfirmButton={true}
        cancelText="Ok"
        confirmText="Ok"
        confirmButtonColor="#5F27CD"
        onCancelPressed={hideAlertHandler}
        onConfirmPressed={hideAlertHandler}
      />
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
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
  },
  middleView: {
    flex: 7,
    // Remove gap property as it's not supported in React Native StyleSheet
  },
  footerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20, // Adjusted for better layout on different devices
  },
  loginText: {
    color: 'black',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    marginBottom: 20, // Add space between title and inputs
  },
  input: {
    // Define a style for your text inputs
    borderRadius: 9, // Rounded corners
    paddingHorizontal: 10, // Inner padding
    marginBottom: 10, // Space between inputs
    color: 'black',
    backgroundColor: '#E6E6E6',
  },
  button: {
    backgroundColor: '#5F27CD',
    padding: 10,
    borderRadius: 9,
    width: '100%',
    height: 50,
    marginTop: 30, // Adjusted spacing
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
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
    marginLeft: 10, // Provide some spacing between texts
  },
  textInputStyle: {
    color: '#AEAEAE',
    backgroundColor: '#E6E6E6',
    borderRadius: 9,
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
  selectListStyle: {
    color: '#AEAEAE',
    borderColor: '#E6E6E6',
  },
  pwsTextArea: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default SignUpScreen;
