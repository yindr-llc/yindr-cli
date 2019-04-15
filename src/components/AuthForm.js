import React, { Component } from 'react';
import { Button, Text, Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import { Scene, Router, Actions } from 'react-native-router-flux'
import firebase from 'firebase'
import { GoogleSignIn } from 'expo'

export default class AuthForm extends Component {
  isUserEqual = (googleUser, firebaseUser) => {
    console.log("firebase",firebaseUser)
    if (firebaseUser) {
      var providerData = firebaseUser.providerData;
      for (var i = 0; i < providerData.length; i++) {
        if (
          providerData[i].providerId ===
            firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.getBasicProfile().getId()
        ) {
          // We don't need to reauth the Firebase connection.
          console.log('true')
          return true;
        }
      }
    }
    console.log('false')
    return false;
  };

  onSignIn = googleUser => {
  console.log('Google Auth Response', googleUser);
  // We need to register an Observer on Firebase Auth to make sure auth is initialized.
  var unsubscribe = firebase.auth().onAuthStateChanged(
    function(firebaseUser) {
      unsubscribe();
      // Check if we are already signed-in Firebase with the correct user.
      if (!this.isUserEqual(googleUser, firebaseUser)) {
        // Build Firebase credential with the Google ID token.
        var credential = firebase.auth.GoogleAuthProvider.credential(
          googleUser.idToken,
          googleUser.accessToken
        );
        console.log("credential",credential)
        // Sign in with credential from the Google user.
        firebase
          .auth()
          .signInAndRetrieveDataWithCredential(credential)
          .then(function(result) {
            console.log('user signed in ');
            console.log('login ');
            console.log(result)
            if (result.additionalUserInfo.isNewUser) {
              console.log('new')

            } else {
              console.log('have already account',result)
            }
          })
          .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
            console.log(error)
          });
      } else {
        console.log('User already signed-in Firebase.');
      }
    }.bind(this)
  );
};

  signInWithGoogleAsync = async () => {
    try {
      const result = await Expo.Google.logInAsync({
        // androidClientId: YOUR_CLIENT_ID_HERE,
        behavior: 'web',
        iosClientId:"485530816586-f5icb9vf5ektbnrfj9hkbbtt8526rd1i.apps.googleusercontent.com",
        scopes: ['profile', 'email']
      });
      console.log('result',result)
      if (result.type === 'success') {
        console.log('user in result',result.user)
        this.onSignIn(result);
        const ClientId = "485530816586-f5icb9vf5ektbnrfj9hkbbtt8526rd1i.apps.googleusercontent.com"
        const accessToken = result.accessToken
        await Google.logOutAsync({ ClientId, accessToken });
        console.log('after googlelog out', google)
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  };

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
          <Button block style={{marginTop:10}}>
            <Text>Light</Text>
          </Button>
          <Button
            block
            style={{marginTop:10}}
            onPress={() => this.signInWithGoogleAsync()}
            >
            <Text>Sign In With Google</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
