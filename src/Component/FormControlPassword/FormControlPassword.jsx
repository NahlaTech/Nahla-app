import React from 'react';
import prototype from 'prop-types';
import { classNames } from 'primereact/utils';
import { useField } from 'formik';
import { InputText } from 'primereact/inputtext';
import './FormControlPassword.css';

const FormControlPassword = props => {
  const { id, lable, name, className, ...otherProps } = props;
  const [field, meta] = useField(name);
  const fieldInvalid = meta.touched && meta.error;
  const error = fieldInvalid && meta.error;
  return (
    <>
      <div className={className}>
        {lable && (
          <lable className="inputLable" htmlFor={id}>
            {label}
          </lable>
        )}
        <InputText
          id={id}
          {...field}
          {...otherProps}
          className={`w-full mt-2 ${fieldInvalid ? 'p-invalid' : ''}`}
        />
        {error && <span className="p-error error">{error}</span>}
      </div>
    </>
  );
};

FormControlPassword.prototype = {
  lable: prototype.string,
  className: prototype.string,
  placeholder: prototype.string,
  id: prototype.string,
  name: prototype.string.isRequired,
};

export default FormControlPassword;
