import React, { useState} from 'react';
import { View, Text} from 'react-native';
import { loginUsuario } from  '../banco/crud';
import { styles } from '../style/styles';
import { useRouter } from 'expo-router';
import Input from '../comp/input';
import Botao from '../comp/botao';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const router = useRouter();

  async function login() {
    if (!email || !senha) {
      alert('Por favor, preencha todos os campos.');
    } else {
      try {
        const sucesso = await loginUsuario(email, senha);
        if (!sucesso) {
          alert('Email ou senha incorretos. Por favor, tente novamente.');
          return;
        }
        await AsyncStorage.setItem('usuario', JSON.stringify({
          id: sucesso.id,
          nome: sucesso.nome,
          email: sucesso.email
        }));
        console.log('Usuário logado com sucesso:', sucesso);
        router.push('/dashboard');
        setEmail('');
        setSenha('');
      } catch (error) {
        console.error('Erro ao fazer login:', error);
        alert('Falha ao fazer login. Por favor, tente novamente.');
      }
    }
  }

  const handleCadastro = async () => {
    await AsyncStorage.removeItem('usuario');
    router.push('/cadastro');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Login</Text>
      <Input placeholder="Digite seu email" value={email} onChangeText={(text) => {setEmail(text)}} keyboardType="email-address" />
      <Input placeholder="Digite sua senha" value={senha} onChangeText={(text) => {setSenha(text)}} secureTextEntry={true} />    
      <Botao props={{ label: 'Entrar', link: login }} />
      <Text style={styles.texto}>Ainda não tem uma conta? <Text style={styles.link} onPress={handleCadastro}>Cadastre-se</Text></Text>
    </View>
  );
}


 