import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

export default function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch API Data
  const fetchData = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/?results=1'); 
      const result = await response.json();
      setData(result.results[0]); 
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  // Automatically refresh the data every 30 seconds
  useEffect(() => {
    fetchData(); 
    const intervalId = setInterval(fetchData, 30000); 

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007BFF" />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  if (!data) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Failed to load data.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Refresh Button */}
      <TouchableOpacity style={styles.refreshButton} onPress={fetchData}>
        <Text style={styles.refreshButtonText}>Refresh</Text>
      </TouchableOpacity>

      {/* Profile Image */}
      <Image source={{uri: data.picture.large}} style={styles.image} />

      {/* Full Name */}
      <Text style={styles.name}>
        {data.name.title} {data.name.first} {data.name.last}
      </Text>

      {/* Age */}
      <Text style={styles.info}>Age: {data.dob.age}</Text>

      {/* Address */}
      <Text style={styles.info}>
        Address: {data.location.street.number}, {data.location.street.name},{' '}
        {data.location.city}, {data.location.state}, {data.location.country}
      </Text>

      {/* Phone Number */}
      <Text style={styles.info}>Phone: {data.phone}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
  loadingText: {
    fontSize: 18,
    marginTop: 10,
    color: '#007BFF',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 5,
    color: '#333',
  },
  refreshButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    backgroundColor: '#28a745',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  refreshButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
