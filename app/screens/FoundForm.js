import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ActionSheetIOS } from 'react-native';

class FoundForm extends React.Component {
  static navigationOptions = {
    title: 'FoundForm'
  };

  buttons = ['Cancel', 'Cloth','Phone','Wallet', 'Backpack', 'Debit/Credit Card', 'Keys', 'Accessories', 'Other'];

  state = {
      item: '',
      description: '',
      clicked: `${this.buttons[1]}`
   }
   handleItem = (text) => {
      this.setState({ item: text })
   }
   handleDesc = (text) => {
      this.setState({ description: text })
   }
   submit = (item, desc) => {
      alert('item: ' + item + ' description: ' + desc)
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

            <Text>Select the Category:</Text>
            <TouchableOpacity
              onPress={this.showActionSheet}
              style={styles.input}>
              <Text>{this.state.clicked}</Text>
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
                  () => this.submit(this.state.item, this.state.description)
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
         this.setState({ clicked: this.buttons[buttonIndex] });
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
