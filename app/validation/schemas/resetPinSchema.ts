import yup from "./validators";
import i18n from "../../i18n";

const resetPinSchema = yup.object({
  password: yup.string().required(i18n.t("validations.required")),
  pin: yup.string().required(i18n.t("validations.required")),
  confirmPin: yup
    .string()
    .oneOf([yup.ref("pin"), null], i18n.t("validations.match")),
});

export default resetPinSchema;
