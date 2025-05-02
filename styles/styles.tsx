import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexWrap: "wrap", 
        flexDirection: "row", 
        backgroundColor: "#fff",
    },
    circuloContainer: {
        flex: 1,
        backgroundColor: "#fff",
    },
    logoContainer: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    logoTexto: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#000",
        textAlign: "center",
        fontFamily: "sans-serif", 
        lineHeight: 28,
    },
    logoTextoPalavra1: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#000",
        textAlign: "center",
        fontFamily: "sans-serif",
        marginBottom: -10, 
    },
    logoTextoPalavra2: {
        fontSize: 20,
        fontWeight: "300",
        color: "#555",
        textAlign: "center",
        fontFamily: "sans-serif-light",
    },
    botaoLogo: { 
        alignSelf: "center",
        height: 50,
        width: 200,
        backgroundColor: "#ADD8E6", 
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
    },
    forma: {
        width: 100,
        height: 100, 
    },
    formaContainer: {
        flexDirection: "column", // Alinha os itens verticalmente
        alignItems: "center", // Centraliza os itens horizontalmente
        alignSelf: "center", // Centraliza o card no container
        width: "50%", // Ajusta o tamanho do card para ocupar metade da largura da tela
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 15,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    image: {
        alignSelf: "center",
    },
    imageTriangulo: {
        width: "100%",
        alignSelf: "center",
    },
    textoCard: {
        fontSize: 16,
        textAlign: "center", 
    },
    input: {
        alignSelf: "center",
        height: 50,
        width: 200,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 10,
        marginTop: 10,
    },
    textoForma: {
        alignSelf: "center",
        fontSize: 18,
        fontStyle: "italic",
        fontWeight: "bold",
        marginTop: 50,
        textAlign: "center", 
    },
    
    botao: {
        alignSelf: "center",
        height: 50,
        width: 200,
        backgroundColor: "#ADD8E6", 
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
    },
    textoBotao: {
        color: "black",
        fontSize: 20,
    },
    resultadoContainer: {
        alignSelf: "center",
        marginTop: 20,
    },
    resultadoTexto: {
        fontSize: 20,
        fontStyle: "italic",
        textAlign: "center",
    },
    rodape: {
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default styles;