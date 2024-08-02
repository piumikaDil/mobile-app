import {View, Text, StyleSheet} from 'react-native';
//@ts-ignore
import {Card} from 'react-native-shadow-cards';
import React from 'react';
import ButtonComponent from './ButtonComponent';
import Paper from 'react-native-vector-icons/Ionicons';

type MyMarkComponentProps = {
  examId: string;
  marks: number;
};

const MyMarkComponent = ({examId, marks}: MyMarkComponentProps) => {
  return (
    <Card style={styles.container}>
      <View style={styles.iconView}>
        <Paper name="newspaper" size={30} color={'#5F27CD'} />
      </View>
      <View style={styles.textView}>
        <Text style={styles.mainText}>{examId}</Text>
      </View>
      <View style={styles.percentage}>
        <Text style={styles.percentageText}>{marks}%</Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 70,
    borderRadius: 9,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    // elevation:1
  },
  iconView: {
    width: 70,
    height: 70,
    backgroundColor: '#EFEEEE',
    borderRadius: 9,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: 'black',
  },
  subText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    color: '#B5B5B5',
  },
  textView: {
    display: 'flex',
    justifyContent: 'center',
    marginLeft: -100,
  },
  percentage: {
    width: 60,
    height: 50,
    backgroundColor: '#FFC55A',
    borderRadius: 9,
    marginRight: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  percentageText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
  },
});

export default MyMarkComponent;
