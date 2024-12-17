import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {CartProvider, useCart} from './src/screen/CartContext';
import Home from './src/screen/Home';
import Cart from './src/screen/Cart';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();

const CartIcon = ({navigation}) => {
  const {cart} = useCart(); // Access cart from context

  return (
    <TouchableOpacity
      style={styles.cartIconContainer}
      onPress={() => navigation.navigate('Cart')}>
      <Icon name="cart-outline" size={25} color="#000" />
      {cart.length > 0 && (
        <View style={styles.cartBadge}>
          <Text style={styles.cartBadgeText}>{cart.length}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={({navigation}) => ({
            headerRight: () => <CartIcon navigation={navigation} />,
          })}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}

const styles = StyleSheet.create({
  cartIconContainer: {
    marginRight: 15,
    position: 'relative',
  },
  cartBadge: {
    position: 'absolute',
    top: -5,
    right: -10,
    backgroundColor: 'red',
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartBadgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
