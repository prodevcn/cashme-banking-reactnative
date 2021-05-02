import getTheme from "../../native-base-theme/components";
import customColor from "./customColor";

const theme = () => {
  const nbTheme = getTheme(customColor);

  return nbTheme;
};

export default theme;
