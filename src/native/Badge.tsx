import React from 'react';
import { View, Text, StyleSheet, type ViewStyle, type StyleProp } from 'react-native';
import { colors, spacing, borderRadius } from '../tokens';

export interface NativeBadgeProps {
  label: string;
  variant?: 'default' | 'accent' | 'teal' | 'purple' | 'outline';
  style?: StyleProp<ViewStyle>;
}

export function Badge({ label, variant = 'default', style }: NativeBadgeProps) {
  return (
    <View style={[styles.badge, styles[variant], style]}>
      <Text style={[styles.text, styles[`text_${variant}`]]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: spacing.sm,
    paddingVertical: 2,
    borderRadius: borderRadius.sm,
    alignSelf: 'flex-start',
  },
  default: {
    backgroundColor: colors.borderSubtle,
  },
  accent: {
    backgroundColor: colors.accentDim,
    borderWidth: 1,
    borderColor: colors.accent,
  },
  teal: {
    backgroundColor: colors.tealDim,
    borderWidth: 1,
    borderColor: colors.teal,
  },
  purple: {
    backgroundColor: 'rgba(168, 85, 247, 0.15)',
    borderWidth: 1,
    borderColor: colors.purple,
  },
  outline: {
    borderWidth: 1,
    borderColor: colors.borderLight,
    backgroundColor: 'transparent',
  },
  text: {
    fontSize: 11,
    fontFamily: 'monospace',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  text_default: {
    color: colors.text1,
  },
  text_accent: {
    color: colors.accent,
  },
  text_teal: {
    color: colors.teal,
  },
  text_purple: {
    color: colors.purple,
  },
  text_outline: {
    color: colors.textDim,
  },
});
