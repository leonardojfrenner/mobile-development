import React, { useState } from "react";
import { View, Text, TextInput, Button, Image, Alert } from "react-native";
import styles from "../styles/styles";
import Botao from "../comp/botao";
import Input from "../comp/input";

export default function Circulo() {

  const [raio, setRaio] = useState("");
  const [area, setArea] = useState(null);

  function calcular() {
    const r = parseFloat(raio); 
    setRaio("");
    if (isNaN(r) || r <= 0) {
      Alert.alert("Erro", "Por favor, insira um valor válido para o raio!");
      return;
    }
    const area = Math.PI * r * r;
    setArea(area);
  };

  return (
    <View style={styles.circuloContainer}>
      <Image source={require('../assets/formula_circulo.png')} style={styles.image} />
      <Text style={styles.textoForma}>Digite o raio do círculo:</Text>
      <Input placeholder="Raio" value={raio} onChangeText={setRaio}  />
      <Botao texto="Calcular"  onPress={calcular}/>
      {area && (
        <View style={styles.resultadoContainer}>
            <Text style={styles.resultadoTexto}>Área do Círculo: {area.toFixed(2)}</Text>
        </View>
        )}
    </View>
  );
};



