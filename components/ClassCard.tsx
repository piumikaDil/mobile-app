import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons';


interface ClassesProps {
  className: string;
  date: string;
  time: string;
  place: string;
}

const ClassCard: React.FC<ClassesProps> = ({className, date, time, place}) => {
  return (
    <View style={styles.card}>
      <View style={styles.left}>
        <Text style={styles.title}>{className}</Text>
        <View style={styles.subtitle}>
          <Text style={styles.date}>Date : {date}</Text>
          <View style={styles.placeWrap}>
            <Text style={styles.placeText}>Place : {place}</Text>
          </View>
          <Text style={styles.date}>Time : {time}</Text>
        </View>
      </View>
      <View style={styles.right}>
        <Icon name="chemistry" size={50} color="#4834d4" />
        <Text
          style={{
            color: 'white',
            fontSize: 16,
            fontFamily: 'Poppins-Medium',
            marginTop: 10,
          }}>
          Chemistry
        </Text>
      </View>
    </View>
  );
};

export default ClassCard;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'row',
    height: 190,
    backgroundColor: '#D8D6F8',
    borderRadius: 9,
    padding: 15,
    elevation: 4,
    marginBottom: 15,
  },
  left: {
    flex: 2,
  },
  right: {
    flex: 1,
    backgroundColor: '#9c88ff',
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 25,
    color: 'black',
  },
  subtitle: {
    marginTop: 10,
    flex: 1,
    gap: 10,
  },
  date: {
    color: 'black',
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
  },
  placeWrap: {
    backgroundColor: '#5F27CD',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    borderRadius: 50,
  },
  placeText: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
  },
});
