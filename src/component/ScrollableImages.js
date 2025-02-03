import React, {useRef, useEffect} from 'react';
import {ScrollView, Image, StyleSheet, Dimensions} from 'react-native';

const images = [
  'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=pexels-ella-olsson-572949-1640772.jpg&fm=jpg',
  'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=pexels-ella-olsson-572949-1640772.jpg&fm=jpg',
  'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=pexels-ella-olsson-572949-1640772.jpg&fm=jpg',
];

const ScrollableImages = () => {
  const scrollRef = useRef(null);
  const screenWidth = Dimensions.get('window').width;

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length; 
      scrollRef.current?.scrollTo({
        x: screenWidth * currentIndex,
        animated: true,
      });
    }, 2000);

    return () => clearInterval(interval); 
  }, [screenWidth]);

  return (
    <ScrollView
      ref={scrollRef}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      style={styles.scrollView}>
      {images.map((image, index) => (
        <Image key={index} source={{uri: image}} style={styles.image} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  image: {
    width: Dimensions.get('window').width,
    height: '100%',
    resizeMode: 'cover',
  },
});

export default ScrollableImages;
