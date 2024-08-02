import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
//@ts-ignore
import {Card} from 'react-native-shadow-cards';

type freaturProp = {
  icon: any;
  color: string;
  text: string;
  click: any;
};

const HomeFeatureCard = ({icon, color, text, click}: freaturProp) => {
  return (
    <Card style={styles.freatureCard}>
      <TouchableOpacity
        style={{
          width: '100%',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={click}>
        <View
          style={{
            width: '100%',
            height: 95,
            backgroundColor: `${color}`,
            borderRadius: 9,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
          }}>
          {icon}
        </View>
        <Text style={styles.featureatext}>{text}</Text>
      </TouchableOpacity>
    </Card>
  );
};

export default HomeFeatureCard;

const styles = StyleSheet.create({
  freatureCard: {
    backgroundColor: '#fff',
    width: 112,
    height: 131,
    borderRadius: 9,
    display: 'flex',
    alignItems: 'center',
  },
  featureatext: {
    color: '#5F27CD',
    fontFamily: 'Poppins-Medium',
    marginTop: 6,
    fontSize: 14,
  },
});
