// @ts-ignore
import commonColor from "../../native-base-theme/variables/platform";

export default {
  ...commonColor,
  brandPrimary: "#4389ed",
  brandLight: "#fff",
  brandDark: "#32506E",
  brandGray: "#707070",
  brandGrayLight: "#E2E2E2",
  brandBlue: "#007AFF",
  brandBlueLight: "#F0F8FF",

  white: "#fff",
  black: "#000",
  gray: "#C7D7E6",
  masala: "#443C38",
  dodgerBlue: "#1B8CF4",

  get buttonPrimaryBg() {
    return this.brandPrimary;
  },
};
