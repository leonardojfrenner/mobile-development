import React, { useState } from "react";
import { View, Text, Image, Alert } from "react-native";
import styles from "../styles/styles";
import Botao from "../comp/botao";
import Input from "../comp/input";

export default function Retangulo() {

  const [altura, setAltura] = useState("");
  const [base, setBase] = useState("");
  const [area, setArea] = useState(null);

  function calcular() {
    const b = parseFloat(base);
    const l = parseFloat(altura);
  
    setBase("");
    setAltura("");
  
    if (isNaN(b) || b <= 0) {
      Alert.alert("Erro", "Por favor, insira um valor válido para a base!");
      return;
    }
  
    if (isNaN(l) || l <= 0) {
      Alert.alert("Erro", "Por favor, insira um valor válido para a altura (altura)!");
      return;
    }
  
    const area = b * l;
    setArea(area)
  }
  

  return (
    <View style={styles.circuloContainer}>
      <Image source={require('../assets/retangulo.png')} style={styles.image} />
      <Text style={styles.textoForma}>Dados do Retângulo:</Text>
      <Input placeholder="Base" value={base} onChangeText={setBase}  />
      <Input placeholder="Altura" value={altura} onChangeText={setAltura}  />
      <Botao texto="Calcular"  onPress={calcular}/>

      {area && (
        <View style={styles.resultadoContainer}>
            <Text style={styles.resultadoTexto}>Área do Retângulo: {area.toFixed(2)}</Text>
        </View>
        )}
    </View>
  );
};



