export * from "./storage";
export * from "./screens";
export * from "./setting";
export * from "./categories";
export * from "./products";
export * from "./faq";
export * from "./loan";
export * from "./format";

import i18n from "../i18n";

export const NOTIFICATION_METHODS = [
  {
    id: "0",
    text: i18n.t("credit_steps.personal_info.notification.email"),
    value: "email",
  },
  {
    id: "1",
    text: i18n.t("credit_steps.personal_info.notification.in_person"),
    value: "in_person",
  },
  {
    id: "2",
    text: i18n.t("credit_steps.personal_info.notification.post"),
    value: "post",
  },
];

export const DISPUTE_SOLUTION = [
  {
    id: "0",
    text: i18n.t("credit_steps.personal_info.dispute_solution.gnm_arbitration"),
    value: "gnm_arbitration",
  },
  {
    id: "1",
    text: i18n.t("credit_steps.personal_info.dispute_solution.optimum"),
    value: "optimum",
  },
  {
    id: "2",
    text: i18n.t("credit_steps.personal_info.dispute_solution.court"),
    value: "court",
  },
  {
    id: "3",
    text: i18n.t("credit_steps.personal_info.dispute_solution.arbitration"),
    value: "arbitration",
  },
];
