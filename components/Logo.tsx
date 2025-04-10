import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { useFonts, Inter_600SemiBold } from '@expo-google-fonts/inter';
import { LinearGradient } from 'expo-linear-gradient';

export function Logo() {
  const [fontsLoaded] = useFonts({
    'Inter-SemiBold': Inter_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  if (Platform.OS === 'web') {
    return (
      <View style={styles.container}>
        <Text 
          style={[styles.logo]}
          // @ts-ignore - Web-only styles
          style={{
            background: '-webkit-linear-gradient(left, #3D5AFE, #40B3FF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontFamily: 'Inter-SemiBold',
            fontSize: 32,
            letterSpacing: -1,
          }}>
          WashP
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#3D5AFE', '#40B3FF']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradientContainer}
      >
        <Text style={[styles.logo, styles.gradientText]}>
          WashP
        </Text>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  gradientContainer: {
    borderRadius: 8,
    paddingHorizontal: 4,
  },
  logo: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 32,
    letterSpacing: -1,
  },
  gradientText: {
    color: '#FFFFFF',
  },
});