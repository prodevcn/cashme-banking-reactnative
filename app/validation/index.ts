import { ARM_PHONE_CODES } from "../constants";

export const isPhone = (value?: string) => {
  const pattern = `^(([0]{2}|[+]{1})374|[0]{1})?(${ARM_PHONE_CODES.join(
    "|",
  )})[0-9]{6}$`;

  const phoneRegex = new RegExp(pattern);

  return phoneRegex.test(value || "");
};

export const isPassport = (value?: string) => {
  const passportRegex = /^[a-zA-Z]{2}[0-9]{7}$/;

  return passportRegex.test(value || "");
};

export const isIdCard = (value?: string) => {
  const idCardRegex = /^[0-9]{9}$/;

  return idCardRegex.test(value || "");
};
