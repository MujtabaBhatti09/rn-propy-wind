"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  BlurBox: () => BlurBox,
  Box: () => Box,
  Col: () => Col,
  GradientButton: () => GradientButton,
  HighlightBox: () => HighlightBox,
  Img: () => Img,
  MotionView: () => MotionView_default,
  Pressable: () => Pressable,
  Row: () => Row,
  SafeBox: () => SafeBox,
  ScrollBox: () => ScrollBox,
  Stack: () => Stack,
  Text: () => Text,
  TouchableBox: () => TouchableBox,
  colors: () => colors,
  resolveColor: () => resolveColor,
  resolveStyle: () => resolveStyle,
  spacing: () => spacing
});
module.exports = __toCommonJS(index_exports);

// src/components/StyledComponents/StyledComponents.tsx
var import_react = __toESM(require("react"));
var import_react_native = require("react-native");
var import_react_native_linear_gradient = __toESM(require("react-native-linear-gradient"));
var import_blur = require("@react-native-community/blur");
var colors = {
  white: "#FFFFFF",
  black: "#000000",
  transparent: "transparent",
  slate: { 50: "#F8FAFC", 100: "#F1F5F9", 200: "#E2E8F0", 300: "#CBD5E1", 400: "#94A3B8", 500: "#64748B", 600: "#475569", 700: "#334155", 800: "#1E293B", 900: "#0F172A", 950: "#020617" },
  gray: { 50: "#F9FAFB", 100: "#F3F4F6", 200: "#E5E7EB", 300: "#D1D5DB", 400: "#9CA3AF", 500: "#6B7280", 600: "#4B5563", 700: "#374151", 800: "#1F2937", 900: "#111827", 950: "#030712" },
  zinc: { 50: "#FAFAFA", 100: "#F4F4F5", 200: "#E4E4E7", 300: "#D4D4D8", 400: "#A1A1AA", 500: "#71717A", 600: "#52525B", 700: "#3F3F46", 800: "#27272A", 900: "#18181B", 950: "#09090B" },
  red: { 50: "#FEF2F2", 100: "#FEE2E2", 200: "#FECACA", 300: "#FCA5A5", 400: "#F87171", 500: "#EF4444", 600: "#DC2626", 700: "#B91C1C", 800: "#991B1B", 900: "#7F1D1D", 950: "#450A0A" },
  orange: { 50: "#FFF7ED", 100: "#FFEDD5", 200: "#FED7AA", 300: "#FDBA74", 400: "#FB923C", 500: "#F97316", 600: "#EA580C", 700: "#C2410C", 800: "#9A3412", 900: "#7C2D12", 950: "#431407" },
  amber: { 50: "#FFFBEB", 100: "#FEF3C7", 200: "#FDE68A", 300: "#FCD34D", 400: "#FBBF24", 500: "#F59E0B", 600: "#D97706", 700: "#B45309", 800: "#92400E", 900: "#78350F", 950: "#451A03" },
  yellow: { 50: "#FEFCE8", 100: "#FEF9C3", 200: "#FEF08A", 300: "#FDE047", 400: "#FACC15", 500: "#EAB308", 600: "#CA8A04", 700: "#A16207", 800: "#854D0E", 900: "#713F12", 950: "#422006" },
  lime: { 50: "#F7FEE7", 100: "#ECFCCB", 200: "#D9F99D", 300: "#BEF264", 400: "#A3E635", 500: "#84CC16", 600: "#65A30D", 700: "#4D7C0F", 800: "#3F6212", 900: "#365314", 950: "#1A2E05" },
  green: { 50: "#F0FDF4", 100: "#DCFCE7", 200: "#BBF7D0", 300: "#86EFAC", 400: "#4ADE80", 500: "#22C55E", 600: "#16A34A", 700: "#15803D", 800: "#166534", 900: "#14532D", 950: "#052E16" },
  emerald: { 50: "#ECFDF5", 100: "#D1FAE5", 200: "#A7F3D0", 300: "#6EE7B7", 400: "#34D399", 500: "#10B981", 600: "#059669", 700: "#047857", 800: "#065F46", 900: "#064E3B", 950: "#022C22" },
  teal: { 50: "#F0FDFA", 100: "#CCFBF1", 200: "#99F6E4", 300: "#5EEAD4", 400: "#2DD4BF", 500: "#14B8A6", 600: "#0D9488", 700: "#0F766E", 800: "#115E59", 900: "#134E4A", 950: "#042F2E" },
  cyan: { 50: "#ECFEFF", 100: "#CFFAFE", 200: "#A5F3FC", 300: "#67E8F9", 400: "#22D3EE", 500: "#06B6D4", 600: "#0891B2", 700: "#0E7490", 800: "#155E75", 900: "#164E63", 950: "#083344" },
  sky: { 50: "#F0F9FF", 100: "#E0F2FE", 200: "#BAE6FD", 300: "#7DD3FC", 400: "#38BDF8", 500: "#0EA5E9", 600: "#0284C7", 700: "#0369A1", 800: "#075985", 900: "#0C4A6E", 950: "#082F49" },
  blue: { 50: "#EFF6FF", 100: "#DBEAFE", 200: "#BFDBFE", 300: "#93C5FD", 400: "#60A5FA", 500: "#3B82F6", 600: "#2563EB", 700: "#1D4ED8", 800: "#1E40AF", 900: "#1E3A8A", 950: "#172554" },
  indigo: { 50: "#EEF2FF", 100: "#E0E7FF", 200: "#C7D2FE", 300: "#A5B4FC", 400: "#818CF8", 500: "#6366F1", 600: "#4F46E5", 700: "#4338CA", 800: "#3730A3", 900: "#312E81", 950: "#1E1B4B" },
  violet: { 50: "#F5F3FF", 100: "#EDE9FE", 200: "#DDD6FE", 300: "#C4B5FD", 400: "#A78BFA", 500: "#8B5CF6", 600: "#7C3AED", 700: "#6D28D9", 800: "#5B21B6", 900: "#4C1D95", 950: "#2E1065" },
  purple: { 50: "#FAF5FF", 100: "#F3E8FF", 200: "#E9D5FF", 300: "#D8B4FE", 400: "#C084FC", 500: "#A855F7", 600: "#9333EA", 700: "#7E22CE", 800: "#6B21A8", 900: "#581C87", 950: "#3B0764" },
  fuchsia: { 50: "#FDF4FF", 100: "#FAE8FF", 200: "#F5D0FE", 300: "#F0ABFC", 400: "#E879F9", 500: "#D946EF", 600: "#C026D3", 700: "#A21CAF", 800: "#86198F", 900: "#701A75", 950: "#4A044E" },
  pink: { 50: "#FDF2F8", 100: "#FCE7F3", 200: "#FBCFE8", 300: "#F9A8D4", 400: "#F472B6", 500: "#EC4899", 600: "#DB2777", 700: "#BE185D", 800: "#9D174D", 900: "#831843", 950: "#500724" },
  rose: { 50: "#FFF1F2", 100: "#FFE4E6", 200: "#FECDD3", 300: "#FDA4AF", 400: "#FB7185", 500: "#F43F5E", 600: "#E11D48", 700: "#BE123C", 800: "#9F1239", 900: "#881337", 950: "#4C0519" }
};
var spacing = {
  0: 0,
  0.5: 2,
  1: 4,
  1.5: 6,
  2: 8,
  2.5: 10,
  3: 12,
  3.5: 14,
  4: 16,
  5: 20,
  6: 24,
  7: 28,
  8: 32,
  9: 36,
  10: 40,
  11: 44,
  12: 48,
  14: 56,
  16: 64,
  20: 80,
  24: 96,
  28: 112,
  32: 128,
  36: 144,
  40: 160,
  44: 176,
  48: 192,
  52: 208,
  56: 224,
  60: 240,
  64: 256
};
var fontSizeTokens = {
  xs: { fontSize: 12, lineHeight: 16 },
  sm: { fontSize: 14, lineHeight: 20 },
  base: { fontSize: 16, lineHeight: 24 },
  md: { fontSize: 16, lineHeight: 24 },
  lg: { fontSize: 18, lineHeight: 28 },
  xl: { fontSize: 20, lineHeight: 28 },
  "2xl": { fontSize: 24, lineHeight: 32 },
  "3xl": { fontSize: 30, lineHeight: 36 },
  "4xl": { fontSize: 36, lineHeight: 40 },
  "5xl": { fontSize: 48, lineHeight: 52 },
  "6xl": { fontSize: 60, lineHeight: 64 },
  "7xl": { fontSize: 72, lineHeight: 76 }
};
var fontWeightTokens = {
  thin: "100",
  extralight: "200",
  light: "300",
  normal: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
  extrabold: "800",
  black: "900"
};
var radiusTokens = {
  none: 0,
  sm: 2,
  base: 4,
  md: 6,
  lg: 8,
  xl: 12,
  "2xl": 16,
  "3xl": 24,
  full: 9999,
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24
};
var shadowTokens = {
  none: { elevation: 0, shadowColor: "#000", shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0, shadowRadius: 0 },
  sm: { elevation: 2, shadowColor: "#000", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.18, shadowRadius: 1.5 },
  md: { elevation: 4, shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, shadowRadius: 3.5 },
  lg: { elevation: 8, shadowColor: "#000", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.24, shadowRadius: 7 },
  xl: { elevation: 16, shadowColor: "#000", shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.28, shadowRadius: 14 },
  "2xl": { elevation: 24, shadowColor: "#000", shadowOffset: { width: 0, height: 12 }, shadowOpacity: 0.32, shadowRadius: 20 }
};
function resolveColor(v) {
  var _a, _b;
  if (!v) return void 0;
  if (v === "white") return colors.white;
  if (v === "black") return colors.black;
  if (v === "transparent") return colors.transparent;
  if (/^[a-z]+\.\d+$/.test(v)) {
    const [name, shade] = v.split(".");
    return (_b = (_a = colors[name]) == null ? void 0 : _a[shade]) != null ? _b : v;
  }
  return v;
}
function sp(v) {
  var _a;
  if (v === void 0) return void 0;
  if (typeof v === "number") return v;
  if (v === "auto" || v.endsWith("%")) return v;
  const key = parseFloat(v);
  return Number.isFinite(key) ? (_a = spacing[key]) != null ? _a : key : v;
}
function rr(v) {
  var _a;
  if (v === void 0) return void 0;
  return (_a = radiusTokens[v]) != null ? _a : typeof v === "number" ? v : void 0;
}
function resolveStyle(p) {
  var _a, _b;
  const s = {};
  if (p.flex1) s.flex = 1;
  if (p.flexRow) s.flexDirection = "row";
  if (p.flexCol) s.flexDirection = "column";
  if (p.flexRowReverse) s.flexDirection = "row-reverse";
  if (p.flexColReverse) s.flexDirection = "column-reverse";
  if (p.flexWrap) s.flexWrap = "wrap";
  if (p.flexNowrap) s.flexWrap = "nowrap";
  if (p.flexGrow) s.flexGrow = 1;
  if (p.flexShrink) s.flexShrink = 1;
  if (p.justifyStart) s.justifyContent = "flex-start";
  if (p.justifyEnd) s.justifyContent = "flex-end";
  if (p.justifyCenter) s.justifyContent = "center";
  if (p.justifyBetween) s.justifyContent = "space-between";
  if (p.justifyAround) s.justifyContent = "space-around";
  if (p.justifyEvenly) s.justifyContent = "space-evenly";
  if (p.itemsStart) s.alignItems = "flex-start";
  if (p.itemsEnd) s.alignItems = "flex-end";
  if (p.itemsCenter) s.alignItems = "center";
  if (p.itemsStretch) s.alignItems = "stretch";
  if (p.itemsBaseline) s.alignItems = "baseline";
  if (p.selfStart) s.alignSelf = "flex-start";
  if (p.selfEnd) s.alignSelf = "flex-end";
  if (p.selfCenter) s.alignSelf = "center";
  if (p.selfStretch) s.alignSelf = "stretch";
  if (p.selfAuto) s.alignSelf = "auto";
  if (p.absolute) s.position = "absolute";
  if (p.relative) s.position = "relative";
  if (p.overflow) s.overflow = p.overflow;
  if (p.hidden) s.display = "none";
  if (p.p !== void 0) s.padding = sp(p.p);
  if (p.px !== void 0) s.paddingHorizontal = sp(p.px);
  if (p.py !== void 0) s.paddingVertical = sp(p.py);
  if (p.pt !== void 0) s.paddingTop = sp(p.pt);
  if (p.pb !== void 0) s.paddingBottom = sp(p.pb);
  if (p.pl !== void 0) s.paddingLeft = sp(p.pl);
  if (p.pr !== void 0) s.paddingRight = sp(p.pr);
  if (p.m !== void 0) s.margin = sp(p.m);
  if (p.mx !== void 0) s.marginHorizontal = sp(p.mx);
  if (p.my !== void 0) s.marginVertical = sp(p.my);
  if (p.mt !== void 0) s.marginTop = sp(p.mt);
  if (p.mb !== void 0) s.marginBottom = sp(p.mb);
  if (p.ml !== void 0) s.marginLeft = sp(p.ml);
  if (p.mr !== void 0) s.marginRight = sp(p.mr);
  if (p.gap !== void 0) s.gap = sp(p.gap);
  if (p.gapX !== void 0) s.columnGap = sp(p.gapX);
  if (p.gapY !== void 0) s.rowGap = sp(p.gapY);
  if (p.w !== void 0) s.width = sp(p.w);
  if (p.h !== void 0) s.height = sp(p.h);
  if (p.minW !== void 0) s.minWidth = sp(p.minW);
  if (p.minH !== void 0) s.minHeight = sp(p.minH);
  if (p.maxW !== void 0) s.maxWidth = sp(p.maxW);
  if (p.maxH !== void 0) s.maxHeight = sp(p.maxH);
  if (p.size !== void 0) {
    const v = sp(p.size);
    s.width = v;
    s.height = v;
  }
  if (p.bg) s.backgroundColor = resolveColor(p.bg);
  if (p.color) s.color = resolveColor(p.color);
  if (p.opacity !== void 0) s.opacity = p.opacity;
  const hasBorderColor = !!p.borderColor;
  const hasBorderWidth = p.border !== void 0 || p.borderTop !== void 0 || p.borderBottom !== void 0 || p.borderLeft !== void 0 || p.borderRight !== void 0;
  if (hasBorderWidth) {
    s.borderColor = (_a = resolveColor(p.borderColor)) != null ? _a : "#E5E7EB";
  } else if (hasBorderColor) {
    s.borderColor = resolveColor(p.borderColor);
  }
  if (p.border !== void 0) {
    s.borderWidth = p.border;
    s.borderStyle = "solid";
  }
  if (p.borderTop !== void 0) {
    s.borderTopWidth = p.borderTop;
    s.borderStyle = "solid";
  }
  if (p.borderBottom !== void 0) {
    s.borderBottomWidth = p.borderBottom;
    s.borderStyle = "solid";
  }
  if (p.borderLeft !== void 0) {
    s.borderLeftWidth = p.borderLeft;
    s.borderStyle = "solid";
  }
  if (p.borderRight !== void 0) {
    s.borderRightWidth = p.borderRight;
    s.borderStyle = "solid";
  }
  if (p.rounded !== void 0) s.borderRadius = rr(p.rounded);
  if (p.roundedTL !== void 0) s.borderTopLeftRadius = rr(p.roundedTL);
  if (p.roundedTR !== void 0) s.borderTopRightRadius = rr(p.roundedTR);
  if (p.roundedBL !== void 0) s.borderBottomLeftRadius = rr(p.roundedBL);
  if (p.roundedBR !== void 0) s.borderBottomRightRadius = rr(p.roundedBR);
  if (p.roundedT !== void 0) {
    const r = rr(p.roundedT);
    s.borderTopLeftRadius = r;
    s.borderTopRightRadius = r;
  }
  if (p.roundedB !== void 0) {
    const r = rr(p.roundedB);
    s.borderBottomLeftRadius = r;
    s.borderBottomRightRadius = r;
  }
  if (p.roundedL !== void 0) {
    const r = rr(p.roundedL);
    s.borderTopLeftRadius = r;
    s.borderBottomLeftRadius = r;
  }
  if (p.roundedR !== void 0) {
    const r = rr(p.roundedR);
    s.borderTopRightRadius = r;
    s.borderBottomRightRadius = r;
  }
  if (p.shadow) Object.assign(s, shadowTokens[p.shadow]);
  if (p.inset !== void 0) {
    const v = sp(p.inset);
    s.top = v;
    s.bottom = v;
    s.left = v;
    s.right = v;
  }
  if (p.top !== void 0) s.top = sp(p.top);
  if (p.bottom !== void 0) s.bottom = sp(p.bottom);
  if (p.left !== void 0) s.left = sp(p.left);
  if (p.right !== void 0) s.right = sp(p.right);
  if (p.z !== void 0) s.zIndex = p.z;
  if (p.fontSize !== void 0) {
    const token = fontSizeTokens[String(p.fontSize)];
    if (token) {
      s.fontSize = token.fontSize;
      s.lineHeight = token.lineHeight;
    } else if (typeof p.fontSize === "number") {
      s.fontSize = p.fontSize;
    }
  }
  if (p.fontWeight !== void 0) s.fontWeight = (_b = fontWeightTokens[p.fontWeight]) != null ? _b : p.fontWeight;
  if (p.lineHeight !== void 0) s.lineHeight = p.lineHeight;
  if (p.letterSpacing !== void 0) s.letterSpacing = p.letterSpacing;
  if (p.fontFamily !== void 0) s.fontFamily = p.fontFamily;
  if (p.textLeft) s.textAlign = "left";
  if (p.textCenter) s.textAlign = "center";
  if (p.textRight) s.textAlign = "right";
  if (p.italic) s.fontStyle = "italic";
  if (p.bold) s.fontWeight = "700";
  if (p.semibold) s.fontWeight = "600";
  if (p.medium) s.fontWeight = "500";
  if (p.uppercase) s.textTransform = "uppercase";
  if (p.lowercase) s.textTransform = "lowercase";
  if (p.capitalize) s.textTransform = "capitalize";
  if (p.underline) s.textDecorationLine = "underline";
  if (p.strikethrough) s.textDecorationLine = "line-through";
  return s;
}
var STYLE_KEYS = /* @__PURE__ */ new Set([
  "flex1",
  "flexRow",
  "flexCol",
  "flexRowReverse",
  "flexColReverse",
  "flexWrap",
  "flexNowrap",
  "flexGrow",
  "flexShrink",
  "justifyStart",
  "justifyEnd",
  "justifyCenter",
  "justifyBetween",
  "justifyAround",
  "justifyEvenly",
  "itemsStart",
  "itemsEnd",
  "itemsCenter",
  "itemsStretch",
  "itemsBaseline",
  "selfStart",
  "selfEnd",
  "selfCenter",
  "selfStretch",
  "selfAuto",
  "absolute",
  "relative",
  "overflow",
  "hidden",
  "p",
  "px",
  "py",
  "pt",
  "pb",
  "pl",
  "pr",
  "m",
  "mx",
  "my",
  "mt",
  "mb",
  "ml",
  "mr",
  "gap",
  "gapX",
  "gapY",
  "w",
  "h",
  "minW",
  "minH",
  "maxW",
  "maxH",
  "size",
  "bg",
  "color",
  "borderColor",
  "opacity",
  "border",
  "borderTop",
  "borderBottom",
  "borderLeft",
  "borderRight",
  "rounded",
  "roundedT",
  "roundedB",
  "roundedL",
  "roundedR",
  "roundedTL",
  "roundedTR",
  "roundedBL",
  "roundedBR",
  "shadow",
  "top",
  "bottom",
  "left",
  "right",
  "inset",
  "z",
  "fontSize",
  "fontWeight",
  "lineHeight",
  "letterSpacing",
  "fontFamily",
  "textLeft",
  "textCenter",
  "textRight",
  "italic",
  "bold",
  "semibold",
  "medium",
  "uppercase",
  "lowercase",
  "capitalize",
  "underline",
  "strikethrough"
]);
function splitProps(props) {
  const styleSource = {};
  const rest = {};
  for (const key in props) {
    if (Object.prototype.hasOwnProperty.call(props, key)) {
      if (STYLE_KEYS.has(key)) {
        styleSource[key] = props[key];
      } else {
        rest[key] = props[key];
      }
    }
  }
  return { resolved: resolveStyle(styleSource), rest };
}
var Box = (0, import_react.forwardRef)(function Box2({ style, ...props }, ref) {
  const { resolved, rest } = splitProps(props);
  return /* @__PURE__ */ import_react.default.createElement(
    import_react_native.View,
    {
      ref,
      style: style ? import_react_native.StyleSheet.flatten([resolved, style]) : resolved,
      ...rest
    }
  );
});
Box.displayName = "Box";
var Row = (0, import_react.forwardRef)(function Row2({ style, ...props }, ref) {
  const { resolved, rest } = splitProps(props);
  const finalStyle = import_react_native.StyleSheet.flatten([{ flexDirection: "row" }, resolved, style]);
  return /* @__PURE__ */ import_react.default.createElement(import_react_native.View, { ref, style: finalStyle, ...rest });
});
Row.displayName = "Row";
var Col = (0, import_react.forwardRef)(function Col2({ style, ...props }, ref) {
  const { resolved, rest } = splitProps(props);
  const finalStyle = import_react_native.StyleSheet.flatten([{ flexDirection: "column" }, resolved, style]);
  return /* @__PURE__ */ import_react.default.createElement(import_react_native.View, { ref, style: finalStyle, ...rest });
});
Col.displayName = "Col";
var Stack = Col;
var Text = (0, import_react.forwardRef)(function Text2({ style, ...props }, ref) {
  const { resolved, rest } = splitProps(props);
  return /* @__PURE__ */ import_react.default.createElement(
    import_react_native.Text,
    {
      ref,
      style: style ? import_react_native.StyleSheet.flatten([resolved, style]) : resolved,
      ...rest
    }
  );
});
Text.displayName = "Text";
var Pressable = (0, import_react.forwardRef)(
  function Pressable2({ style, pressedStyle, disabledStyle, disabled, ...props }, ref) {
    const { resolved: base, rest } = splitProps(props);
    const pressedResolved = pressedStyle ? resolveStyle(pressedStyle) : void 0;
    const disabledResolved = disabledStyle ? resolveStyle(disabledStyle) : void 0;
    return /* @__PURE__ */ import_react.default.createElement(
      import_react_native.Pressable,
      {
        ref,
        disabled,
        style: (state) => {
          const resolvedExternalStyle = typeof style === "function" ? style(state) : style;
          return import_react_native.StyleSheet.flatten([
            base,
            disabled && disabledResolved,
            state.pressed && pressedResolved,
            resolvedExternalStyle
          ]);
        },
        ...rest
      }
    );
  }
);
Pressable.displayName = "Pressable";
var ScrollBox = (0, import_react.forwardRef)(
  function ScrollBox2({ style, contentStyle, contentContainerStyle, ...props }, ref) {
    const { resolved: outer, rest } = splitProps(props);
    const contentResolved = contentStyle ? resolveStyle(contentStyle) : void 0;
    return /* @__PURE__ */ import_react.default.createElement(
      import_react_native.ScrollView,
      {
        ref,
        style: style ? import_react_native.StyleSheet.flatten([outer, style]) : outer,
        contentContainerStyle: import_react_native.StyleSheet.flatten([contentResolved, contentContainerStyle]),
        ...rest
      }
    );
  }
);
ScrollBox.displayName = "ScrollBox";
var SafeBox = (0, import_react.forwardRef)(function SafeBox2({ style, ...props }, ref) {
  const { resolved, rest } = splitProps(props);
  return /* @__PURE__ */ import_react.default.createElement(
    import_react_native.SafeAreaView,
    {
      ref,
      style: style ? import_react_native.StyleSheet.flatten([resolved, style]) : resolved,
      ...rest
    }
  );
});
SafeBox.displayName = "SafeBox";
var Img = (0, import_react.forwardRef)(function Img2({ style, ...props }, ref) {
  const { resolved, rest } = splitProps(props);
  return /* @__PURE__ */ import_react.default.createElement(
    import_react_native.Image,
    {
      ref,
      style: style ? import_react_native.StyleSheet.flatten([resolved, style]) : resolved,
      ...rest
    }
  );
});
Img.displayName = "Img";
var GradientButton = (0, import_react.forwardRef)(
  function GradientButton2(props, ref) {
    var _a, _b, _c, _d;
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
    const { resolved, rest: pressableProps } = splitProps(
      remaining
    );
    const { disabled } = pressableProps;
    const pressedResolved = pressedStyle ? resolveStyle(pressedStyle) : void 0;
    const disabledResolved = disabledStyle ? resolveStyle(disabledStyle) : void 0;
    const resolvedColors = rawColors.map(
      (c) => {
        var _a2;
        return (_a2 = resolveColor(c)) != null ? _a2 : c;
      }
    );
    const {
      margin,
      marginTop,
      marginBottom,
      marginLeft,
      marginRight,
      marginHorizontal,
      marginVertical,
      borderRadius,
      borderTopLeftRadius,
      borderTopRightRadius,
      borderBottomLeftRadius,
      borderBottomRightRadius,
      ...innerStyle
    } = resolved;
    const outerRadius = {
      borderTopLeftRadius: (_a = borderTopLeftRadius != null ? borderTopLeftRadius : borderRadius) != null ? _a : 0,
      borderTopRightRadius: (_b = borderTopRightRadius != null ? borderTopRightRadius : borderRadius) != null ? _b : 0,
      borderBottomLeftRadius: (_c = borderBottomLeftRadius != null ? borderBottomLeftRadius : borderRadius) != null ? _c : 0,
      borderBottomRightRadius: (_d = borderBottomRightRadius != null ? borderBottomRightRadius : borderRadius) != null ? _d : 0
    };
    const outerMargin = {
      margin,
      marginTop,
      marginBottom,
      marginLeft,
      marginRight,
      marginHorizontal,
      marginVertical
    };
    const gradientDirectionProps = useAngle ? { useAngle: true, angle: angle != null ? angle : 0, angleCenter: angleCenter != null ? angleCenter : { x: 0.5, y: 0.5 } } : { start, end };
    return /* @__PURE__ */ import_react.default.createElement(
      import_react_native.Pressable,
      {
        ref,
        style: () => import_react_native.StyleSheet.flatten([
          outerMargin,
          outerRadius,
          { overflow: "hidden" },
          style
        ]),
        ...pressableProps
      },
      ({ pressed }) => /* @__PURE__ */ import_react.default.createElement(
        import_react_native_linear_gradient.default,
        {
          colors: resolvedColors,
          ...gradientDirectionProps,
          style: import_react_native.StyleSheet.flatten([
            innerStyle,
            borderRadius !== void 0 && { borderRadius },
            borderTopLeftRadius !== void 0 && { borderTopLeftRadius },
            borderTopRightRadius !== void 0 && { borderTopRightRadius },
            borderBottomLeftRadius !== void 0 && { borderBottomLeftRadius },
            borderBottomRightRadius !== void 0 && { borderBottomRightRadius },
            pressed && pressedResolved,
            disabled && disabledResolved
          ])
        },
        children
      )
    );
  }
);
GradientButton.displayName = "GradientButton";
var BlurBox = (0, import_react.forwardRef)(
  function BlurBox2({
    style,
    blurType = "light",
    blurAmount = 10,
    reducedTransparencyFallbackColor,
    ...props
  }, ref) {
    var _a;
    const { resolved, rest } = splitProps(props);
    const fallbackColor = reducedTransparencyFallbackColor ? (_a = resolveColor(reducedTransparencyFallbackColor)) != null ? _a : reducedTransparencyFallbackColor : void 0;
    return /* @__PURE__ */ import_react.default.createElement(
      import_blur.BlurView,
      {
        ref,
        blurType,
        blurAmount,
        reducedTransparencyFallbackColor: fallbackColor,
        style: style ? import_react_native.StyleSheet.flatten([resolved, style]) : resolved,
        ...rest
      }
    );
  }
);
BlurBox.displayName = "BlurBox";
var TouchableBox = (0, import_react.forwardRef)(
  function TouchableBox2({ style, disabledStyle, disabled, ...props }, ref) {
    const { resolved, rest } = splitProps(props);
    const disabledResolved = disabledStyle ? resolveStyle(disabledStyle) : void 0;
    const finalStyle = import_react_native.StyleSheet.flatten([
      resolved,
      disabled && disabledResolved,
      style
    ]);
    return /* @__PURE__ */ import_react.default.createElement(
      import_react_native.TouchableOpacity,
      {
        ref,
        disabled,
        style: finalStyle,
        ...rest
      }
    );
  }
);
TouchableBox.displayName = "TouchableBox";
var HighlightBox = (0, import_react.forwardRef)(
  function HighlightBox2({ style, underlayColor, disabledStyle, disabled, ...props }, ref) {
    var _a;
    const { resolved, rest } = splitProps(props);
    const disabledResolved = disabledStyle ? resolveStyle(disabledStyle) : void 0;
    const finalStyle = import_react_native.StyleSheet.flatten([
      resolved,
      disabled && disabledResolved,
      style
    ]);
    const resolvedUnderlay = (_a = resolveColor(underlayColor)) != null ? _a : resolveColor("gray.200");
    return /* @__PURE__ */ import_react.default.createElement(
      import_react_native.TouchableHighlight,
      {
        ref,
        disabled,
        underlayColor: resolvedUnderlay,
        style: finalStyle,
        ...rest
      }
    );
  }
);
HighlightBox.displayName = "HighlightBox";

