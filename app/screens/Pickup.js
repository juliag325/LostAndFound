import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

class Pickup extends React.Component {
    static navigationOptions = {
      title: 'Pickup'
    };

    state = {
        name: '',
        g_ID: '',
        item: ''
     }
   handleName = (text) => {
      this.setState({ name: text })
   }
   handleGID = (text) => {
      this.setState({ g_ID: text })
   }
   handleItem = (text) => {
     this.setState({ item: text })
   }
   submit = (name, g_ID, item) => {
      alert('name: ' + name + ' g_ID: ' + g_ID + 'item:' + item)
   }
   render() {
      return (
         <View style = {styles.container}>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Name"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleName}/>

             <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "GatorID"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
                onChangeText = {this.handleGID}/>

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Item Collected"
               placeholderTextColor = "#9a73ef"
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
