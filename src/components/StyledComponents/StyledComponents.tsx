import React, { ComponentRef, forwardRef } from 'react';
import {
    View,
    Text as RNText,
    Image,
    Pressable as RNPressable,
    TouchableOpacity as RNTouchableOpacity,
    TouchableHighlight as RNTouchableHighlight,
    ScrollView,
    SafeAreaView,
    StyleSheet,
    type ViewProps,
    type TextProps,
    type ImageProps,
    type PressableProps,
    type TouchableOpacityProps,
    type TouchableHighlightProps,
    type ScrollViewProps,
    type ViewStyle,
    type TextStyle,
    type ImageStyle,
    type DimensionValue,
} from 'react-native';

// Optional peer deps — tree-shaken if the component is never used
import LinearGradient from 'react-native-linear-gradient';
import { BlurView } from '@react-native-community/blur';

// ─────────────────────────────────────────────────────────────────────────────
// TOKENS
// ─────────────────────────────────────────────────────────────────────────────

export const colors = {
    white: '#FFFFFF',
    black: '#000000',
    transparent: 'transparent',
    slate: { 50: '#F8FAFC', 100: '#F1F5F9', 200: '#E2E8F0', 300: '#CBD5E1', 400: '#94A3B8', 500: '#64748B', 600: '#475569', 700: '#334155', 800: '#1E293B', 900: '#0F172A', 950: '#020617' },
    gray: { 50: '#F9FAFB', 100: '#F3F4F6', 200: '#E5E7EB', 300: '#D1D5DB', 400: '#9CA3AF', 500: '#6B7280', 600: '#4B5563', 700: '#374151', 800: '#1F2937', 900: '#111827', 950: '#030712' },
    zinc: { 50: '#FAFAFA', 100: '#F4F4F5', 200: '#E4E4E7', 300: '#D4D4D8', 400: '#A1A1AA', 500: '#71717A', 600: '#52525B', 700: '#3F3F46', 800: '#27272A', 900: '#18181B', 950: '#09090B' },
    red: { 50: '#FEF2F2', 100: '#FEE2E2', 200: '#FECACA', 300: '#FCA5A5', 400: '#F87171', 500: '#EF4444', 600: '#DC2626', 700: '#B91C1C', 800: '#991B1B', 900: '#7F1D1D', 950: '#450A0A' },
    orange: { 50: '#FFF7ED', 100: '#FFEDD5', 200: '#FED7AA', 300: '#FDBA74', 400: '#FB923C', 500: '#F97316', 600: '#EA580C', 700: '#C2410C', 800: '#9A3412', 900: '#7C2D12', 950: '#431407' },
    amber: { 50: '#FFFBEB', 100: '#FEF3C7', 200: '#FDE68A', 300: '#FCD34D', 400: '#FBBF24', 500: '#F59E0B', 600: '#D97706', 700: '#B45309', 800: '#92400E', 900: '#78350F', 950: '#451A03' },
    yellow: { 50: '#FEFCE8', 100: '#FEF9C3', 200: '#FEF08A', 300: '#FDE047', 400: '#FACC15', 500: '#EAB308', 600: '#CA8A04', 700: '#A16207', 800: '#854D0E', 900: '#713F12', 950: '#422006' },
    lime: { 50: '#F7FEE7', 100: '#ECFCCB', 200: '#D9F99D', 300: '#BEF264', 400: '#A3E635', 500: '#84CC16', 600: '#65A30D', 700: '#4D7C0F', 800: '#3F6212', 900: '#365314', 950: '#1A2E05' },
    green: { 50: '#F0FDF4', 100: '#DCFCE7', 200: '#BBF7D0', 300: '#86EFAC', 400: '#4ADE80', 500: '#22C55E', 600: '#16A34A', 700: '#15803D', 800: '#166534', 900: '#14532D', 950: '#052E16' },
    emerald: { 50: '#ECFDF5', 100: '#D1FAE5', 200: '#A7F3D0', 300: '#6EE7B7', 400: '#34D399', 500: '#10B981', 600: '#059669', 700: '#047857', 800: '#065F46', 900: '#064E3B', 950: '#022C22' },
    teal: { 50: '#F0FDFA', 100: '#CCFBF1', 200: '#99F6E4', 300: '#5EEAD4', 400: '#2DD4BF', 500: '#14B8A6', 600: '#0D9488', 700: '#0F766E', 800: '#115E59', 900: '#134E4A', 950: '#042F2E' },
    cyan: { 50: '#ECFEFF', 100: '#CFFAFE', 200: '#A5F3FC', 300: '#67E8F9', 400: '#22D3EE', 500: '#06B6D4', 600: '#0891B2', 700: '#0E7490', 800: '#155E75', 900: '#164E63', 950: '#083344' },
    sky: { 50: '#F0F9FF', 100: '#E0F2FE', 200: '#BAE6FD', 300: '#7DD3FC', 400: '#38BDF8', 500: '#0EA5E9', 600: '#0284C7', 700: '#0369A1', 800: '#075985', 900: '#0C4A6E', 950: '#082F49' },
    blue: { 50: '#EFF6FF', 100: '#DBEAFE', 200: '#BFDBFE', 300: '#93C5FD', 400: '#60A5FA', 500: '#3B82F6', 600: '#2563EB', 700: '#1D4ED8', 800: '#1E40AF', 900: '#1E3A8A', 950: '#172554' },
    indigo: { 50: '#EEF2FF', 100: '#E0E7FF', 200: '#C7D2FE', 300: '#A5B4FC', 400: '#818CF8', 500: '#6366F1', 600: '#4F46E5', 700: '#4338CA', 800: '#3730A3', 900: '#312E81', 950: '#1E1B4B' },
    violet: { 50: '#F5F3FF', 100: '#EDE9FE', 200: '#DDD6FE', 300: '#C4B5FD', 400: '#A78BFA', 500: '#8B5CF6', 600: '#7C3AED', 700: '#6D28D9', 800: '#5B21B6', 900: '#4C1D95', 950: '#2E1065' },
    purple: { 50: '#FAF5FF', 100: '#F3E8FF', 200: '#E9D5FF', 300: '#D8B4FE', 400: '#C084FC', 500: '#A855F7', 600: '#9333EA', 700: '#7E22CE', 800: '#6B21A8', 900: '#581C87', 950: '#3B0764' },
    fuchsia: { 50: '#FDF4FF', 100: '#FAE8FF', 200: '#F5D0FE', 300: '#F0ABFC', 400: '#E879F9', 500: '#D946EF', 600: '#C026D3', 700: '#A21CAF', 800: '#86198F', 900: '#701A75', 950: '#4A044E' },
    pink: { 50: '#FDF2F8', 100: '#FCE7F3', 200: '#FBCFE8', 300: '#F9A8D4', 400: '#F472B6', 500: '#EC4899', 600: '#DB2777', 700: '#BE185D', 800: '#9D174D', 900: '#831843', 950: '#500724' },
    rose: { 50: '#FFF1F2', 100: '#FFE4E6', 200: '#FECDD3', 300: '#FDA4AF', 400: '#FB7185', 500: '#F43F5E', 600: '#E11D48', 700: '#BE123C', 800: '#9F1239', 900: '#881337', 950: '#4C0519' },
} as const;

