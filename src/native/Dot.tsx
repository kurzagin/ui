import React from 'react';
import { View, StyleSheet, type ViewStyle, type StyleProp } from 'react-native';
import { colors } from '../tokens';

export interface NativeDotProps {
  color?: 'accent' | 'green' | 'red' | 'teal' | 'purple';
  size?: number;
  style?: StyleProp<ViewStyle>;
}

export function Dot({ color = 'accent', size = 6, style }: NativeDotProps) {
  const colorMap = {
    accent: colors.accent,
    green: colors.success,
    red: colors.danger,
    teal: colors.teal,
    purple: colors.purple,
  };

  return (
    <View
      style={[
        styles.dot,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: colorMap[color],
        },
        style,
      ]}
    />
  );
}

const styles = StyleSheet.create({
  dot: {
    alignSelf: 'center',
  },
});
