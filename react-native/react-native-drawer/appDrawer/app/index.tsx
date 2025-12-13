import { View,Text,StyleSheet, Alert } from "react-native";
import { useEffect, useState } from "react";
import { FlatList } from "react-native-gesture-handler";

interface Usuario {
    id: number;
    name: string;
    email: string;
    address: [];
}

export default function App() {

    const [ usuarios, setUsuarios ] = useState<Usuario[]>();

    async function exibirUsuarios() {
        try {
            const api = await fetch("https://jsonplaceholder.typicode.com/users");
            const dados = await api.json();
            setUsuarios(dados);
        }
        catch (erro) {
            Alert.alert("Erro ao buscar os usuários. Erro: ",erro);
        }

    }

    useEffect(() => {exibirUsuarios()},[]);

    return (
        <View style={styles.container}>
            <FlatList
                data={usuarios}
                keyExtractor={item=>item.id.toString()}
                renderItem={({item}) => 
                    <View>
                        <Text style={styles.text}>Nome: {item.name}</Text>
                        <Text> Logradouro: {item.address['street']}</Text>
                        <Text> Latitude: {item.address['geo']['lat']} </Text>
                    </View>
            }

            />
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 15,
        fontWeight: "bold",
    },
});