/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import React, {useEffect} from 'react';
import MenuIcon from 'react-native-vector-icons/Feather';
import {SafeAreaView} from 'react-native-safe-area-context';
import HomecardImage from '../assets/home-card-img.svg';
import FeatureImage1 from '../assets/feartred-card.svg';
import FeatureImage2 from '../assets/24-feature.svg';
import FeatureImage3 from '../assets/25-eature.svg';
import HomeFeatureCard from '../components/HomeFeatureCard';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {getAllClasses} from '../js/controllers/class-controller';
import {getAllAnnouncements} from '../js/controllers/announcements-controller';
import cookieManager from '../js/storage/storage-controller';
import {cookieStorageIds} from '../enums/cookie-storage-ids';
import AnnouncementComponent from '../components/AnnouncementComponents';
import Spinner from '../components/Spinner';
// import {Dialog} from 'react-native-simple-dialogs';
//@ts-ignore
import {Dialog} from 'react-native-dialog';

const Home = () => {
  const navigation: NavigationProp<any> = useNavigation();
  const [classes, setClasses] = React.useState<any[]>([]);
  const [announcements, setAnnouncements] = React.useState<any[]>([]);
  const [userEmail, setUserEmail] = React.useState<string>('');

  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  const [dialogVisible, setDialogVisible] = React.useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      const data = await getAllClasses();
      setClasses(data);
      const email = await cookieManager.getCookieByName(cookieStorageIds.EMAIL);
      setUserEmail(email ?? 'N/A');
      setIsLoading(false);
    }
    fetchData();
  }, [classes]);

  useEffect(() => {
    async function fetchData() {
      const data = await getAllAnnouncements();
      setAnnouncements(data);
      setIsLoading(false);
    }
    fetchData();
  }, [announcements]);

  const goClassListScreen = () => {
    navigation.navigate('class-list');
  };

  const handlePress = () => {
    //@ts-ignore
    navigation.openDrawer();
  };

  const goAbout = () => {
    navigation.navigate('About');
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <SafeAreaView style={{backgroundColor: 'white', height: '100%'}}>
      <ScrollView>
        <View
          style={{
            width: '100%',
            height: 290,
            paddingHorizontal: 20,
            borderBottomRightRadius: 40,
            borderBottomLeftRadius: 40,
            backgroundColor: '#5F27CD',
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              top: 30,
            }}>
            <TouchableOpacity>
              <MenuIcon
                name="menu"
                size={30}
                style={{color: 'white'}}
                onPress={handlePress}
              />
            </TouchableOpacity>
            <View style={{alignItems: 'flex-end'}}>
              <Text
                style={{
                  fontSize: 30,
                  fontFamily: 'Poppins-Regular',
                  color: 'white',
                }}>
                Welcome!
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  top: -12,
                  color: 'white',
                  fontFamily: 'Poppins-Regular',
                }}>
                {userEmail}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 'auto',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: 378,
              height: 219,
              backgroundColor: '#491F9A',
              borderRadius: 10,
              top: -170,
              position: 'relative',
              padding: 10,
            }}>
            <View style={styles.teacherSection}>
              <Image
                style={styles.faceCut}
                source={{
                  uri: 'https://res.cloudinary.com/dqmvs79e5/image/upload/v1709717149/SMC-APP/chem_weolo1.png',
                }}
              />
              <View>
                <Text
                  style={{
                    fontSize: 12,
                    color: 'white',
                    fontFamily: 'Poppins-Medium',
                  }}>
                  Conducted by
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    color: 'white',
                    fontFamily: 'Poppins-Medium',
                    top: -6,
                  }}>
                  Mr.Sameera Sampath
                </Text>
              </View>
            </View>

            <View style={styles.homeCard}>
              <View style={styles.homeText}>
                <Text style={styles.mainText}>
                  The High Quality Learning Experience
                </Text>
                <TouchableOpacity style={styles.button} onPress={goAbout}>
                  <Text style={{color: 'white', fontFamily: 'Poppins-Medium'}}>
                    About Us
                  </Text>
                </TouchableOpacity>
                {/* <Button
                  title="Show Alert"
                  onPress={showAlertHandler}
                  color="#5F27CD"
                /> */}
              </View>
              <View>
                <HomecardImage width={200} style={{marginTop: 56, right: 25}} />
              </View>
            </View>
          </View>
        </View>
        <Text style={styles.featureTitle}>Featured</Text>

        <View
          style={{
            width: '100%',
            paddingHorizontal: 20,
            top: -140,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          {classes.length !== 0 ? (
            classes
              .slice(-3)
              .map((clz, index) =>
                index === 0 ? (
                  <HomeFeatureCard
                    key={index}
                    icon={
                      <Image
                        source={require('../assets/images/01.jpg')}
                        style={{width: 115, height: 115}}
                      />
                    }
                    color={'#D8D6F8'}
                    text={clz.alYear}
                    click={goClassListScreen}
                  />
                ) : index === 1 ? (
                  <HomeFeatureCard
                    key={index}
                    icon={
                      <Image
                        source={require('../assets/images/02.jpg')}
                        style={{width: 115, height: 115}}
                      />
                    }
                    color={'#F8D8F3'}
                    text={clz.alYear}
                    click={goClassListScreen}
                  />
                ) : (
                  <HomeFeatureCard
                    key={index}
                    icon={
                      <Image
                        source={require('../assets/images/03.jpg')}
                        style={{width: 115, height: 115}}
                      />
                    }
                    color={'#F8E7D9'}
                    text={clz.alYear}
                    click={goClassListScreen}
                  />
                ),
              )
          ) : (
            <View
              style={{
                width: '100%',
                height: 80,
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: 'black'}}> No classes available</Text>
            </View>
          )}
        </View>
        <Text style={styles.announcement}>Announcement</Text>
        <View style={{paddingHorizontal: 20, top: -90, flex: 1, gap: 20}}>
          {announcements.length !== 0 ? (
            announcements
              .slice(-2)
              .map((anz, index) => (
                <AnnouncementComponent
                  key={index}
                  message={anz.message}
                  title={anz.title}
                  date={anz.date.split('T')[0]}
                />
              ))
          ) : (
            <View
              style={{
                width: '100%',
                height: 80,
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: 'black'}}> No announcements available</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  teacherSection: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    marginTop: 5,
    marginLeft: 5,
  },
  faceCut: {
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: '#fff',
  },
  button: {
    width: 120,
    height: 35,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: '#FFC301',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  mainText: {
    fontSize: 23,
    fontFamily: 'Poppins-Medium',
    lineHeight: 26,
    color: 'white',
  },
  homeCard: {
    flex: 1,
    flexDirection: 'row',
  },
  homeText: {
    width: '50%',
    marginTop: 20,
    marginStart: 5,
  },
  announcement: {
    fontSize: 23,
    color: 'black',
    top: -115,
    paddingLeft: 20,
    fontFamily: 'Poppins-Medium',
  },
  featureTitle: {
    fontSize: 23,
    color: 'black',
    top: -155,
    paddingLeft: 20,
    fontFamily: 'Poppins-Medium',
  },
});
