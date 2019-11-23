import React from 'react';
import { Button, View,Text } from 'react-native';
import {StyleSheet} from 'react-native';

class WelcomeBack extends React.Component {
    static navigationOptions = {
      title: 'WelcomeBack'
    };

    render() {
        return (
            <View style={{
             flex: 1,
             alignItems:'center',
             justifyContent:'center'
            }}>
            <Button title="Home"
                onPress={() => this.props.navigation.navigate('Home')}
               />
              </View>
          );
    }
    }
    export default WelcomeBack;
