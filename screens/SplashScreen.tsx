import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Logo from '../assets/SCll.svg';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import Prestical from '../assets/presticalSecon.svg';

const SplashScreen = () => {
  const navigtion: NavigationProp<any> = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigtion.navigate('get-started');
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigtion]);

  return (
    <View style={styles.container}>
      <View style={styles.logoWrap}>
        <Logo style={{top: 25}} />
      </View>
      <View style={styles.comLogo}>
        <Prestical />
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  logoWrap: {
    flex: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  comLogo: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  logo: {
    fontSize: 30,
  },
  pLogo: {
    fontSize: 50,
  },
});
