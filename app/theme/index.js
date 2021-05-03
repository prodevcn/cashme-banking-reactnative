import merge from "lodash/merge";
import getTheme from "../../native-base-theme/components";
import customColor from "./customColor";
import labelTheme from "../../native-base-theme/components/Label";

const theme = () => {
  const nbTheme = getTheme(customColor);

  const overrides = {
    "NativeBase.Label": {
      ...labelTheme(),
      fontSize: 16,
    },
  };

  return merge(nbTheme, overrides);
};

export default theme;
