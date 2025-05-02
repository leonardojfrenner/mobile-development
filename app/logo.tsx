import {View,Image,Text} from 'react-native';
import { router } from 'expo-router';
import styles from '../styles/styles';
import Botao from '../comp/botao';

export default function Logo() {
    return (
        <View style={styles.logoContainer}>
            {/* <Image source={require('../assets/logo.png')} style={styles.logo} /> */}
            <Text style={styles.logoTexto}>Calculadora Geométrica</Text>
            <Botao style={styles.botaoLogo} texto="Iniciar" onPress={() => router.push('./index')}/>
        </View>
    );
}