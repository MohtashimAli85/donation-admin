import { defaultTheme } from "react-admin";
import merge from "lodash/merge";
import { createTheme } from "@mui/material/styles";
import createPalette from "@mui/material/styles/createPalette";
const palette = createPalette(
  merge({}, defaultTheme.palette, {
    primary: {
      main: "#008d47", // Not far from red
    },
    secondary: {
      main: "#1DBF73", // Not far from green
    },
  })
);
const typography = {
  fontFamily: "'Poppins', sans-serif",
  //   fontFamily: '"Comic Neue", cursive',
  fontSize: 16, // Should be a number in pixels
  fontStyle: "normal",
  fontWeightLight: 400,
  fontWeightRegular: 500,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  color: palette.text.primary,
};

const typographyBase = {
  fontFamily: typography.fontFamily,
  fontSize: typography.fontSize,
  fontStyle: typography.fontStyle,
  color: typography.color,
};

const typographyHeader = {
  ...typographyBase,
  fontWeight: typography.fontWeightBold,
  fontFamily: typography.fontFamilySecondary, // Use a dedicated font for the header
};

const typographyBody = {
  ...typographyBase,
  fontWeight: typography.fontWeightRegular,
  fontFamily: typography.fontFamily,
};

const rawTheme = {
  palette,
  typography: {
    ...typographyBase,
    h1: {
      ...typographyHeader,
      textTransform: "uppercase",
      fontSize: "4rem",
    },
    // ... Put other title styles below
    body1: {
      ...typographyBody,
      fontSize: "1rem",
    },
  },
};

export const theme = createTheme(merge({}, defaultTheme, rawTheme));
