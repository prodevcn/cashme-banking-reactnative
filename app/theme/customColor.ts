// @ts-ignore
import commonColor from "../../native-base-theme/variables/platform";

export default {
  ...commonColor,
  brandPrimary: "#4389ed",
  brandLight: "#fff",
  brandDark: "#32506E",

  white: "#fff",
  black: "#000",

  get buttonPrimaryBg() {
    return this.brandPrimary;
  },
};