/** Spacing scale — base unit 4 px.  spacing[4] = 16, spacing[8] = 32 */
export const spacing: Record<number, number> = {
    0: 0, 0.5: 2, 1: 4, 1.5: 6, 2: 8, 2.5: 10, 3: 12, 3.5: 14,
    4: 16, 5: 20, 6: 24, 7: 28, 8: 32, 9: 36, 10: 40, 11: 44,
    12: 48, 14: 56, 16: 64, 20: 80, 24: 96, 28: 112, 32: 128,
    36: 144, 40: 160, 44: 176, 48: 192, 52: 208, 56: 224, 60: 240, 64: 256,
};

const fontSizeTokens: Record<string, { fontSize: number; lineHeight: number }> = {
    xs: { fontSize: 12, lineHeight: 16 },
    sm: { fontSize: 14, lineHeight: 20 },
    base: { fontSize: 16, lineHeight: 24 },
    md: { fontSize: 16, lineHeight: 24 },
    lg: { fontSize: 18, lineHeight: 28 },
    xl: { fontSize: 20, lineHeight: 28 },
    '2xl': { fontSize: 24, lineHeight: 32 },
    '3xl': { fontSize: 30, lineHeight: 36 },
    '4xl': { fontSize: 36, lineHeight: 40 },
    '5xl': { fontSize: 48, lineHeight: 52 },
    '6xl': { fontSize: 60, lineHeight: 64 },
    '7xl': { fontSize: 72, lineHeight: 76 },
};

const fontWeightTokens: Record<string, TextStyle['fontWeight']> = {
    thin: '100',
    extralight: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
};

const radiusTokens: Record<string | number, number> = {
    none: 0, sm: 2, base: 4, md: 6, lg: 8, xl: 12,
    '2xl': 16, '3xl': 24, full: 9999,
    1: 4, 2: 8, 3: 12, 4: 16, 5: 20, 6: 24,
};

const shadowTokens: Record<string, ViewStyle> = {
    none: { elevation: 0, shadowColor: '#000', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0, shadowRadius: 0 },
    sm: { elevation: 2, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.18, shadowRadius: 1.5 },
    md: { elevation: 4, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.20, shadowRadius: 3.5 },
    lg: { elevation: 8, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.24, shadowRadius: 7 },
    xl: { elevation: 16, shadowColor: '#000', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.28, shadowRadius: 14 },
    '2xl': { elevation: 24, shadowColor: '#000', shadowOffset: { width: 0, height: 12 }, shadowOpacity: 0.32, shadowRadius: 20 },
};

// ─────────────────────────────────────────────────────────────────────────────
// PROP TYPES
// ─────────────────────────────────────────────────────────────────────────────

type SpacingValue = number | string;
type ColorValue = string;
type RadiusValue = string | number;
type ShadowValue = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'none';

export interface StyleProps {
    // ─── Flex ────────────────────────────────────────────────────────
    /** flex: 1 */
    flex1?: boolean;
    /** flexDirection: 'row' */
    flexRow?: boolean;
    /** flexDirection: 'column' */
    flexCol?: boolean;
    /** flexDirection: 'row-reverse' */
    flexRowReverse?: boolean;
    /** flexDirection: 'column-reverse' */
    flexColReverse?: boolean;
    /** flexWrap: 'wrap' */
    flexWrap?: boolean;
    /** flexWrap: 'nowrap' */
    flexNowrap?: boolean;
    /** flexGrow: 1 */
    flexGrow?: boolean;
    /** flexShrink: 1 */
    flexShrink?: boolean;

    // ─── Justify Content ─────────────────────────────────────────────
    /** justifyContent: 'flex-start' */
    justifyStart?: boolean;
    /** justifyContent: 'flex-end' */
    justifyEnd?: boolean;
    /** justifyContent: 'center' */
    justifyCenter?: boolean;
    /** justifyContent: 'space-between' */
    justifyBetween?: boolean;
    /** justifyContent: 'space-around' */
    justifyAround?: boolean;
    /** justifyContent: 'space-evenly' */
    justifyEvenly?: boolean;

    // ─── Align Items ─────────────────────────────────────────────────
    /** alignItems: 'flex-start' */
    itemsStart?: boolean;
    /** alignItems: 'flex-end' */
    itemsEnd?: boolean;
    /** alignItems: 'center' */
    itemsCenter?: boolean;
    /** alignItems: 'stretch' */
    itemsStretch?: boolean;
    /** alignItems: 'baseline' */
    itemsBaseline?: boolean;

    // ─── Align Self ──────────────────────────────────────────────────
    /** alignSelf: 'flex-start' */
    selfStart?: boolean;
    /** alignSelf: 'flex-end' */
    selfEnd?: boolean;
    /** alignSelf: 'center' */
    selfCenter?: boolean;
    /** alignSelf: 'stretch' */
    selfStretch?: boolean;
    /** alignSelf: 'auto' */
    selfAuto?: boolean;

    // ─── Position ────────────────────────────────────────────────────
    /** position: 'absolute' */
    absolute?: boolean;
    /** position: 'relative' */
    relative?: boolean;
    /** overflow: 'hidden' | 'visible' | 'scroll' */
    overflow?: 'hidden' | 'visible' | 'scroll';
    /** display: 'none' */
    hidden?: boolean;

    // ─── Spacing — Padding ───────────────────────────────────────────
    /** padding (all sides) — scale key or raw number */
    p?: SpacingValue;
    /** paddingHorizontal */
    px?: SpacingValue;
    /** paddingVertical */
    py?: SpacingValue;
    /** paddingTop */
    pt?: SpacingValue;
    /** paddingBottom */
    pb?: SpacingValue;
    /** paddingLeft */
    pl?: SpacingValue;
    /** paddingRight */
    pr?: SpacingValue;

    // ─── Spacing — Margin ────────────────────────────────────────────
    /** margin (all sides) */
    m?: SpacingValue;
    /** marginHorizontal */
    mx?: SpacingValue;
    /** marginVertical */
    my?: SpacingValue;
    /** marginTop */
    mt?: SpacingValue;
    /** marginBottom */
    mb?: SpacingValue;
    /** marginLeft */
    ml?: SpacingValue;
    /** marginRight */
    mr?: SpacingValue;

