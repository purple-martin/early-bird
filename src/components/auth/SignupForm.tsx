import { Field, Form, Formik } from 'formik';

import type { FormikHelpers } from 'formik';
import { getPermalink } from '../../utils/permalinks';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

interface Values {
  name: string;
  email: string;
  password: string;
}

export const SignupForm = () => (
  <div>
    <Formik
      initialValues={{
        name:'',
        email: '',
        password: '',
      }}
      onSubmit={(values: Values, {setSubmitting}: FormikHelpers<Values>) => {
        const respose = fetch('/api/auth/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });
        
        console.log("Signup form submitted ", respose)
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="space-y-6">
            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
              Name
            </label>
            <div className="mt-2">
              <Field
                id="name"
                name="name"
                placeholder="Your Name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-dark shadow-sm ring-1 ring-inset ring-gray-dark placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-purple sm:text-sm sm:leading-6"
              />
            </div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2">
              <Field
                id="email"
                name="email"
                placeholder="marty@pm.com"
                type="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-dark shadow-sm ring-1 ring-inset ring-gray-dark placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-purple sm:text-sm sm:leading-6"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>

              <div className="mt-2">
                <Field
                  id="password"
                  name="password"
                  placeholder="Password"
                  type="password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-dark shadow-sm ring-1 ring-inset ring-gray-dark placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-purple sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full justify-center rounded-md bg-purple px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                SIGN UP
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
    <p className="mt-10 text-center text-sm text-gray-dark">
      Have an account?
      <a href={getPermalink('login', 'auth')} className="font-semibold leading-6 text-gray-dark hover:text-purple">
        Sign in
      </a>
    </p>
  </div>
);
