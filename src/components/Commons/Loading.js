import React, { Component } from 'react';
import { Container, Header, Content, Spinner } from 'native-base';
import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'

class SpinnerExample extends Component {
  componentDidMount(){
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        console.log("user",user)
        Actions.main()
      }else{
        console.log('no user')
        Actions.auth()
      }
    })
  }

  render() {
    return (
      <Container>
        <Content>
          <Spinner size="large"/>
        </Content>
      </Container>
    );
  }
}

export default SpinnerExample