    // ─── Gap ─────────────────────────────────────────────────────────
    /** gap */
    gap?: SpacingValue;
    /** columnGap */
    gapX?: SpacingValue;
    /** rowGap */
    gapY?: SpacingValue;

    // ─── Size ────────────────────────────────────────────────────────
    /** width */
    w?: SpacingValue | DimensionValue;
    /** height */
    h?: SpacingValue | DimensionValue;
    /** minWidth */
    minW?: SpacingValue | DimensionValue;
    /** minHeight */
    minH?: SpacingValue | DimensionValue;
    /** maxWidth */
    maxW?: SpacingValue | DimensionValue;
    /** maxHeight */
    maxH?: SpacingValue | DimensionValue;
    /** Sets both width and height */
    size?: SpacingValue;

    // ─── Color ───────────────────────────────────────────────────────
    /** backgroundColor — 'blue.500' | '#fff' | 'transparent' */
    bg?: ColorValue;
    /** color (text / icon tint) */
    color?: ColorValue;
    /** borderColor */
    borderColor?: ColorValue;
    /** opacity 0–1 */
    opacity?: number;

    // ─── Border ──────────────────────────────────────────────────────
    /** borderWidth */
    border?: number;
    /** borderTopWidth */
    borderTop?: number;
    /** borderBottomWidth */
    borderBottom?: number;
    /** borderLeftWidth */
    borderLeft?: number;
    /** borderRightWidth */
    borderRight?: number;

    // ─── Border Radius ───────────────────────────────────────────────
    /** borderRadius — 'md' | 'xl' | 'full' | number */
    rounded?: RadiusValue;
    /** borderTopLeft + borderTopRight */
    roundedT?: RadiusValue;
    /** borderBottomLeft + borderBottomRight */
    roundedB?: RadiusValue;
    /** borderTopLeft + borderBottomLeft */
    roundedL?: RadiusValue;
    /** borderTopRight + borderBottomRight */
    roundedR?: RadiusValue;
    /** borderTopLeftRadius only */
    roundedTL?: RadiusValue;
    /** borderTopRightRadius only */
    roundedTR?: RadiusValue;
    /** borderBottomLeftRadius only */
    roundedBL?: RadiusValue;
    /** borderBottomRightRadius only */
    roundedBR?: RadiusValue;

    // ─── Shadow ──────────────────────────────────────────────────────
    /** Cross-platform shadow preset */
    shadow?: ShadowValue;

    // ─── Position Offsets ────────────────────────────────────────────
    /** top */
    top?: SpacingValue;
    /** bottom */
    bottom?: SpacingValue;
    /** left */
    left?: SpacingValue;
    /** right */
    right?: SpacingValue;
    /** Sets top + bottom + left + right */
    inset?: SpacingValue;
    /** zIndex */
    z?: number;

    // ─── Typography ──────────────────────────────────────────────────
    /** 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' … '7xl' | number */
    fontSize?: string | number;
    /** 'normal' | 'medium' | 'semibold' | 'bold' | '100'–'900' */
    fontWeight?: string;
    /** lineHeight (px) */
    lineHeight?: number;
    /** letterSpacing */
    letterSpacing?: number;
    /** fontFamily */
    fontFamily?: string;

    // ─── Text Style Shorthands ───────────────────────────────────────
    /** textAlign: 'left' */
    textLeft?: boolean;
    /** textAlign: 'center' */
    textCenter?: boolean;
    /** textAlign: 'right' */
    textRight?: boolean;
    /** fontStyle: 'italic' */
    italic?: boolean;
    /** fontWeight: '700' */
    bold?: boolean;
    /** fontWeight: '600' */
    semibold?: boolean;
    /** fontWeight: '500' */
    medium?: boolean;
    /** textTransform: 'uppercase' */
    uppercase?: boolean;
    /** textTransform: 'lowercase' */
    lowercase?: boolean;
    /** textTransform: 'capitalize' */
    capitalize?: boolean;
    /** textDecorationLine: 'underline' */
    underline?: boolean;
    /** textDecorationLine: 'line-through' */
    strikethrough?: boolean;
}

// ─────────────────────────────────────────────────────────────────────────────
// RESOLVER  — pure function: StyleProps → RN style object
// ─────────────────────────────────────────────────────────────────────────────

function resolveColor(v?: string): string | undefined {
    if (!v) return undefined;
    if (v === 'white') return colors.white;
    if (v === 'black') return colors.black;
    if (v === 'transparent') return colors.transparent;
    if (/^[a-z]+\.\d+$/.test(v)) {
        const [name, shade] = v.split('.');
        return (colors as Record<string, any>)[name]?.[shade] ?? v;
    }
    return v;
}

/**
 * Resolves a spacing prop.
 * - number  → used AS-IS as a raw pixel value (scale is bypassed).
 * - string  → looked up against the spacing scale (e.g. "4" → 16).
 * - "auto" / any "%"-suffixed string → passed through unchanged.
 */
function sp(v: SpacingValue | undefined): number | string | undefined {
    if (v === undefined) return undefined;

    // number → exact pixel, scale never touched
    if (typeof v === 'number') return v;

    // string → Tailwind scale lookup
    if (v === 'auto' || v.endsWith('%')) return v;   // passthrough
    const key = parseFloat(v);
    return Number.isFinite(key) ? (spacing[key] ?? key) : v;
}

function rr(v: RadiusValue | undefined): number | undefined {
    if (v === undefined) return undefined;
    return radiusTokens[v] ?? (typeof v === 'number' ? v : undefined);
}

