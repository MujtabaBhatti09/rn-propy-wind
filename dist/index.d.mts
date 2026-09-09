import { NativeColorValue } from '../StyleSheet/StyleSheetTypes';
import AnimatedAddition from './nodes/AnimatedAddition';
import AnimatedDiffClamp from './nodes/AnimatedDiffClamp';
import AnimatedDivision from './nodes/AnimatedDivision';
import AnimatedInterpolation from './nodes/AnimatedInterpolation';
import AnimatedModulo from './nodes/AnimatedModulo';
import AnimatedMultiplication from './nodes/AnimatedMultiplication';
import AnimatedNode from './nodes/AnimatedNode';
import AnimatedSubtraction from './nodes/AnimatedSubtraction';
import AnimatedValue from './nodes/AnimatedValue';
import { ____ImageStyleProp_Internal, ____ViewStyleProp_Internal } from './StyleSheetTypes';
import * as react_native from 'react-native';
import { DimensionValue, ViewProps, PressableProps, ViewStyle, TouchableHighlightProps, ImageProps, ScrollViewProps, TextProps, TouchableOpacityProps, TextStyle, StyleProp } from 'react-native';
import { MeasureOnSuccessCallback, MeasureInWindowOnSuccessCallback, HostInstance, MeasureLayoutOnSuccessCallback } from '../../../types/HostInstance';
import ReadOnlyElement from './ReadOnlyElement';
import React from 'react';

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<a597b1043a858c8c1524cbc4e181a58e>>
 *
 * This file was translated from Flow by scripts/js-api/build-types/index.js.
 * Original file: packages/react-native/Libraries/Animated/createAnimatedComponent.js
 */


type Nullable = void | null;
type Primitive = string | number | boolean | symbol | void;
type Builtin = (...$$REST$$: ReadonlyArray<never>) => unknown | Date | Error | RegExp;
type WithAnimatedValue<T> = T extends Builtin | Nullable ? T : T extends Primitive ? T | AnimatedNode | AnimatedAddition | AnimatedSubtraction | AnimatedDivision | AnimatedMultiplication | AnimatedModulo | AnimatedDiffClamp | AnimatedValue | AnimatedInterpolation<number | string> | AnimatedInterpolation<number> | AnimatedInterpolation<string> | AnimatedInterpolation<NativeColorValue> : T extends ReadonlyArray<infer P> ? ReadonlyArray<WithAnimatedValue<P>> : T extends {} ? { readonly [K in keyof T]: WithAnimatedValue<T[K]> } : T;

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<065c81ea8b88f90bb3b13a5a35a6807f>>
 *
 * This file was translated from Flow by scripts/js-api/build-types/index.js.
 * Original file: packages/react-native/Libraries/StyleSheet/StyleSheet.js.flow
 */


/**
 * This type should be used as the type for a prop that is passed through
 * to a <View>'s `style` prop. This ensures call sites of the component
 * can't pass styles that View doesn't support such as `fontSize`.`
 *
 * type Props = {style: ViewStyleProp}
 * const MyComponent = (props: Props) => <View style={props.style} />
 */
type ViewStyleProp = ____ViewStyleProp_Internal;
/**
 * This type should be used as the type for a prop that is passed through
 * to an <Image>'s `style` prop. This ensures call sites of the component
 * can't pass styles that Image doesn't support such as `fontSize`.`
 *
 * type Props = {style: ImageStyleProp}
 * const MyComponent = (props: Props) => <Image style={props.style} />
 */
type ImageStyleProp = ____ImageStyleProp_Internal;

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<c09a6c022e2fd5d29aacb28fce9c5b24>>
 *
 * This file was translated from Flow by scripts/js-api/build-types/index.js.
 * Original file: packages/react-native/src/private/webapis/dom/nodes/ReactNativeElement.js
 */


declare class ReactNativeElement extends ReadOnlyElement {
  protected constructor();
  get offsetHeight(): number;
  get offsetLeft(): number;
  get offsetParent(): ReadOnlyElement | null;
  get offsetTop(): number;
  get offsetWidth(): number;
  /**
   * React Native compatibility methods
   */

