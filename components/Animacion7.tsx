import React, {useEffect, useState} from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';

const Animacion7 = () => {
  const [animacion1] = useState(new Animated.Value(0));
  const [animacion2] = useState(new Animated.Value(1));

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animacion1, {
          toValue: 300,
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.spring(animacion2, {
          toValue: 10,
          useNativeDriver: false,
        }),
        Animated.spring(animacion2, {
          toValue: 1,
          useNativeDriver: false,
        }),
        Animated.timing(animacion1, {
          toValue: 600,
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(animacion1, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.spring(animacion2, {
          toValue: 0,
          useNativeDriver: false,
        }),
        Animated.spring(animacion2, {
          toValue: 1,
          useNativeDriver: false,
        }),
      ]),
    ).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const estiloAnimacion = {
    transform: [{translateY: animacion1}, {scale: animacion2}],
  };

  return (
    <View style={{alignItems: 'center'}}>
      <Animated.View style={[styles.caja, estiloAnimacion]}></Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  caja: {
    width: 100,
    height: 100,
    backgroundColor: 'cornflowerblue',
  },
});

export default Animacion7;
