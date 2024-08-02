import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import BackButtonComponent from '../components/BackButtonComponent';
import {useNavigation} from '@react-navigation/native';

const AboutScreen = () => {
  const navigation = useNavigation();

  const goHomeScreen = () => {
    //@ts-ignore
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.aboutText}>About</Text>
      <BackButtonComponent top={30} right={25} click={goHomeScreen} />

      <View style={styles.middleView}>
        <Text
          style={{
            color: 'black',
            fontFamily: 'Poppins-Bold',
            fontSize: 18,
            marginBottom: 10,
          }}>
          Who we are.
        </Text>
        <Text
          style={{
            color: 'black',
            fontFamily: 'Poppins-Medium',
            fontSize: 16,
            marginBottom: 10,
          }}>
          We ore the best gce advanced level supportive class in chemistry,
        </Text>
        <Text
          style={{
            color: 'black',
            fontFamily: 'Poppins-Medium',
            fontSize: 16,
            marginBottom: 10,
          }}>
          While we do our acedemic activities in special and effective System
        </Text>
        <Text
          style={{
            color: 'black',
            fontFamily: 'Poppins-Regular',
            fontSize: 14,
            marginBottom: 10,
          }}>
          Rather than giving a theory note, we describe each and every special
          theory point very simple and attractive manner, not only that we
          discuss a lot of new sample questions and each and every past paper
          question inside the classroom the speciality is we give our students
          enough time to solve the questions themselves inside the classtime.
        </Text>
        <Text
          style={{
            color: 'black',
            fontFamily: 'Poppins-Regular',
            fontSize: 14,
            marginBottom: 10,
          }}>
          Not only that. be everyday we provide a homework paper (advanced level
          type model paper) and help to improve the knowledge of the students
          and their practise.
        </Text>
        <Text
          style={{
            color: 'black',
            fontFamily: 'Poppins-Regular',
            fontSize: 14,
            marginBottom: 10,
          }}>
          Inside the classroom, university selected students are there to help
          students to ensure their knowledge, the teacher personaly check each
          student's progress.
        </Text>
        <Text
          style={{color: 'black', fontFamily: 'Poppins-Regular', fontSize: 14}}>
          So this is not an ordinary tution class but a special effective
          programme for advanced level students...
        </Text>
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
    gap: 120,
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
  aboutText: {
    fontSize: 20,
    color: '#000000',
    fontFamily: 'Poppins-Medium',
    marginTop: 26,
    textAlign: 'center',
  },
  middleView: {
    flex: 8,
    marginTop: 50,
    paddingHorizontal: 20,
  },
});

export default AboutScreen;
