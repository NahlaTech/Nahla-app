import { Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { Button } from 'primereact/button';
import FormControlText from '../Component/FormControlText/FormControlText';
import FormControlPassword from '../Component/FormControlPassword/FormControlPassword';

const SignUp = () => {
  const { t } = useTranslation();
  return (
    <>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email(t('emailInvalid'))
            .required(t('emailRequired')),

          password: Yup.string()
            .matches(/^[A-Z][a-z0-9]{5,10}$/, t('passwordInvalid'))
            .required(t('passwordRequird')),
        })}
        onSubmit={(values, actions) => {
          alert('Register successfully');
          actions.setSubmitting(false);
        }}
      >
        {formik => (
          // <form>
          //   <div className="field grid">
          //     <label htmlFor="email" className="col-12 mb-2 md:col-2 md:mb-0">
          //       Email
          //     </label>
          //     <div className="col-12 md:col-10">
          //       <input
          //         className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
          //         id="email"
          //         type="email"
          //         {...formik.getFieldProps('email')}
          //       />
          //     </div>
          //     {formik.touched.email && formik.errors.email ? (
          //       <div>{formik.errors.email}</div>
          //     ) : null}
          //   </div>

          //   <div className="field grid">
          //     <label
          //       htmlFor="password"
          //       className="col-12 mb-2 md:col-2 md:mb-0"
          //     >
          //       Password
          //     </label>
          //     <div className="col-12 md:col-10">
          //       <input
          //         className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
          //         id="password"
          //         type="password"
          //         {...formik.getFieldProps('password')}
          //       />
          //     </div>
          //     {formik.touched.password && formik.errors.password ? (
          //       <div>{formik.errors.password}</div>
          //     ) : null}
          //   </div>

          //   <button
          //     type="submit"
          //     className="p-3 w-full mx-auto border-0 border-round-xl bg-primary "
          //   >
          //     Submit
          //   </button>
          // </form>
          <Form className="w-7 mx-auto mt-4" onSubmit={formik.handleSubmit}>
            <FormControlText
              id="email"
              name="email"
              label={t('email')}
              placeholder={t('emailPalceholder')}
              className="mb-4"
            />

            <FormControlPassword
              id="password"
              name="password"
              label={t('password')}
              placeholder={t('passwordPlaceholder')}
              className="mb-4"
            />

            <Button
              className="bg-primary w-full mt-4 border-none"
              label={t('register')}
              type="submit"
            ></Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SignUp;
