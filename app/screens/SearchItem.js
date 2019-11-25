import React from 'react';
import { Button, View, Text, ActionSheetIOS, StyleSheet, TextInput} from 'react-native';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
//import { Dropdown } from 'react-native-material-dropdown';
import {db} from './../../data/database/dbconfig'
//Retrieve items from db
let foundRef = db.ref('/found');

const st = StyleSheet.create({
  title: {
    color: 'black',
    fontSize: 30,
    fontFamily: 'Courier',
    alignContent: 'flex-start',
    justifyContent: 'center'
  },
  baseText:{
    color: 'black',
    fontSize: 20
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

class SearchItem extends React.Component {
  componentDidMount() { //Puts all the refences as objects in an array
    foundRef.on('value', snapshot => {
      this.setState({ foundItems: Object.values(snapshot.val()) });
    });
  }
  resultArray = [];
  //Options for category
  buttons = ['Cancel', 'clothing','phone', 'laptop', 'wallet', 'backpack', 'credit card', 'keys', 'accessories', 'other'];
  //Options for location
  places = ['Cancel', 'marston','libwest', 'broward', 'reitz', 'neb'];
    static navigationOptions = {
      title: 'Search Item'
    };
    state = {
        item: '',
        category: `${this.buttons[1]}`,
        location: `${this.places[1]}`,
        foundItems: []
     }
    submit = (item, category, location) => {
      this.resultArray = [];
      let result = false;
      for(let i = 0; i < this.state.foundItems.length; i++) {
        if(this.state.foundItems[i].category == category && this.state.foundItems[i].location == location) {
          this.resultArray.push(this.state.foundItems[i])
          result = true;
        }
      }
      if(!result) {
        alert("No items found")
      }
      else {
        alert("Search successful")
        console.log(this.resultArray)
      }
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
    showActionSheet2 = () => {
      ActionSheetIOS.showActionSheetWithOptions({
        options: this.places,
        cancelButtonIndex: 0
      },
      (buttonIndex) => {
        if(buttonIndex != 0){
          this.setState({ location: this.places[buttonIndex].toLowerCase() });
        }
      });
    }
render() {
  // const [value, onChangeText] = React.useState('Useless Placeholder');
    let data = [{value: 'Banana',}, {value: 'Mango',}, {value: 'Pear',}];
      return (
        <View style={{
         flex: 1,
         alignItems:'center',
         justifyContent:'center',
         backgroundColor: '#ADD8E6',
         fontFamily: 'Georgia'
        }}>
         <Text style = {st.title}>Seach Lost Item</Text>
         <Text></Text>

         <Text style = {st.baseText}>Item</Text>
         <TextInput style = {st.input}
               underlineColorAndroid = "transparent"
               placeholder = "Item"
               placeholderTextColor = "#696969"
               onChangeText = {this.handleDesc}/>
          <Text></Text>

         <Text style = {st.baseText}>Category</Text>
         <TouchableOpacity
           onPress={this.showActionSheet}
           style={st.input}>
           <Text>{this.state.category}</Text>
         </TouchableOpacity>
          {/* <Dropdown
            label='Category'
            data={data}
          /> */}
          <Text style = {st.baseText}>Location</Text>
          <TouchableOpacity
            onPress={this.showActionSheet2}
            style={st.input}>
            <Text>{this.state.location}</Text>
          </TouchableOpacity>

         <TouchableOpacity
          style = {st.searchButton}
          //need to change navigation
          onPress={() => this.submit(this.state.item,this.state.category,this.state.location)}
          underlayColor='#fff'>
            <Text style = {st.loginText}>Search Item</Text>
          </TouchableOpacity>
        </View>
      );
        }
}
export default SearchItem;
