import React from 'react';
import {
  Pressable,
  Text,
  StyleSheet,
  type PressableProps,
  type StyleProp,
  type ViewStyle,
  type TextStyle,
} from 'react-native';
import { colors, spacing, borderRadius } from '../tokens';

export interface NativeButtonProps extends Omit<PressableProps, 'style'> {
  label?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export function Button({
  label,
  icon,
  children,
  variant = 'outline',
  size = 'md',
  style,
  textStyle,
  disabled,
  ...props
}: NativeButtonProps) {
  return (
    <Pressable
      disabled={disabled}
      style={({ pressed }) => [
        styles.base,
        styles[variant],
        styles[`size_${size}`],
        pressed && !disabled && styles.pressed,
        disabled && styles.disabled,
        style,
      ]}
      {...props}
    >
      {icon && <>{icon}</>}
      {children ? (
        children
      ) : label ? (
        <Text
          style={[
            styles.text,
            styles[`text_${variant}`],
            styles[`textSize_${size}`],
            disabled && styles.textDisabled,
            icon ? styles.textWithIcon : null,
            textStyle,
          ]}
        >
          {label}
        </Text>
      ) : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: borderRadius.sm,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: spacing.xs,
  },
  size_sm: {
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
  },
  size_md: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
  },
  size_lg: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
  },
  primary: {
    backgroundColor: colors.accent,
  },
  outline: {
    borderWidth: 1,
    borderColor: colors.accent,
    backgroundColor: 'transparent',
  },
  ghost: {
    backgroundColor: 'transparent',
  },
  danger: {
    backgroundColor: colors.danger,
  },
  pressed: {
    opacity: 0.75,
  },
  disabled: {
    opacity: 0.4,
  },
  text: {
    fontFamily: 'monospace',
    fontWeight: '600',
  },
  textWithIcon: {
    marginLeft: 2,
  },
  textSize_sm: {
    fontSize: 12,
  },
  textSize_md: {
    fontSize: 14,
  },
  textSize_lg: {
    fontSize: 16,
  },
  text_primary: {
    color: colors.bg0,
  },
  text_outline: {
    color: colors.accent,
  },
  text_ghost: {
    color: colors.text0,
  },
  text_danger: {
    color: '#ffffff',
  },
  textDisabled: {
    color: colors.textMuted,
  },
});
