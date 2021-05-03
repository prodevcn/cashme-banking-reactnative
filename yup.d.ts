import { StringSchema, DateSchemaConstructor } from "yup";

declare module "yup" {
  interface StringSchema {
    phone(): StringSchema;
    pinCode(): StringSchema;
  }
}

export const phone;
