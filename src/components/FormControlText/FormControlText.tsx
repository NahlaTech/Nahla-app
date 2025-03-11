import { InputText } from "primereact/inputtext";
import { useField } from "formik";
import "./FormControlText.css";

export type FormControlTextProps = {
  id: string;
  className?: string;
  name: string;
  label?: string;
  placeholder: string;
};

function FormControlText(props: FormControlTextProps) {
  const { id, label, name, className, ...otherProps } = props;

  const [field, meta] = useField(name);
  const fieldInvalid = !!(meta.touched && meta.error);
  const error = fieldInvalid ? meta.error : undefined;

  return (
    <div className={className}>
      {label && <label className="inputLabel" htmlFor={id}>{label}</label>}
      <InputText
        id={id}
        {...field}
        {...otherProps}
        className={`w-full mt-2 ${fieldInvalid ? "p-invalid" : ""}`}
      />
      {error && <span className="p-error error">{error}</span>}
    </div>
  );
}

export default FormControlText;
