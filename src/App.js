import React, { Component } from 'react';
import Ember from './Ember';
import ReactJs from './React';
import Vue from './Vue';
import Angular from './Angular';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import styled from 'styled-components/native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

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
export default class tribute extends Component {
    render(){
        return(
            <Container>
                <Image 
                    style={{width: 250, height: 150}}
                    source={require('./img/Utah.jpg')}/>
            </Container>
        );
    }
}

tribute.navigationOptions = {
    tabBarIcon: (
        <Image
            style={{width: 30, height: 30}}
            source={require('./img/runner.png')}/>
    )
    ,
    tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        showIcon: true
      },
}


const mainNavigator = createAppContainer(
createBottomTabNavigator({
    Home: {
    screen: tribute,
    path: ''
    },
    Angular: {
    screen: Angular,
    path: 'angular'
    },
    React: {
    screen: ReactJs,
    path: 'react'
    },
    Ember: {
    screen: Ember,
    path: 'ember'
    },
    Vue: {
    screen: Vue,
    path: 'vue'
    },
    })
    );
    
AppRegistry.registerComponent('tribute', () => mainNavigator);