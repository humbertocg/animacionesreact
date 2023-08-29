import React, {useEffect, useState} from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';

const Animacion3 = () => {
  const [animacion] = useState(new Animated.Value(14));

  useEffect(() => {
    Animated.timing(animacion, {
      toValue: 40,
      duration: 1500,
      useNativeDriver: false,
    }).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View>
      <Animated.Text style={[styles.text, {fontSize: animacion}]}>
        Animacion3
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    textAlign: 'center',
  },
});

export default Animacion3;
