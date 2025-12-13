import React from "react";
import {View, Button, StyleSheet} from "react-native";

export default function Botao(props){
    return (
        <View>
            <Button title={props.titulo} color={props.cor}/>
        </View>
    )
}