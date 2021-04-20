import * as yup from "yup";
import i18n from "../../i18n";
import _ from "lodash";
import { isPhone } from "../../validation";
import { AnyObject, Maybe } from "yup/lib/types";

yup.addMethod<yup.StringSchema>(yup.string, "phone", function () {
  return this.test("phone", i18n.t("validations.phone"), function (value = "") {
    if (isNaN(+value)) {
      return true;
    }

    return isPhone(value);
  });
});

declare module "yup" {
  interface StringSchema<
    TType extends Maybe<string> = string | undefined,
    TContext extends AnyObject = AnyObject,
    TOut extends TType = TType
  > extends yup.BaseSchema<TType, TContext, TOut> {
    emptyAsUndefined(): StringSchema<TType, TContext>;
  }
}

export default yup;
