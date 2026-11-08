import React from 'react';
import { View, Text, StyleSheet, type ViewStyle, type StyleProp } from 'react-native';
import { colors, spacing, borderRadius } from '../tokens';

export interface NativeTechLabelProps {
  label: string;
  jp?: string;
  coord?: string;
  style?: StyleProp<ViewStyle>;
}

export function TechLabel({ label, jp, coord, style }: NativeTechLabelProps) {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      {jp && <Text style={styles.jp}>{jp}</Text>}
      {coord && <Text style={styles.coord}>[{coord}]</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  label: {
    fontFamily: 'monospace',
    fontSize: 12,
    color: colors.text0,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  jp: {
    fontSize: 11,
    color: colors.text2,
  },
  coord: {
    fontFamily: 'monospace',
    fontSize: 10,
    color: colors.accent,
  },
});
