import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import Home from './src/components/Home'
import RouterComponent from './src/components/Router'
import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'

import reducers from './src/reducers'

export default class App extends React.Component {
  componentDidMount(){
    if (Platform.OS === 'ios'){
      var config = {
        apiKey: "AIzaSyDh1WziWXMlYwAep_XpnZM8xIixDk2pt8Y",
        authDomain: "dishly-ios.firebaseapp.com",
        databaseURL: "https://dishly-ios.firebaseio.com",
        projectId: "dishly-ios",
        storageBucket: "dishly-ios.appspot.com",
        messagingSenderId: "864829010556"
      };
      console.log('ios')
    }else{
      var config = {
        apiKey: "AIzaSyAuxwGG38p5M8CdpQAsAD7Yk2nwOZLwIq4",
        authDomain: "dishly-android.firebaseapp.com",
        databaseURL: "https://dishly-android.firebaseio.com",
        projectId: "dishly-android",
        storageBucket: "dishly-android.appspot.com",
        messagingSenderId: "742153709400"
      };
    }

    firebase.initializeApp(config);
  }

  render () {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <RouterComponent />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
