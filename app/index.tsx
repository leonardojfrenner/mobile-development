import { View, Text,Image } from "react-native";
import styles from "../styles/styles";
import { router } from "expo-router";
import Botao from "../comp/botao";
import Forma from "../comp/forma";

export default function Index() {
    return (
        <View style={styles.logoContainer}>
            <Image source={require('../assets/formas.png')} style={styles.forma}/>
            <Text style={styles.logoTexto}>
                <Text style={styles.logoTextoPalavra1}>Calculadora </Text>
                <Text style={styles.logoTextoPalavra2}>Geométrica</Text>
            </Text>
            <Botao style={styles.botaoLogo} texto="Iniciar" onPress={() => router.push('./home')}/>
        </View>
    );
}