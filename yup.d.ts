import { StringSchema, DateSchemaConstructor } from "yup";

declare module "yup" {
  interface StringSchema {
    phone(): StringSchema;
  }
}

export const phone;
