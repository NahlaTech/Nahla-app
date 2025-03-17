import React from 'react';
import './Login.css';
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
  return (
    <>
      <div className="authContainer">
        <div className="w-full loginForm p-6">
          <h1 className="text-center textPrimaryColor">{t('logoTitle')}</h1>
          <h2>{t('login')}</h2>
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={Yup.object({
              email: Yup.string()
                .trim()
                .email(t('emailInvalid'))
                .required(t('emailRequired')),

              password: Yup.string()
                .trim()
                .matches(/^[a-zA-Zأ-ي0-9]{5,}$/, t('passwordInvalid'))
                .required(t('passwordRequird')),
            })}
            onSubmit={(values, actions) => {
              alert('Register successfully');
              actions.setSubmitting(false);
            }}
          >
            <Form className="mt-5">
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
    </>
  );
};

export default Login;
