import React from 'react'; 
import { Button, View,Text } from 'react-native';
import {StyleSheet} from 'react-native'; 
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import { TextInput } from 'react-native';
//import { Dropdown } from 'react-native-material-dropdown';

const st = StyleSheet.create({ 
  title: {
    color: 'black',
    fontSize: 200, 
    fontFamily: 'Georgia',
    alignContent: 'flex-start', 
    justifyContent: 'center'
  },
  baseText:{
    color: 'black',
    fontSize: 150
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
   backgroundColor: '#00008b', 
   borderRadius: 10, 
   borderWidth: 1, 
   borderColor: '#fff',
   fontSize: 36

  },

  loginText: { 
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10
  }
  
});

class SearchItem extends React.Component { 
    static navigationOptions = { 
      title: 'Have You Seen It?'
    }; 
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
      <Button title="Go to Home screen"
          onPress={() => this.props.navigation.navigate('Home')}
         />
         <Text title = {st.titleText}>Seach Lost Item</Text>
         <Text></Text>

         <Text body = {st.baseText}>Item</Text>
         <TextInput
            style={{ height: 30, width: 300, borderColor: 'gray', borderWidth: 1 }}
            // onChangeText={text => onChangeText(text)}
            // value={value}
          />
          <Text></Text>

         <Text body = {st.baseText}>Category</Text>
         <TextInput
            style={{ height: 30, width: 300, borderColor: 'gray', borderWidth: 1 }}
            // onChangeText={text => onChangeText(text)}
            // value={value}
          />
          {/* <Dropdown
            label='Category'
            data={data}
          /> */}

         <Button title="Seach Item"
         //need to change navigation
          onPress={() => this.props.navigation.navigate('Home')}
         />
        </View>
      );
        }
}
export default SearchItem; 