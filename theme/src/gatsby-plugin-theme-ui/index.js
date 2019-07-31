/**
 * This theme uses `theme-ui` under the hood.
 * @see https://theme-ui.com/
 * @see https://theme-ui.com/gatsby-plugin/
 */
export default {
  breakpoints: ["36rem", "52rem", "64rem"],
  colors: {
    text: "#232129",
    heading: "#232129",
    background: "#fff",
    primary: "#639",
    muted: "#535159",
    light: "#C6C3C9",
  },
  fonts: {
    body:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    heading: '"Avenir Next", Roboto, Helvetica, sans-serif',
    fontAwesome: "FontAwesome",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 900,
    bold: 700,
  },
  lineHeights: {
    text: "1.45",
    heading: "1.1",
  },
  textStyles: {
    display: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "1.3",
      fontSize: 7,
    },
    heading: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
    },
    body: {
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
      fontSize: 3,
    },
    quote: {
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
      fontSize: 4,
    },
    fontAwesome: {
      fontFamily: '"Font Awesome 5 Free"',
      fontWeight: 900,
    },
  },
  sizes: {
    container: 1280,
  },
  space: [0, 8, 16, 32, 64, 128, 256],
  styles: {
    Layout: {
      backgroundColor: "background",
      color: "text",
      fontFamily: "default",
      fontSize: 1,
      lineHeight: "text",
    },
    Header: {
      backgroundColor: "primary",
      color: "background",
      fontWeight: "bold",
      margin: 0,
      span: {
        display: "block",
        fontSize: 3,
        margin: "0 auto",
        maxWidth: "container",
        padding: 3,
        width: "90vw",
      },
    },
    Main: {
      margin: "0 auto",
      maxWidth: "container",
      width: "90vw",
    },
    Container: {
      padding: 0,
    },
    h1: {
      variant: "textStyles.heading",
      fontSize: 6,
    },
    h2: {
      variant: "textStyles.heading",
      fontSize: 5,
    },
    h3: {
      variant: "textStyles.heading",
      fontSize: 4,
    },
    h4: {
      variant: "textStyles.heading",
      fontSize: 3,
    },
    h5: {
      variant: "textStyles.heading",
      fontSize: 2,
    },
    h6: {
      variant: "textStyles.heading",
      fontSize: 1,
    },
    p: {
      variant: "textStyles.body",
    },
    a: {
      variant: "textStyles.body",
      color: "primary",
    },
    img: {
      maxWidth: "100%",
    },
    blockquote: {
      variant: "textStyles.quote",
      position: "relative",
      padding: 0,
      margin: 0,
      boxSizing: "border-box",
      width: "75%", // Leave space for the quotes
      "::before, ::after": {
        variant: "textStyles.fontAwesome",
        position: "absolute",
        top: "8px",
        color: "light",
        display: "block",
        zIndex: -1,
        margin: 1,
      },
      "::before": {
        content: '"\f10d"',
        fontSize: 8,
        left: "-58px",
        top: "-66px",
        "@media (min-width: 36rem)": {
          top: "8px",
          left: "initial",
          right: "100%",
          marginRight: 2,
          fontSize: 6,
        },
      },
      "::after": {
        "@media (min-width: 36rem)": {
          content: '"\f10e"',
          left: "100%",
          marginLeft: 2,
          fontSize: 6,
        },
      },
    },
  },
}
