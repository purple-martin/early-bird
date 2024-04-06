import { Button, Input, Link, Spacer } from "@nextui-org/react";
import { Form, TextDivider } from "./src/components";
import { Password, User } from "react-iconly";

import { Formik } from "formik";
import { OtherSignInPlatform } from "./other";

const defaultSignFormData = {
  username: "wangly19",
  password: "nextui.org",
};

export const LoginForm = () => {
  const router = function(){return({replace: function(path){}})}();

  const handleSignSubmit = () => {
    router.replace("/");
  };
  
  const handleSignFormValidate = (values: typeof defaultSignFormData) => {
    const errors: Record<string, string> = {};

    /** username is notfound ? */
    if (!values.username.trim()) {
      errors.username = "username required";
    }

    /** password is notfound ? */
    if (!values.password.trim()) {
      errors.password = "password required";
    }

    return errors;
  };

  return (
    <>
      <Formik
        initialValues={defaultSignFormData}
        validate={handleSignFormValidate}
        onSubmit={(values, { setSubmitting }) => {
          console.log("login form submit?")
          router.replace("/");
        }}
      >
        {({
          values,
          errors,
          handleChange,
          isSubmitting,
          handleSubmit,
          handleBlur,
        }) => {
          console.log(errors, "withErrors");
          return (
            <Form autoComplete="off" onSubmit={handleSubmit}>
              
            </Form>
          );
        }}
      </Formik>

      <Spacer y={1} />
      <TextDivider text="OR"></TextDivider>
      <OtherSignInPlatform />
    </>
  );
};
