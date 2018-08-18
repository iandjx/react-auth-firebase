import React, {Component} from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import {Header} from './src/components/common';
import LoginForm from './src/components/LoginForm'


export default class App extends React.Component {
  
  componentWillMount(){
    firebase.initializeApp({
        apiKey: 'AIzaSyBxp_Y3FZOmiIM7RfHAYDVGZwZBYQ-9eaU',
        authDomain: 'authentication-afe67.firebaseapp.com',
        databaseURL: 'https://authentication-afe67.firebaseio.com',
        projectId: 'authentication-afe67',
        storageBucket: 'authentication-afe67.appspot.com',
        messagingSenderId: '913075465416'        
    });

  }
  render() {
    return (
      <View >
        <Header headerText="Authentication"/>
        <LoginForm/>
        </View>
    );
  }
}


