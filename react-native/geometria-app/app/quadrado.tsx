import React, { useState } from "react";
import { View, Text, TextInput, Button, Image, Alert } from "react-native";
import styles from "../styles/styles";
import Botao from "../comp/botao";
import Input from "../comp/input";

export default function Quadrado() {

  const [lado, setLado] = useState("");
  const [area, setArea] = useState(null);

  function calcular() {
    const l = parseFloat(lado); 
    setLado("");
    if (isNaN(l) || l <= 0) {
      Alert.alert("Erro", "Por favor, insira um valor válido para o lado!");
      return;
    }
    const area = l * l;
    setArea(area);
  };

  return (
    <View style={styles.circuloContainer}>
      <Image source={require('../assets/formula_quadrado.png')} style={styles.image} />
      <Text style={styles.textoForma}>Digite um lado do quadrado:</Text>
      <Input placeholder="Lado" value={lado} onChangeText={setLado}  />
      <Botao texto="Calcular"  onPress={calcular}/>
      {area && (
        <View style={styles.resultadoContainer}>
            <Text style={styles.resultadoTexto}>Área do Quadrado: {area.toFixed(2)}</Text>
        </View>
        )}
    </View>
  );
};



