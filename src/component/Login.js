import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const LoginModel = () => {
  const [mobileNumber, setMobileNumber] = useState('');

  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('Home');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Get Started with Login</Text>
      <View style={styles.suggestContainer}>
        <View style={styles.line} />
        <Text style={styles.suggest}>Log in or Sign up</Text>
        <View style={styles.line} />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Enter Mobile Number"
        keyboardType="numeric"
        maxLength={10}
        value={mobileNumber}
        onChangeText={setMobileNumber}
      />
      <TouchableOpacity style={styles.buttonContainer} onPress={handleLogin}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.termsText}>
        By continuing you agree to our Terms of Use & Privacy Policy
      </Text>
      <View style={styles.suggestContainer}>
        <View style={styles.line} />
        <Text style={styles.suggest}>or Sign in with </Text>
        <View style={styles.line} />
      </View>
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="facebook" size={20} color="#4267B2" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="google" size={20} color="#DB4437" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="apple" size={20} color="#000" />
        </TouchableOpacity>
      </View>
      <View style={styles.smallButtonContainer}>
        <TouchableOpacity style={styles.smallButton}>
          <Text style={styles.smallButtonText}>Driver SignUP</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.smallButton}>
          <Text style={styles.smallButtonText}>Partner SignUP</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'red',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  buttonContainer: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: 'red',
    marginBottom: 20,
  },
  btnText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
  termsText: {
    textAlign: 'center',
    color: '#888',
  },
  suggestContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  suggest: {
    marginHorizontal: 10,
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
  },

  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    width: '30%',
    justifyContent: 'center',
  },
  socialText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#333',
  },
  smallButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    marginBottom: 40,
  },
  smallButton: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'red',
  },
  smallButtonText: {
    color: 'red',
    textAlign: 'center',
  },
});

export default LoginModel;
