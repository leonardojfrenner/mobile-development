import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function ProductDetails() {
  const router = useRouter();
  const { id, name, price, imageUri, description } = useLocalSearchParams();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Image 
          source={{ uri: imageUri }} 
          style={styles.image} 
          defaultSource={require('../../assets/banner_drogaria.jpg')}
        />
        
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>R$ {Number(price).toFixed(2)}</Text>
        
        <Text style={styles.descriptionTitle}>Descrição</Text>
        <Text style={styles.description}>
          {description || 'Descrição do produto não disponível.'}
        </Text>

        <TouchableOpacity 
          style={styles.buyButton}
          onPress={() => {
            // Implementar lógica de compra
            alert('Produto adicionado ao carrinho!');
          }}
        >
          <Text style={styles.buyButtonText}>Comprar Agora</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backButtonText}>Voltar para Produtos</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    borderRadius: 15,
    backgroundColor: '#f8f9fa',
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2d3436',
    marginBottom: 10,
  },
  price: {
    fontSize: 22,
    color: '#00b894',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2d3436',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#636e72',
    lineHeight: 24,
    marginBottom: 30,
  },
  buyButton: {
    backgroundColor: '#6c5ce7',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 15,
  },
  buyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  backButton: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#6c5ce7',
  },
  backButtonText: {
    color: '#6c5ce7',
    fontSize: 16,
    fontWeight: '600',
  },
}); 