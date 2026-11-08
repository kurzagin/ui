import React from 'react';
import { View, Text, Pressable, StyleSheet, type ViewStyle, type StyleProp } from 'react-native';
import { colors, spacing, borderRadius } from '../tokens';

export interface NativeCyberSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  sublabel?: string;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
}

export function CyberSwitch({
  checked,
  onChange,
  label,
  sublabel,
  disabled = false,
  style,
}: NativeCyberSwitchProps) {
  return (
    <Pressable
      disabled={disabled}
      onPress={() => onChange(!checked)}
      style={[styles.container, disabled && styles.disabled, style]}
    >
      <View style={[styles.track, checked && styles.trackChecked]}>
        <Text style={[styles.bitText, styles.bitLeft]}>{checked ? '1' : ''}</Text>
        <View style={[styles.thumb, checked ? styles.thumbChecked : styles.thumbUnchecked]} />
        <Text style={[styles.bitText, styles.bitRight]}>{!checked ? '0' : ''}</Text>
      </View>
      {(label || sublabel) && (
        <View style={styles.textGroup}>
          {label && <Text style={styles.label}>{label}</Text>}
          {sublabel && <Text style={styles.sublabel}>{sublabel}</Text>}
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  disabled: {
    opacity: 0.4,
  },
  track: {
    width: 48,
    height: 24,
    borderRadius: borderRadius.sm,
    backgroundColor: colors.bg1,
    borderWidth: 1,
    borderColor: colors.border,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 3,
    position: 'relative',
  },
  trackChecked: {
    borderColor: colors.accent,
    backgroundColor: colors.accentDim,
  },
  thumb: {
    width: 18,
    height: 18,
    borderRadius: borderRadius.sm - 2,
    backgroundColor: colors.borderLight,
    position: 'absolute',
  },
  thumbUnchecked: {
    left: 2,
  },
  thumbChecked: {
    right: 2,
    backgroundColor: colors.accent,
  },
  bitText: {
    fontFamily: 'monospace',
    fontSize: 9,
    fontWeight: '700',
    color: colors.text2,
  },
  bitLeft: {
    marginLeft: 3,
  },
  bitRight: {
    marginRight: 3,
  },
  textGroup: {
    flexDirection: 'column',
  },
  label: {
    fontFamily: 'monospace',
    fontSize: 13,
    color: colors.text0,
    fontWeight: '600',
  },
  sublabel: {
    fontSize: 11,
    color: colors.text2,
  },
});
