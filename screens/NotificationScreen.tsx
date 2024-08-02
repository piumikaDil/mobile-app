import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import AnnouncementComponent from '../components/AnnouncementComponents';
import {getAllAnnouncements} from '../js/controllers/announcements-controller';
import Spinner from '../components/Spinner';

const Notification = () => {
  const [announcements, setAnnouncements] = React.useState<any[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await getAllAnnouncements();
      setAnnouncements(data);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Notification</Text>
      </View>
      <View style={styles.alertView}>
        {[...announcements].reverse().map((anz, index) => (
          <AnnouncementComponent
            key={index}
            message={anz.message}
            title={anz.title}
            date={anz.date.split('T')[0]}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  alertView: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 40,
    gap: 15,
  },
  button: {
    color: 'black',
  },
  header: {
    width: '100%',
    height: 50,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    top: 20,
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
  },
});

export default Notification;
