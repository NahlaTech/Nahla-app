// import React from 'react';
// import propTypes from 'prop-types';
// import { Checkbox } from 'primereact/checkbox';
// import { useField } from 'formik';

// const FormControlCheckbox = () => {
//   const { id, label, name, className } = props;
//   //   const [field] = useField({ name, type: 'checkbox' });
//   const [field] = useField({ name: props.name, type: 'checkbox' });

//   return (
//     <>
//       <div className={`flex gap-2 align-items-center ${className}`}>
//         <Checkbox
//           {...field}
//           name={name}
//           id={id}
//           checked={Boolean(field.value)}
//         />
//         <label className="font-light inputLabel" htmlFor={id}>
//           {label}
//         </label>
//       </div>
//     </>
//   );
// };

// FormControlCheckbox.propTypes = {
//   label: propTypes.string,
//   className: propTypes.string,
//   id: propTypes.string,
//   name: propTypes.string.isRequired,
// };
// export default FormControlCheckbox;

import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'primereact/checkbox';
import { useField } from 'formik';

const FormControlCheckbox = props => {
  const { id, label, name, className } = props;
  const [field] = useField({ name, type: 'checkbox' });

  return (
    <div className={`flex gap-2 align-items-center ${className}`}>
      <Checkbox {...field} id={id} checked={Boolean(field.value)} />
      <label className="font-light inputLabel" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

FormControlCheckbox.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default FormControlCheckbox;
