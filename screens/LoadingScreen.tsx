import {View, StyleSheet} from 'react-native';
import Logo from '../assets/aaaaaa.svg';
import PresticalLogo from '../assets/prestical_logo.svg';
import React from 'react';

export default function LoadingScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Logo />
      </View>
      <View style={styles.view2}>
        <PresticalLogo />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5F27CD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  view1: {
    flex: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
