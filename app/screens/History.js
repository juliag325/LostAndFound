import React from 'react'; 
import { Button, View,Text } from 'react-native';
import {StyleSheet} from 'react-native'; 

class FoundForm extends React.Component { 
    static navigationOptions = { 
      title: 'History'
    }; 

    render() { 
        return (
            <View style={{ 
             flex: 1,
             alignItems:'center',
             justifyContent:'center'
            }}>
          <Button title="History"
              onPress={() => this.props.navigation.navigate('History')}
             />
            </View>
          );
    }
    }
    export default History; 