import {View, Text} from 'react-native';
import React from 'react';
import ChemLogoImage from '../assets/sclogo.svg';

const LogoComponent = () => {
  return (
    <View>
      <ChemLogoImage style={{width: 20}} />
    </View>
  );
};

export default LogoComponent;
