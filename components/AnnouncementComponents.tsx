import {View, Text, StyleSheet} from 'react-native';
//@ts-ignore
import {Card} from 'react-native-shadow-cards';
import React from 'react';
import ButtonComponent from './ButtonComponent';
import MessageIcon from 'react-native-vector-icons/AntDesign';
import {NavigationProp, useNavigation} from '@react-navigation/native';

interface AnnouncementProps {
  title: string;
  message: string;
  date: string;
}

const AnnouncementComponent: React.FC<AnnouncementProps> = ({
  title,
  message,
  date,
}) => {
  const navigation: NavigationProp<any> = useNavigation();

  const navigateViewMessage = () => {
    navigation.navigate('viewMessage', {title, message, date});
  };

  return (
    <Card style={[styles.container, styles.shadowProp]}>
      <View style={styles.iconView}>
        <MessageIcon name="mail" color="#5F27CD" size={30} />
      </View>
      <View style={styles.textView}>
        <View style={styles.mainTextwarp}>
          <Text style={styles.mainText}>{title}</Text>
        </View>
        <View style={styles.subTextwarp}>
          <Text style={styles.subText}>{message}</Text>
        </View>
      </View>
      <ButtonComponent
        text="Show Message"
        btnStyles={styles.btnCheck}
        txtStyles={styles.txtCheck}
        onPress={navigateViewMessage}
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 75,
    borderRadius: 9,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    gap: 6,
    backgroundColor: '#f6f8fc',
    // elevation: 1,
  },
  iconView: {
    width: 80,
    height: 75,
    backgroundColor: '#EFEEEE',
    borderRadius: 9,
    flex: 1,
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
    flex: 3,
    gap: 2,
  },
  btnCheck: {
    backgroundColor: '#FFC55A',
    borderRadius: 9,
    padding: 5,
    marginRight: 10,
  },
  txtCheck: {
    color: '#ffffff',
    fontSize: 10,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    marginTop: 2,
  },
  mainTextwarp: {
    flex: 2,
    top: 8,
  },
  subTextwarp: {
    flex: 3,
    paddingVertical: 8,
    // backgroundColor: 'red',
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});

export default AnnouncementComponent;
