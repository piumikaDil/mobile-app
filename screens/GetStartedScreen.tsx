import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import ButtonComponent from '../components/ButtonComponent';
import ScreenImage from '../assets/screen_2_image.svg';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {cookieStorageIds} from '../enums/cookie-storage-ids';
import cookieManager from '../js/storage/storage-controller';

export default function GetStartedScreen() {
  const navigation: NavigationProp<any> = useNavigation();
  const {ID_TOKEN} = cookieStorageIds;

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
    navigation.navigate('login-enter');
  };
  return (
    <View style={styles.container}>
      <View style={styles.mainView}>
        <ScreenImage />
      </View>

      <View style={styles.subView}>
        <Text style={styles.mainTxt}>First see learning</Text>
        <Text style={styles.subTxt}>
          Forget about a for of paper all knowledge{'\n'}in one learning
        </Text>
        <View style={styles.btnView}>
          <ButtonComponent
            btnStyles={styles.button}
            txtStyles={styles.buttonText}
            text={'Get Started'}
            onPress={handlePress}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainView: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subView: {
    flex: 1.7,
  },
  image: {
    marginTop: 150,
  },
  mainTxt: {
    fontFamily: 'Poppins-Medium',
    fontSize: 24,
    marginTop: 60,
    marginBottom: 25,
    color: 'black',
    textAlign: 'center',
  },
  subTxt: {
    fontFamily: 'Poppins-Light',
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#5F27CD',
    padding: 10,
    borderRadius: 5,
    width: 132,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
  },
});
