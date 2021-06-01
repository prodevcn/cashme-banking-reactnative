import yup from "./validators";
import i18n from "../../i18n";

const securityQuestionSchema = yup.object({
  id: yup.number().required(i18n.t("validations.required")),
  answer: yup.string().required(i18n.t("validations.required")),
});

export default securityQuestionSchema;
