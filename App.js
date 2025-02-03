import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ScrollableImages from './src/component/ScrollableImages';
import LoginModel from './src/component/Login';
import HomeScreen from './src/component/HomeScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const MainScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        {/* Scrollable Images */}
        <View style={styles.scrollableContainer}>
          <ScrollableImages />
        </View>

        {/* Login Model */}
        <View style={styles.loginContainer}>
          <LoginModel />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    flexGrow: 1,
  },
  scrollableContainer: {
    height: Dimensions.get('window').height / 2, // Half the screen height for images
    zIndex: 1,
  },
  loginContainer: {
    minHeight: Dimensions.get('window').height / 2, // At least half the screen height for login
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 5, // Shadow for better separation
    zIndex: 2,
  },
});
