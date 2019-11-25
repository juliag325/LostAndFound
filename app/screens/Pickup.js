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
        itemID: '',
        gID: '',
     }

   componentDidMount() { //Puts all the refences as objects in an array
     foundRef.on('value', snapshot => {
       this.setState({ foundItems: Object.values(snapshot.val()) });
     });
   }

  //Check values for errors before inputing them to state
   handlItem = (text) => {
      this.setState({ name: text });
   }
   handleGID = (text) => {
      this.setState({g_ID: text});
   }

   // submit button to enter stuff
   submit = (foundItems, id) => {
     item = [-1];
     for (let i = 0; i < foundItems.length;i++) {
       if(foundItems[i].id == id) {
         item.push(i)
       }
     }
     if(item[0] == -1) {
       alert('Error: ID number does not exist')
     }
     else {
       
     }

     // let item = []
     // for (let i = 0; i < foundItems.length;i++) {
     //   if(foundItems[i].id == name) {
     //     for(let j = 0; j < locationArray[i].staff_ID.length;j++) {
     //       if(locationArray[i].staff_ID[j] == id) {
     //         result = true;
     //       }
     //     }
     //   }
     // }
     // if(itemID == '' || g_ID == '') {
     //   alert("Error: Do not leave any inputs empty.");
     // }
     // else if {
     //
     // }
     // else {
     //
     // }


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
               placeholder = "ItemID"
               placeholderTextColor = "#696969"
               autoCapitalize = "none"
               onChangeText = {this.handleName}/>

             <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "GatorID"
                placeholderTextColor = "#696969"
                autoCapitalize = "none"
                onChangeText = {this.handleGID}/>

            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.submit(this.state.foundItems, '66232')
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
