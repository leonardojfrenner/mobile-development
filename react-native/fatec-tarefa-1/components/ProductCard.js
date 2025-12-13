import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';

const windowWidth = Dimensions.get('window').width;
const cardWidth = (windowWidth - 40) / 2; // 40 = padding total (20 de cada lado)

export default function ProductCard({ id, name, price, image, description }) {
  const router = useRouter();

  const handlePress = () => {
    // Convertemos o require para um número que pode ser passado com segurança
    const imageId = Image.resolveAssetSource(image).uri;
    
    router.push({
      pathname: `/product/${id}`,
      params: { 
        id, 
        name, 
        price, 
        imageUri: imageId,
        description 
      }
    });
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.cardContainer}>
      <View style={styles.card}>
        <Image source={image} style={styles.image} />
        <View style={styles.infoContainer}>
          <Text style={styles.name} numberOfLines={2}>{name}</Text>
          <Text style={styles.price}>R$ {price.toFixed(2)}</Text>
          <TouchableOpacity 
            style={styles.button} 
            onPress={(e) => {
              e.stopPropagation();
              alert('Produto adicionado ao carrinho!');
            }}
          >
            <Text style={styles.buttonText}>Comprar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: cardWidth,
    marginBottom: 15,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 10,
    height: 260,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  image: {
    width: '100%',
    height: 140,
    resizeMode: 'contain',
    borderRadius: 12,
    backgroundColor: '#f8f9fa',
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  name: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2d3436',
    textAlign: 'center',
    height: 40,
  },
  price: {
    fontSize: 16,
    color: '#00b894',
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: 4,
  },
  button: {
    backgroundColor: '#6c5ce7',
    padding: 8,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 'auto',
  },
  buttonText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
  }
}); 