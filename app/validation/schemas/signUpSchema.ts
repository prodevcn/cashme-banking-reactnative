import yup from "./validators";
import i18n from "../../i18n";

const signUpSchema = yup.object({
  email: yup
    .string()
    .required(i18n.t("validations.required"))
    .email(i18n.t("validations.email")),
  phoneNumber: yup.string().required(i18n.t("validations.required")).phone(),
  documentNumber: yup
    .string()
    .required(i18n.t("validations.required"))
    .passport()
    .idcard(),
  isChecked: yup
    .bool()
    .test("isChecked", i18n.t("validator.required"), value => value === true)
    .required(i18n.t("validator.required")),
});

export default signUpSchema;
