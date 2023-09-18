import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Animated, { withSpring, useSharedValue, useAnimatedStyle, withRepeat } from 'react-native-reanimated';

const AnimatedText = () => {
  const opacity = useSharedValue(0);

  useEffect(() => {
    opacity.value = withRepeat(withSpring(1), -1, true);
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.text, animatedStyle]}>Texto Animado</Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});

export default AnimatedText;
