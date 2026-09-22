# rn-propy-wind

**Tailwind-style utility props for React Native.**
Style your views the way you style Tailwind classes — as props — with a token system for colors, spacing, radius, shadows and typography, plus built-in animation and gesture primitives powered by Reanimated and Gesture Handler.

[![npm version](https://img.shields.io/npm/v/rn-propy-wind.svg)](https://www.npmjs.com/package/rn-propy-wind)
[![license](https://img.shields.io/npm/l/rn-propy-wind.svg)](./LICENSE)
[![npm downloads](https://img.shields.io/npm/dm/rn-propy-wind.svg)](https://www.npmjs.com/package/rn-propy-wind)

```tsx
<Box flex1 bg="slate.50" px={4} py={6}>
  <Box flexRow itemsCenter gap={3} bg="white" rounded="xl" shadow="sm" p={4}>
    <Box size={10} rounded="full" bg="blue.500" />
    <Box flex1>
      <Text bold fontSize="base" color="slate.900">Card title</Text>
      <Text fontSize="sm" color="slate.500" mt={1}>Subtitle text</Text>
    </Box>
  </Box>
</Box>
```

No `StyleSheet.create`, no inline style objects, no context providers — just props.

---

## Why

React Native styling usually means one of:
- Sprinkling `StyleSheet.create` objects everywhere
- Reaching for a full CSS-in-JS runtime
- Hand-rolling a design system from scratch

`rn-propy-wind` gives you a Tailwind-shaped prop API on top of plain `View`/`Text`/`TouchableOpacity` — familiar naming, zero runtime CSS parsing, and full TypeScript autocomplete on every prop.

## Install

```bash
npm install rn-propy-wind
```

`react-native-reanimated`, `react-native-gesture-handler`, `react-native-linear-gradient`, and `@react-native-community/blur` are optional peer dependencies — only needed if you use `MotionView`'s gradient/blur/animation variants or `SwipeableBox`.

```bash
npm install react-native-reanimated react-native-gesture-handler react-native-linear-gradient @react-native-community/blur
```

If you use `SwipeableBox` or `MotionView`, make sure your app is wrapped in `GestureHandlerRootView` and that the Reanimated babel plugin is configured — see [Gesture & animation setup](#gesture--animation-setup) below.

## Quick start

```tsx
import { Box, Row, Text, TouchableBox } from "rn-propy-wind";

export function ProfileCard() {
  return (
    <Box bg="white" rounded="2xl" shadow="md" p={5} gap={3}>
      <Row itemsCenter justifyBetween>
        <Text bold fontSize="lg" color="slate.900">Jane Cooper</Text>
        <Text fontSize="sm" color="slate.400">@janecooper</Text>
      </Row>

      <TouchableBox
        bg="blue.600"
        px={5} py={3}
        rounded="lg"
        itemsCenter
        activeOpacity={0.7}
        onPress={() => console.log("pressed")}
      >
        <Text bold color="white">Follow</Text>
      </TouchableBox>
    </Box>
  );
}
```

## Components

| Component | Wraps | Notes |
|---|---|---|
| `Box` | `View` | Base layout primitive |
| `Row` | `View` | `Box` with `flexDirection: 'row'` |
| `Col` | `View` | `Box` with `flexDirection: 'column'` |
| `Text` | `Text` | Full typography prop set |
| `BlurBox` | `BlurView` | iOS/Android native blur, requires `@react-native-community/blur` |
| `TouchableBox` | `TouchableOpacity` | Adds `disabledStyle` prop |
| `HighlightBox` | `TouchableHighlight` | Adds `underlayColor` (token-aware) + `disabledStyle` |
| `MotionView` | `Animated.View` / `LinearGradient` / `BlurView` | Reanimated-driven `initial` / `animate` / `transition` props |
| `SwipeableBox` | `Animated.View` + `GestureDetector` | Draggable box with swipe-to-trigger callbacks, requires `react-native-gesture-handler` + `react-native-reanimated` |

## Style props

All layout components accept the same `StyleProps` shape:

```
Flex        flex1, flexRow, flexCol, flexRowReverse, flexColReverse,
            flexWrap, flexNowrap, flexGrow, flexShrink
Justify     justifyStart / End / Center / Between / Around / Evenly
Align       itemsStart / End / Center / Stretch / Baseline
Self        selfStart / End / Center / Stretch / Auto
Position    absolute, relative, overflow, hidden, top, bottom, left, right, inset, z
Spacing     p, px, py, pt, pb, pl, pr, m, mx, my, mt, mb, ml, mr, gap, gapX, gapY
Size        w, h, minW, minH, maxW, maxH, size
Color       bg, color, opacity
Border      border, borderTop/Bottom/Left/Right, borderColor
Radius      rounded, roundedT/B/L/R, roundedTL/TR/BL/BR
Shadow      shadow ("sm" | "md" | "lg" | "xl" | "2xl" | "none")
Typography  fontSize, fontWeight, lineHeight, letterSpacing, fontFamily,
            textLeft/Center/Right, italic, bold, semibold, medium,
            uppercase, lowercase, capitalize, underline, strikethrough
```

Spacing and radius accept either a token (`p={4}` → 16px) or a raw value (`p={"12px"}`, `w={"50%"}`). Colors accept dot-notation tokens (`"blue.500"`) or any raw color string (`"#1e90ff"`).

### Color tokens

Full Tailwind-equivalent palette (`slate`, `gray`, `zinc`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `emerald`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `fuchsia`, `pink`, `rose`) each with shades `50`–`950`, plus `white`, `black`, `transparent`.

## Animation with `MotionView`

```tsx
import { MotionView } from "rn-propy-wind";

<MotionView
  initial={{ opacity: 0, translateY: 20 }}
  animate={{ opacity: 1, translateY: 0 }}
  transition={{ type: "spring", damping: 14, stiffness: 120 }}
  bg="white" rounded="xl" p={4}
>
  <Text>Fades and slides in on mount</Text>
</MotionView>
```

`MotionView` also renders as an animated `LinearGradient` when you pass `gradientColors`, or an animated `BlurView` when you pass `blurType` — same `StyleProps` API throughout.

## Swiping with `SwipeableBox`

A draggable box that snaps back on a light swipe and fires a callback + animates off-screen once the drag passes a threshold — useful for dismissible cards, delete/archive rows, or Tinder-style stacks.

```tsx
import { SwipeableBox, Text } from "rn-propy-wind";

<SwipeableBox
  bg="indigo.600"
  rounded="xl"
  p={4}
  swipeThreshold={120}
  onSwipeLeft={() => console.log("swiped left — e.g. delete")}
  onSwipeRight={() => console.log("swiped right — e.g. archive")}
>
  <Text bold color="white">Swipe me</Text>
</SwipeableBox>
```

**Props:**

| Prop | Type | Default | Description |
|---|---|---|---|
| `onSwipeLeft` | `() => void` | — | Called once the box is dragged left past `swipeThreshold` |
| `onSwipeRight` | `() => void` | — | Called once the box is dragged right past `swipeThreshold` |
| `swipeThreshold` | `number` | `120` | Horizontal drag distance (px) required to trigger a swipe |
| `...StyleProps` | — | — | Accepts the same `bg`, `rounded`, `p`, `shadow`, etc. as `Box` |

By default the box resets to its original position after firing a swipe callback. If you want it to stay off-screen (e.g. removed from a list), remove the item from your parent's state inside the `onSwipeLeft`/`onSwipeRight` callback rather than relying on the box's own reset behavior.

`SwipeableBox` uses `react-native-gesture-handler`'s Pan gesture and Reanimated shared values under the hood, so both packages are required at runtime — see setup below.

## Gesture & animation setup

`MotionView` and `SwipeableBox` require `react-native-reanimated` (and `SwipeableBox` additionally requires `react-native-gesture-handler`) to be installed and configured natively, not just added to `package.json`:

1. **Babel** — add the Reanimated plugin as the **last** entry in `babel.config.js`:
   ```js
   module.exports = {
     presets: ["module:metro-react-native-babel-preset"],
     plugins: ["react-native-reanimated/plugin"], // must be last
   };
   ```

2. **Root wrapper** — wrap your app in `GestureHandlerRootView` (required for any Gesture Handler usage, including `SwipeableBox`):
   ```tsx
   import { GestureHandlerRootView } from "react-native-gesture-handler";

   export default function App() {
     return (
       <GestureHandlerRootView style={{ flex: 1 }}>
         {/* rest of your app */}
       </GestureHandlerRootView>
     );
   }
   ```

3. **Rebuild** — these packages touch native code, so a JS-only reload won't pick up the changes; run a full native rebuild after installing.

## Utilities

`resolveStyle(props)` and `resolveColor(token)` are exported directly, in case you need to resolve style props outside of a component (e.g. inside `StyleSheet.create` or a third-party component's `style` prop).

```tsx
import { resolveStyle, resolveColor } from "rn-propy-wind";

const style = resolveStyle({ bg: "slate.900", rounded: "lg", p: 4 });
const hex = resolveColor("blue.500"); // "#3B82F6"
```

## TypeScript

Fully typed — every prop is autocompleted, and `StyleProps` is exported for building your own components on top of the same system.

## Requirements

- React Native ≥ 0.70
- React ≥ 18

## Contributing

Issues and PRs welcome. Please open an issue before submitting large changes so we can discuss approach first.

## License

[MIT](./LICENSE) © Mujtaba Bhatti