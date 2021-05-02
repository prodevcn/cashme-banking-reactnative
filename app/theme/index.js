// import getTheme from './native-base-theme/components';
import getTheme from "../../native-base-theme/components";
import customCommonColor from "./customCommonColor";

const theme = () => {
  const nbTheme = getTheme(customCommonColor);

  return nbTheme;
};

export default theme;
