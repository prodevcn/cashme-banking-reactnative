import yup from "./validators";
import i18n from "../../i18n";

const passwordSetupSchema = yup.object({
  password: yup.string().required(i18n.t("validations.required")).password(),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], i18n.t("validations.match"))
    .required(i18n.t("validations.required")),
});

export default passwordSetupSchema;
