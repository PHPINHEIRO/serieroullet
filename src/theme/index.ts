import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
export default {
  COLORS: {
    BACKGROUND: '#252C33',

    PRIMARY: "#3A4750",
    SECONDARY: "#F6C90E",
    BLACK: "#252C33",
    WHITE: "#EEEEEE",
    RED: "#F25757",
    GREEN: "#B4EBCA",

    SHAPE: '#DCDCDC',
    TITLE: '#252C33',
    
  },

  FONTS: {
    TITLE: 'Roboto_500Medium',
    TEXT: 'Roboto_400Regular',
  },

  SIZES: {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,

    // font sizes
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,

    // app dimensions
    width,
    height
  }
};
