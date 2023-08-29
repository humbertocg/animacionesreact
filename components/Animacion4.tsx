import React, {useEffect, useState} from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';

const Animacion4 = () => {
  const [animacion] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animacion, {
      toValue: 360,
      duration: 1500,
      useNativeDriver: false,
    }).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const interpolacion = animacion.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  });

  const estiloRotacion = {transform: [{rotate: interpolacion}]};

  return (
    <View>
      <Animated.Text style={[styles.text, estiloRotacion]}>
        Animacion4
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

export default Animacion4;