function resolveStyle(p: StyleProps): ViewStyle & TextStyle {
    const s: any | ViewStyle & TextStyle = {};

    // ── Flex ──────────────────────────────────────────────────────────────────
    if (p.flex1) s.flex = 1;
    if (p.flexRow) s.flexDirection = 'row';
    if (p.flexCol) s.flexDirection = 'column';
    if (p.flexRowReverse) s.flexDirection = 'row-reverse';
    if (p.flexColReverse) s.flexDirection = 'column-reverse';
    if (p.flexWrap) s.flexWrap = 'wrap';
    if (p.flexNowrap) s.flexWrap = 'nowrap';
    if (p.flexGrow) s.flexGrow = 1;
    if (p.flexShrink) s.flexShrink = 1;

    // ── Justify ───────────────────────────────────────────────────────────────
    if (p.justifyStart) s.justifyContent = 'flex-start';
    if (p.justifyEnd) s.justifyContent = 'flex-end';
    if (p.justifyCenter) s.justifyContent = 'center';
    if (p.justifyBetween) s.justifyContent = 'space-between';
    if (p.justifyAround) s.justifyContent = 'space-around';
    if (p.justifyEvenly) s.justifyContent = 'space-evenly';

    // ── Align Items ───────────────────────────────────────────────────────────
    if (p.itemsStart) s.alignItems = 'flex-start';
    if (p.itemsEnd) s.alignItems = 'flex-end';
    if (p.itemsCenter) s.alignItems = 'center';
    if (p.itemsStretch) s.alignItems = 'stretch';
    if (p.itemsBaseline) s.alignItems = 'baseline';

    // ── Align Self ────────────────────────────────────────────────────────────
    if (p.selfStart) s.alignSelf = 'flex-start';
    if (p.selfEnd) s.alignSelf = 'flex-end';
    if (p.selfCenter) s.alignSelf = 'center';
    if (p.selfStretch) s.alignSelf = 'stretch';
    if (p.selfAuto) s.alignSelf = 'auto';

    // ── Position ──────────────────────────────────────────────────────────────
    if (p.absolute) s.position = 'absolute';
    if (p.relative) s.position = 'relative';
    if (p.overflow) s.overflow = p.overflow;
    if (p.hidden) s.display = 'none';

    // ── Padding ───────────────────────────────────────────────────────────────
    if (p.p !== undefined) s.padding = sp(p.p);
    if (p.px !== undefined) s.paddingHorizontal = sp(p.px);
    if (p.py !== undefined) s.paddingVertical = sp(p.py);
    if (p.pt !== undefined) s.paddingTop = sp(p.pt);
    if (p.pb !== undefined) s.paddingBottom = sp(p.pb);
    if (p.pl !== undefined) s.paddingLeft = sp(p.pl);
    if (p.pr !== undefined) s.paddingRight = sp(p.pr);

    // ── Margin ────────────────────────────────────────────────────────────────
    if (p.m !== undefined) s.margin = sp(p.m);
    if (p.mx !== undefined) s.marginHorizontal = sp(p.mx);
    if (p.my !== undefined) s.marginVertical = sp(p.my);
    if (p.mt !== undefined) s.marginTop = sp(p.mt);
    if (p.mb !== undefined) s.marginBottom = sp(p.mb);
    if (p.ml !== undefined) s.marginLeft = sp(p.ml);
    if (p.mr !== undefined) s.marginRight = sp(p.mr);

    // ── Gap ───────────────────────────────────────────────────────────────────
    if (p.gap !== undefined) s.gap = sp(p.gap) as number;
    if (p.gapX !== undefined) s.columnGap = sp(p.gapX) as number;
    if (p.gapY !== undefined) s.rowGap = sp(p.gapY) as number;

    // ── Size ──────────────────────────────────────────────────────────────────
    if (p.w !== undefined) s.width = sp(p.w as SpacingValue);
    if (p.h !== undefined) s.height = sp(p.h as SpacingValue);
    if (p.minW !== undefined) s.minWidth = sp(p.minW as SpacingValue);
    if (p.minH !== undefined) s.minHeight = sp(p.minH as SpacingValue);
    if (p.maxW !== undefined) s.maxWidth = sp(p.maxW as SpacingValue);
    if (p.maxH !== undefined) s.maxHeight = sp(p.maxH as SpacingValue);
    if (p.size !== undefined) {
        const v = sp(p.size);
        s.width = v; s.height = v;
    }

    // ── Color ─────────────────────────────────────────────────────────────────
    if (p.bg) s.backgroundColor = resolveColor(p.bg);
    if (p.color) s.color = resolveColor(p.color);
    if (p.opacity !== undefined) s.opacity = p.opacity;

    // ── Border ────────────────────────────────────────────────────────────────
    const hasBorderColor = !!p.borderColor;
    const hasBorderWidth = p.border !== undefined || p.borderTop !== undefined ||
        p.borderBottom !== undefined || p.borderLeft !== undefined ||
        p.borderRight !== undefined;

    if (hasBorderWidth) {
        s.borderColor = resolveColor(p.borderColor) ?? '#E5E7EB';
    } else if (hasBorderColor) {
        s.borderColor = resolveColor(p.borderColor);
    }

    if (p.border !== undefined) { s.borderWidth = p.border; s.borderStyle = 'solid'; }
    if (p.borderTop !== undefined) { s.borderTopWidth = p.borderTop; s.borderStyle = 'solid'; }
    if (p.borderBottom !== undefined) { s.borderBottomWidth = p.borderBottom; s.borderStyle = 'solid'; }
    if (p.borderLeft !== undefined) { s.borderLeftWidth = p.borderLeft; s.borderStyle = 'solid'; }
    if (p.borderRight !== undefined) { s.borderRightWidth = p.borderRight; s.borderStyle = 'solid'; }

    // ── Border Radius ─────────────────────────────────────────────────────────
    if (p.rounded !== undefined) s.borderRadius = rr(p.rounded);
    if (p.roundedTL !== undefined) s.borderTopLeftRadius = rr(p.roundedTL);
    if (p.roundedTR !== undefined) s.borderTopRightRadius = rr(p.roundedTR);
    if (p.roundedBL !== undefined) s.borderBottomLeftRadius = rr(p.roundedBL);
    if (p.roundedBR !== undefined) s.borderBottomRightRadius = rr(p.roundedBR);
    if (p.roundedT !== undefined) {
        const r = rr(p.roundedT);
        s.borderTopLeftRadius = r; s.borderTopRightRadius = r;
    }
    if (p.roundedB !== undefined) {
        const r = rr(p.roundedB);
        s.borderBottomLeftRadius = r; s.borderBottomRightRadius = r;
    }
    if (p.roundedL !== undefined) {
        const r = rr(p.roundedL);
        s.borderTopLeftRadius = r; s.borderBottomLeftRadius = r;
    }
    if (p.roundedR !== undefined) {
        const r = rr(p.roundedR);
        s.borderTopRightRadius = r; s.borderBottomRightRadius = r;
    }

    // ── Shadow ────────────────────────────────────────────────────────────────
    if (p.shadow) Object.assign(s, shadowTokens[p.shadow]);

    // ── Offsets ───────────────────────────────────────────────────────────────
    if (p.inset !== undefined) {
        const v = sp(p.inset);
        s.top = v; s.bottom = v; s.left = v; s.right = v;
    }
    if (p.top !== undefined) s.top = sp(p.top);
    if (p.bottom !== undefined) s.bottom = sp(p.bottom);
    if (p.left !== undefined) s.left = sp(p.left);
    if (p.right !== undefined) s.right = sp(p.right);
    if (p.z !== undefined) s.zIndex = p.z;

    // ── Typography ────────────────────────────────────────────────────────────
    if (p.fontSize !== undefined) {
        const token = fontSizeTokens[String(p.fontSize)];
        if (token) {
            s.fontSize = token.fontSize;
            s.lineHeight = token.lineHeight;
        } else if (typeof p.fontSize === 'number') {
            s.fontSize = p.fontSize;
        }
    }
    if (p.fontWeight !== undefined) s.fontWeight = (fontWeightTokens[p.fontWeight] ?? p.fontWeight) as TextStyle['fontWeight'];
    if (p.lineHeight !== undefined) s.lineHeight = p.lineHeight;
    if (p.letterSpacing !== undefined) s.letterSpacing = p.letterSpacing;
    if (p.fontFamily !== undefined) s.fontFamily = p.fontFamily;

    // ── Text Style Shorthands ─────────────────────────────────────────────────
    if (p.textLeft) s.textAlign = 'left';
    if (p.textCenter) s.textAlign = 'center';
    if (p.textRight) s.textAlign = 'right';
    if (p.italic) s.fontStyle = 'italic';
    if (p.bold) s.fontWeight = '700';
    if (p.semibold) s.fontWeight = '600';
    if (p.medium) s.fontWeight = '500';
    if (p.uppercase) s.textTransform = 'uppercase';
    if (p.lowercase) s.textTransform = 'lowercase';
    if (p.capitalize) s.textTransform = 'capitalize';
    if (p.underline) s.textDecorationLine = 'underline';
    if (p.strikethrough) s.textDecorationLine = 'line-through';

    return s;
}

