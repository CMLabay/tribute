import React, { Component } from 'react';
import NavImage from './NavImage'
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

export default class Vue extends Component {
    render(){
        return(
            <Container>
                <TextStyled>
                    <Image 
                        style={{width: 200, height: 200}}
                        source={require('./img/WTH.jpeg')}/>                
                </TextStyled>
            </Container>
        );
    }
}

Vue.navigationOptions = {
    tabBarIcon: (
        <Image
            style={{width: 30, height: 30}}
            source={require('./img/WTH.jpeg')}/>
    )
    ,
    tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        showIcon: true
      },
}
