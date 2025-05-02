import { View, Text } from "react-native";
import styles from "../styles/styles";
import Forma from "../comp/forma";
import { router } from "expo-router";

export default function Index() {
    return (
        <View style={styles.container}>
            <Forma image={require('../assets/circulo.png')} title="Círculo" onPress={() => router.push('./circulo')}/>        
            <Forma image={require('../assets/quadrado.png')} title="Quadrado" onPress={() => router.push('./quadrado')}/>
            <Forma image={require('../assets/triangulo.png')} title="Triângulo" onPress={() => router.push('./triangulo')}/> 
            <Forma image={require('../assets/retangulo.png')} title="Retângulo" onPress={() => router.push('./retangulo')}/>       
        </View>
    );
}