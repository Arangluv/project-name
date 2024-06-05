/* eslint-disable */

import { vars } from "@style/theme.css";
import { style } from "@vanilla-extract/css";

export const sidebar_container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  justifyContent: "flex-start",
  paddingTop: "8rem",
  paddingRight: "2rem",
});
export const list_item = style({
  margin: "1rem 0",
});
export const link_text = style({
  color: vars.themeColor.color.text,
  fontSize: vars.fontSize.regular,
  opacity: "0.8",
  fontWeight: vars.fontWeight.medium,
  transition: "color .1s ease-in-out",
  ":hover": {
    color: vars.themeColor.color.accent,
    opacity: 1,
  },
});

export const text_active = style({
  color: vars.themeColor.color.accent,
  opacity: 1,
});

// about-us part

export const about_us_container = style({
  display: "grid",
  gap: 10,
  gridTemplateRows:
    "minmax(24rem, auto) minmax(10rem, auto) minmax(16rem, auto)",
  gridTemplateColumns: "3fr 2fr",
});

export const main_title_wrapper = style({
  gridColumn: "1 / 2",
  gridRow: "1 / 2",
});
export const main_title = style({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});
export const main_title_text = style({
  display: "block",
  width: "80%",
  marginBottom: "1rem",
  fontSize: vars.fontSize.XXLarge,
  fontWeight: vars.fontWeight.large,
});

export const text_accent = style({
  position: "relative",
  color: vars.themeColor.color.accent,
  "::after": {
    position: "absolute",
    width: "100%",
    height: "1rem",
    content: "",
    backgroundColor: vars.themeColor.color.secondary,
    bottom: 0,
    left: 0,
    opacity: 0.3,
  },
});
export const about_us_image_wrapper = style({
  gridColumn: "2 / 3",
  gridRow: "1 / 3",
  position: "relative",
});

export const about_us_image = style({
  width: "100%",
  height: "100%",
  objectFit: "contain",
});

export const about_us_description_wrapper = style({
  gridColumn: "1 / 2",
  gridRow: "2 / 3",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const about_us_description_text = style({
  flexBasis: "80%",
  display: "block",
  width: "80%",
  backgroundColor: "white",
  fontSize: vars.fontSize.regular,
  color: "rgba(0,0,0, 0.7)",
});

export const user_action_wrapper = style({
  gridColumn: "1 / 2",
  gridRow: "3 / 4",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
});

export const btn_wrapper = style({
  width: "80%",
  height: "100px",
});

export const about_us_btn = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 30,
  width: "8rem",
  height: "3rem",
  fontWeight: vars.fontWeight.medium,
  border: `1px solid ${vars.themeColor.color.primary}`,
  color: vars.themeColor.color.primary,
  transition: "all .1s ease-in-out",
  ":hover": {
    backgroundColor: vars.themeColor.color.primary,
    color: vars.themeColor.color.background,
  },
});

// contact us part

export const contact_us_container = style({
  display: "grid",
  gridTemplateRows: "22rem minmax(11rem, auto) 11rem",
  width: "100%",
  minHeight: "44rem",
});
export const contact_us_main = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const contact_us_title = style({
  fontSize: vars.fontSize.XXLarge,
  fontWeight: vars.fontWeight.large,
  marginBottom: "3rem",
});

export const contact_us_sub_title = style({
  fontSize: vars.fontSize.regular,
  color: "rgba(0,0,0,0.6)",
});

export const contact_method_wrapper = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const icon_wrapper = style({
  width: "8rem",
  height: "8rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: vars.themeColor.color.secondary,
  borderRadius: "50%",
});

export const contact_icon = style({
  width: "3rem",
  height: "3rem",
  color: "rgba(0,0,0,0.7)",
});

export const adress_warpper = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const adress_text = style({
  margin: "6px 0",
});

export const adress_title = style([
  adress_text,
  {
    fontSize: vars.fontSize.regular,
    fontStyle: "normal",
    fontWeight: vars.fontWeight.medium,
    color: vars.themeColor.color.primary,
  },
]);

// sitemap part

export const sitemap_container = style({
  display: "grid",
  gridAutoRows: "minmax(11rem, auto)",
  width: "100%",
  minHeight: "44rem",
});

export const sitemap_sub_wrapper = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  gap: 10,
  width: "100%",
  height: "auto",
});

export const root_category_wrapper = style({
  display: "grid",
  gridTemplateRows: "30px",
  gridAutoRows: "minmax(2rem, auto)",
  gap: 5,
});
export const sub_category_flex_wrapper = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  height: "fit-content",
});
export const sub_category_wrapper = style({
  display: "flex",
  flexDirection: "column",
  marginBottom: "1rem",
});

export const sub_category_item = style({
  display: "grid",
  gridAutoRows: "2rem minmax(10rem, auto)",
});

export const root_category_title = style({
  fontSize: vars.fontSize.regular,
  borderBottom: "1px solid black",
});

export const sub_category_title = style({
  color: "rgba(0,0,0,0.8)",
  marginBottom: 10,
});

export const children_title = style({
  padding: 5,
  backgroundColor: vars.themeColor.color.secondary,
});

export const total_sub_category_wrapper = style({
  height: "fit-content",
  marginBottom: "2rem",
});

// ternms of use part

export const terms_container = style({
  minHeight: "44rem",
  width: "100%",
  display: "flex",
  justifyContent: "center",
});
export const adjust_width_wrapper = style({
  display: "flex",
  flexDirection: "column",
  width: "80%",
});
export const terms_title = style({
  color: vars.themeColor.color.primary,
  fontWeight: vars.fontWeight.large,
  fontSize: vars.fontSize.large,
  marginBottom: "2rem",
});

export const terms_paragraph = style({
  lineHeight: 1.6,
  color: "rgba(0,0,0,0.8)",
  marginBottom: "2rem",
});

export const terms_sub_title = style({
  fontWeight: vars.fontWeight.medium,
  fontSize: vars.fontSize.medium,
  marginBottom: "2rem",
});
