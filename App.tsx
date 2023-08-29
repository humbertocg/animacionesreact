import React, {type PropsWithChildren} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Animacion1 from './components/Animacion1';
import Animacion2 from './components/Animaction2';
import Animacion3 from './components/Animacion3';
import Animacion4 from './components/Animacion4';
import Animacion5 from './components/Animaciones5-spring';
import Animacion6 from './components/Animacion6-sequence';
import Animacion7 from './components/Animacion7';

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.contenido}>
        <Text>animaciones</Text>
        {
          /*
            <Animacion1 />
            <Animacion2 />
            <Animacion3 />
            <Animacion4 />
            */

          <Animacion7 />
        }
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contenido: {
    marginTop: 0,
  },
});

export default App;
