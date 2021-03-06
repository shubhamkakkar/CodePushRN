import React from 'react';
import { StatusBar, StyleSheet, Text } from 'react-native';
import codePush from "react-native-code-push";
import { Colors } from 'react-native/Libraries/NewAppScreen';



const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.sectionDescription}>
        Edit shubham
         </Text>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
let codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_START };
export default codePush(codePushOptions)(App);
