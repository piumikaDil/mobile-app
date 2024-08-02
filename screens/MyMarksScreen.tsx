/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import {LineChart} from 'react-native-chart-kit';
import MyMarkComponent from '../components/MyMarksComponent';
import BackButtonComponent from '../components/BackButtonComponent';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {getStudentMarks} from '../js/controllers/mymarks-controller';
import Spinner from '../components/Spinner';

const chartConfig = {
  backgroundGradientFrom: 'white',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: 'white',
  backgroundGradientToOpacity: 0,

  color: (opacity = 1) => 'black',
  strokeWidth: 2, // optional, default 3

  useShadowColorFromDataset: false, // optional
};

const MyMarksScreen = () => {
  const navigation: NavigationProp<any> = useNavigation();

  const [myMarks, setMyMarks] = React.useState<any[]>([]);
  const [growth, setGrowth] = React.useState<any[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  const navigateExamScreen = () => {
    navigation.navigate('Exam');
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getStudentMarks();

        const marks = result.map((mark: any) => mark.marks).reverse();

        setGrowth(marks);
        setMyMarks(result);
        setIsLoading(false);
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    };
    fetchData();
  }, []);

  const reversedGrowth = growth.slice().reverse();

  const data = {
    labels: growth.map((_, index) => `week${index + 1}`),
    datasets: [
      {
        data: reversedGrowth,
        color: (opacity = 1) => '#5F27CD', // optional
      },
    ],
    legend: ['Marks'], // optional
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <ScrollView style={styles.container}>
      <BackButtonComponent click={navigateExamScreen} top={30} right={25} />
      <View style={styles.chartView}>
        <Text
          style={{
            fontFamily: 'Poppins-Medium',
            color: 'black',
            textAlign: 'center',
            fontSize: 20,
          }}>
          Student growth
        </Text>
        {growth.length === 0 ? (
          <View style={styles.noChartView}>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                color: 'black',
                textAlign: 'center',
                fontSize: 20,
              }}>
              No marks to show
            </Text>

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
          </View>
        ) : (
          <LineChart
            data={data}
            width={390}
            height={300}
            verticalLabelRotation={0}
            chartConfig={chartConfig}
            bezier
          />
        )}
      </View>
      <View style={styles.subView}>
        {myMarks.map((mark, index) => (
          <MyMarkComponent
            key={index}
            examId={mark.examId}
            marks={mark.marks}
          />
        ))}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chartView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    right: 8,
    top: 15,
  },
  subView: {
    flex: 1,
    alignItems: 'center',
    gap: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  noChartView: {
    top: 300,
    height: 345,
    width: 390,
  },
});

export default MyMarksScreen;
