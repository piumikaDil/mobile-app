import {ActivityIndicator, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import ClassCard from '../components/ClassCard';
import BackButtonComponent from '../components/BackButtonComponent';
import {getAllClasses} from '../js/controllers/class-controller';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import Spinner from '../components/Spinner';

const ClassListScreen = () => {
  const [classes, setClasses] = React.useState<any[]>([]);
  const navigation: NavigationProp<any> = useNavigation();
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      const data = await getAllClasses();
      setClasses(data);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  const goBack = () => {
    navigation.goBack();
  };


  {}

  if (isLoading) {
    return (
     <Spinner />
    );
  }

  return (
    <View style={styles.mainView}>
      <ScrollView>
        <BackButtonComponent top={30} right={10} click={goBack} />
        <View style={styles.header}>
          <Text style={styles.headerText}>Classes</Text>
        </View>
        <View style={styles.cardArea}>
          {classes.map((anz,index) => (
            <ClassCard
              key={index}
              time={anz.time}
              place={anz.place}
              className={anz.alYear}
              date={anz.date.split('T')[0]}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default ClassListScreen;

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    paddingHorizontal: 20,
  },
  header: {
    flex: 1,
    marginTop: 30,
    alignItems: 'center',
    marginBottom: 30,
  },
  headerText: {
    color: 'black',
    fontSize: 21,
    fontFamily: 'Poppins-Medium',
  },
  cardArea: {
    flex: 12,
  },
  
});
