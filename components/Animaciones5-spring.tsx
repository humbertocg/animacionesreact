import React, {useEffect, useState} from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

const Animacion5 = () => {
  const [animacion] = useState(new Animated.Value(1));

  const presionarBoton = () => {
    Animated.spring(animacion, {
      toValue: 0.8,
      useNativeDriver: false,
    }).start();
  };

  const soltarBoton = () => {
    Animated.spring(animacion, {
      toValue: 1,
      friction: 4, // mas bajo, mayor rebote
      tension: 1, // mas bajo, suaviza el movimiento
      useNativeDriver: false,
    }).start();
  };

  const estiloAnimacion = {transform: [{scale: animacion}]};

  return (
    <View style={styles.contendor}>
      <TouchableWithoutFeedback
        onPressIn={() => presionarBoton()}
        onPressOut={() => soltarBoton()}>
        <Animated.View style={[styles.btn, estiloAnimacion]}>
          <Text style={styles.texto}>Iniciar sesion</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  contendor: {
    alignItems: 'center',
  },
  btn: {
    backgroundColor: 'cornflowerblue',
    width: 280,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    fontSize: 28,
    color: '#FFF',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default Animacion5;
