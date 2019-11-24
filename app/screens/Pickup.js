import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import {db} from './../../data/database/dbconfig' //connect to db

let foundRef = db.ref('/found'); //gets reference to found items

class Pickup extends React.Component {
    static navigationOptions = {
      title: 'Pickup'
    };

    state = { //values you want to change as you go
      // found objects as an array (console.log to see inside)

      foundItems: [], // objects should be inside already
      
      //your variables
        name: '',
        g_ID: '',
        item: ''
     }

   componentDidMount() { //Puts all the refences as objects in an array
     foundRef.on('value', snapshot => {
       this.setState({ foundItems: Object.values(snapshot.val()) });
     });
   }

  //Check values for errors before inputing them to state
   handleName = (text) => {
      this.setState({ name: text })
   }
   handleGID = (text) => {
      this.setState({ g_ID: text })
   }
   handleItem = (text) => {
     this.setState({ item: text })
   }

   // submit button to enter stuff
   submit = (name, g_ID, item) => {
      alert('name: ' + name + ' g_ID: ' + g_ID + 'item:' + item)

      //add to db example: (another example in FoundForm)
      // db.ref('/history').push({
      //  id: id,
      // });
      // this.props.navigation.navigate('WelcomeBack');
   }


   //render
   render() {
      return (
         <View style={{
            flex: 1,
            alignItems:'center',
            justifyContent:'center',
            backgroundColor: '#ADD8E6',
            fontFamily: 'Georgia'
           }}>
            <Text style = {styles.title}>Pickup Item Form</Text>
            <Text></Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Name"
               placeholderTextColor = "#696969"
               autoCapitalize = "none"
               onChangeText = {this.handleName}/>

             <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "GatorID"
                placeholderTextColor = "#696969"
                autoCapitalize = "none"
                onChangeText = {this.handleGID}/>

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Item Collected"
               placeholderTextColor = "#696969"
               autoCapitalize = "none"
               onChangeText = {this.handleItem}/>

            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.submit(this.state.name, this.state.g_ID, this.state.item)
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
         </View>
       )
   }
}

export default Pickup;

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   title: {
      color: 'black',
      fontSize: 30, 
      fontFamily: 'Courier',
      alignContent: 'flex-start', 
      justifyContent: 'center'
    },
   input: {
      margin: 15,
      height: 40,
      width: 300,
      borderColor: '#696969',
      borderWidth: 1
   },
   submitButton: {
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
   submitButtonText:{
      color: 'white'
   }
})
