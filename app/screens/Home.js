import React from 'react'; 
import { Button, View, Text, StyleSheet } from 'react-native'; 
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';

const st = StyleSheet.create({ 
  title: {
    color: 'black',
    fontSize: 100, 
    fontFamily: 'Georgia',
    alignContent: 'flex-start', 
    justifyContent: 'center'
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

class Home extends React.Component { 
  static navigationOptions = { 
   //title: 'Have You Seen It?'
   
  }; 

  render() {
    return (
     <View style={{
      flex: 1,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor: '#ADD8E6',
      fontFamily: 'Georgia'
     
     }}>
       <Text title = {st.title}>Have You Seen It?</Text>
    <TouchableOpacity 
      button = {st.searchButton}
      onPress={() => this.props.navigation.navigate('SearchItem')}
      underlayColor='#fff'>
        <Text style = {st.loginText}>Search Item</Text>
      </TouchableOpacity>

    <TouchableOpacity
      button = {st.searchButton}
      onPress={() => this.props.navigation.navigate('SearchMap')}
      underlayColor = '#fff'>
        <Text style = {st.loginText}>Map</Text>
      </TouchableOpacity>

   <TouchableOpacity
      button = {st.searchButton}
      onPress={() => this.props.navigation.navigate('Staff')}
      underlayColor = '#fff'>
        <Text style = {st.loginText}>Staff</Text>
      </TouchableOpacity>
       
        </View>
   );
   }
   }
export default Home; 


/*const styles = StyleSheet.create({
  bigTitle: {  
    color: 'black',
    fontWeight: 'bold',
    alignContent: 'center',
    fontSize: 30,
    textAlignVertical: 'center', 
    justifyContent: 'center'
  },
  background: {
    color: 'blue',
  },
});

export default class Home extends Component {
  render() {
    return (
      <View> 
        <Text style={styles.bigTitle}>Place</Text>
      </View>
    );
  }
} 
*/
