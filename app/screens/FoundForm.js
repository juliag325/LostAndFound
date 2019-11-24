import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ActionSheetIOS } from 'react-native';
import {db} from './../../data/database/dbconfig'


class FoundForm extends React.Component {
  static navigationOptions = {
    title: 'FoundForm'
  };

  buttons = ['Cancel', 'clothing','phone', 'laptop', 'wallet', 'backpack', 'credit card', 'keys', 'accessories', 'other'];

  state = {
      item: '',
      description: '',
      date: '',
      category: `${this.buttons[1]}`
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
   submit = (item, category, desc, date) => {
     let temp = "xx/xx/xxxx"
     if (!(date.length == temp.length && /\d/.test(date))) {
       alert("Error: Date not correctly formatted");
     }
     else if(item == '' || category == '' || desc == '' || date == '') {
       alert("Error: Do not leave any inputs empty.");
     }
     else {
       db.ref('/found').push({
        name: item,
        category: category,
        desc: desc,
        date: date
       });
       this.props.navigation.navigate('WelcomeBack');
     }
   }
   render() {
      return (
         <View style = {styles.container}>
            <Text>Enter the item name:</Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Item"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleItem}/>

             <Text>Enter the date the item was found:</Text>
             <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "xx/xx/xxxx"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
                onChangeText = {this.handleDate}/>

            <Text>Select the Category:</Text>
            <TouchableOpacity
              onPress={this.showActionSheet}
              style={styles.input}>
              <Text>{this.state.category}</Text>
            </TouchableOpacity>

            <Text>Enter details:</Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Description"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleDesc}/>

            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.submit(this.state.item, this.state.category, this.state.description, this.state.date)
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
}



export default FoundForm;

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   }
})
