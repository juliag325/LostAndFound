import React, { Component } from 'react'; 
import { 
    StyleSheet, 
    View, 
    Text, 
    Dimensions, 
    TouchableOpacity, 
    AlertIOS, 
} from 'react-native'; 
import MapView, { Marker, AnimatedRegion } from 'react-native-maps';

const screen = Dimensions.get('window'); 

const ASPECT_RATIO = screen.width / screen.height; 
const LATITUDE_DELTA = 0.0922; 
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO; 

const styles = StyleSheet.create({ 
    container: {
        
    },
    map: { 

    }, 
    bubble: { 

    }, 
    button: { 

    }, 
    buttonContainer: { 

    }, 
    members: { 

    },
})
export default class MapComp extends Component { 

   
}