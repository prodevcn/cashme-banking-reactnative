import yup from "./validators";
import i18n from "../../i18n";

const securityQuestionSchema = yup.object({
  answer: yup.string().required(i18n.t("validations.required")),
});

export default securityQuestionSchema;
