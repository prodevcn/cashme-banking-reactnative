import * as Yup from 'yup';

const loginSchema = Yup.object({
  username: Yup.string().required(),
  password: Yup.string().required(),
});

export default loginSchema;
