import i18n from "../i18n";
import { CASH_ME, ARPI_SOLAR, VEHICLE, PAY_LATER } from "./screens";

export const FINANCE_PRODUCTS = {
  1: {
    screen: CASH_ME,
    title: i18n.t("products.cash_me"),
    description: i18n.t("products.cash_me_description"),
    image: require("../assets/images/products/finance/cash_me.png"),
  },
  2: {
    screen: PAY_LATER,
    title: i18n.t("products.pay_later"),
    description: i18n.t("products.pay_later_description"),
    image: require("../assets/images/products/finance/pay_later.png"),
  },
  3: {
    screen: ARPI_SOLAR,
    title: i18n.t("products.arpi_solar"),
    description: i18n.t("products.arpi_solar_description"),
    image: require("../assets/images/products/finance/arpi_solar.png"),
  },
  4: {
    screen: VEHICLE,
    title: "Vehicle",
    description: i18n.t("products.arpi_solar_description"),
    image: require("../assets/images/products/finance/auto.png"),
  },
};