import React from 'react';
import { Button, View,Text, StyleSheet, TouchableHighlight } from 'react-native';

//import MapComp from './app/components/MapComp; '
import MapView from 'react-native-maps'
markers = [
  { //Lib West
    coordinate:{
      latitude:29.6514,
      longitude:-82.3428,
    },
    title:"Library West",
    subtitle:"1545 W University Ave",
  },
  { //Marston
    coordinate:{
      latitude:29.6481,
      longitude:-82.3442,
    },
    title:"Marston Science Library",
    subtitle:"444 Newell Dr",
  },
  { //Broward Hall
    coordinate:{
      latitude:29.6465,
      longitude:-82.3420,
    },
    title:"Broward Hall",
    subtitle:"680 Broward Dr",
  },
  { //Reitz Union
    coordinate:{
      latitude:29.6463,
      longitude:-82.3478,
    },
    title:"Reitz Union",
    subtitle:"686 Museum Road",
  },
  { //New Engineering Building
    coordinate:{
      latitude:29.6422,
      longitude:-82.3471,
    },
    title:"New Engineering Building",
    subtitle:"1064 Center Dr",
  }
]
class SearchMap extends React.Component {
    static navigationOptions = {
      title: 'Have You Seen It?'
    };
render() {
    return (
      <View style={{flex:1}}>
        <MapView style={{flex:1}}
        ref={map => this.map = map}
        region = {{latitude:29.6463, longitude:-82.3528, latitudeDelta: 0.0382, longitudeDelta: 0.0382}}
        showsUserLocation={true}>
        {markers.map((marker,index) => {
          return (
            <MapView.Marker key = {index} coordinate={marker.coordinate}>
              <MapView.Callout>
                <TouchableHighlight onPress= {()=>this.markerClick()}>
                  <View>
                    <Text>{marker.title}{"\n"}{marker.subtitle}</Text>
                  </View>
                </TouchableHighlight>
              </MapView.Callout>
            </MapView.Marker>
          );
        })}
        </MapView>
        <Button title="Go to Home screen"
            onPress={() => this.props.navigation.navigate('Home')}
        />
        </View>
      );
    }
}
export default SearchMap;
