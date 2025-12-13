import React from "react";
import { Text,View, Image,  StyleSheet } from "react-native";

export default function Texto() {
    return (
        <View>
            <Image source={require('../assets/banner_drogaria.jpg')} style={estilo.img}/>
            <Text style = {estilo.texto}>Hello, World!</Text>

        </View>
        
    );
}


const estilo = StyleSheet.create({
    texto: {
        backgroundColor: 'white',
        fontSize: 24,
        fontWeight: "bold",
        color: "black"
    },
    img: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
        marginVertical: 20,
        alignSelf: 'center',
        borderRadius: 20, 
        borderWidth: 10, 
        borderColor: 'black', 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 10, 
        backgroundColor: 'white'
    }
    
    
});