import { View, Text} from 'react-native';
import Botao from '../comp/botao';
import Input from '../comp/input';
import {styles} from '../style/styles';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'expo-router';
import { insertUsuario } from '../banco/crud';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Cadastro() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const router = useRouter();

    useEffect(() => {
        // Limpa o AsyncStorage quando o componente é montado
        AsyncStorage.removeItem('usuario');
    }, []);

    async function cadastrar() {
        if (!nome || !email || !senha || !confirmarSenha) {
            alert('Por favor, preencha todos os campos.');
        } else if (senha !== confirmarSenha) {
            alert('As senhas não coincidem. Por favor, tente novamente.');
        } else {
            await insertUsuario(nome, email, senha);
            alert('Usuário cadastrado com sucesso!');
            setNome('');
            setEmail('');
            setSenha('');
            setConfirmarSenha('');
            router.push('/login');
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Cadastro</Text>
            <Input placeholder="Digite seu nome" value={nome} onChangeText={(text) => {setNome(text)}} />
            <Input placeholder="Digite seu email" value={email} onChangeText={(text) => {setEmail(text)}} keyboardType="email-address" />
            <Input placeholder="Digite sua senha" value={senha} onChangeText={(text) => {setSenha(text)}} secureTextEntry={true} />
            <Input placeholder="Confirme sua senha" value={confirmarSenha} onChangeText={(text) => {setConfirmarSenha(text)}} secureTextEntry={true} />
            <Botao props={{ label: 'Cadastrar', link: cadastrar }} />
        </View>
    );
} 