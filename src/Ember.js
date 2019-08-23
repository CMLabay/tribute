import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
    justifyContent: center;
    alignItems: center;
    backgroundColor: #F5FCFF;
    margin: 40px;
`;

const TextStyled = styled.Text`
    fontSize: 20;
    textAlign: center;
    margin: 10px;
`;

export default class Ember extends Component {
    render(){
        return(
            <Container>
                <TextStyled>
                Ember Jeopardy
                </TextStyled>
            </Container>
        );
    }
}

Ember.navigationOptions = {
    tabBarIcon: (
        <Image
            style={{width: 30, height: 30}}
            source={require('./img/welovehou.jpg')}/>
    )
    ,
    tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        showIcon: true
      },
    }
