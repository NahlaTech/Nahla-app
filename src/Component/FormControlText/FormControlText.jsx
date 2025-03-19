import React from 'react';
import PropTypes from 'prop-types';
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
        {error && <p className="p-error  mb-0 error">{error}</p>}
      </div>
    </>
  );
};

FormControlText.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
};
export default FormControlText;
