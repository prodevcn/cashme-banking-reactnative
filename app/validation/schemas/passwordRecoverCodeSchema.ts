import yup from "./validators";
import i18n from "../../i18n";

const passwordRecoverCodeSchema = yup.object({
  code: yup.string().required(i18n.t("validations.required")).pinCode(),
});

export default passwordRecoverCodeSchema;
