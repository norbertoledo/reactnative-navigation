import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default Logo = () => {
    return (
        <View style={styles.container}>
            <Image
                source={ require('../assets/logo.png') }
                style={ styles.imagen }
            />
            <Text style={styles.texto}>norbertoledo</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagen: {
        width: 25, 
        height: 25,
    },
    texto: {
        marginLeft: 10,
        color:'white',
        fontSize: 22,
        fontWeight:'400'
    }
});