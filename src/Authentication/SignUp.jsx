import { Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { Button } from 'primereact/button';
import FormControlText from '../Component/FormControlText/FormControlText';
import FormControlPassword from '../Component/FormControlPassword/FormControlPassword';
import FormControlCheckbox from '../Component/FormControlCheckbox/FormControlCheckbox';
import { Link } from 'react-router';
import './Auth.css';
const SignUp = () => {
  const { t } = useTranslation();

  const initialValues = {
    firstname: '',
    secondname: '',
    phone: '',
    zone: '',
    email: '',
    password: '',
  };

  let regexPhone = /^(?:\+966|0)?5[0-9]{8}$/;

  const validationSchema = Yup.object({
    firstname: Yup.string()
      .trim()
      .min(2, t('firstNameMin'))
      .max(15, t('firstNameMax'))
      .required(t('firstNameRequird')),
    secondname: Yup.string()
      .trim()
      .min(2, t('secondNameMin'))
      .max(15, t('secondNameMax'))
      .required(t('secondNameRequird')),
    phone: Yup.string()
      .trim()
      .matches(regexPhone, t('invalidPhone'))
      .required(t('phoneRequird')),
    zone: Yup.string()
      .trim()
      .min(3, t('selectTimeZoneMin'))
      .max(15, t('selectTimeZoneMax'))
      .required(t('selectTimeZoneRequird')),
    email: Yup.string()
      .trim()
      .email(t('emailInvalid'))
      .required(t('emailRequired')),

    password: Yup.string()
      .trim()
      .matches(/^[a-zA-Zأ-ي0-9]{5,}$/, t('passwordInvalid'))
      .required(t('passwordRequird')),
    // rePassword: Yup.string()
    //   .trim()
    //   .oneOf([Yup.ref('password')], 'Not matched password')
    //   .required('Password is requird'),
  });

  return (
    <>
      <div className="authContainer flex flex-columnn align-items-center justify-content-center">
        {/* <div className=""> */}
        <div className="px-3 md:px-4 lg:px-6 md:w-10 h-auto dir ">
          <h1 className="text-center text-primary font-bold text-5xl m-0 mb-4 mt-4">
            {t('logoTitle')}
          </h1>
          {/* <div className=""> */}
          <h2 className="m-0">{t('register')}</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => {
              alert('Register successfully');
              actions.setSubmitting(false);
            }}
          >
            <Form className="mt-4">
              <div className="grid">
                <FormControlText
                  id="firstname"
                  name="firstname"
                  label={t('firstName')}
                  placeholder={t('firstNamePlaceholder')}
                  className="mb-4 col-6"
                />
                <FormControlText
                  id="secondname"
                  name="secondname"
                  label={t('secondName')}
                  placeholder={t('secondNamePlaceholder')}
                  className="mb-4 col-6"
                />
              </div>
              <div className="grid">
                <FormControlText
                  id="phone"
                  name="phone"
                  label={t('phone')}
                  placeholder="xx-xxx-xxx (+966)"
                  className="mb-4 col-6"
                />

                <FormControlText
                  id="zone"
                  name="zone"
                  label={t('selectTimeZone')}
                  placeholder={t('selectTimeZonePlaceholder')}
                  className="mb-4 col-6"
                />
              </div>

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
                className="bg-primary w-full mt-4  border-none"
                label={t('createAccount')}
                type="submit"
                // loading={isLoading}
              ></Button>

              <div className="text-center mt-3">
                <Link className="signupLink" to="/auth">
                  {t('haveAccount')} <span>{t('login')}</span>
                </Link>
              </div>
            </Form>
          </Formik>
          {/* </div> */}
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default SignUp;
