import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup
    .string()
    .email("Enter a Valid Email")
    .test("is-valid-email", "Email is not valid", function (value) {
      if (!value) return true; // The field is not required, so an empty value is valid

      const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
      return regex.test(value);
    })
    .required(" Email is Required"),
  password: yup
    .string()
    .min(7, "Password must be at least 7 characters")
    .required("Password is Required"),
});

export interface SignInProps {
  email: string;
  password: string;
}
