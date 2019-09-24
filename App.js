import React from 'react';
import { StyleSheet } from 'react-native';

// Dependencias
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// Components
import AppNavigator from './components/AppNavigator';
import ModalScreen from './components/ModalScreen';

//import RootStack from './components/RootStack';

/**
 * createAppcontainer -> es un componente que engloba
 * a todos los demas y mantiene el estado de la navegacion
 * de toda la aplicación.
 * Todos los que se encuentren debajo de este, podrán
 * navegar entre sí, y hacer referencia entre distintas
 * pantallas.
 * Es importante que se encuente en el App.js
 */


const RootStack = createStackNavigator(
    {
        Main: AppNavigator,
        MiModal: ModalScreen
    },
    {
        mode: 'modal',
        headerMode: 'none',
    }

);

export default createAppContainer( RootStack );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
