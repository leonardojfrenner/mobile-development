import { Alert } from 'react-native';
import * as SQLite from 'expo-sqlite';
import CryptoJS from 'crypto-js'; 


export async function Crud() {
  try {
    const db = await SQLite.openDatabaseAsync('sistema');

    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS usuario (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        email TEXT NOT NULL,
        senha TEXT NOT NULL
      );
    `);
    console.log('Banco de dados inicializado com sucesso!');
  } catch (error) {
    console.error('Erro ao inicializar o banco:', error);
  }
}

export async function insertUsuario(nome, email, senha) {
  try {
    const db = await SQLite.openDatabaseAsync('sistema');

    if (!nome || !email || !senha) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos!');
      return;
    }
    const hashedSenha = CryptoJS.SHA256(senha).toString();

    await db.runAsync(`INSERT INTO usuario (nome, email, senha) VALUES (?, ?, ?)`, [nome, email, hashedSenha]);
    Alert.alert('Sucesso', 'Usuário cadastrado com sucesso!');
  } catch (error) {
    console.error('Erro ao salvar o usuário:', error);
    if (error.message.includes('UNIQUE constraint failed')) {
      Alert.alert('Erro', 'Este e-mail já está cadastrado. Por favor, use outro.');
    } else {
      Alert.alert('Erro', 'Falha ao salvar o usuário.');
    }
  }
}

export async function loginUsuario(email, senha) {
  try {
    const db = await SQLite.openDatabaseAsync('sistema');

    if (!email || !senha) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos para fazer login!');
      return false;
    }
    const hashedSenhaInput = CryptoJS.SHA256(senha).toString();
    const result = await db.getFirstAsync<{ id: number; nome: string; email: string; senha: string }>(`SELECT * FROM usuario WHERE email = ? AND senha = ?`, [email, hashedSenhaInput]);

    if (result) {
      Alert.alert('Sucesso', `Bem-vindo(a) de volta, ${result.nome}!`);
      return result; 
    } else {
      Alert.alert('Erro', 'Email ou senha inválidos.');
      return false; 
    }
  } catch (error) {
    console.error('Erro ao tentar fazer login:', error);
    Alert.alert('Erro', 'Ocorreu um erro durante o processo de login.');
    return false;
  }
}

export async function selectUsuarios() {
  try {
    const db = await SQLite.openDatabaseAsync('sistema');
    const resultados = await db.getAllAsync(`SELECT * FROM usuario`);
    return resultados;
  } 
  catch (error) {
    console.error('Erro ao buscar usuários:', error);
    return [];
  }
}

export async function selecionarUsuario(id: number) {
    try {
        const db = await SQLite.openDatabaseAsync('sistema');
        const resultados = await db.getAllAsync(`SELECT * FROM usuario WHERE id = ?`, [id]);
        return resultados;
    } catch (error) {
        console.error('Erro ao selecionar usuário:', error);
        return [];
    }
    
}

export async function updateUsuario(id: number, nome: string, email: string, senha: string) { 
    try { 
        const db = await SQLite.openDatabaseAsync('sistema'); 
   
        if (!nome || !email) { 
            Alert.alert('Erro', 'Nome e email são obrigatórios!'); 
            return; 
        } 

        let query = `UPDATE usuario SET nome = ?, email = ?`;
        let params = [nome, email];

        if (senha && senha.trim() !== '') {
            const hashedSenha = CryptoJS.SHA256(senha).toString();
            query += `, senha = ?`;
            params.push(hashedSenha);
        }

        query += ` WHERE id = ?`;
        params.push(id.toString());
   
        await db.runAsync(query, params); 
        Alert.alert('Sucesso', 'Usuário atualizado com sucesso!'); 
    }  
    catch (error) { 
        console.error('Erro ao editar o usuário:', error); 
        Alert.alert('Erro', 'Falha ao editar o usuário.'); 
    } 
} 

export async function deleteUsuario(id: number) {
    try {
        const db = await SQLite.openDatabaseAsync('sistema');
        await db.runAsync(`DELETE FROM usuario WHERE id = ?`, [id.toString()]);
        Alert.alert('Sucesso', 'Usuário deletado com sucesso!');
        return true;
    } catch (error) {
        console.error('Erro ao deletar usuário:', error);
        Alert.alert('Erro', 'Falha ao deletar usuário.');
        return false;
    }
}
 