import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
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

AppRegistry.registerComponent('tribute', () => tribute);