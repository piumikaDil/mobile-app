import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import BackIcon from 'react-native-vector-icons/AntDesign';

type props = {
  click: any;
  top: number;
  right: number;
};

export default function Test({click, top, right}: props) {
  const dynamicStyles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      top: top,
      left: right,
      position: 'absolute',
    },
  });
  return (
    <View style={dynamicStyles.container}>
      <TouchableOpacity style={styles.btnStyles} onPress={click}>
        <BackIcon
          name="left"
          size={18}
          color={'black'}
          style={styles.iconStyle}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btnStyles: {
    backgroundColor: '#D9D9D9',
    width: 30,
    height: 30,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconStyle: {
    padding: 1.5,
  },
  txtStyle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: 'black',
  },
});
