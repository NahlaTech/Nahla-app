import React from 'react';
import propTypes from 'prop-types';
import { useField } from 'formik';
import { InputText } from 'primereact/inputtext';
import './FormControlText.css';

const FormControlText = props => {
  const { id, label, name, className, ...otherProps } = props;
  const [field, meta] = useField(name);
  const fieldInvalid = !!(meta.touched && meta.error);
  const error = fieldInvalid ? meta.error : undefined;
  return (
    <>
      <div className={className}>
        {label && (
          <label className="inputLabel" htmlFor={id}>
            {label}
          </label>
        )}
        <InputText
          id={id}
          {...field}
          {...otherProps}
          className={`w-full mt-2 ${fieldInvalid ? 'p-invalid' : ''}`}
        />
        {error && <p className="p-error error">{error}</p>}
      </div>
    </>
  );
};

FormControlText.propTypes = {
  label: propTypes.string,
  className: propTypes.string,
  placeholder: propTypes.string,
  id: propTypes.string,
  name: propTypes.string.isRequired,
};
export default FormControlText;
