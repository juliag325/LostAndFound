import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Home from './app/screens/Home';
import SearchItem from './app/screens/SearchItem';
import SearchMap from './app/screens/SearchMap';
import Staff from './app/screens/Staff';
import FoundForm from './app/screens/FoundForm';
import Pickup from './app/screens/Pickup';
import WelcomeBack from './app/screens/WelcomeBack'

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
    },
    FoundForm: {
        screen: FoundForm
    },
    Pickup: {
        screen: Pickup
    },
    WelcomeBack: {
        screen: WelcomeBack
    }
});

export default createAppContainer(Project);
