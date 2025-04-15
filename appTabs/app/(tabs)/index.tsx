import { View, Text, StyleSheet } from "react-native";

export default function Index() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Índice de massa</Text>
            <Text style={styles.text}>Calcule seu IMC</Text>
            <Text style={[styles.text, styles.formula]}>IMC = PESO/(ALTURA)²</Text>

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
        padding: 10,
        textAlign: "center",
        lineHeight: 20,
    },
    titulo: {
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center",
        lineHeight: 20,
    },
    formula:{
        fontStyle: "italic",
        fontSize: 15,

    },
})