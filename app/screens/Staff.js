import React from 'react'; 
import { Button, View,Text } from 'react-native';
import {StyleSheet} from 'react-native'; 

class Staff extends React.Component { 
    static navigationOptions = { 
      title: 'Staff'
    }; 
render() { 
    return (
        <View style={{ 
         flex: 1,
         alignItems:'center',
         justifyContent:'center'
        }}>
      <Button title="Found Form"
          onPress={() => this.props.navigation.navigate('FoundForm')}
         />
      <Button title = "Pickup"
          onPress={() => this.props.navigation.navigate('FoundForm')}          
          />
      <Button title = "History"
          onPress={() => this.props.navigation.navigate('History')}
      />
        </View>
      );
}
}
export default Staff; 