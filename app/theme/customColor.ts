// @ts-ignore
import commonColor from "../../native-base-theme/variables/platform";

export default {
  ...commonColor,
  brandPrimary: "#4389ed",
  brandLight: "#fff",

  get buttonPrimaryBg() {
    return this.brandPrimary;
  },
};
