import { Password } from "primereact/password";
import { useField } from "formik";
import "./FormControlPassword.css";

export type FormControlPasswordProps = {
  id: string;
  className?: string;
  name: string;
  label: string;
  placeholder: string;
};

function FormControlPassword(props: FormControlPasswordProps) {
  const { id, label, name, className, ...otherProps } = props;

  const [field, meta] = useField(name);
  const fieldInvalid = !!(meta.touched && meta.error);
  const error = fieldInvalid ? meta.error : undefined;

  return (
    <div className={className}>
      <label htmlFor={id}>{label}</label>
      <Password
        inputId={id}
        {...field}
        {...otherProps}
        className={`w-full mt-2 ${fieldInvalid ? "p-invalid" : ""}`}
        feedback={false}
        toggleMask
      />
      {error && <span className="p-error error">{error}</span>}
    </div>
  );
}

export default FormControlPassword;
