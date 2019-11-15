import React, { Component } from 'react'; 
import { createStackNavigator } from 'react-navigation-stack'; 
import { createAppContainer } from 'react-navigation'; 
import Home from './app/screens/Home'; 
import Profile from './app/screens/Profile'; 

const Project = createStackNavigator({
    Home: {
        screen: Home
    }, 
    Profile: { 
        screen: Profile
    }
}); 

export default createAppContainer(Project); 