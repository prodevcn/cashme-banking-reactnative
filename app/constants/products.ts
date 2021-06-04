import i18n from "../i18n";
import { CASH_ME, ARPI_SOLAR, VEHICLE, PAY_LATER } from "./screens";
import { ILoanOfferItemProps } from "../screens/LoanOffer/LoanOfferItem/index";
import HomeLoanIcon from "../assets/images/home-loan.svg";
import CarLoanIcon from "../assets/images/car-loan.svg";
import ConsumerLoanIcon from "../assets/images/consumer-loan.svg";

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

export const PROPOSAL_LIST: Array<ILoanOfferItemProps> = [
  {
    title: i18n.t("get_loan.consumer"),
    description: i18n.t("get_loan.proposal_description"),
    amount: 800000,
    color: "#FFB858",
    Icon: ConsumerLoanIcon,
  },
  {
    title: i18n.t("get_loan.car"),
    description: i18n.t("get_loan.proposal_description"),
    amount: 1300000,
    color: "#5B59D3",
    Icon: CarLoanIcon,
  },
  {
    title: i18n.t("get_loan.property"),
    description: i18n.t("get_loan.proposal_description"),
    amount: 14000000,
    color: "#49AA36",
    Icon: HomeLoanIcon,
  },
];
