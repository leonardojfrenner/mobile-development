import { View, Text, StyleSheet,TextInput, Button,Alert } from "react-native";
import { useState } from "react";

export default function Calculadora() {

    const [peso, setPeso] = useState("");
    const [altura, setAltura] = useState("");

    function calcularIMC(peso, altura) {
        const imc = parseFloat(peso) / (parseFloat(altura) * parseFloat(altura));
        Alert.alert(`Calculadora IMC `,`Seu IMC é: ${imc.toFixed(2)}` );
    }


    return (
        <View style={styles.container}>
            <Text style={styles.text}>Calcular IMC</Text>
            <TextInput placeholder="Digite seu peso" keyboardType="numeric"value={peso} onChangeText={setPeso} style={styles.input}/>
            <TextInput placeholder="Digite sua altura" keyboardType="numeric"value={altura}onChangeText={setAltura} style={styles.input}/>
            <Button title="Calcular" onPress={() => calcularIMC(peso,altura)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
    },
    text: {
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 20,
    },
    input:{
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        width: "80%",
        marginBottom: 10,
    }
})