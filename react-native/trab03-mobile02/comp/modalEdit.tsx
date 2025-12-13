import React, { useState, useEffect } from 'react';
import { View, Text, Modal, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { router } from 'expo-router';
import { updateUsuario, deleteUsuario } from '../banco/crud'; 
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ModalEditProps {
    visible: boolean;
    onClose: () => void;
}

export default function ModalEdit({ visible, onClose }: ModalEditProps) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [idEditando, setIdEditando] = useState<number | null>(null);

    useEffect(() => {
        async function carregarDados() {
            try {
                const usuario = await AsyncStorage.getItem('usuario');
                if (usuario) {
                    const { idEditando, nome, email } = JSON.parse(usuario);
                    setIdEditando(idEditando);
                    setNome(nome);
                    setEmail(email);
                    setSenha('');
                }
            } catch (error) {
                console.error('Erro ao carregar dados do usuário:', error);
            }
        }
        if (visible) {
            carregarDados();
        }
    }, [visible]);

    const handleSalvar = async () => {
        try {
            if (idEditando !== null) {
                await updateUsuario(idEditando, nome, email, senha);
                
                // Atualiza os dados do usuário no AsyncStorage
                const usuarioAtual = await AsyncStorage.getItem('usuario');
                if (usuarioAtual) {
                    const dadosUsuario = JSON.parse(usuarioAtual);
                    const dadosAtualizados = {
                        id: idEditando,
                        nome,
                        email
                    };
                    await AsyncStorage.setItem('usuario', JSON.stringify(dadosAtualizados));
                }
                
                onClose();
                router.replace('/dashboard');
            }
        } catch (error) {
            console.error('Erro ao salvar alterações:', error);
        }
    };

    const handleDelete = async () => {
        Alert.alert(
            'Confirmar Exclusão',
            'Tem certeza que deseja excluir seu perfil? Esta ação não pode ser desfeita.',
            [
                {
                    text: 'Cancelar',
                    style: 'cancel'
                },
                {
                    text: 'Excluir',
                    style: 'destructive',
                    onPress: async () => {
                        if (idEditando !== null) {
                            const sucesso = await deleteUsuario(idEditando);
                            if (sucesso) {
                                await AsyncStorage.removeItem('usuario');
                                router.replace('/login');
                            }
                        }
                    }
                }
            ]
        );
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Editar Perfil</Text>
                    
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.modalInput}
                            placeholder="Nome"
                            value={nome}
                            onChangeText={setNome}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.modalInput}
                            placeholder="Email"
                            value={email}
                            onChangeText={setEmail}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.modalInput}
                            placeholder="Nova Senha (opcional)"
                            value={senha}
                            onChangeText={setSenha}
                            secureTextEntry
                        />
                    </View>

                    <View style={styles.modalButtonContainer}>
                        <TouchableOpacity style={styles.modalButton} onPress={handleSalvar}>
                            <Text style={styles.modalButtonText}>Salvar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.modalButton, styles.modalCancelButton]} onPress={onClose}>
                            <Text style={styles.modalButtonText}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity 
                        style={[styles.modalButton, styles.modalDeleteButton]} 
                        onPress={handleDelete}
                    >
                        <Text style={styles.modalButtonText}>Excluir Perfil</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        width: '80%',
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    inputContainer: {
        width: '100%',
        marginBottom: 15,
    },
    modalInput: {
        height: 40,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        paddingHorizontal: 10,
        width: '100%',
    },
    modalButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 20,
    },
    modalButton: {
        backgroundColor: '#007AFF',
        padding: 10,
        borderRadius: 5,
        width: '48%',
        alignItems: 'center',
    },
    modalCancelButton: {
        backgroundColor: '#FF3B30',
    },
    modalDeleteButton: {
        backgroundColor: '#FF0000',
        width: '100%',
        marginTop: 10,
    },
    modalButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

 