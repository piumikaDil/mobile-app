import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import PieChart from 'react-native-pie-chart';
import TopMarkComponent from '../components/TopMarkComponent';
import ButtonComponent from '../components/ButtonComponent';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {getLastExamAndTopMarks} from '../js/controllers/exam-controller';
import Spinner from '../components/Spinner';

const Exam = () => {
  const navigation: NavigationProp<any> = useNavigation();
  const [topMarks, setTopMarks] = React.useState<any[]>([]);
  const [series, setSeries] = React.useState<any[]>([]);

  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [sum, setSum] = React.useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getLastExamAndTopMarks();
        if (result.marksPercentages) {
          const {
            greaterThan75,
            greaterThan65,
            greaterThan55,
            greaterThan35,
            failed,
          } = result.marksPercentages;

          const data = [
            greaterThan75,
            greaterThan65,
            greaterThan55,
            greaterThan35,
            failed,
          ];

          console.log('Data:', data);
          const sum1 = data.reduce((acc, value) => acc + value, 0);
          setSum(sum1);

          const [mark1, mark2, mark3] = result.topMarkStudents;
          const marksSet = [mark1, mark2, mark3];
          console.log('Marks:', marksSet);

          setSeries(data);
          console.log('Series:', series);

          setTopMarks(marksSet);
          console.log('Top marks:', topMarks);

          setIsLoading(false);

          console.log('Top marks', topMarks.length);
        }
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  const goMyMarksHistory = () => {
    navigation.navigate('my-marks');
  };

  const widthAndHeight = 244;
  // const series1 = [50, 25, 12, 14, 3];
  const sliceColor = ['#5F27CD', '#FFC55A', '#F8D8F3', '#D8D6F8', '#e74c3c'];
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, paddingTop: 20, backgroundColor: '#fff'}}>
        <Text style={styles.title}>Last Exam ID : CHE2256</Text>
        <View style={styles.chartView}>
          {sum !== 0 ? (
            <View>
              <PieChart
                widthAndHeight={widthAndHeight}
                series={series}
                sliceColor={sliceColor}
              />

              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 5,
                  marginTop: 10,
                  justifyContent: 'center',
                }}>
                <View
                  style={{height: 9, width: 9, backgroundColor: '#5F27CD'}}
                />
                <Text
                  style={{
                    fontSize: 10,
                    fontFamily: 'Poppins-Regular',
                    color: 'black',
                  }}>
                  A
                </Text>
                <View
                  style={{height: 10, width: 10, backgroundColor: '#FFC55A'}}
                />
                <Text
                  style={{
                    fontSize: 10,
                    fontFamily: 'Poppins-Regular',
                    color: 'black',
                  }}>
                  B
                </Text>
                <View
                  style={{height: 10, width: 10, backgroundColor: '#F8D8F3'}}
                />
                <Text
                  style={{
                    fontSize: 10,
                    fontFamily: 'Poppins-Regular',
                    color: 'black',
                  }}>
                  C
                </Text>
                <View
                  style={{height: 10, width: 10, backgroundColor: '#D8D6F8'}}
                />
                <Text
                  style={{
                    fontSize: 10,
                    fontFamily: 'Poppins-Regular',
                    color: 'black',
                  }}>
                  S
                </Text>
                <View
                  style={{height: 10, width: 10, backgroundColor: '#e74c3c'}}
                />
                <Text
                  style={{
                    fontSize: 10,
                    fontFamily: 'Poppins-Regular',
                    color: 'black',
                  }}>
                  F
                </Text>
              </View>
            </View>
          ) : (
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Text style={{color: 'black', fontSize: 20}}>
                The exam has not been added yet
              </Text>
            </View>
          )}
        </View>
        <View style={styles.topMarksView}>
          <Text style={styles.topMarkText}>Top Marks</Text>
          {topMarks.length === 0 ? (
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                color: 'black',
                textAlign: 'center',
                fontSize: 16,
                top: -5,
              }}>
              You have not faced any exam yet
            </Text>
          ) : (
            topMarks.map((mark, index) =>
              mark ? (
                <TopMarkComponent
                  key={index}
                  name={mark.studentName}
                  cls={mark.class}
                  image={mark.image}
                  marks={mark.marks}
                />
              ) : (
                <View style={{flex: 1}}>
                  <Text
                    style={{
                      fontFamily: 'Poppins-Regular',
                      color: 'black',
                      textAlign: 'center',
                      fontSize: 16,
                    }}>
                    Top marks are not available
                  </Text>
                </View>
              ),
            )
          )}

          <ButtonComponent
            text="My Marks History"
            btnStyles={styles.button}
            txtStyles={styles.buttonText}
            onPress={goMyMarksHistory}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chartView: {
    flex: 1,
    alignItems: 'center',
    gap: 10,
    top: 25,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    color: 'black',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#5F27CD',
    padding: 10,
    borderRadius: 9,
    width: 375,
    height: 50,
    top: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    marginTop: 2.5,
  },
  topMarksView: {
    top: -20,
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  topMarkText: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: 'black',
    marginBottom: 20,
  },
});
export default Exam;
