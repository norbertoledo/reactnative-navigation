import React, {useEffect, useState} from 'react'
import { View, Text, Button } from 'react-native'

export default DetailScreen = ( {navigation} ) => {


    const [counter, setCounter] = useState(0);

    // const userName = navigation.getParam('name');
    const userName = navigation.getParam('name', 'Valor por defecto');
    // Si la propiedad del objeto que solicito no existe, asigno un valor por defecto


    const increment = () =>{
        setCounter( counter + 1);
    }

    useEffect(
        ()=>{
            
            if( !navigation.getParam('title') ){
                navigation.setParams( {title: 'Titulo por setParams'} )
            }
            
            navigation.setParams( {increment} )
          
        }, [counter]
    );
    //
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
    return (
        <View>
            <Text>DETAIL SCREEN</Text>
            <Text>{counter}</Text>
            <Button
                title='Ir a Home'
                onPress={()=>navigation.push('Home')}
            />
            <Button
                title='Volver'
                onPress={()=>navigation.goBack()}
            />
            <Button
                title='Ir a Modal'
                onPress={()=>navigation.navigate('MiModal', {})}
            />
            <Text>{userName}</Text>
        </View>
    )
}
