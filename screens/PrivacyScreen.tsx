import {View, Text} from 'react-native';
import React from 'react';
import BackButtonComponent from '../components/BackButtonComponent';
import {StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const PrivacyScreen = () => {
  const navigation = useNavigation();

  const goHomeScreen = () => {
    //@ts-ignore
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.aboutText}>Privacy Policy</Text>
      <BackButtonComponent top={30} right={25} click={goHomeScreen} />
      <View style={styles.middleView}>
        <Text style={{color: 'black', fontFamily: 'Poppins-Regular'}}>
          When you visit smart chem app, and use our services, you trust us with
          your personal information. We take your privacy very seriously. In
          this privacy notice, we seek to explain to you in the clearest way
          possible what information we collect, how we use it, and what rights
          you have in relation to it.
        </Text>
        <View
          style={{ marginTop: 15}}>
          <Text
            style={{color: 'black', fontFamily: 'Poppins-Bold', marginTop: 10}}>
            01. WHAT INFORMATION DO WE COLLECT?
          </Text>
          <Text style={{color: 'black', fontFamily: 'Poppins-Regular'}}>
            Some information — such as your name,email,phone numbers— is
            collected when you registr to smart chem app.
          </Text>
        </View>
        <View>
          <Text
            style={{color: 'black', fontFamily: 'Poppins-Bold', marginTop: 10}}>
            02. HOW DO WE USE YOUR INFORMATION?
          </Text>
          <Text style={{color: 'black', fontFamily: 'Poppins-Regular'}}>
            We process your information for purposes based on legitimate
            business interests, the fulfillment of our contract with you,
            compliance with our legal obligations, and/or your consent.
          </Text>
        </View>
        <View>
          <Text
            style={{color: 'black', fontFamily: 'Poppins-Bold', marginTop: 10}}>
            03. WILL YOUR INFORMATION BE SHARED WITH ANYONE?
          </Text>
          <Text style={{color: 'black', fontFamily: 'Poppins-Regular'}}>
            We only share information with your consent, to comply with laws, to
            provide you with services, to protect your rights, or to fulfill
            business obligations
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainView: {
    flex: 1,
    flexDirection: 'row',
    gap: 90,
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
  aboutText: {
    fontSize: 20,
    color: '#000000',
    fontFamily: 'Poppins-Medium',
    marginTop: 25,
    textAlign: 'center',
  },
  middleView: {
    flex: 8,
    marginTop: 50,
    paddingHorizontal: 20,
    //backgroundColor: '#27ae60',
  },
});

export default PrivacyScreen;
