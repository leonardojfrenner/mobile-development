import { View, Text, Button, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function App() {

    function mostrarTexto() {
        return (alert("Clicou no botão!"));
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Bem-Vindo</Text>
            <Button title="Entrar" onPress={()=> router.navigate("/(tabs)")}/>
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
})