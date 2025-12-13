import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useState, useEffect } from "react";
import { selectUsuarios } from "../banco/crud"; // Certifique-se de que o caminho está correto
import { styles } from "../style/styles"; // Certifique-se de que o caminho está correto
import ModalEdit from "../comp/modalEdit";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Dashboard() {
    const [usuarios, setUsuarios] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [usuarioLogado, setUsuarioLogado] = useState(null);

    async function exibirUsuarios() {
        const dados = await selectUsuarios();
        setUsuarios(dados);
    }

    useEffect(() => {
        exibirUsuarios();
        carregarUsuarioLogado();
    }, []);

    async function carregarUsuarioLogado() {
        try {
            const usuario = await AsyncStorage.getItem('usuario');
            if (usuario) {
                setUsuarioLogado(JSON.parse(usuario));
            }
        } catch (error) {
            console.error('Erro ao carregar usuário logado:', error);
        }
    }

    const handleItemPress = (item) => {
        if (!usuarioLogado) {
            Alert.alert('Erro', 'Usuário não está logado');
            return;
        }

        if (item.id === usuarioLogado.id) {
            setModalVisible(true);
            AsyncStorage.setItem('usuario', JSON.stringify({
                idEditando: item.id,
                nome: item.nome,
                email: item.email
            }));
        } else {
            Alert.alert(
                'Acesso Negado',
                'Você só pode editar seu próprio perfil.'
            );
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Bem-vindo ao Dashboard!</Text>
            <FlatList
                data={usuarios}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity 
                        onPress={() => handleItemPress(item)}
                        style={styles.itemLista}
                    >
                        <Text style={styles.textoItem}>{item.nome} ({item.email})</Text>
                    </TouchableOpacity>
                )}
                contentContainerStyle={styles.containerLista}
            />
            <ModalEdit 
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
            />
        </View>
    );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignSelf: 'center',
//     justifyContent: 'center',
//   },
//   titulo: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
// });