// ─────────────────────────────────────────────────────────────────────────────
// PROP SPLITTER  — strips StyleProps keys so native props are clean
// ─────────────────────────────────────────────────────────────────────────────

const STYLE_KEYS = new Set<string>([
    'flex1', 'flexRow', 'flexCol', 'flexRowReverse', 'flexColReverse',
    'flexWrap', 'flexNowrap', 'flexGrow', 'flexShrink',
    'justifyStart', 'justifyEnd', 'justifyCenter', 'justifyBetween', 'justifyAround', 'justifyEvenly',
    'itemsStart', 'itemsEnd', 'itemsCenter', 'itemsStretch', 'itemsBaseline',
    'selfStart', 'selfEnd', 'selfCenter', 'selfStretch', 'selfAuto',
    'absolute', 'relative', 'overflow', 'hidden',
    'p', 'px', 'py', 'pt', 'pb', 'pl', 'pr',
    'm', 'mx', 'my', 'mt', 'mb', 'ml', 'mr',
    'gap', 'gapX', 'gapY',
    'w', 'h', 'minW', 'minH', 'maxW', 'maxH', 'size',
    'bg', 'color', 'borderColor', 'opacity',
    'border', 'borderTop', 'borderBottom', 'borderLeft', 'borderRight',
    'rounded', 'roundedT', 'roundedB', 'roundedL', 'roundedR',
    'roundedTL', 'roundedTR', 'roundedBL', 'roundedBR',
    'shadow',
    'top', 'bottom', 'left', 'right', 'inset', 'z',
    'fontSize', 'fontWeight', 'lineHeight', 'letterSpacing', 'fontFamily',
    'textLeft', 'textCenter', 'textRight',
    'italic', 'bold', 'semibold', 'medium',
    'uppercase', 'lowercase', 'capitalize', 'underline', 'strikethrough',
]);

function splitProps<P extends StyleProps & Record<string, unknown>>(
    props: P,
): { resolved: ViewStyle & TextStyle; rest: Record<string, unknown> } {
    const styleSource: StyleProps = {};
    const rest: Record<string, unknown> = {};

    for (const key in props) {
        if (Object.prototype.hasOwnProperty.call(props, key)) {
            if (STYLE_KEYS.has(key)) {
                (styleSource as Record<string, unknown>)[key] = props[key];
            } else {
                rest[key] = props[key];
            }
        }
    }

    return { resolved: resolveStyle(styleSource), rest };
}

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────

// ── Box ───────────────────────────────────────────────────────────────────────

export type BoxProps = StyleProps & Omit<ViewProps, 'style'> & { style?: ViewProps['style'] };

/**
 * The base layout primitive — a `<View>` with full StyleProps support.
 *
 * @example
 * <Box flex1 bg="slate.50" px="4" py="6">
 *   <Box flexRow itemsCenter gap="3" bg="white" rounded="xl" shadow="sm" p="4">
 *     <Box size="10" rounded="full" bg="blue.500" />
 *     <Box flex1>
 *       <Text bold fontSize="base" color="slate.900">Card title</Text>
 *       <Text fontSize="sm" color="slate.500" mt="1">Subtitle text</Text>
 *     </Box>
 *   </Box>
 * </Box>
 */
export const Box = forwardRef<ComponentRef<typeof View>, BoxProps>(function Box({ style, ...props }, ref) {
    const { resolved, rest } = splitProps(props as BoxProps & Record<string, unknown>);
    return (
        <View
            ref={ref}
            style={style ? StyleSheet.flatten([resolved, style]) : resolved}
            {...(rest as ViewProps)}
        />
    );
});
Box.displayName = 'Box';

// ── Row ───────────────────────────────────────────────────────────────────────

/**
 * `<Box flexRow>` — horizontal layout, flexDirection: 'row' pre-applied.
 *
 * @example
 * <Row itemsCenter justifyBetween px="4" py="3">
 *   <Text bold>Left</Text>
 *   <Text color="blue.500">Right</Text>
 * </Row>
 */
export const Row = forwardRef<ComponentRef<typeof View>, BoxProps>(function Row({ style, ...props }, ref) {
    const { resolved, rest } = splitProps(props as BoxProps & Record<string, unknown>);
    const finalStyle = StyleSheet.flatten([{ flexDirection: 'row' as const }, resolved, style]);
    return <View ref={ref} style={finalStyle} {...(rest as ViewProps)} />;
});
Row.displayName = 'Row';

// ── Col ───────────────────────────────────────────────────────────────────────

/**
 * `<Box flexCol>` — vertical layout, flexDirection: 'column' pre-applied.
 * Identical to `<Box>` but semantically explicit.
 *
 * @example
 * <Col flex1 gap="3" px="4">
 *   <Card />
 *   <Card />
 * </Col>
 */
export const Col = forwardRef<ComponentRef<typeof View>, BoxProps>(function Col({ style, ...props }, ref) {
    const { resolved, rest } = splitProps(props as BoxProps & Record<string, unknown>);
    const finalStyle = StyleSheet.flatten([{ flexDirection: 'column' as const }, resolved, style]);
    return <View ref={ref} style={finalStyle} {...(rest as ViewProps)} />;
});
Col.displayName = 'Col';

/** Alias for Col */
export const Stack = Col;

// ── Text ──────────────────────────────────────────────────────────────────────

export type TextComponentProps = StyleProps & Omit<TextProps, 'style'> & { style?: TextProps['style'] };

