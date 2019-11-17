import React, { Component } from 'react'; 
import { createStackNavigator } from 'react-navigation-stack'; 
import { createAppContainer } from 'react-navigation'; 
import Home from './app/screens/Home'; 
import SearchItem from './app/screens/SearchItem'; 
import SearchMap from './app/screens/SearchMap';
import Staff from './app/screens/Staff'; 

const Project = createStackNavigator({
    Home: {
        screen: Home
    }, 
    SearchItem: { 
        screen: SearchItem
    },
    SearchMap: {
        screen: SearchMap
    },
    Staff: {
        screen: Staff
    }
}); 

export default createAppContainer(Project); 