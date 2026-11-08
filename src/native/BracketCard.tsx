import React from 'react';
import { View, StyleSheet, type ViewProps, type StyleProp, type ViewStyle } from 'react-native';
import { colors, spacing, borderRadius } from '../tokens';

export interface NativeBracketCardProps extends ViewProps {
  active?: boolean;
  style?: StyleProp<ViewStyle>;
}

export function BracketCard({
  active = false,
  style,
  children,
  ...props
}: NativeBracketCardProps) {
  return (
    <View
      style={[
        styles.card,
        active && styles.active,
        style,
      ]}
      {...props}
    >
      <View style={[styles.corner, styles.cornerTL, active && styles.cornerActive]} />
      <View style={[styles.corner, styles.cornerTR, active && styles.cornerActive]} />
      <View style={[styles.corner, styles.cornerBL, active && styles.cornerActive]} />
      <View style={[styles.corner, styles.cornerBR, active && styles.cornerActive]} />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.bgCard,
    borderWidth: 1,
    borderColor: colors.borderSubtle,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    position: 'relative',
  },
  active: {
    borderColor: colors.accent,
  },
  corner: {
    position: 'absolute',
    width: 6,
    height: 6,
    borderColor: colors.textDim,
  },
  cornerActive: {
    borderColor: colors.accent,
  },
  cornerTL: {
    top: -1,
    left: -1,
    borderTopWidth: 2,
    borderLeftWidth: 2,
  },
  cornerTR: {
    top: -1,
    right: -1,
    borderTopWidth: 2,
    borderRightWidth: 2,
  },
  cornerBL: {
    bottom: -1,
    left: -1,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
  },
  cornerBR: {
    bottom: -1,
    right: -1,
    borderBottomWidth: 2,
    borderRightWidth: 2,
  },
});
