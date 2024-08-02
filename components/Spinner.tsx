import { ActivityIndicator, StyleSheet, View } from 'react-native'
import React from 'react'

const Spinner = () => {
  return (
    <View style={styles.loadingScreen}>
      <ActivityIndicator size="large" color="#0000ff"  />
    </View>
  );
}

export default Spinner

const styles = StyleSheet.create({
  loadingScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});