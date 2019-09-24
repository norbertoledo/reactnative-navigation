import React from 'react'
import { View, Text, Button } from 'react-native'

export default HomeScreen = ( {navigation} ) => {

    // La propiedad navidation la inyecta en createStackNavigation
    // del componente AppNavigator.js

    /**
     * navigation.goBack() -> Vuelve a la pantalla anterior
     * y elimina de la pila el utlimo componente,
     * el de mas arriba de la pila de navegacion
     * 
     * navigation.push('Ref') -> Simplemente agrega
     * un componente a la pila y navega hacia él, pero no puede pasar datos.
     * 
     * navigation.navigate -> Agrega un componente a la pila
     * y navega hacia él, pero como segundo argumento
     * se le pasa un objeto con datos, que será recibido
     * por el nuevo componente.
     * En el caso de no querer pasar datos, se envia un objeto vacío {}
     * 
     */


    // La propiedad 'title' le envia el titulo para la barra de 
    // navegacion al componente Detail
    // const fooObj = { title: 'User Detail', name: 'Beto Ledo', edad: '44'}
     
    // Si no le paso la propiedad 'title', el componente de detalle
    // evaluara si no existe y seteará un nuevo titulo por medio
    // navigation.setParams(nuevoTituloDesdeElComponnteDeDetalle);
    const fooObj = { name: 'Beto Ledo', edad: '44'}

    return (
        <View>
            <Text>HOME SCREEN</Text>
            <Button
                title='Ir a Detalle'
                // onPress={()=>navigation.push('Detail')}
                onPress={()=>navigation.navigate('Detail', fooObj)}
                
            />
            <Button
                title='Abrir Menu Drawer'
                // para Drawer
                onPress={()=>navigation.openDrawer()}
            />


        </View>
    )
}
