import { StringSchema, DateSchemaConstructor } from "yup";

declare module "yup" {
  interface StringSchema {
    phone(): StringSchema;
    pinCode(): StringSchema;
    passport(): StringSchema;
    idcard(): StringSchema;
    password(): StringSchema;
  }
}

export const phone;
