import React from 'react'; 
import { Button, View,Text } from 'react-native';
import {StyleSheet} from 'react-native'; 
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import { TextInput } from 'react-native';

const st = StyleSheet.create({ 
  title: {
    color: 'black',
    fontSize: 35, 
    fontFamily: 'Courier',
    alignContent: 'flex-start', 
    justifyContent: 'center'
  },
  background: { 
    color: 'blue',
  },
  baseText:{
    color: 'black',
    fontSize: 20
  },
  searchButton: { 
   marginRight: 40,
   marginLeft: 40, 
   marginTop: 10, 
   paddingTop: 10,
   paddingBottom: 10, 
   backgroundColor: '#3333FF', 
   borderRadius: 10, 
   borderWidth: 1, 
   borderColor: '#fff',
   fontSize: 20
  },
  input: {
    margin: 15,
    height: 40,
    width: 300,
    borderColor: '#696969',
    borderWidth: 1
 },
  loginText: { 
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10
  }
  
});

class Staff extends React.Component { 
    static navigationOptions = { 
      title: 'Staff'
    }; 
render() { 
    return (
        <View style={{ 
         flex: 1,
         alignItems:'center',
         justifyContent:'center',
         backgroundColor: '#ADD8E6',
         fontFamily: 'Georgia'
        }}>
      <Text style = {st.title}>Staff Sign In</Text>
         <Text></Text>
      
      <Text style = {st.baseText}>Location ID</Text>
      <TextInput style = {st.input}
        underlineColorAndroid = "transparent"
        placeholder = "Location ID"
        placeholderTextColor = "#696969"
        onChangeText = {this.handleDesc}/>
      <Text></Text>

      <Text style = {st.baseText}>Staff ID</Text>
      <TextInput style = {st.input}
        underlineColorAndroid = "transparent"
        placeholder = "Staff ID"
        placeholderTextColor = "#696969"
        onChangeText = {this.handleDesc}/>
      
      <TouchableOpacity 
        style = {st.searchButton}
        onPress={() => this.props.navigation.navigate('WelcomeBack')}
        underlayColor='#fff'>
          <Text style = {st.loginText}>Login</Text>
      </TouchableOpacity>
        </View>
      );
}
}
export default Staff; 