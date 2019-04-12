import React, { Component } from 'react';
import Homefooter from './Commons/HomeFooter'
import {
  Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text
} from 'native-base';
import SwiperWithButton from './Commons/SwiperWithButton'

class Home extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <SwiperWithButton />
        </Content>
      </Container>
    );
  }
}

export default Home
