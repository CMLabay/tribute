import React, { Component } from 'react';
import Ember from './Ember';
import ReactJs from './React';
import Vue from './Vue';
import Angular from './Angular';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
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
                <TextStyled>
                    Welcome to React Native Butts!
                </TextStyled>
                <Text>
                    To get started, edit index.ios.js
                </Text>
                <Text>
                    Press Cmd+R to reload,{'\n'}
                    Cmd+D or shake for dev menu
                </Text>
            </Container>
        );
    }
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
    }
    })
    );
    
AppRegistry.registerComponent('tribute', () => mainNavigator);