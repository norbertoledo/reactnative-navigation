import React from 'react'
import { View, Text, Button } from 'react-native'

// Iconos de Expo
import { Ionicons } from '@expo/vector-icons';

// Dependecies
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createSwitchNavigator} from 'react-navigation';

//Components
import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';
import Logo from './Logo';

/**
 * createStackNavigator -> Componente de Navegacion.
 * Recibe un Object de configuracion que van a ser
 * las pantallas que vamos a definir dentro de nuestra
 * aplicación. Vamos a poder navegar entre esas pantallas.
 * { nombreReferencia: { screen: nombreComponente }, {ref:{screen:Componente}} }
 */

HomeScreen.navigationOptions = {
    drawerIcon: ({tintColor}) =>{
        return <Ionicons name='ios-information-circle' size={25} color={tintColor}/>
    },
    headerTitle: <Logo/>,
    // title: "Home",
    // headerStyle: {
    //     backgroundColor: 'darkorange'
    // },
    // headerTintColor: 'white',
    // headerTitleStyle: {
    //     fontWeight: '900'
    // }
};

DetailScreen.navigationOptions = ( {navigation} )=>{
    return {
        title: navigation.getParam('title', 'Cargando...'),
        headerRight: (
            <Button
                title="SUMAR"
                color='lime'
                onPress={navigation.getParam('increment')}
            />
        )
    }
};

// Navegacion por Stack
export default AppNavigator = createStackNavigator(
    {
        Home: {
            screen: HomeScreen
        },
        Detail: {
            screen: DetailScreen
        }

    },
    { 
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: 'darkolivegreen'
            },
            headerTintColor: 'white',
            headerTitleStyle: {
                fontWeight: '900'
            }
        }

    }
);


/*
const defNavOpt = ()=> (
    {
        tabBarOptions: {
            inactiveTintColor: 'black',
            activeTintColor: 'limegreen',
            labelStyle: {
                fontSize: 18
            },
            style: {
                backgroundColor: 'darkolivegreen',
            }
        }
    }
);

// Navegacion por Tabs
export default AppNavigator = createBottomTabNavigator(

    {
        Home: {
            screen: HomeScreen
        },
        Detail: {
            screen: DetailScreen
        }

    },
    { 
        initialRouteName: 'Home',
        // defaultNavigationOptions puede recibir un objeto de config o una funcion
        // Objeto
        // defaultNavigationOptions: {
        //     tabBarOptions: {
        //         inactiveTintColor: 'black',
        //         activeTintColor: 'limegreen',
        //         labelStyle: {
        //             fontSize: 18
        //         },
        //         style: {
        //             backgroundColor: 'darkolivegreen',
        //         }
        //     }
        // }
        //
        // Funcion
        defaultNavigationOptions: ( {navigation} )=> (
            {
                tabBarOptions: {
                    inactiveTintColor: 'black',
                    activeTintColor: navigation.state.routeName === "Home" ? 'limegreen' : 'pink',
                    labelStyle: {
                        fontSize: 18
                    },
                    style: {
                        backgroundColor: 'darkolivegreen',
                    }
                },
                tabBarIcon: ({focused, horizontal, tintColor}) => {
                    const { routeName } = navigation.state;
                    let iconName;
                    if (routeName === "Home"){
                        iconName = `ios-information-circle${focused ? '' : '-outline'}`
                    } else {
                        iconName = `ios-options`
                    }

                    return <Ionicons name={iconName} size={20} tintColor={tintColor}/>
                }
            }
        )
        //
        // O bien, una funcion externa
        //defaultNavigationOptions: defNavOpt

    }
);
*/

/*
// Navegacion por Drawer
export default AppNavigator = createDrawerNavigator(
    {
        Home: {
            screen: HomeScreen
        },
        Detail: {
            screen: DetailScreen
        }

    },
    { 
        initialRouteName: 'Home',
        

    }
);
*/

// Navegacion por Switch
// No mantiene referencia del historial ni de otras pantallas
// Reemplaza una vista por otra
// Se utiliza solamente para el LOGIN
// export default AppNavigator = createSwitchNavigator(
//     {
//         Home: {
//             screen: HomeScreen
//         },
//         Detail: {
//             screen: DetailScreen
//         }

//     },
//     { 
//         initialRouteName: 'Home',
        

//     }
// );
