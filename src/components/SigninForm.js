import React, { Component } from 'react';
import { Button, Text, Container, Header, Content, Form, Item, Input, Label } from 'native-base';

class SignInForm extends Component {

  onEmailChange(text){
    this.props.emailChanged(text)
  }

  onPasswordChange(text){
    this.props.passwordChanged(text)

  }
  render(){
    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input
                onChangeText={this.onEmailChange.bind(this)}
                value={this.props.email}
              />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input
                onChangeText={this.onPasswordChange.bind(this)}
                value={this.props.password}
              />
            </Item>
          </Form>
          <Button block style={{marginTop:10}}>
            <Text>Sign In</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}
export default SignInForm
