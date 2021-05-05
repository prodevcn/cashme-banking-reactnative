import yup from "./validators";
import i18n from "../../i18n";

const resetPasswordSchema = yup.object({
  password: yup.string().required(i18n.t("validations.required")),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], i18n.t("validations.match"))
    .required(i18n.t("validations.required")),
});

export default resetPasswordSchema;
