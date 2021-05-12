import i18n from "../i18n";
import {
  FINANCE,
  WALLET,
  E_COMMERCE,
  MEDICAL,
  PROPERTY,
  SERVICES,
} from "./screens";
import FinanceIcon from "../assets/images/categories/finance_icon.svg";
import FinanceBg from "../assets/images/categories/finance_bg.svg";
import WalletIcon from "../assets/images/categories/wallet_icon.svg";
import WalletBg from "../assets/images/categories/wallet_bg.svg";
import E_CommerceIcon from "../assets/images/categories/e_commerce_icon.svg";
import E_CommerceBg from "../assets/images/categories/e_commerce_bg.svg";
import MedicalIcon from "../assets/images/categories/medical_icon.svg";
import MedicalBg from "../assets/images/categories/medical_bg.svg";
import PropertyIcon from "../assets/images/categories/property_icon.svg";
import PropertyBg from "../assets/images/categories/property_bg.svg";
import ServicesIcon from "../assets/images/categories/services_icon.svg";
import ServicesBg from "../assets/images/categories/services_bg.svg";

export const CATEGORIES = {
  finance: {
    screen: FINANCE,
    title: i18n.t("category_item.finance"),
    Icon: FinanceIcon,
    Background: FinanceBg,
  },
  wallet: {
    screen: WALLET,
    title: i18n.t("category_item.wallet"),
    Icon: WalletIcon,
    Background: WalletBg,
  },
  e_commerce: {
    screen: E_COMMERCE,
    title: i18n.t("category_item.e_commerce"),
    Icon: E_CommerceIcon,
    Background: E_CommerceBg,
  },
  medical: {
    screen: MEDICAL,
    title: i18n.t("category_item.medical"),
    Icon: MedicalIcon,
    Background: MedicalBg,
  },
  property: {
    screen: PROPERTY,
    title: i18n.t("category_item.property"),
    Icon: PropertyIcon,
    Background: PropertyBg,
  },
  services: {
    screen: SERVICES,
    title: i18n.t("category_item.services"),
    Icon: ServicesIcon,
    Background: ServicesBg,
  },
};
