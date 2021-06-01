import yup from "./validators";
import i18n from "../../i18n";

const personalInfoSchema = yup.object({
  code: yup.string().required(i18n.t("validations.required")),
  termsAccepted: yup
    .bool()
    .test("termsAccepted", i18n.t("validator.terms"), value => value === true)
    .required(i18n.t("validator.terms")),
  agreement: yup
    .bool()
    .test("termsAccepted", i18n.t("validator.terms"), value => value === true)
    .required(i18n.t("validator.terms")),
  loanPdfsConfirmed: yup
    .bool()
    .test(
      "loanPdfsConfirmed",
      i18n.t("validator.terms"),
      value => value === true,
    )
    .required(i18n.t("validator.terms")),
});

export default personalInfoSchema;
