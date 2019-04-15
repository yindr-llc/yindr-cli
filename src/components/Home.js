import React, { Component } from 'react';
import Homefooter from './Commons/HomeFooter'
import {
  Container,Drawer, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text
} from 'native-base';
import SwiperWithButton from './Commons/SwiperWithButton'
import SideBar from './SideBar';

class Home extends Component {

  closeDrawer() {
    this.drawer._root.close()
  };
  openDrawer(){
    this.drawer._root.open()
  };

  render() {
    return (
      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<SideBar navigator={this.navigator} />}
        onClose={() => this.closeDrawer()} >
        <Container>
          <Header>
            <Left>
              <Button transparent onPress={() => this.openDrawer()}>
                <Icon name="menu"/>
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
      </Drawer>
    );
  }
}

export default Home
