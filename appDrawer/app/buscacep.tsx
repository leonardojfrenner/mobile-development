import { View,Text,StyleSheet, TextInput, Pressable,Alert } from "react-native";
import { useState } from "react";


export default function BuscaCep() {

    const[cep, setCep] = useState<any>(null);
    const[endereco, setEndereco] = useState<any>(null);


    async function exibirCep(_cep: string) {
        try {
            const api = await fetch(`https://viacep.com.br/ws/${_cep}/json/`);
            const dados = await api.json();
            if (dados.erro) {
                Alert.alert("Erro ao buscar o CEP", "CEP não encontrado");
                setEndereco(null);
                setCep("");
            }else {
                setEndereco(dados);
                setCep("");

            }
        } catch (erro) {
            Alert.alert("Erro ao buscar os CEPs", erro);
        }
    }

    return (
        <View style={styles.container}>
            <TextInput placeholder="Digite o CEP" keyboardType="numeric" value={cep} onChangeText={setCep} style={styles.input} />

            <Pressable style={styles.botao01} onPress={() => exibirCep(cep)}>
                <Text style={styles.text}>Buscar</Text>
            </Pressable>

            <Pressable style={[styles.botao01, { backgroundColor: 'yellow' }]} onPress={() => setEndereco(null)}>
                <Text style={styles.text}>Limpar</Text>
            </Pressable>


            {endereco && (
                <View>
                    <Text style={styles.text}>CEP: {endereco.cep}</Text>
                    <Text> Logradouro: {endereco.logradouro}</Text>
                    <Text> Complemento: {endereco.complemento}</Text>
                    <Text> Bairro: {endereco.bairro}</Text>
                    <Text> Localidade: {endereco.localidade}</Text>
                    <Text> UF: {endereco.uf}</Text>
                </View>
            )}

            {/* <FlatList
                data={cep}
                keyExtractor={item=>item.id.toString()}
                renderItem={({item}) => 
                    <View>
                        <Text style={styles.text}>CEP: {item.cep}</Text>
                        <Text> Logradouro: {item.logradouro}</Text>
                        <Text> Complemento: {item.complemento}</Text>
                        <Text> Bairro: {item.bairro}</Text>
                        <Text> Localidade: {item.localidade}</Text>
                        <Text> UF: {item.uf}</Text>
                    </View>
            }

            /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#f5f5f5",
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 10,
    },
    input: {
        width: "90%",
        height: 50,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        paddingLeft: 15,
        backgroundColor: "#fff",
        marginBottom: 15,
        fontSize: 16,
    },
    botao01: {
        width: "90%",
        height: 50,
        backgroundColor: "#28a745",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        marginTop: 10,
    },
    botao01Text: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
})
