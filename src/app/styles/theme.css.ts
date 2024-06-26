/* eslint-disable */

import {
  createThemeContract,
  createGlobalTheme,
  createTheme,
} from "@vanilla-extract/css";

// dark mode와 light mode 관계없이 적용되는 스타일들
export const global = createGlobalTheme(":root", {
  fontSize: {
    XXLarge: "4rem",
    XLarge: "48px",
    large: "36px",
    medium: "22px",
    regular: "18px",
    middleSmall: "16px",
    small: "14px",
    micro: "12px",
  },
  fontWeight: {
    normal: "400",
    medium: "500",
    large: "700",
  },
});

const themeColor = createThemeContract({
  color: {
    background: "",
    text: "",
    primary: "",
    secondary: "",
    accent: "",
    border: "",
    secondaryText: "",
  },
});

export const light = createTheme(themeColor, {
  color: {
    background: "#ffffff",
    text: "#040316",
    accent: "#2F27CE",
    secondary: "#DDDBFF",
    primary: "#443DFF",
    border: "rgba(0,0,0,0.2)",
    secondaryText: "rgba(0,0,0,0.8)",
  },
});

export const vars = { ...global, themeColor };
