import React from 'react';
import { Button, View,Text } from 'react-native';
import {StyleSheet} from 'react-native';

class History extends React.Component {
    static navigationOptions = {
      title: 'History'
    };

    render() {
        return (
            <View style={{
             flex: 1,
             alignItems:'center',
             justifyContent:'center',
             backgroundColor: '#ADD8E6'
            }}>
            <Button title="Go to Home screen"
                onPress={() => this.props.navigation.navigate('Home')}
               />
              </View>
          );
    }
    }
    export default History;
