import React from 'react';
import { Button, View,Text } from 'react-native';
import {StyleSheet} from 'react-native'; 
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';

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

  loginText: { 
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10
  }
  
});

class WelcomeBack extends React.Component {
    static navigationOptions = {
      title: 'WelcomeBack'
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
             <Text style = {st.title}>Welcome Back!</Text>
                <Text></Text>
             
             <TouchableOpacity 
               style = {st.searchButton}
               onPress={() => this.props.navigation.navigate('FoundForm')}
               underlayColor='#fff'>
                 <Text style = {st.loginText}>Found Form</Text>
             </TouchableOpacity>
       
             <TouchableOpacity 
               style = {st.searchButton}
               onPress={() => this.props.navigation.navigate('Pickup')}
               underlayColor='#fff'>
                 <Text style = {st.loginText}>Pickup</Text>
             </TouchableOpacity>
       
             <TouchableOpacity 
               style = {st.searchButton}
               onPress={() => this.props.navigation.navigate('History')}
               underlayColor='#fff'>
                 <Text style = {st.loginText}>History</Text>
             </TouchableOpacity>
       
             <TouchableOpacity 
               style = {st.searchButton}
               onPress={() => this.props.navigation.navigate('Home')}
               underlayColor='#fff'>
                 <Text style = {st.loginText}>Log Out</Text>
             </TouchableOpacity>
       
              </View>
          );
    }
    }
    export default WelcomeBack;
