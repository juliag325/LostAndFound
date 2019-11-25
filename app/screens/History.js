import React from 'react';
import { Button, View,Text } from 'react-native';
import {StyleSheet} from 'react-native';
import {db} from './../../data/database/dbconfig'
//Retrieve items from db
let historyRef = db.ref('/history');

class History extends React.Component {

    static navigationOptions = {
      title: 'History'
    };
    componentDidMount() { //Puts all the refences as objects in an array
      historyRef.on('value', snapshot => {
        this.setState({ history: Object.values(snapshot.val()) });
      });
    }
    state = {
      history: []
    }
    render() {
              <View style={{flex: 1, alignSelf: 'stretch', flexDirection: 'row',alignItems: 'center',justifyContent: 'center'}}>
               <Text>{history.id}, </Text>
               <Text>{history.name},  </Text>
               <Text>{history.category},  </Text>
               <Text>{history.location}</Text>
             </View>
            <View style={{
             flex: 1,
             alignItems:'center',
             justifyContent:'center',
             backgroundColor: '#ADD8E6'
            }}>
            <Button title="Go to Home screen"
                onPress={() => this.props.navigation.navigate('Home')}
               />
              </View>
          );
    }
    }
    export default History;
