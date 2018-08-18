import React, {Component} from 'react';
import firebase from 'firebase';
import {Text} from 'react-native';

import {Button, Card, CardSection, Input} from './common'

class LoginForm extends Component {

    state = { email: '', password:'', error:''}

    onButtonPress(){
        const{ email, password} = this.state;
        console.log(email, password);
        this.setState({error:''});

        firebase.auth().signInWithEmailAndPassword(email,password)
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                 .catch((error)=>{
                     console.error(error)
                    this.setState({error: 'Authentication Failed.'})
                 });
            });
    }
    render(){
        return(
            <Card>
                <CardSection>
                    <Input 
                        placeholder="user@gmail.com"
                        label="Email"
                        value={this.state.email}
                        onChangeText={email=>this.setState({email})}
                    > 

                    </Input>
                    
                </CardSection>
                <CardSection> 
                    <Input
                        secureTextEntry
                        placeholder="password"
                        label="Password"
                        value={this.state.password}
                        onChangeText={password=>this.setState({password})}   
                    >

                    </Input>

                 </CardSection>

                 <Text style={styles.errorTextStyle}>
                     {this.state.error}
                 </Text>

                 <CardSection>
                  <Button onPress={this.onButtonPress.bind(this)}>
                    Log in
                  </Button>
                 </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf:'center',
        color: 'red'

    }

};  

export default LoginForm;