  /**
   * Removes focus from an input or view. This is the opposite of `focus()`.
   */
  blur(): void;
  /**
   * Requests focus for the given input or view. The exact behavior triggered
   * will depend on the platform and type of view.
   */
  focus(): void;
  /**
   * Determines the location on screen, width, and height of the given view and
   * returns the values via an async callback. If successful, the callback will
   * be called with the following arguments:
   *
   *  - x
   *  - y
   *  - width
   *  - height
   *  - pageX
   *  - pageY
   *
   * Note that these measurements are not available until after the rendering
   * has been completed in native. If you need the measurements as soon as
   * possible, consider using the [`onLayout`
   * prop](docs/view.html#onlayout) instead.
   */
  measure(callback: MeasureOnSuccessCallback): void;
  /**
   * Determines the location of the given view in the window and returns the
   * values via an async callback. If the React root view is embedded in
   * another native view, this will give you the absolute coordinates. If
   * successful, the callback will be called with the following
   * arguments:
   *
   *  - x
   *  - y
   *  - width
   *  - height
   *
   * Note that these measurements are not available until after the rendering
   * has been completed in native.
   */
  measureInWindow(callback: MeasureInWindowOnSuccessCallback): void;
  /**
   * Like [`measure()`](#measure), but measures the view relative an ancestor,
   * specified as `relativeToNativeComponentRef`. This means that the returned x, y
   * are relative to the origin x, y of the ancestor view.
   * _Can also be called with a relativeNativeNodeHandle but is deprecated._
   */
  measureLayout(relativeToNativeNode: number | HostInstance, onSuccess: MeasureLayoutOnSuccessCallback, onFail?: () => void): void;
  /**
   * This function sends props straight to native. They will not participate in
   * future diff process - this means that if you do not include them in the
   * next render, they will remain active (see [Direct
   * Manipulation](https://reactnative.dev/docs/the-new-architecture/direct-manipulation-new-architecture)).
   */
  setNativeProps(nativeProps: {}): void;
}

