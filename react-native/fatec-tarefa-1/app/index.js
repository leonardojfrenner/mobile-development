import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, ScrollView, Alert } from 'react-native';
import Menu from '../components/Menu';
import ProductCard from '../components/ProductCard';

export default function App() {
  const products = [
    {
      id: 1,
      name: 'Novalgina',
      price: 15.90,
      description: 'Analgésico e antitérmico para alívio da dor e febre.',
      image: require('../assets/novalgina.jpg')
    },
    {
      id: 2,
      name: 'Shampoo Baby',
      price: 22.50,
      description: 'Shampoo suave especialmente formulado para bebês.',
      image: require('../assets/shampoo_baby.jpg')
    },
    {
      id: 3,
      name: 'Pampers',
      price: 89.90,
      description: 'Fraldas de alta qualidade para o conforto do seu bebê.',
      image: require('../assets/pampers.jpg')
    },
    {
      id: 4,
      name: 'Band-Aid',
      price: 12.90,
      description: 'Curativos adesivos para pequenos machucados e arranhões.',
      image: require('../assets/bandaid.jpg')
    }
  ];

  const handleBuy = (name) => {
    alert(`${name} adicionado ao carrinho!`);
  };

  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/banner_drogaria.jpg')}
        style={styles.banner}
      />
      <Menu />
      <ScrollView style={styles.productsContainer}>
        <View style={styles.productsGrid}>
          {products.map(product => (
            <ProductCard 
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              description={product.description}
              handleBuy={() => handleBuy(product.name)}
            />
          ))}
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
  },
  banner: {
    width: '100%',
    height: 160,
    resizeMode: 'cover',
    marginBottom: 5,
  },
  productsContainer: {
    flex: 1,
    paddingTop: 10,
  },
  productsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  }
});
