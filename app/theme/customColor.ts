// @ts-ignore
import commonColor from "../../native-base-theme/variables/platform";

export default {
  ...commonColor,
  brandPrimary: "#4389ed",
  brandLight: "#fff",
  brandDark: "#32506E",
  brandGray: "#707070",
  brandBlue: "#007AFF",

  white: "#fff",
  black: "#000",
  masala: "#443C38",
  dodgerBlue: "#1B8CF4",

  get buttonPrimaryBg() {
    return this.brandPrimary;
  },
};