declare const colors: {
    readonly white: "#FFFFFF";
    readonly black: "#000000";
    readonly transparent: "transparent";
    readonly slate: {
        readonly 50: "#F8FAFC";
        readonly 100: "#F1F5F9";
        readonly 200: "#E2E8F0";
        readonly 300: "#CBD5E1";
        readonly 400: "#94A3B8";
        readonly 500: "#64748B";
        readonly 600: "#475569";
        readonly 700: "#334155";
        readonly 800: "#1E293B";
        readonly 900: "#0F172A";
        readonly 950: "#020617";
    };
    readonly gray: {
        readonly 50: "#F9FAFB";
        readonly 100: "#F3F4F6";
        readonly 200: "#E5E7EB";
        readonly 300: "#D1D5DB";
        readonly 400: "#9CA3AF";
        readonly 500: "#6B7280";
        readonly 600: "#4B5563";
        readonly 700: "#374151";
        readonly 800: "#1F2937";
        readonly 900: "#111827";
        readonly 950: "#030712";
    };
    readonly zinc: {
        readonly 50: "#FAFAFA";
        readonly 100: "#F4F4F5";
        readonly 200: "#E4E4E7";
        readonly 300: "#D4D4D8";
        readonly 400: "#A1A1AA";
        readonly 500: "#71717A";
        readonly 600: "#52525B";
        readonly 700: "#3F3F46";
        readonly 800: "#27272A";
        readonly 900: "#18181B";
        readonly 950: "#09090B";
    };
    readonly red: {
        readonly 50: "#FEF2F2";
        readonly 100: "#FEE2E2";
        readonly 200: "#FECACA";
        readonly 300: "#FCA5A5";
        readonly 400: "#F87171";
        readonly 500: "#EF4444";
        readonly 600: "#DC2626";
        readonly 700: "#B91C1C";
        readonly 800: "#991B1B";
        readonly 900: "#7F1D1D";
        readonly 950: "#450A0A";
    };
    readonly orange: {
        readonly 50: "#FFF7ED";
        readonly 100: "#FFEDD5";
        readonly 200: "#FED7AA";
        readonly 300: "#FDBA74";
        readonly 400: "#FB923C";
        readonly 500: "#F97316";
        readonly 600: "#EA580C";
        readonly 700: "#C2410C";
        readonly 800: "#9A3412";
        readonly 900: "#7C2D12";
        readonly 950: "#431407";
    };
    readonly amber: {
        readonly 50: "#FFFBEB";
        readonly 100: "#FEF3C7";
        readonly 200: "#FDE68A";
        readonly 300: "#FCD34D";
        readonly 400: "#FBBF24";
        readonly 500: "#F59E0B";
        readonly 600: "#D97706";
        readonly 700: "#B45309";
        readonly 800: "#92400E";
        readonly 900: "#78350F";
        readonly 950: "#451A03";
    };
    readonly yellow: {
        readonly 50: "#FEFCE8";
        readonly 100: "#FEF9C3";
        readonly 200: "#FEF08A";
        readonly 300: "#FDE047";
        readonly 400: "#FACC15";
        readonly 500: "#EAB308";
        readonly 600: "#CA8A04";
        readonly 700: "#A16207";
        readonly 800: "#854D0E";
        readonly 900: "#713F12";
        readonly 950: "#422006";
    };
    readonly lime: {
        readonly 50: "#F7FEE7";
        readonly 100: "#ECFCCB";
        readonly 200: "#D9F99D";
        readonly 300: "#BEF264";
        readonly 400: "#A3E635";
        readonly 500: "#84CC16";
        readonly 600: "#65A30D";
        readonly 700: "#4D7C0F";
        readonly 800: "#3F6212";
        readonly 900: "#365314";
        readonly 950: "#1A2E05";
    };
    readonly green: {
        readonly 50: "#F0FDF4";
        readonly 100: "#DCFCE7";
        readonly 200: "#BBF7D0";
        readonly 300: "#86EFAC";
        readonly 400: "#4ADE80";
        readonly 500: "#22C55E";
        readonly 600: "#16A34A";
        readonly 700: "#15803D";
        readonly 800: "#166534";
        readonly 900: "#14532D";
        readonly 950: "#052E16";
    };
    readonly emerald: {
        readonly 50: "#ECFDF5";
        readonly 100: "#D1FAE5";
        readonly 200: "#A7F3D0";
        readonly 300: "#6EE7B7";
        readonly 400: "#34D399";
        readonly 500: "#10B981";
        readonly 600: "#059669";
        readonly 700: "#047857";
        readonly 800: "#065F46";
        readonly 900: "#064E3B";
        readonly 950: "#022C22";
    };
    readonly teal: {
        readonly 50: "#F0FDFA";
        readonly 100: "#CCFBF1";
        readonly 200: "#99F6E4";
        readonly 300: "#5EEAD4";
        readonly 400: "#2DD4BF";
        readonly 500: "#14B8A6";
        readonly 600: "#0D9488";
        readonly 700: "#0F766E";
        readonly 800: "#115E59";
        readonly 900: "#134E4A";
        readonly 950: "#042F2E";
    };
    readonly cyan: {
        readonly 50: "#ECFEFF";
        readonly 100: "#CFFAFE";
        readonly 200: "#A5F3FC";
        readonly 300: "#67E8F9";
        readonly 400: "#22D3EE";
        readonly 500: "#06B6D4";
        readonly 600: "#0891B2";
        readonly 700: "#0E7490";
        readonly 800: "#155E75";
        readonly 900: "#164E63";
        readonly 950: "#083344";
    };
    readonly sky: {
        readonly 50: "#F0F9FF";
        readonly 100: "#E0F2FE";
        readonly 200: "#BAE6FD";
        readonly 300: "#7DD3FC";
        readonly 400: "#38BDF8";
        readonly 500: "#0EA5E9";
        readonly 600: "#0284C7";
        readonly 700: "#0369A1";
        readonly 800: "#075985";
        readonly 900: "#0C4A6E";
        readonly 950: "#082F49";
    };
    readonly blue: {
        readonly 50: "#EFF6FF";
        readonly 100: "#DBEAFE";
        readonly 200: "#BFDBFE";
        readonly 300: "#93C5FD";
        readonly 400: "#60A5FA";
        readonly 500: "#3B82F6";
        readonly 600: "#2563EB";
        readonly 700: "#1D4ED8";
        readonly 800: "#1E40AF";
        readonly 900: "#1E3A8A";
        readonly 950: "#172554";
    };
    readonly indigo: {
        readonly 50: "#EEF2FF";
        readonly 100: "#E0E7FF";
        readonly 200: "#C7D2FE";
        readonly 300: "#A5B4FC";
        readonly 400: "#818CF8";
        readonly 500: "#6366F1";
        readonly 600: "#4F46E5";
        readonly 700: "#4338CA";
        readonly 800: "#3730A3";
        readonly 900: "#312E81";
        readonly 950: "#1E1B4B";
    };
    readonly violet: {
        readonly 50: "#F5F3FF";
        readonly 100: "#EDE9FE";
        readonly 200: "#DDD6FE";
        readonly 300: "#C4B5FD";
        readonly 400: "#A78BFA";
        readonly 500: "#8B5CF6";
        readonly 600: "#7C3AED";
        readonly 700: "#6D28D9";
        readonly 800: "#5B21B6";
        readonly 900: "#4C1D95";
        readonly 950: "#2E1065";
    };
    readonly purple: {
        readonly 50: "#FAF5FF";
        readonly 100: "#F3E8FF";
        readonly 200: "#E9D5FF";
        readonly 300: "#D8B4FE";
        readonly 400: "#C084FC";
        readonly 500: "#A855F7";
        readonly 600: "#9333EA";
        readonly 700: "#7E22CE";
        readonly 800: "#6B21A8";
        readonly 900: "#581C87";
        readonly 950: "#3B0764";
    };
    readonly fuchsia: {
        readonly 50: "#FDF4FF";
        readonly 100: "#FAE8FF";
        readonly 200: "#F5D0FE";
        readonly 300: "#F0ABFC";
        readonly 400: "#E879F9";
        readonly 500: "#D946EF";
        readonly 600: "#C026D3";
        readonly 700: "#A21CAF";
        readonly 800: "#86198F";
        readonly 900: "#701A75";
        readonly 950: "#4A044E";
    };
    readonly pink: {
        readonly 50: "#FDF2F8";
        readonly 100: "#FCE7F3";
        readonly 200: "#FBCFE8";
        readonly 300: "#F9A8D4";
        readonly 400: "#F472B6";
        readonly 500: "#EC4899";
        readonly 600: "#DB2777";
        readonly 700: "#BE185D";
        readonly 800: "#9D174D";
        readonly 900: "#831843";
        readonly 950: "#500724";
    };
    readonly rose: {
        readonly 50: "#FFF1F2";
        readonly 100: "#FFE4E6";
        readonly 200: "#FECDD3";
        readonly 300: "#FDA4AF";
        readonly 400: "#FB7185";
        readonly 500: "#F43F5E";
        readonly 600: "#E11D48";
        readonly 700: "#BE123C";
        readonly 800: "#9F1239";
        readonly 900: "#881337";
        readonly 950: "#4C0519";
    };
};
/** Spacing scale — base unit 4 px.  spacing[4] = 16, spacing[8] = 32 */
declare const spacing: Record<number, number>;
type SpacingValue = number | string;
type ColorValue = string;
type RadiusValue = string | number;
type ShadowValue = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'none';
interface StyleProps {
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
    /** position: 'absolute' */
    absolute?: boolean;
    /** position: 'relative' */
    relative?: boolean;
    /** overflow: 'hidden' | 'visible' | 'scroll' */
    overflow?: 'hidden' | 'visible' | 'scroll';
    /** display: 'none' */
    hidden?: boolean;
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
    /** gap */
    gap?: SpacingValue;
    /** columnGap */
    gapX?: SpacingValue;
    /** rowGap */
    gapY?: SpacingValue;
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
    /** backgroundColor — 'blue.500' | '#fff' | 'transparent' */
    bg?: ColorValue;
    /** color (text / icon tint) */
    color?: ColorValue;
    /** borderColor */
    borderColor?: ColorValue;
    /** opacity 0–1 */
    opacity?: number;
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
    /** Cross-platform shadow preset */
    shadow?: ShadowValue;
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
declare function resolveColor(v?: string): string | undefined;
declare function resolveStyle(p: StyleProps): ViewStyle & TextStyle;
type BoxProps = StyleProps & Omit<ViewProps, 'style'> & {
    style?: ViewProps['style'];
};
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
declare const Box: React.ForwardRefExoticComponent<StyleProps & Omit<ViewProps, "style"> & {
    style?: ViewProps["style"];
} & React.RefAttributes<ReactNativeElement>>;
/**
 * `<Box flexRow>` — horizontal layout, flexDirection: 'row' pre-applied.
 *
 * @example
 * <Row itemsCenter justifyBetween px="4" py="3">
 *   <Text bold>Left</Text>
 *   <Text color="blue.500">Right</Text>
 * </Row>
 */
declare const Row: React.ForwardRefExoticComponent<StyleProps & Omit<ViewProps, "style"> & {
    style?: ViewProps["style"];
} & React.RefAttributes<ReactNativeElement>>;
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
declare const Col: React.ForwardRefExoticComponent<StyleProps & Omit<ViewProps, "style"> & {
    style?: ViewProps["style"];
} & React.RefAttributes<ReactNativeElement>>;
/** Alias for Col */
declare const Stack: React.ForwardRefExoticComponent<StyleProps & Omit<ViewProps, "style"> & {
    style?: ViewProps["style"];
} & React.RefAttributes<ReactNativeElement>>;
type TextComponentProps = StyleProps & Omit<TextProps, 'style'> & {
    style?: TextProps['style'];
};
/**
 * Typographic primitive — `<Text>` with full StyleProps support.
 *
 * @example
 * <Text bold fontSize="2xl" color="slate.900" mb="1">Heading</Text>
 * <Text fontSize="sm" color="slate.500" lineHeight={20}>
 *   Supporting copy here.
 * </Text>
 */
declare const Text: React.ForwardRefExoticComponent<StyleProps & Omit<TextProps, "style"> & {
    style?: TextProps["style"];
} & React.RefAttributes<ReactNativeElement>>;
type PressableComponentProps = StyleProps & Omit<PressableProps, 'style'> & {
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
declare const Pressable: React.ForwardRefExoticComponent<StyleProps & Omit<PressableProps, "style"> & {
    style?: PressableProps["style"];
    /** StyleProps applied while the element is being pressed */
    pressedStyle?: StyleProps;
    /** StyleProps applied when `disabled={true}` */
    disabledStyle?: StyleProps;
} & React.RefAttributes<ReactNativeElement>>;
type ScrollBoxProps = StyleProps & Omit<ScrollViewProps, 'style' | 'contentContainerStyle'> & {
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
declare const ScrollBox: React.ForwardRefExoticComponent<StyleProps & Omit<ScrollViewProps, "style" | "contentContainerStyle"> & {
    style?: ScrollViewProps["style"];
    /** StyleProps for the inner content container */
    contentStyle?: StyleProps;
    contentContainerStyle?: ScrollViewProps["contentContainerStyle"];
} & React.RefAttributes<react_native.ScrollViewInstance>>;
/**
 * `<SafeAreaView>` with full StyleProps support.
 *
 * @example
 * <SafeBox flex1 bg="white">
 *   <Header />
 *   <Content />
 * </SafeBox>
 */
declare const SafeBox: React.ForwardRefExoticComponent<StyleProps & Omit<ViewProps, "style"> & {
    style?: ViewProps["style"];
} & React.RefAttributes<ReactNativeElement>>;
type ImgProps = StyleProps & Omit<ImageProps, 'style'> & {
    style?: ImageProps['style'];
};
/**
 * `<Image>` with full StyleProps support.
 *
 * @example
 * <Img source={{ uri }} w="16" h="16" rounded="full" />
 */
declare const Img: React.ForwardRefExoticComponent<StyleProps & Omit<Readonly<Omit<Readonly<{
    defaultSource?: react_native.ImageSource | undefined;
    onPartialLoad?: (() => void) | undefined;
    onProgress?: ((event: react_native.ImageProgressEventIOS) => void) | undefined;
}>, "style" | "loadingIndicatorSource" | "progressiveRenderingEnabled" | "fadeDuration" | "resizeMethod" | "resizeMultiplier" | keyof react_native.ImagePropsBase> & Omit<Readonly<{
    loadingIndicatorSource?: (number | Readonly<react_native.ImageURISource>) | undefined;
    progressiveRenderingEnabled?: boolean | undefined;
    fadeDuration?: number | undefined;
    resizeMethod?: ("auto" | "resize" | "scale" | "none") | undefined;
    resizeMultiplier?: number | undefined;
}>, "style" | keyof react_native.ImagePropsBase> & Omit<react_native.ImagePropsBase, "style"> & {
    style?: ImageStyleProp | undefined;
}>, "style"> & {
    style?: ImageProps["style"];
} & React.RefAttributes<ReactNativeElement>>;
type GradientButtonProps = StyleProps & Omit<PressableProps, 'style' | 'children'> & {
    /** Inline Pressable container style override */
    style?: ViewStyle;
    /**
     * Gradient stop colors — minimum 2.
     * Accepts color tokens ('blue.500', 'violet.600') and raw hex / rgba strings.
     */
    colors: [string, string, ...string[]];
    /** Gradient start point. Default: `{ x: 0, y: 0 }` (top-left) */
    start?: {
        x: number;
        y: number;
    };
    /** Gradient end point. Default: `{ x: 1, y: 0 }` (left → right) */
    end?: {
        x: number;
        y: number;
    };
    /** Switch to angle-based gradient instead of start / end */
    useAngle?: boolean;
    /** Angle in degrees — only used when `useAngle={true}` */
    angle?: number;
    /** Rotation origin — only used when `useAngle={true}` */
    angleCenter?: {
        x: number;
        y: number;
    };
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
declare const GradientButton: React.ForwardRefExoticComponent<StyleProps & Omit<PressableProps, "style" | "children"> & {
    /** Inline Pressable container style override */
    style?: ViewStyle;
    /**
     * Gradient stop colors — minimum 2.
     * Accepts color tokens ('blue.500', 'violet.600') and raw hex / rgba strings.
     */
    colors: [string, string, ...string[]];
    /** Gradient start point. Default: `{ x: 0, y: 0 }` (top-left) */
    start?: {
        x: number;
        y: number;
    };
    /** Gradient end point. Default: `{ x: 1, y: 0 }` (left → right) */
    end?: {
        x: number;
        y: number;
    };
    /** Switch to angle-based gradient instead of start / end */
    useAngle?: boolean;
    /** Angle in degrees — only used when `useAngle={true}` */
    angle?: number;
    /** Rotation origin — only used when `useAngle={true}` */
    angleCenter?: {
        x: number;
        y: number;
    };
    /** StyleProps applied while the button is being pressed */
    pressedStyle?: StyleProps;
    /** StyleProps applied when `disabled={true}` */
    disabledStyle?: StyleProps;
    children?: React.ReactNode;
} & React.RefAttributes<ReactNativeElement>>;
/**
 * All blur types supported by `@react-native-community/blur`.
 *
 * iOS system materials:   'ultraThinMaterial' | 'thinMaterial' | 'material' | 'thickMaterial' | 'chromeMaterial'
 * iOS dark materials:     append 'Dark' to any material variant above
 * iOS legacy:             'xlight' | 'light' | 'dark' | 'extraDark' | 'regular' | 'prominent'
 * Android:                'light' | 'dark' | 'xlight' | 'prominent' | 'regular'
 */
type BlurType$1 = 'xlight' | 'light' | 'dark' | 'extraDark' | 'regular' | 'prominent' | 'chromeMaterial' | 'material' | 'thickMaterial' | 'thinMaterial' | 'ultraThinMaterial' | 'chromeMaterialDark' | 'materialDark' | 'thickMaterialDark' | 'thinMaterialDark' | 'ultraThinMaterialDark' | 'softUIThinMaterial' | 'softUIThinMaterialDark';
type BlurBoxProps = StyleProps & Omit<ViewProps, 'style'> & {
    style?: ViewProps['style'];
    /**
     * Blur effect type.
     * Use material variants ('chromeMaterial', 'thinMaterial') for iOS 14+ frosted-glass look.
     * @default 'light'
     */
    blurType?: BlurType$1;
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
declare const BlurBox: React.ForwardRefExoticComponent<StyleProps & Omit<ViewProps, "style"> & {
    style?: ViewProps["style"];
    /**
     * Blur effect type.
     * Use material variants ('chromeMaterial', 'thinMaterial') for iOS 14+ frosted-glass look.
     * @default 'light'
     */
    blurType?: BlurType$1;
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
} & React.RefAttributes<(props: Omit<ViewProps, keyof {
    ref?: React.Ref<react_native.ViewInstance> | undefined;
}> & {
    ref?: React.Ref<react_native.ViewInstance> | undefined;
}) => React.ReactNode>>;
type TouchableBoxProps = StyleProps & Omit<TouchableOpacityProps, 'style'> & {
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
declare const TouchableBox: React.ForwardRefExoticComponent<StyleProps & Omit<Readonly<Omit<react_native.TouchableWithoutFeedbackProps, "style" | "hasTVPreferredFocus" | "nextFocusDown" | "nextFocusForward" | "nextFocusLeft" | "nextFocusRight" | "nextFocusUp" | "activeOpacity" | "hostRef"> & Omit<Readonly<{
    hasTVPreferredFocus?: boolean | undefined;
    nextFocusDown?: number | undefined;
    nextFocusForward?: number | undefined;
    nextFocusLeft?: number | undefined;
    nextFocusRight?: number | undefined;
    nextFocusUp?: number | undefined;
}>, "style" | "activeOpacity" | "hostRef"> & Omit<Readonly<{
    activeOpacity?: number | undefined;
    style?: WithAnimatedValue<ViewStyleProp> | undefined;
    hostRef?: React.Ref<react_native.TouchableOpacityInstance> | undefined;
}>, never>>, "style"> & {
    style?: TouchableOpacityProps["style"];
    /** StyleProps applied when `disabled={true}` */
    disabledStyle?: StyleProps;
} & React.RefAttributes<ReactNativeElement>>;
type HighlightBoxProps = StyleProps & Omit<TouchableHighlightProps, 'style'> & {
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
declare const HighlightBox: React.ForwardRefExoticComponent<StyleProps & Omit<TouchableHighlightProps, "style"> & {
    style?: TouchableHighlightProps["style"];
    /** Background color shown while pressed — token or raw color. @default 'gray.200' */
    underlayColor?: string;
    /** StyleProps applied when `disabled={true}` */
    disabledStyle?: StyleProps;
} & React.RefAttributes<ReactNativeElement>>;

type AnimationValue = {
    opacity?: number;
    scale?: number;
    translateX?: number;
    translateY?: number;
    /** Degrees as a plain number — e.g. 45 means 45deg */
    rotate?: number;
};
type BlurType = "xlight" | "light" | "dark" | "extraDark" | "regular" | "prominent" | "chromeMaterial" | "material" | "thickMaterial" | "thinMaterial" | "ultraThinMaterial" | "chromeMaterialDark" | "materialDark" | "thickMaterialDark" | "thinMaterialDark" | "ultraThinMaterialDark";
interface TransitionConfig {
    type?: "timing" | "spring";
    duration?: number;
    damping?: number;
    stiffness?: number;
    easing?: (value: number) => number;
}
interface MotionProps extends StyleProps {
    style?: StyleProp<ViewStyle>;
    initial?: AnimationValue;
    animate?: AnimationValue;
    exit?: AnimationValue;
    transition?: TransitionConfig;
    gradientColors?: [string, string, ...string[]];
    gradientStart?: {
        x: number;
        y: number;
    };
    gradientEnd?: {
        x: number;
        y: number;
    };
    useAngle?: boolean;
    angle?: number;
    angleCenter?: {
        x: number;
        y: number;
    };
    blurType?: BlurType;
    blurAmount?: number;
    viewProps?: ViewProps;
    children?: React.ReactNode;
}
declare const MotionView: React.FC<MotionProps>;

export { BlurBox, type BlurBoxProps, type BlurType$1 as BlurType, Box, type BoxProps, Col, GradientButton, type GradientButtonProps, HighlightBox, type HighlightBoxProps, Img, type ImgProps, MotionView, Pressable, type PressableComponentProps, Row, SafeBox, ScrollBox, type ScrollBoxProps, Stack, type StyleProps, Text, type TextComponentProps, TouchableBox, type TouchableBoxProps, colors, resolveColor, resolveStyle, spacing };