/**
 * Typographic primitive — `<Text>` with full StyleProps support.
 *
 * @example
 * <Text bold fontSize="2xl" color="slate.900" mb="1">Heading</Text>
 * <Text fontSize="sm" color="slate.500" lineHeight={20}>
 *   Supporting copy here.
 * </Text>
 */
export const Text = forwardRef<ComponentRef<typeof RNText>, TextComponentProps>(function Text({ style, ...props }, ref) {
    const { resolved, rest } = splitProps(props as TextComponentProps & Record<string, unknown>);
    return (
        <RNText
            ref={ref}
            style={style ? StyleSheet.flatten([resolved, style]) : resolved}
            {...(rest as TextProps)}
        />
    );
});
Text.displayName = 'Text';

// ── Pressable ─────────────────────────────────────────────────────────────────

export type PressableComponentProps = StyleProps &
    Omit<PressableProps, 'style'> & {
        style?: PressableProps['style'];
        /** StyleProps applied while the element is being pressed */
        pressedStyle?: StyleProps;
        /** StyleProps applied when `disabled={true}` */
        disabledStyle?: StyleProps;
    };

/**
 * Interactive primitive with full StyleProps + pressed/disabled state overrides.
 *
 * @example
 * <Pressable
 *   bg="blue.600" px="5" py="3" rounded="lg" itemsCenter
 *   pressedStyle={{ opacity: 0.75 }}
 *   disabledStyle={{ bg: 'gray.300' }}
 *   onPress={handlePress}
 * >
 *   <Text bold color="white">Submit</Text>
 * </Pressable>
 */
export const Pressable = forwardRef<ComponentRef<typeof View>, PressableComponentProps>(
    function Pressable({ style, pressedStyle, disabledStyle, disabled, ...props }, ref) {
        const { resolved: base, rest } = splitProps(props as PressableComponentProps & Record<string, unknown>);
        const pressedResolved = pressedStyle ? resolveStyle(pressedStyle) : undefined;
        const disabledResolved = disabledStyle ? resolveStyle(disabledStyle) : undefined;

        return (
            <RNPressable
                ref={ref}
                disabled={disabled}
                style={(state) => {
                    // 1. Resolve the custom incoming style if it's a function
                    const resolvedExternalStyle = typeof style === 'function'
                        ? style(state)
                        : style;

                    // 2. Flatten safely now that everything is a standard style object/array
                    return StyleSheet.flatten([
                        base,
                        disabled && disabledResolved,
                        state.pressed && pressedResolved,
                        resolvedExternalStyle,
                    ]);
                }}
                {...(rest as PressableProps)}
            />
        );
    },
);
Pressable.displayName = 'Pressable';

// ── ScrollBox ─────────────────────────────────────────────────────────────────

export type ScrollBoxProps = StyleProps &
    Omit<ScrollViewProps, 'style' | 'contentContainerStyle'> & {
        style?: ScrollViewProps['style'];
        /** StyleProps for the inner content container */
        contentStyle?: StyleProps;
        contentContainerStyle?: ScrollViewProps['contentContainerStyle'];
    };

/**
 * Scrollable container with StyleProps on both the outer scroll view
 * and the inner content container via `contentStyle`.
 *
 * @example
 * <ScrollBox flex1 bg="gray.50" contentStyle={{ p: '4', gap: '3' }}>
 *   <Card />
 *   <Card />
 * </ScrollBox>
 */
export const ScrollBox = forwardRef<ComponentRef<typeof ScrollView>, ScrollBoxProps>(
    function ScrollBox({ style, contentStyle, contentContainerStyle, ...props }, ref) {
        const { resolved: outer, rest } = splitProps(props as ScrollBoxProps & Record<string, unknown>);
        const contentResolved = contentStyle ? resolveStyle(contentStyle) : undefined;

        return (
            <ScrollView
                ref={ref}
                style={style ? StyleSheet.flatten([outer, style]) : outer}
                contentContainerStyle={StyleSheet.flatten([contentResolved, contentContainerStyle])}
                {...(rest as ScrollViewProps)}
            />
        );
    },
);
ScrollBox.displayName = 'ScrollBox';

// ── SafeBox ───────────────────────────────────────────────────────────────────

/**
 * `<SafeAreaView>` with full StyleProps support.
 *
 * @example
 * <SafeBox flex1 bg="white">
 *   <Header />
 *   <Content />
 * </SafeBox>
 */
export const SafeBox = forwardRef<ComponentRef<typeof SafeAreaView>, BoxProps>(function SafeBox({ style, ...props }, ref) {
    const { resolved, rest } = splitProps(props as BoxProps & Record<string, unknown>);
    return (
        <SafeAreaView
            ref={ref}
            style={style ? StyleSheet.flatten([resolved, style]) : resolved}
            {...(rest as ViewProps)}
        />
    );
});
SafeBox.displayName = 'SafeBox';

// ── Img ───────────────────────────────────────────────────────────────────────

export type ImgProps = StyleProps & Omit<ImageProps, 'style'> & { style?: ImageProps['style'] };

/**
 * `<Image>` with full StyleProps support.
 *
 * @example
 * <Img source={{ uri }} w="16" h="16" rounded="full" />
 */
export const Img = forwardRef<ComponentRef<typeof Image>, ImgProps>(function Img({ style, ...props }, ref) {
    const { resolved, rest } = splitProps(props as ImgProps & Record<string, unknown>);
    return (
        <Image
            ref={ref}
            style={(style ? StyleSheet.flatten([resolved, style]) : resolved) as ImageStyle}
            {...(rest as ImageProps)}
        />
    );
});
Img.displayName = 'Img';

// ── GradientButton ────────────────────────────────────────────────────────────

export type GradientButtonProps = StyleProps &
    Omit<PressableProps, 'style' | 'children'> & {
        /** Inline Pressable container style override */
        style?: ViewStyle;
        /**
         * Gradient stop colors — minimum 2.
         * Accepts color tokens ('blue.500', 'violet.600') and raw hex / rgba strings.
         */
        colors: [string, string, ...string[]];
        /** Gradient start point. Default: `{ x: 0, y: 0 }` (top-left) */
        start?: { x: number; y: number };
        /** Gradient end point. Default: `{ x: 1, y: 0 }` (left → right) */
        end?: { x: number; y: number };
        /** Switch to angle-based gradient instead of start / end */
        useAngle?: boolean;
        /** Angle in degrees — only used when `useAngle={true}` */
        angle?: number;
        /** Rotation origin — only used when `useAngle={true}` */
        angleCenter?: { x: number; y: number };
        /** StyleProps applied while the button is being pressed */
        pressedStyle?: StyleProps;
        /** StyleProps applied when `disabled={true}` */
        disabledStyle?: StyleProps;
        children?: React.ReactNode;
    };

