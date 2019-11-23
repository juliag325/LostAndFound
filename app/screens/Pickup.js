import React from 'react';
import { Button, View,Text } from 'react-native';
import {StyleSheet} from 'react-native';

class Pickup extends React.Component {
    static navigationOptions = {
      title: 'Pickup'
    };

    render() {
        return (
            <View style={{
             flex: 1,
             alignItems:'center',
             justifyContent:'center'
            }}>
            <Button title="Go to Home screen"
                onPress={() => this.props.navigation.navigate('Home')}
               />
              </View>
          );
    }
    }
    export default Pickup;
