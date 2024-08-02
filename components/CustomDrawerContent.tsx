/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet, TouchableOpacity, Linking} from 'react-native';
import React from 'react';
import {DrawerItem} from '@react-navigation/drawer';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Logo from '../assets/logo.svg';
import Logout from 'react-native-vector-icons/Entypo';
import {logOutFunction} from '../js/controllers/drawer-controller';
import AwesomeAlert from 'react-native-awesome-alerts';

const CustomDrawerContent = () => {
  const navigation: NavigationProp<any> = useNavigation();
  const [showAlert, setShowAlert] = React.useState<boolean>(false);

  const showAlertHandler = () => {
    setShowAlert(true);
  };

  const hideAlertHandler = () => {
    setShowAlert(false);
  };

  const handleLogout = async () => {
    try {
      await logOutFunction();
      navigation.navigate('get-started');
    } catch (err) {
      console.error(err);
      showAlertHandler();
    }
  };

  return (
    <View style={styles.main}>
      <View style={styles.topsection}>
        <Text style={styles.text}>Smart Chemistry</Text>
        <Text style={styles.versiontext}>version 1.0.0</Text>
      </View>

      <View style={styles.menu}>
        <DrawerItem
          label="Home"
          onPress={() => navigation.navigate('Home')}
          labelStyle={{
            color: 'black',
            fontSize: 18,
            fontFamily: 'Poppins-Regular',
          }}
        />
        <DrawerItem
          label="About"
          onPress={() => navigation.navigate('About')}
          labelStyle={{
            color: 'black',
            fontSize: 18,
            fontFamily: 'Poppins-Regular',
          }}
        />
        <DrawerItem
          label="Privacy Policy"
          onPress={() => navigation.navigate('Privacy')}
          labelStyle={{
            color: 'black',
            fontSize: 18,
            fontFamily: 'Poppins-Regular',
          }}
        />
        <Text style={styles.connectText}>Connect with us</Text>

        <View style={styles.social}>
          <TouchableOpacity>
            <Icon1 name="facebook" size={30} color={'#039BE5'} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(
                'https://www.youtube.com/@SameeraSampath-smartchemistry',
              );
            }}>
            <Icon1
              name="youtube"
              size={35}
              color={'#FF3D00'}
              style={{paddingLeft: 10}}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={{
            width: '100%',
            height: 50,
            top: 50,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            paddingLeft: 20,
          }}
          onPress={handleLogout}>
          <Logout name="log-out" size={25} color={'#5F27CD'} />
          <Text style={styles.logOut}>Log Out</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.develop}>
        <TouchableOpacity
          style={styles.devWrap}
          onPress={() => {
            Linking.openURL('https://www.prestical.com/');
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 12,
              fontFamily: 'Poppins-Medium',
            }}>
            Developed by
          </Text>
          <Logo />
        </TouchableOpacity>
      </View>
      <AwesomeAlert
        show={showAlert}
        showProgress={false}
        title="Coming Soon"
        message="This feature is coming soon"
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={false}
        showConfirmButton={true}
        confirmText="Okay"
        confirmButtonColor="#5F27CD"
        onConfirmPressed={() => {
          hideAlertHandler();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: '100%',
    height: 580,
    backgroundColor: 'white', // Example background color
  },
  text: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'Poppins-Regular',
  },
  topsection: {
    flex: 1,
    width: '100%',
    height: 100,
    backgroundColor: '#5F27CD',
    padding: 20,
    justifyContent: 'flex-end',
  },
  versiontext: {
    fontSize: 15,
    color: 'white',
    fontFamily: 'Poppins-Regular',
    top: -7,
  },

  lableStyle: {
    fontSize: 40,
    fontFamily: 'Poppins-Regular',
  },
  menu: {
    flex: 2,
    paddingTop: 20,
    paddingLeft: 15,
  },
  connectText: {
    fontSize: 16,
    color: 'black',
    paddingLeft: 20,
    paddingTop: 20,
  },
  social: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    paddingLeft: 30,
    alignItems: 'center',
    marginTop: 20,
  },
  develop: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  devWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logOut: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    color: 'black',
    marginLeft: 10,
  },
});

export default CustomDrawerContent;
