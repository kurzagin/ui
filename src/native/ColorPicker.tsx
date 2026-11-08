import React from 'react';
import { View, Text, Pressable, StyleSheet, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { colors, spacing, borderRadius } from '../tokens';

export interface NativeColorPickerProps {
  value: string;
  onChange: (color: string) => void;
  presets?: string[];
  label?: string;
  jp?: string;
  coord?: string;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
}

export function ColorPicker({
  value,
  onChange,
  presets = [
    '#000000', '#ffffff', '#c49368', '#6a9e9e', '#a855f7',
    '#3b82f6', '#22c55e', '#ef4444', '#eab308', '#ec4899',
    '#64748b', '#1e293b'
  ],
  label,
  jp,
  coord,
  style,
  labelStyle,
}: NativeColorPickerProps) {
  return (
    <View style={[styles.container, style]}>
      {(label || jp || coord) && (
        <View style={styles.header}>
          <View style={styles.labelGroup}>
            {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
            {jp && <Text style={styles.jp}>{jp}</Text>}
            {coord && <Text style={styles.coord}>[{coord}]</Text>}
          </View>
          <Text style={styles.hexValue}>{value.toUpperCase()}</Text>
        </View>
      )}

      <View style={styles.palette}>
        {presets.map((color) => {
          const isSelected = value.toLowerCase() === color.toLowerCase();
          return (
            <Pressable
              key={color}
              onPress={() => onChange(color)}
              style={[
                styles.swatch,
                { backgroundColor: color },
                isSelected && styles.swatchSelected,
              ]}
            />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: spacing.sm,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: spacing.xs,
  },
  labelGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  label: {
    fontFamily: 'monospace',
    fontSize: 11,
    fontWeight: '700',
    color: colors.text1,
    textTransform: 'uppercase',
  },
  jp: {
    fontSize: 10,
    color: colors.text3,
  },
  coord: {
    fontFamily: 'monospace',
    fontSize: 9,
    color: colors.accent,
  },
  hexValue: {
    fontFamily: 'monospace',
    fontSize: 11,
    color: colors.accent,
    fontWeight: '700',
  },
  palette: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.xs,
  },
  swatch: {
    width: 28,
    height: 28,
    borderRadius: borderRadius.sm,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  swatchSelected: {
    borderColor: '#ffffff',
    borderWidth: 2,
    transform: [{ scale: 1.1 }],
  },
});
