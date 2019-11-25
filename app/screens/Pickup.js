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

      foundItemsV: [], // objects should be inside already
      foundItemsK: [],

      //your variables
        itemID: '',
        gID: '',
     }

   componentDidMount() { //Puts all the refences as objects in an array
     foundRef.on('value', snapshot => {
       this.setState({ foundItemsV: Object.values(snapshot.val()) });
       this.setState({ foundItemsK: Object.keys(snapshot.val()) });
     });
   }

  //Check values for errors before inputing them to state
   handleItem = (text) => {
      this.setState({ itemID: text });
   }
   handleGID = (text) => {
      this.setState({ gID: text });
   }

   // submit button to enter stuff
   submit = (foundItemsV, foundItemsK, id, g_id) => {
     let index = -1;
     for (let i = 0; i < foundItemsV.length;i++) {
       if(foundItemsV[i].id == id) {
         index = i;
       }
     }
     if(index == -1) {
       alert('Error: ID number does not exist.');
     }
     else {
       db.ref('/history').push({
        id: foundItemsV[index].id,
        name: foundItemsV[index].name,
        date: foundItemsV[index].date,
        location: foundItemsV[index].location,
        gatorID: g_id
      });
      foundRef.child(foundItemsK[index]).remove();
      this.props.navigation.navigate('Staff');
     }
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
               placeholder = "ItemID"
               placeholderTextColor = "#696969"
               autoCapitalize = "none"
               onChangeText = {this.handleItem}/>

             <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "GatorID"
                placeholderTextColor = "#696969"
                autoCapitalize = "none"
                onChangeText = {this.handleGID}/>

            <TouchableOpacity
               style = {styles.submitButton}
               onPress = { () => this.submit(this.state.foundItemsV, this.state.foundItemsK, this.state.itemID, this.state.gID)}>
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
