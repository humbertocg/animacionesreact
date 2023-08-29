import React, {useEffect, useState} from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';

const Animacion1 = () => {
  const [animacion] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animacion, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Animated.View style={{opacity: animacion}}>
      <Text style={styles.text}>Animacion1</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
  },
});

export default Animacion1;
