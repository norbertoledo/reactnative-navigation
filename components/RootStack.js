import React from 'react'
import { View, Text } from 'react-native';

// Dependecies
import {createStackNavigator} from 'react-navigation-stack';

// Components
import AppNavigator from './AppNavigator';
import ModalScreen from './ModalScreen';


export default RootStack = createStackNavigator(
    {
        Main: AppNavigator,
        MiModal: ModalScreen
    },
    {
        mode: 'modal',
        headerMode: 'none',
    }

);
