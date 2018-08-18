import React, {Component} from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import {Header, Button, Spinner, CardSection, Card} from './src/components/common';
import LoginForm from './src/components/LoginForm'


export default class App extends React.Component {

  state = {loggedIn: null};
  
  componentWillMount(){
    firebase.initializeApp({
        apiKey: 'AIzaSyBxp_Y3FZOmiIM7RfHAYDVGZwZBYQ-9eaU',
        authDomain: 'authentication-afe67.firebaseapp.com',
        databaseURL: 'https://authentication-afe67.firebaseio.com',
        projectId: 'authentication-afe67',
        storageBucket: 'authentication-afe67.appspot.com',
        messagingSenderId: '913075465416'        
    });
    
    firebase.auth().onAuthStateChanged((user)=> {
      if(user){
        this.setState({loggedIn: true});
      } else{
        this.setState({loggedIn: false});
      }
    });

  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return <Button>Log Out</Button>;
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <Header headerText="Authentication"/>
        <CardSection>
          {this.renderContent()}
        </CardSection>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flexDirection:'column'
  }
};


