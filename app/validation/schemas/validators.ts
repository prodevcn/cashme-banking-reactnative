import * as yup from "yup";
import i18n from "../../i18n";
import _ from "lodash";
import {
  isPhone,
  isIdCard,
  isPassport,
  isValidPassword,
} from "../../validation";
import { AnyObject, Maybe } from "yup/lib/types";

yup.addMethod<yup.StringSchema>(yup.string, "phone", function () {
  return this.test("phone", i18n.t("validations.phone"), function (value = "") {
    if (isNaN(+value)) {
      return true;
    }

    return isPhone(value);
  });
});

yup.addMethod<yup.StringSchema>(yup.string, "pinCode", function () {
  return this.test(
    "pinCode",
    i18n.t("validations.pin_code"),
    function (value = "") {
      if (value) {
        return value.length === 4;
      }

      return true;
    },
  );
});

yup.addMethod<yup.StringSchema>(yup.string, "passport", function () {
  return this.test(
    "passport",
    i18n.t("validations.passport"),
    function (value) {
      if (value && isNaN(+value)) {
        return isPassport(value);
      }

      return true;
    },
  );
});

yup.addMethod<yup.StringSchema>(yup.string, "idcard", function () {
  return this.test("idcard", i18n.t("validations.idcard"), function (value) {
    if (value && !isNaN(+value)) {
      return isIdCard(value);
    }

    return true;
  });
});

yup.addMethod<yup.StringSchema>(yup.string, "password", function () {
  return this.test(
    "password",
    i18n.t("validations.password"),
    function (value) {
      if (value) {
        return isValidPassword(value);
      }

      return true;
    },
  );
});

declare module "yup" {
  interface StringSchema<
    TType extends Maybe<string> = string | undefined,
    TContext extends AnyObject = AnyObject,
    TOut extends TType = TType,
  > extends yup.BaseSchema<TType, TContext, TOut> {
    emptyAsUndefined(): StringSchema<TType, TContext>;
  }
}

export default yup;