/**
 * Touchable button backed by `react-native-linear-gradient`.
 * All StyleProps (padding, radius, flex layout, etc.) apply to the gradient layer,
 * except margin, which is applied to the outer wrapper so it behaves like margin
 * on every other component in this file (pushes the button itself, rather than
 * padding empty space inside the clipped gradient).
 *
 * The outer wrapper mirrors ALL border-radius corners (not just uniform `rounded`)
 * so `overflow: hidden` clips correctly whichever radius props you use.
 *
 * @example
 * // Basic left-to-right gradient
 * <GradientButton
 *   colors={['blue.500', 'violet.600']}
 *   px="6" py="3.5" rounded="xl"
 *   itemsCenter justifyCenter
 *   pressedStyle={{ opacity: 0.82 }}
 *   onPress={handleSubmit}
 * >
 *   <Text bold fontSize="base" color="white">Get Started</Text>
 * </GradientButton>
 *
 * // Diagonal angle-based gradient
 * <GradientButton
 *   colors={['rose.500', 'orange.400']}
 *   useAngle angle={135}
 *   px="5" py="3" rounded="full"
 *   itemsCenter justifyCenter flexRow gap="2"
 * >
 *   <Text bold color="white">Diagonal</Text>
 * </GradientButton>
 *
 * // Partial radius — top corners only, still clips correctly
 * <GradientButton
 *   colors={['emerald.500', 'teal.600']}
 *   roundedT="2xl" px="6" py="4" itemsCenter
 *   disabledStyle={{ opacity: 0.45 }}
 *   disabled={isLoading}
 * >
 *   <Text bold color="white">Save</Text>
 * </GradientButton>
 */
export const GradientButton = forwardRef<ComponentRef<typeof View>, GradientButtonProps>(
    function GradientButton(props, ref) {
        const {
            children,
            colors: rawColors,
            start = { x: 0, y: 0 },
            end = { x: 1, y: 0 },
            useAngle,
            angle,
            angleCenter,
            pressedStyle,
            disabledStyle,
            style,
            ...remaining
        } = props;

        // Split remaining into resolved style object + native Pressable props
        const { resolved, rest: pressableProps } = splitProps(
            remaining as StyleProps & Record<string, unknown>,
        );

        const { disabled } = pressableProps as PressableProps;

        const pressedResolved = pressedStyle ? resolveStyle(pressedStyle) : undefined;
        const disabledResolved = disabledStyle ? resolveStyle(disabledStyle) : undefined;

        // Resolve any color tokens inside the stops array
        const resolvedColors = (rawColors as string[]).map(
            (c) => resolveColor(c) ?? c,
        ) as [string, string, ...string[]];

        // ── Split resolved style into "outer wrapper" (margin + full radius,
        //    for correct overflow:hidden clipping) vs "inner gradient" (everything else) ──
        const {
            margin, marginTop, marginBottom, marginLeft, marginRight,
            marginHorizontal, marginVertical,
            borderRadius, borderTopLeftRadius, borderTopRightRadius,
            borderBottomLeftRadius, borderBottomRightRadius,
            ...innerStyle
        } = resolved as ViewStyle;

        const outerRadius: ViewStyle = {
            borderTopLeftRadius: borderTopLeftRadius ?? borderRadius ?? 0,
            borderTopRightRadius: borderTopRightRadius ?? borderRadius ?? 0,
            borderBottomLeftRadius: borderBottomLeftRadius ?? borderRadius ?? 0,
            borderBottomRightRadius: borderBottomRightRadius ?? borderRadius ?? 0,
        };

        const outerMargin: ViewStyle = {
            margin, marginTop, marginBottom, marginLeft, marginRight,
            marginHorizontal, marginVertical,
        };

        // Angle vs directional gradient props
        const gradientDirectionProps = useAngle
            ? { useAngle: true as const, angle: angle ?? 0, angleCenter: angleCenter ?? { x: 0.5, y: 0.5 } }
            : { start, end };

        return (
            <RNPressable
                ref={ref}
                style={() =>
                    StyleSheet.flatten([
                        outerMargin,
                        outerRadius,
                        { overflow: 'hidden' as const },
                        style,
                    ])
                }
                {...(pressableProps as PressableProps)}
            >
                {({ pressed }) => (
                    <LinearGradient
                        colors={resolvedColors}
                        {...gradientDirectionProps}
                        style={StyleSheet.flatten([
                            innerStyle,
                            borderRadius !== undefined && { borderRadius },
                            borderTopLeftRadius !== undefined && { borderTopLeftRadius },
                            borderTopRightRadius !== undefined && { borderTopRightRadius },
                            borderBottomLeftRadius !== undefined && { borderBottomLeftRadius },
                            borderBottomRightRadius !== undefined && { borderBottomRightRadius },
                            pressed && pressedResolved,
                            disabled && disabledResolved,
                        ])}
                    >
                        {children}
                    </LinearGradient>
                )}
            </RNPressable>
        );
    },
);
GradientButton.displayName = 'GradientButton';

// ── BlurBox ───────────────────────────────────────────────────────────────────

/**
 * All blur types supported by `@react-native-community/blur`.
 *
 * iOS system materials:   'ultraThinMaterial' | 'thinMaterial' | 'material' | 'thickMaterial' | 'chromeMaterial'
 * iOS dark materials:     append 'Dark' to any material variant above
 * iOS legacy:             'xlight' | 'light' | 'dark' | 'extraDark' | 'regular' | 'prominent'
 * Android:                'light' | 'dark' | 'xlight' | 'prominent' | 'regular'
 */
export type BlurType =
    | 'xlight' | 'light' | 'dark' | 'extraDark' | 'regular' | 'prominent'
    | 'chromeMaterial' | 'material' | 'thickMaterial' | 'thinMaterial' | 'ultraThinMaterial'
    | 'chromeMaterialDark' | 'materialDark' | 'thickMaterialDark' | 'thinMaterialDark' | 'ultraThinMaterialDark'
    | 'softUIThinMaterial' | 'softUIThinMaterialDark';

export type BlurBoxProps = StyleProps &
    Omit<ViewProps, 'style'> & {
        style?: ViewProps['style'];
        /**
         * Blur effect type.
         * Use material variants ('chromeMaterial', 'thinMaterial') for iOS 14+ frosted-glass look.
         * @default 'light'
         */
        blurType?: BlurType;
        /**
         * Blur intensity — 0 (no blur) to 25 (maximum).
         * @default 10
         */
        blurAmount?: number;
        /**
         * Fallback solid-ish color shown on iOS when the user has enabled
         * "Reduce Transparency" in Accessibility settings.
         * Accepts color tokens ('slate.800') and raw hex strings.
         * @default 'rgba(255,255,255,0.75)'
         */
        reducedTransparencyFallbackColor?: string;
        children?: React.ReactNode;
    };

