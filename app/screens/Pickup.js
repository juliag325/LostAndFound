import React from 'react'; 
import { Button, View,Text } from 'react-native';
import {StyleSheet} from 'react-native'; 

class FoundForm extends React.Component { 
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
          <Button title="Pickup"
              onPress={() => this.props.navigation.navigate('Pickup')}
             />
            </View>
          );
    }
    }
    export default Pickup; 