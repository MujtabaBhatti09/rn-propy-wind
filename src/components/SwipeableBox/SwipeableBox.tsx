import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
    withTiming,
    runOnJS,
} from 'react-native-reanimated';

interface SwipeableBoxProps {
    children: React.ReactNode;
    style?: ViewStyle;
    onSwipeLeft?: () => void;
    onSwipeRight?: () => void;
    swipeThreshold?: number; // distance in px needed to trigger a swipe action
}

export default function SwipeableBox({
    children,
    style,
    onSwipeLeft,
    onSwipeRight,
    swipeThreshold = 120,
}: SwipeableBoxProps) {
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);

    const pan = Gesture.Pan()
        .onUpdate((event) => {
            translateX.value = event.translationX;
            translateY.value = event.translationY;
        })
        .onEnd((event) => {
            const swipedFarEnough = Math.abs(event.translationX) > swipeThreshold;

            if (swipedFarEnough) {
                const direction = event.translationX > 0 ? 1 : -1;
                // Animate off-screen in the swipe direction
                translateX.value = withTiming(direction * 500, { duration: 200 }, () => {
                    if (direction > 0 && onSwipeRight) runOnJS(onSwipeRight)();
                    if (direction < 0 && onSwipeLeft) runOnJS(onSwipeLeft)();
                    // Reset position after callback (remove this if the box should stay gone)
                    translateX.value = 0;
                    translateY.value = 0;
                });
            } else {
                // Snap back to original position
                translateX.value = withSpring(0);
                translateY.value = withSpring(0);
            }
        });

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [
            { translateX: translateX.value },
            { translateY: translateY.value },
        ],
    }));

    return (
        <GestureDetector gesture={pan}>
            <Animated.View style={[style, animatedStyle]}>
                {children}
            </Animated.View>
        </GestureDetector>
    );
}