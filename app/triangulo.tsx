import React, { useState } from "react";
import { View, Text, TextInput, Button, Image, Alert } from "react-native";
import styles from "../styles/styles";
import Botao from "../comp/botao";
import Input from "../comp/input";

export default function Triangulo() {

  const [base, setBase] = useState("");
  const [altura, setAltura] = useState("");
  const [area, setArea] = useState(null);

  function calcular() {
    const b = parseFloat(base); 
    const a = parseFloat(altura);
    setBase("");
    setAltura("");
  
    if (isNaN(b) || b <= 0) {
      Alert.alert("Erro", "Por favor, insira um valor válido para a base!");
      return;
    }
  
    if (isNaN(a) || a <= 0) {
      Alert.alert("Erro", "Por favor, insira um valor válido para a altura!");
      return;
    }
  
    const area = (b * a) / 2;
    setArea(area);
  }
  
  return (
    <View style={styles.circuloContainer}>
      <Image source={require('../assets/formula-area-triangulo-qualquer.png')} style={styles.imageTriangulo} />
      <Text style={styles.textoForma}>Dados do Triângulo:</Text>
      <Input placeholder="Base" value={base} onChangeText={setBase}  />
      <Input placeholder="Altura" value={altura} onChangeText={setAltura}  />
      <Botao texto="Calcular"  onPress={calcular}/>
      {area && (
        <View style={styles.resultadoContainer}>
            <Text style={styles.resultadoTexto}>Área do Triângulo: {area.toFixed(2)}</Text>
        </View>
        )}
    </View>
  );
};



