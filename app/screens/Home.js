import React from 'react'; 
import { Button, View, Text } from 'react-native'; 

class Home extends React.Component { 
  static navigationOptions = { 
    title: 'Have You Seen It?'
  }; 

  render() {
    return (
     <View style={{ 
      flex: 1,
      alignItems:'center',
      justifyContent:'center'
     }}>
   <Button title="Go to Profile screen"
       onPress={() => this.props.navigation.navigate('Profile')}
      />
     </View>
   );
   }
   }
export default Home; 



/*import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';


const styles = StyleSheet.create({
  bigTitle: {  
    color: 'black',
    fontWeight: 'bold',
    alignContent: 'center',
    fontSize: 30,
    textAlignVertical: 'center', 
    justifyContent: 'center'
  },
  background: {
    color: 'blue',
  },
});

export default class Home extends Component {
  render() {
    return (
      <View> 
        <Text style={styles.bigTitle}>Place</Text>
      </View>
    );
  }
} 
*/
