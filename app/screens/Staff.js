import React from 'react';
import { Button, View,Text } from 'react-native';
import {StyleSheet} from 'react-native';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import { TextInput } from 'react-native';
import {db} from './../../data/database/dbconfig'

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

let locationsRef = db.ref('/locations');

class Staff extends React.Component {
    static navigationOptions = {
      title: 'Staff'
    };

    state = {
        i_name: '',
        i_id: '',
        locations: []
     }

    componentDidMount() {
      locationsRef.on('value', snapshot => {
        this.setState({ locations: Object.values(snapshot.val()) });
      });
    }

    handleName = (input) => {
      this.setState({ i_name: input.toLowerCase() })
    }

    handleID = (input) => {
      this.setState({ i_id: input })
    }

    submit = (name, id, locationArray) => {
      let result = false;
      for (let i = 0; i < locationArray.length;i++) {
        if(locationArray[i].name == name) {
          for(let j = 0; j < locationArray[i].staff_ID.length;j++) {
            if(locationArray[i].staff_ID[j] == id) {
              result = true;
              this.props.navigation.navigate('WelcomeBack');
            }
          }
        }
      }
      if(!result) {
        alert("Error: LocationID or StaffID is incorrect.")
      }
    }


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
        onChangeText = {this.handleName}/>
      <Text></Text>

      <Text style = {st.baseText}>Staff ID</Text>
      <TextInput style = {st.input}
        underlineColorAndroid = "transparent"
        placeholder = "Staff ID"
        placeholderTextColor = "#696969"
        onChangeText = {this.handleID}/>

      <TouchableOpacity
        style = {st.searchButton}
        onPress={ () => this.submit(this.state.i_name, this.state.i_id, this.state.locations)}
        underlayColor='#fff'>
          <Text style = {st.loginText}>Login</Text>
      </TouchableOpacity>
        </View>
      );
    }
}
export default Staff;
