import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import BackButtonComponent from '../components/BackButtonComponent';
import {useNavigation} from '@react-navigation/native';

interface AnnouncementProps {
  title: string;
  message: string;
  date: string;
}

const ViewMessageScreen = ({route}: {route: any}) => {
  const navigation = useNavigation();

  const {title, message, date}: AnnouncementProps = route.params;

  const goHomeScreen = () => {
    //@ts-ignore
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.aboutText}>View Message</Text>
      <BackButtonComponent top={30} right={25} click={goHomeScreen} />
      <Text
        style={{
          color: 'black',
          fontFamily: 'Poppins-Medium',
          fontSize: 20,
          marginTop: 50,
          textAlign: 'left',
          paddingLeft: 20,
        }}>
        {title}
      </Text>
      <View style={styles.middleView}>
        {/* <Text
          style={{
            color: 'black',
            fontFamily: 'Poppins-Regular',
            textAlign: 'right',
            marginBottom: 20,
          }}>
          {date}
        </Text> */}
        <Text style={{color: 'black', fontFamily: 'Poppins-Regular',fontSize:16}}>
          {message}
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
    marginTop: 20,
    paddingHorizontal: 20,
  },
});

export default ViewMessageScreen;
