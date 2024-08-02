import {View, Text, StyleSheet, Image} from 'react-native';
//@ts-ignore
import {Card} from 'react-native-shadow-cards';
import React from 'react';
import ButtonComponent from './ButtonComponent';
import UserIcon from 'react-native-vector-icons/FontAwesome5';

type TopMarkComponentProps = {
  name: string;
  cls: string;
  image: any;
  marks: number;
};

const TopMarkComponent = ({name, cls, image, marks}: TopMarkComponentProps) => {
  return (
    <Card style={styles.container}>
      <View style={styles.iconView}>
        {image === null ? (
          <UserIcon name="user" size={30} color={'#5F27CD'} />
        ) : (
          <Image
            source={{uri: `data:image/png;base64,${image}`}}
            style={{width: 100, height: 100}}
          />
        )}
        {/* <UserIcon name="user" size={30} color={'#5F27CD'} /> */}
      </View>
      <View style={styles.textView}>
        <Text style={styles.mainText}>{name}</Text>
        <Text style={styles.subText}>{cls} </Text>
      </View>
      <View style={styles.marksView}>
        <Text style={{color: 'black', fontSize: 20}}>{marks}%</Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 65,
    borderRadius: 9,
    marginBottom: 15,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,

    // elevation:1
  },
  iconView: {
    backgroundColor: '#EFEEEE',
    borderRadius: 9,
    height: 55,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    overflow: 'hidden',
  },
  mainText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: 'black',
  },
  subText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    color: 'black',
  },
  textView: {
    display: 'flex',
    flex: 3,
    marginLeft: 15,
  },
  txtCheck: {
    color: '#ffffff',
    fontSize: 10,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
  marksView: {
    width: 45,
    height: 45,
    backgroundColor: '#FFC55A',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9,
    flex: 1,
  },
});

export default TopMarkComponent;