// src/components/MotionView/MotionView.tsx
var import_react2 = __toESM(require("react"));
var import_react_native_reanimated = __toESM(require("react-native-reanimated"));
var import_react_native_linear_gradient2 = __toESM(require("react-native-linear-gradient"));
var import_blur2 = require("@react-native-community/blur");
var AnimatedLinearGradient = import_react_native_reanimated.default.createAnimatedComponent(import_react_native_linear_gradient2.default);
var AnimatedBlurView = import_react_native_reanimated.default.createAnimatedComponent(import_blur2.BlurView);
function runAnimation(sv, target, type, opts) {
  if (type === "spring") {
    sv.value = (0, import_react_native_reanimated.withSpring)(target, { damping: opts.damping, stiffness: opts.stiffness });
  } else {
    sv.value = (0, import_react_native_reanimated.withTiming)(target, { duration: opts.duration, easing: opts.easing });
  }
}
var MotionView = ({
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
  var _a, _b, _c, _d, _e;
  const {
    type = "timing",
    duration = 500,
    damping = 12,
    stiffness = 100,
    easing = import_react_native_reanimated.Easing.out(import_react_native_reanimated.Easing.exp)
  } = transition;
  const opacityV = (0, import_react_native_reanimated.useSharedValue)((_a = initial.opacity) != null ? _a : 1);
  const scaleV = (0, import_react_native_reanimated.useSharedValue)((_b = initial.scale) != null ? _b : 1);
  const translateXV = (0, import_react_native_reanimated.useSharedValue)((_c = initial.translateX) != null ? _c : 0);
  const translateYV = (0, import_react_native_reanimated.useSharedValue)((_d = initial.translateY) != null ? _d : 0);
  const rotateV = (0, import_react_native_reanimated.useSharedValue)((_e = initial.rotate) != null ? _e : 0);
  const {
    opacity: targetOpacity,
    scale: targetScale,
    translateX: targetX,
    translateY: targetY,
    rotate: targetRotate
  } = animate;
  (0, import_react2.useEffect)(() => {
    const opts = { duration, damping, stiffness, easing };
    runAnimation(opacityV, targetOpacity != null ? targetOpacity : opacityV.value, type, opts);
    runAnimation(scaleV, targetScale != null ? targetScale : scaleV.value, type, opts);
    runAnimation(translateXV, targetX != null ? targetX : translateXV.value, type, opts);
    runAnimation(translateYV, targetY != null ? targetY : translateYV.value, type, opts);
    runAnimation(rotateV, targetRotate != null ? targetRotate : rotateV.value, type, opts);
  }, [
    targetOpacity,
    targetScale,
    targetX,
    targetY,
    targetRotate,
    type,
    duration,
    damping,
    stiffness
    // easing intentionally omitted — functions are recreated each render;
    // wrap in useCallback if you need dynamic easing.
  ]);
  const animatedStyle = (0, import_react_native_reanimated.useAnimatedStyle)(() => ({
    opacity: opacityV.value,
    transform: [
      { scale: scaleV.value },
      { translateX: translateXV.value },
      { translateY: translateYV.value },
      // ✅ Convert number → deg string only here, inside the UI thread worklet
      { rotate: `${rotateV.value}deg` }
    ]
  }));
  const animatedBlurProps = (0, import_react_native_reanimated.useAnimatedProps)(() => ({
    blurAmount
  }));
  const baseStyle = resolveStyle(styleProps);
  if (gradientColors) {
    const resolvedColors = gradientColors.map(
      (c) => {
        var _a2;
        return (_a2 = resolveColor(c)) != null ? _a2 : c;
      }
    );
    const directionProps = useAngle ? { useAngle: true, angle: angle != null ? angle : 0, angleCenter: angleCenter != null ? angleCenter : { x: 0.5, y: 0.5 } } : { start: gradientStart, end: gradientEnd };
    return /* @__PURE__ */ import_react2.default.createElement(
      AnimatedLinearGradient,
      {
        colors: resolvedColors,
        ...directionProps,
        style: [baseStyle, animatedStyle, style]
      },
      children
    );
  }
  if (blurType) {
    return /* @__PURE__ */ import_react2.default.createElement(
      AnimatedBlurView,
      {
        blurType,
        animatedProps: animatedBlurProps,
        style: [baseStyle, animatedStyle, style]
      },
      children
    );
  }
  return /* @__PURE__ */ import_react2.default.createElement(import_react_native_reanimated.default.View, { style: [baseStyle, animatedStyle, style], ...viewProps }, children);
};
var MotionView_default = MotionView;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BlurBox,
  Box,
  Col,
  GradientButton,
  HighlightBox,
  Img,
  MotionView,
  Pressable,
  Row,
  SafeBox,
  ScrollBox,
  Stack,
  Text,
  TouchableBox,
  colors,
  resolveColor,
  resolveStyle,
  spacing
});
