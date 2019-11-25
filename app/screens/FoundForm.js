import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ActionSheetIOS } from 'react-native';
import {db} from './../../data/database/dbconfig'

class FoundForm extends React.Component {
  static navigationOptions = {
    title: 'FoundForm'
  };

  buttons = ['Cancel', 'clothing','phone', 'laptop', 'wallet', 'backpack', 'credit card', 'keys', 'accessories', 'other'];
  places = ['Cancel', 'marston','libwest', 'broward', 'reitz', 'neb'];

  state = {
      item: '',
      id: Math.floor(Math.random() * 1000000),
      description: '',
      date: '',
      category: `${this.buttons[1]}`,
      foundItem: [],
      location: `${this.places[1]}`
   }
   handleItem = (text) => {
      this.setState({ item: text.toLowerCase() })
   }
   handleDesc = (text) => {
      this.setState({ description: text.toLowerCase() })
   }
   handleDate = (text) => {
      this.setState({ date: text.toLowerCase() });
   }

   submit = (id, item, category, desc, date, location) => {
     let temp = "xx/xx/xxxx"
     if (!(date.length == temp.length && /\d/.test(date))) {
       alert("Error: Date not correctly formatted");
     }
     else if(item == '' || category == '' || desc == '' || date == '' || location == '') {
       alert("Error: Do not leave any inputs empty.");
     }
     else {
       db.ref('/found').push({
        id: id,
        name: item,
        category: category,
        desc: desc,
        date: date,
        location: location
       });
       this.props.navigation.navigate('WelcomeBack');
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
            <Text style = {styles.title}>Found Item Form</Text>
            <Text></Text>
            <Text style = {styles.baseText}>Enter the item name:</Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Item"
               placeholderTextColor = "#696969"
               autoCapitalize = "none"
               onChangeText = {this.handleItem}/>

             <Text style = {styles.baseText}>Enter the date the item was found:</Text>
             <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "xx/xx/xxxx"
                placeholderTextColor = "#696969"
                autoCapitalize = "none"
                onChangeText = {this.handleDate}/>

            <Text style = {styles.baseText}>Select the Category:</Text>
            <TouchableOpacity
              onPress={this.showActionSheet}
              style={styles.input}>
              <Text>{this.state.category}</Text>
            </TouchableOpacity>

            <Text style = {styles.baseText}>Select the Location:</Text>
            <TouchableOpacity
              onPress={this.showLocationActionSheet}
              style={styles.input}>
              <Text>{this.state.location}</Text>
            </TouchableOpacity>

            <Text style = {styles.baseText}>Enter details:</Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Description"
               placeholderTextColor = "#696969"
               autoCapitalize = "none"
               onChangeText = {this.handleDesc}/>

            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.submit(this.state.id, this.state.item, this.state.category, this.state.description, this.state.date, this.state.location)
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
         </View>
      )
   }

   showActionSheet = () => {
     ActionSheetIOS.showActionSheetWithOptions({
       options: this.buttons,
       cancelButtonIndex: 0
     },
     (buttonIndex) => {
       if(buttonIndex != 0){
         this.setState({ category: this.buttons[buttonIndex].toLowerCase() });
       }
     });
   }

   showLocationActionSheet = () => {
     ActionSheetIOS.showActionSheetWithOptions({
       options: this.places,
       cancelButtonIndex: 0
     },
     (placeIndex) => {
       if(placeIndex != 0){
         this.setState({ location: this.places[placeIndex].toLowerCase()});
       }
     });
   }
}



export default FoundForm;

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
    baseText:{
      color: 'black',
      fontSize: 15
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
