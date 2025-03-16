import { Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const SignUp = () => {
  return (
    <>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),

          password: Yup.string()
            .matches(
              /^[A-Z][a-z0-9]{5,10}$/,
              'password must be start with uppercase letter and more than 5 letters or numbers',
            )
            .required('password is requird'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          alert('Register successfully');
          // setSubmitting(false);
        }}
      >
        {formik => (
          <form className="w-7 mx-auto py-4" onSubmit={formik.handleSubmit}>
            <div className="field grid">
              <label htmlFor="email" className="col-12 mb-2 md:col-2 md:mb-0">
                Email
              </label>
              <div className="col-12 md:col-10">
                <input
                  className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
                  id="email"
                  type="email"
                  {...formik.getFieldProps('email')}
                />
              </div>
              {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
              ) : null}
            </div>

            <div className="field grid">
              <label
                htmlFor="password"
                className="col-12 mb-2 md:col-2 md:mb-0"
              >
                Password
              </label>
              <div className="col-12 md:col-10">
                <input
                  className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
                  id="password"
                  type="password"
                  {...formik.getFieldProps('password')}
                />
              </div>
              {formik.touched.password && formik.errors.password ? (
                <div>{formik.errors.password}</div>
              ) : null}
            </div>

            <button
              type="submit"
              className="p-3 w-full mx-auto border-0 border-round-xl bg-primary "
            >
              Submit
            </button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default SignUp;
