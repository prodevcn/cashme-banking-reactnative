import { StringSchema, DateSchemaConstructor } from "yup";

declare module "yup" {
  interface StringSchema {
    phone(): StringSchema;
    pinCode(): StringSchema;
    passport(): StringSchema;
    idcard(): StringSchema;
  }
}

export const phone;
