import {Stack} from "expo-router";
import { View,Text } from "react-native";
import styles from "../styles/styles";

export default function Layout() {
    return (
        <View style={{ flex: 1, backgroundColor: '#F0F8FF' }}>
        <Stack screenOptions={{headerShown: true}}>
            <Stack.Screen name="index" options={{ headerShown:false }} />
            <Stack.Screen name="home" options={{ title: "Formas", headerStyle: { backgroundColor: '#ADD8E6' } }} />
            <Stack.Screen name="circulo" options={{ title: "Círculo", headerStyle: { backgroundColor: '#FFEEEE' }  }} />
            <Stack.Screen name="quadrado" options={{ title: "Quadrado", headerStyle: { backgroundColor: '#FFFFE0' }  }} />
            <Stack.Screen name="triangulo" options={{ title: "Triângulo", headerStyle: { backgroundColor:  '#FFFFE0'}  }} />
            <Stack.Screen name="retangulo" options={{ title: "Retângulo", headerStyle: { backgroundColor: '#FFEEEE' } }} />
        </Stack>

        <View style={{backgroundColor:"#fff"}}>
            <Text style={styles.rodape}>@FatecPG DSM5 </Text>
        </View>
        </View>
        
    );
    }