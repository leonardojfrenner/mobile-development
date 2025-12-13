import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Menu() {
  const categories = ['Medicamentos', 'Higiene', 'Cosméticos', 'Bebê'];

  return (
    <View style={styles.menuContainer}>
      {categories.map((category, index) => (
        <TouchableOpacity key={index} style={styles.menuItem}>
          <Text style={styles.menuText}>{category}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: '#fff',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  menuItem: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#f5f6fa',
  },
  menuText: {
    fontSize: 14,
    color: '#2d3436',
    fontWeight: '600',
  }
}); 