import React, { Component } from 'react';
import { Container, Header, Content, Button, Icon, Text } from 'native-base';
import firebase from 'firebase'
export default class SideBar extends Component {

  onLogout(){
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    });
  }

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Button iconLeft dark onPress={() => this.onLogout()}>
            <Icon name='cog' />
            <Text>Log out</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
