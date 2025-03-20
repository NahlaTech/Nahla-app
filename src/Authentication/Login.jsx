import React from 'react';
import './Auth.css';
import { useTranslation } from 'react-i18next';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import FormControlText from '../Component/FormControlText/FormControlText';
import FormControlPassword from '../Component/FormControlPassword/FormControlPassword';
import FormControlCheckbox from '../Component/FormControlCheckbox/FormControlCheckbox';
import { Button } from 'primereact/button';
import { Link } from 'react-router';
const Login = () => {
  const { t } = useTranslation();

  const initialValues = { email: '', password: '' };

  const validationSchema = Yup.object({
    email: Yup.string()
      .trim()
      .email(t('emailInvalid'))
      .required(t('emailRequired')),

    password: Yup.string()
      .trim()
      .matches(/^[a-zA-Zأ-ي0-9]{5,}$/, t('passwordInvalid'))
      .required(t('passwordRequird')),
  });
  return (
    <>
      <div className="authContainer flex flex-column align-items-center justify-content-start">
        <h1 className="text-center text-primary font-bold text-5xl m-0 mb-4 mt-4">
          {t('logoTitle')}
        </h1>
        <div className="py-0 px-3 md:px-4 lg:px-6 md:w-10   ">
          <div className="w-full ">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values, actions) => {
                alert('Register successfully');
                actions.setSubmitting(false);
              }}
            >
              <Form className=" w-full">
                <h2 className="m-0 text-center">{t('login')}</h2>
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

                <div className="flex justify-content-between">
                  <div>
                    <FormControlCheckbox
                      id="rememberMe"
                      name="rememberMe"
                      label={t('rememberMe')}
                    />
                  </div>
                  <div className="font-light">{t('forgotPassword')}</div>
                </div>

                <Button
                  className="bg-primary w-full mt-4 border-none"
                  label={t('login')}
                  type="submit"
                  // loading={isLoading}
                ></Button>

                <div className="text-center mt-3">
                  <Link className="signupLink" to="/auth/signup">
                    {t('noAccount')} <span>{t('register')}</span>
                  </Link>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
