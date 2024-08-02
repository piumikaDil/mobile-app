/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Image,
} from 'react-native';
import React, {useEffect} from 'react';

import ButtonComponent from '../components/ButtonComponent';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {launchImageLibrary} from 'react-native-image-picker';
import SampleImage from '../assets/profile.svg';
import CamIcon from 'react-native-vector-icons/Entypo';
import {
  getProfileImage,
  getStudentDetails,
  uploadImage,
} from '../js/controllers/profile-controller';
import Spinner from '../components/Spinner';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {cookieStorageIds} from '../enums/cookie-storage-ids';
import cookieManager from '../js/storage/storage-controller';
import AwesomeAlert from 'react-native-awesome-alerts';

const Profile = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [nic, setNic] = React.useState('');
  const [parent, setParent] = React.useState('');
  const [parentNum, setParentNum] = React.useState('');

  const [image, setImage] = React.useState();

  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  const [showAlertField, setShowAlertField] = React.useState(false);

  const navigation: NavigationProp<any> = useNavigation();
  const {ID_TOKEN} = cookieStorageIds;
  useEffect(() => {
    const checkCookieAndRedirect = async () => {
      const accessToken = await cookieManager.getCookieByName(ID_TOKEN);

      if (accessToken) {
        navigation.navigate('drawer-navigate');
      }
    };

    checkCookieAndRedirect();
  }, [ID_TOKEN, navigation]);

  const options: any = {
    mediaType: 'photo',
    savetoPhotos: true,
  };

  const showAlertFieldHandler = () => {
    setShowAlertField(true);
  };

  const hideAlertFieldHandler = () => {
    setShowAlertField(false);
  };

  const getDetails = async () => {
    try {
      const student = await getStudentDetails();
      if (student) {
        setName(student.data.name);
        setEmail(student.data.email);
        setNic(student.data.nic);
        setParent(student.data.parentName);
        setParentNum(student.data.parentNo);

        const img64 = await getProfileImage();
        if (img64) {
          setImage(img64);
        }
      }
      setIsLoading(false);
    } catch (error: any) {
      console.error(error.response.status);
    } finally {
      setIsLoading(false);
    }
  };

  // Call the uploadImage function inside openGallery
  const openGallery = async () => {
    const result = await launchImageLibrary(options);
    //@ts-ignore
    await uploadImage(result.assets[0].uri);
    await getDetails();
  };

  useEffect(() => {
    getDetails();
  }, []);

  useEffect(() => {}, [image]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{flexGrow: 1}}
      keyboardShouldPersistTaps="handled">
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Profile</Text>
        <View style={styles.imgView}>
          <View
            style={{
              width: 121,
              height: 121,
              backgroundColor: '#D9D9D9',
              borderRadius: 50,
              flex: 0,
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden',
            }}>
            {image === '' ? (
              <SampleImage />
            ) : (
              // <Image source={{uri: image}} style={{width: 150, height: 150}} />
              <Image
                source={{uri: `data:image/png;base64,${image}`}}
                style={{width: 150, height: 150}}
              />
            )}
          </View>
          <TouchableOpacity style={styles.imgUploadBtn} onPress={openGallery}>
            <CamIcon name="camera" size={15} />
          </TouchableOpacity>

          <Text style={styles.txtName}>Smart Chemistry</Text>
        </View>
        <View style={styles.txtView}>
          <View style={styles.nameTextView}>
            <Text style={styles.aboutText}>Name</Text>
          </View>
          <TextInput style={styles.Input} editable={false}>
            {name}
          </TextInput>
          <View style={styles.nameTextView}>
            <Text style={styles.aboutText}>Email</Text>
          </View>
          <TextInput style={styles.Input} editable={false}>
            {email}
          </TextInput>
          <View style={styles.nameTextView}>
            <Text style={styles.aboutText}>NIC</Text>
          </View>
          <TextInput style={styles.Input} editable={false}>
            {nic}
          </TextInput>
          <View style={styles.nameTextView}>
            <Text style={styles.aboutText}>Parent Name</Text>
          </View>
          <TextInput
            style={styles.Input}
            placeholder="parent name (optional)"
            placeholderTextColor={'rgba(204, 204, 204, 0.71)'}>
            {parent}
          </TextInput>
          <View style={styles.nameTextView}>
            <Text style={styles.aboutText}>Parent Number</Text>
          </View>
          <TextInput
            style={styles.Input}
            placeholder="parent number (optional)"
            placeholderTextColor={'rgba(204, 204, 204, 0.71)'}>
            {parentNum}
          </TextInput>
        </View>
        <View style={styles.btnView}>
          <ButtonComponent
            btnStyles={styles.button}
            text="update"
            txtStyles={styles.buttonText}
            onPress={() => showAlertFieldHandler()}
          />
        </View>
      </SafeAreaView>
      <AwesomeAlert
        show={showAlertField}
        showProgress={false}
        title="Smart Chemistry"
        message="Update Successfully!"
        closeOnTouchOutside={false}
        closeOnHardwareBackPress={false}
        showCancelButton={false}
        showConfirmButton={true}
        cancelText="Ok"
        confirmText="Cancel"
        confirmButtonColor="#5F27CD"
        onCancelPressed={hideAlertFieldHandler}
        onConfirmPressed={hideAlertFieldHandler}
      />
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    color: 'black',
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 30,
  },
  nameTextView: {
    backgroundColor: 'white',
    display: 'flex',
    alignSelf: 'flex-start',
    flexDirection: 'row',
    fontFamily: 'Poppins-Regular',
    marginHorizontal: 25,
    top: 23,
    paddingHorizontal: 5,
    borderRadius: 5,
    zIndex: 1,
  },

  aboutText: {
    fontSize: 14,
    color: '#bdc3c7',
    fontFamily: 'Poppins-Regular',
  },
  imgView: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    marginTop: 20,
  },
  txtView: {
    flex: 5,
    alignItems: 'center',
    gap: 10,
    marginTop: 20,
  },
  btnView: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Input: {
    height: 42,
    width: 375,
    borderWidth: 0.5,
    borderColor: 'rgba(0, 0, 0, 0.19)',
    padding: 10,
    borderRadius: 9,
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#5F27CD',
    paddingLeft: 15,
  },
  button: {
    backgroundColor: '#5F27CD',
    padding: 10,
    borderRadius: 9,
    width: 375,
    height: 50,
    marginTop: 0,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    marginTop: 2.5,
  },
  txtName: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#5F27CD',
    marginTop: 13,
  },
  btnEdit: {
    width: 47,
    height: 20,
    backgroundColor: '#FFC55A',
    borderRadius: 12,
  },
  txtEdit: {
    color: '#ffffff',
    fontSize: 10,
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    marginTop: 2,
  },
  textInputStyle: {
    color: 'black',
    backgroundColor: '#E6E6E6',
    borderRadius: 9,
    paddingHorizontal: 10,
  },
  imgUploadBtn: {
    position: 'absolute',
    left: 20,
    bottom: 0,
    width: 30,
    height: 30,
    backgroundColor: '#5F27CD',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Profile;
