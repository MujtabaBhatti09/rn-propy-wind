import React, { useEffect } from "react";
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    useAnimatedProps,
    withTiming,
    withSpring,
    Easing,
} from "react-native-reanimated";
import type { SharedValue } from "react-native-reanimated";
import { ViewStyle, StyleProp, ViewProps } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { BlurView } from "@react-native-community/blur";
import { StyleProps, resolveStyle, resolveColor } from "../StyledComponents/StyledComponents";

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);
const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);

// ─────────────────────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────────────────────

type AnimationValue = {
    opacity?: number;
    scale?: number;
    translateX?: number;
    translateY?: number;
    /** Degrees as a plain number — e.g. 45 means 45deg */
    rotate?: number;
};

type BlurType =
    | "xlight" | "light" | "dark" | "extraDark" | "regular" | "prominent"
    | "chromeMaterial" | "material" | "thickMaterial" | "thinMaterial" | "ultraThinMaterial"
    | "chromeMaterialDark" | "materialDark" | "thickMaterialDark" | "thinMaterialDark" | "ultraThinMaterialDark";

interface TransitionConfig {
    type?: "timing" | "spring";
    duration?: number;
    damping?: number;
    stiffness?: number;
    easing?: (value: number) => number;
}

export interface MotionProps extends StyleProps {
    style?: StyleProp<ViewStyle>;
    initial?: AnimationValue;
    animate?: AnimationValue;
    exit?: AnimationValue;           // reserved for future unmount animation
    transition?: TransitionConfig;

    // ── Gradient (renders as AnimatedLinearGradient) ──────────────────────────
    gradientColors?: [string, string, ...string[]];
    gradientStart?: { x: number; y: number };
    gradientEnd?: { x: number; y: number };
    useAngle?: boolean;
    angle?: number;
    angleCenter?: { x: number; y: number };

    // ── Blur (renders as AnimatedBlurView) ────────────────────────────────────
    blurType?: BlurType;
    blurAmount?: number;
    viewProps?: ViewProps;
    children?: React.ReactNode;
}

// ─────────────────────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────────────────────

function runAnimation(
    sv: SharedValue<number>,
    target: number,
    type: "timing" | "spring",
    opts: { duration: number; damping: number; stiffness: number; easing: (v: number) => number },
) {
    if (type === "spring") {
        sv.value = withSpring(target, { damping: opts.damping, stiffness: opts.stiffness });
    } else {
        sv.value = withTiming(target, { duration: opts.duration, easing: opts.easing });
    }
}

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

const MotionView: React.FC<MotionProps> = ({
    style,
    initial = {},
    animate = {},
    transition = {},
    gradientColors,
    gradientStart = { x: 0, y: 0 },
    gradientEnd = { x: 1, y: 0 },
    useAngle,
    angle,
    angleCenter,
    blurType,
    blurAmount = 10,
    children,
    viewProps,
    ...styleProps
}) => {
    const {
        type = "timing",
        duration = 500,
        damping = 12,
        stiffness = 100,
        easing = Easing.out(Easing.exp),
    } = transition;

    // ── Shared values (initialised once from `initial`) ───────────────────────
    const opacityV = useSharedValue<number>(initial.opacity ?? 1);
    const scaleV = useSharedValue<number>(initial.scale ?? 1);
    const translateXV = useSharedValue<number>(initial.translateX ?? 0);
    const translateYV = useSharedValue<number>(initial.translateY ?? 0);
    const rotateV = useSharedValue<number>(initial.rotate ?? 0);

    // ── Drive animations whenever animate targets change ──────────────────────
    //    ✅ Destructure to primitive deps — avoids re-running on every render
    //       when the parent passes a new object literal each time.
    const {
        opacity: targetOpacity,
        scale: targetScale,
        translateX: targetX,
        translateY: targetY,
        rotate: targetRotate,
    } = animate;

    useEffect(() => {
        const opts = { duration, damping, stiffness, easing };
        runAnimation(opacityV, targetOpacity ?? opacityV.value, type, opts);
        runAnimation(scaleV, targetScale ?? scaleV.value, type, opts);
        runAnimation(translateXV, targetX ?? translateXV.value, type, opts);
        runAnimation(translateYV, targetY ?? translateYV.value, type, opts);
        runAnimation(rotateV, targetRotate ?? rotateV.value, type, opts);
    }, [
        targetOpacity, targetScale, targetX, targetY, targetRotate,
        type, duration, damping, stiffness,
        // easing intentionally omitted — functions are recreated each render;
        // wrap in useCallback if you need dynamic easing.
    ]);

    // ── Animated style (NEVER flatten — keeps the native-thread binding alive) ─
    const animatedStyle = useAnimatedStyle(() => ({
        opacity: opacityV.value,
        transform: [
            { scale: scaleV.value },
            { translateX: translateXV.value },
            { translateY: translateYV.value },
            // ✅ Convert number → deg string only here, inside the UI thread worklet
            { rotate: `${rotateV.value}deg` },
        ],
    }));

    // ✅ Called unconditionally — satisfies Rules of Hooks.
    //    Only actually used by the BlurView branch below.
    const animatedBlurProps = useAnimatedProps(() => ({
        blurAmount,
    }));

    // Resolve our custom StyleProps → plain RN ViewStyle
    const baseStyle = resolveStyle(styleProps as StyleProps);

    // ── Gradient variant ──────────────────────────────────────────────────────
    if (gradientColors) {
        const resolvedColors = gradientColors.map(
            (c) => resolveColor(c) ?? c
        ) as [string, string, ...string[]];

        const directionProps = useAngle
            ? { useAngle: true as const, angle: angle ?? 0, angleCenter: angleCenter ?? { x: 0.5, y: 0.5 } }
            : { start: gradientStart, end: gradientEnd };

        return (
            <AnimatedLinearGradient
                colors={resolvedColors}
                {...directionProps}
                // ✅ Array — Reanimated keeps its native binding; flatten would destroy it
                style={[baseStyle, animatedStyle, style]}
            >
                {children}
            </AnimatedLinearGradient>
        );
    }

    // ── Blur variant ──────────────────────────────────────────────────────────
    if (blurType) {
        return (
            <AnimatedBlurView
                blurType={blurType}
                // ✅ blurAmount driven through animatedProps so it can be animated too
                animatedProps={animatedBlurProps}
                style={[baseStyle, animatedStyle, style]}
            >
                {children}
            </AnimatedBlurView>
        );
    }

    // ── Default Animated.View ─────────────────────────────────────────────────
    return (
        <Animated.View style={[baseStyle, animatedStyle, style]} {...viewProps}>
            {children}
        </Animated.View>
    );
};

export default MotionView;