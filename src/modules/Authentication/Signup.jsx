import { Formik, Form } from 'formik';
import { object, string } from 'yup';
import FormControlText from '../../../components/FormControlText/FormControlText';
import FormControlPassword from '../../../components/FormControlPassword/FormControlPassowrd';
import { Button } from 'primereact/button';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../app/store';

function Signup() {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const validationSchema = object({
    name: string().trim().required(),
    email: string().trim().required().email(),
    phone: string().trim().required(),
    store_name: string().trim().required(),
    password: string().trim().required(),
    password_confirmation: string().trim().required(),
  });

  const initialValues = {
    name: '',
    email: '',
    phone: '',
    store_name: '',
    password: '',
    password_confirmation: '',
  };

  return (
    <div className="authContainer">
      <div className="loginForm p-6">
        <h1 className="text-center textPrimaryColor">{t('logoTitle')}</h1>
        <h2>{t('register')}</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={() => {}}
        >
          <Form className="mt-5">
            <FormControlText
              id="name"
              name="name"
              label={t('vendorName')}
              placeholder={t('vendorNamePlaceholder')}
              className="mb-4"
            />

            <FormControlText
              id="email"
              name="email"
              label={t('email')}
              placeholder={t('emailPalceholder')}
              className="mb-4"
            />

            <FormControlText
              id="phone"
              name="phone"
              label={t('phone')}
              placeholder="xx-xxx-xxx (+966)"
              className="mb-4"
            />

            <FormControlText
              id="store_name"
              name="store_name"
              label={t('storeName')}
              placeholder={t('storePlaceholder')}
              className="mb-4"
            />

            <FormControlPassword
              id="password"
              name="password"
              label={t('password')}
              placeholder={t('passwordPlaceholder')}
              className="mb-4"
            />

            <FormControlPassword
              id="password_confirmation"
              name="password_confirmation"
              label={t('confirmPassword')}
              placeholder={t('confirmPassword')}
              className="mb-4"
            />

            <Button
              className="bgPrimary w-full mt-4 border-none"
              label={t('createAccount')}
              type="submit"
              loading={isLoading}
            ></Button>

            <div className="text-center mt-3">
              <Link className="signupLink" to="/login">
                {t('haveAccount')} <span>{t('login')}</span>
              </Link>
            </div>
          </Form>
        </Formik>
      </div>
      <div className="wallpaper"></div>
    </div>
  );
}

export default Signup;