/**
 * A `<BlurView>` from `@react-native-community/blur` with full StyleProps support.
 * Perfect for frosted-glass cards, modal backdrops, and tab-bar backgrounds.
 *
 * @example
 * // Frosted-glass card
 * <BlurBox
 *   blurType="chromeMaterial"
 *   blurAmount={14}
 *   rounded="2xl"
 *   overflow="hidden"
 *   p="5"
 *   border={1}
 *   borderColor="white"
 * >
 *   <Text bold fontSize="lg">Card title</Text>
 *   <Text fontSize="sm" color="slate.500" mt="1">Supporting copy</Text>
 * </BlurBox>
 *
 * // Full-screen dark overlay backdrop
 * <BlurBox
 *   blurType="dark"
 *   blurAmount={8}
 *   absolute inset="0"
 *   z={20}
 *   reducedTransparencyFallbackColor="slate.900"
 * />
 *
 * // Sticky frosted tab bar
 * <BlurBox
 *   blurType="chromeMaterial"
 *   blurAmount={20}
 *   absolute bottom="0" left="0" right="0"
 *   h="16"
 *   overflow="hidden"
 *   itemsCenter justifyCenter
 * />
 *
 * // Dark glass bottom sheet handle area
 * <BlurBox
 *   blurType="materialDark"
 *   blurAmount={12}
 *   roundedT="3xl"
 *   overflow="hidden"
 *   pt="2" pb="8" px="6"
 * >
 *   <Box size="8" rounded="full" bg="gray.600" selfCenter mb="4" />
 *   {children}
 * </BlurBox>
 */
export const BlurBox = forwardRef<ComponentRef<typeof BlurView>, BlurBoxProps>(
    function BlurBox(
        {
            style,
            blurType = 'light',
            blurAmount = 10,
            reducedTransparencyFallbackColor,
            ...props
        },
        ref,
    ) {
        const { resolved, rest } = splitProps(props as BlurBoxProps & Record<string, unknown>);

        // Resolve the fallback color so it accepts tokens too
        const fallbackColor =
            reducedTransparencyFallbackColor
                ? resolveColor(reducedTransparencyFallbackColor) ?? reducedTransparencyFallbackColor
                : undefined;

        return (
            <BlurView
                ref={ref as React.Ref<View>}
                blurType={blurType as any}
                blurAmount={blurAmount}
                reducedTransparencyFallbackColor={fallbackColor}
                style={style ? StyleSheet.flatten([resolved, style]) : resolved}
                {...(rest as ViewProps)}
            />
        );
    },
);
BlurBox.displayName = 'BlurBox';

// ── TouchableBox ──────────────────────────────────────────────────────────────

export type TouchableBoxProps = StyleProps &
    Omit<TouchableOpacityProps, 'style'> & {
        style?: TouchableOpacityProps['style'];
        /** StyleProps applied when `disabled={true}` */
        disabledStyle?: StyleProps;
    };

/**
 * `<TouchableOpacity>` with full StyleProps support.
 * Fades opacity on press (native `activeOpacity` still works as usual).
 *
 * @example
 * <TouchableBox
 *   bg="blue.600" px="5" py="3" rounded="lg" itemsCenter
 *   activeOpacity={0.7}
 *   disabledStyle={{ bg: 'gray.300' }}
 *   onPress={handlePress}
 * >
 *   <Text bold color="white">Submit</Text>
 * </TouchableBox>
 */
export const TouchableBox = forwardRef<ComponentRef<typeof RNTouchableOpacity>, TouchableBoxProps>(
    function TouchableBox({ style, disabledStyle, disabled, ...props }, ref) {
        const { resolved, rest } = splitProps(props as TouchableBoxProps & Record<string, unknown>);
        const disabledResolved = disabledStyle ? resolveStyle(disabledStyle) : undefined;

        const finalStyle = StyleSheet.flatten([
            resolved,
            disabled && disabledResolved,
            style,
        ]);

        return (
            <RNTouchableOpacity
                ref={ref}
                disabled={disabled}
                style={finalStyle}
                {...(rest as TouchableOpacityProps)}
            />
        );
    },
);
TouchableBox.displayName = 'TouchableBox';

// ── HighlightBox ──────────────────────────────────────────────────────────────

export type HighlightBoxProps = StyleProps &
    Omit<TouchableHighlightProps, 'style'> & {
        style?: TouchableHighlightProps['style'];
        /** Background color shown while pressed — token or raw color. @default 'gray.200' */
        underlayColor?: string;
        /** StyleProps applied when `disabled={true}` */
        disabledStyle?: StyleProps;
    };

/**
 * `<TouchableHighlight>` with full StyleProps support.
 * Swaps to `underlayColor` while pressed instead of fading opacity — useful for
 * list rows, menu items, and anywhere you want a solid highlight instead of a fade.
 *
 * Note: TouchableHighlight requires exactly one non-text child (wrap multiple
 * children in a `<Box>` or `<Row>` if needed).
 *
 * @example
 * <HighlightBox
 *   px="4" py="3.5" bg="white"
 *   underlayColor="slate.100"
 *   disabledStyle={{ opacity: 0.5 }}
 *   onPress={handlePress}
 * >
 *   <Row itemsCenter justifyBetween>
 *     <Text fontSize="base">Settings</Text>
 *     <Text color="slate.400">›</Text>
 *   </Row>
 * </HighlightBox>
 */
export const HighlightBox = forwardRef<ComponentRef<typeof RNTouchableHighlight>, HighlightBoxProps>(
    function HighlightBox({ style, underlayColor, disabledStyle, disabled, ...props }, ref) {
        const { resolved, rest } = splitProps(props as HighlightBoxProps & Record<string, unknown>);
        const disabledResolved = disabledStyle ? resolveStyle(disabledStyle) : undefined;

        const finalStyle = StyleSheet.flatten([
            resolved,
            disabled && disabledResolved,
            style,
        ]);

        const resolvedUnderlay = resolveColor(underlayColor) ?? resolveColor('gray.200');

        return (
            <RNTouchableHighlight
                ref={ref}
                disabled={disabled}
                underlayColor={resolvedUnderlay}
                style={finalStyle}
                {...(rest as TouchableHighlightProps)}
            />
        );
    },
);
HighlightBox.displayName = 'HighlightBox';

// ─────────────────────────────────────────────────────────────────────────────
// UTILITIES  — re-exported for use outside components
// ─────────────────────────────────────────────────────────────────────────────

/** Resolve a StyleProps object to a plain RN style — useful in StyleSheet.create */
export { resolveStyle };

/** Resolve a dot-notation color token to a hex string */
export { resolveColor };