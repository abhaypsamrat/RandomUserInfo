import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useCart} from './CartContext';

export default function Home() {
  const [data, setData] = useState([]);
  const {cart, addToCart, removeFromCart} = useCart();

  const fetchData = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const result = await response.json();
      setData(result.products.slice(0, 10));
      console.log(result.products.slice(0, 1));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const isInCart = id => cart.some(item => item.id === id);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.list}>
        {data.map(item => (
          <View key={item.id} style={styles.cardContainer}>
            <View style={styles.card}>
              <Image source={{uri: item.thumbnail}} style={styles.image} />
              <View style={styles.details}>
                <Text numberOfLines={2}
                style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>₹ {item.price}</Text>
                {isInCart(item.id) ? (
                  <TouchableOpacity
                    style={[styles.button, styles.removeButton]}
                    onPress={() => removeFromCart(item.id)}>
                    <Text style={styles.buttonText}>Remove</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => addToCart(item)}>
                    <Text style={styles.buttonText}>Add</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7f7f7',
    padding: 10,
  },
  list: {
    paddingBottom: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cardContainer: {
    width: '48%',
    margin: '1%',
  },
  card: {
    // flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  details: {
    // flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: '#888',
    marginVertical: 5,
  },
  button: {
    backgroundColor: '#28a745',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  removeButton: {
    backgroundColor: '#dc3545',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
