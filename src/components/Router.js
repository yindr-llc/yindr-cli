import React, { Component } from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux'
import AuthForm from './AuthForm'
import Home from './Home'
import firebase from 'firebase'
import Google from './Google'
import Loading from './Commons/Loading'
class RouterComponent extends Component {
  render(){
    return (
      <Router>
        <Scene key='root' hideNavBar>
          <Scene key='loading' >
            <Scene key={'loading'} component={Loading} initial/>
          </Scene>
          <Scene key='auth' >
            <Scene key={'login'} component={AuthForm} title='Please Login' />
          </Scene>
          <Scene key='main'>
            <Scene key={'home'} component={Home} hideNavBar/>
          </Scene>
        </Scene>
      </Router>
    )
  }
}

export default RouterComponent
