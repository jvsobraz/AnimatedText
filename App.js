import React from 'react';
import { View, StyleSheet } from 'react-native';
import AnimatedText from './AnimatedText';

const App = () => {
  return (
    <View style={styles.container}>
      <AnimatedText />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
