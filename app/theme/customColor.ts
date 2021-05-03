// @ts-ignore
import commonColor from "../../native-base-theme/variables/platform";

export default {
  ...commonColor,
  brandPrimary: "#4389ed",
  brandLight: "#fff",
  titleColor: "#32506E",

  get buttonPrimaryBg() {
    return this.brandPrimary;
  },
};
