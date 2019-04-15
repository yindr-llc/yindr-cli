import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/components/Home'
import RouterComponent from './src/components/Router'
import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'

var config = {
  apiKey: "AIzaSyDh1WziWXMlYwAep_XpnZM8xIixDk2pt8Y",
  authDomain: "dishly-ios.firebaseapp.com",
  databaseURL: "https://dishly-ios.firebaseio.com",
  projectId: "dishly-ios",
  storageBucket: "dishly-ios.appspot.com",
  messagingSenderId: "864829010556"
};
firebase.initializeApp(config);



export default class App extends React.Component {

  render () {
    return (
      <View style={styles.container}>
        <RouterComponent />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
