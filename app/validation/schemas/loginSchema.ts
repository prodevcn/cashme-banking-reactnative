import yup from "./validators";
import i18n from "../../i18n";

const loginSchema = yup.object({
  username: yup.lazy(value => {
    if (isNaN(+value)) {
      return yup
        .string()
        .required(i18n.t("validations.required"))
        .email(i18n.t("validations.email"));
    }

    return yup.string().required(i18n.t("validations.required")).phone();
  }),
  password: yup.string().required(i18n.t("validations.required")),
});

export default loginSchema;
