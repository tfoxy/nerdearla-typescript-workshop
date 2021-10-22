import { useEffect, useRef } from "react";
import { useFormContext } from "react-hook-form";
import { CheckboxListField as ICheckboxListField } from "~/api";
import styles from "./Form.module.scss";

interface Props {
  field: ICheckboxListField;
}

export function CheckboxListField({ field }: Props): JSX.Element {
  const { register, setValue } = useFormContext();
  const defaultValueRef = useRef(field.defaultValue ?? []);

  useEffect(() => {
    setValue(field.name, defaultValueRef.current);
  }, [field.name, setValue]);

  return (
    <fieldset className={styles.fieldContainer}>
      <legend>{field.label}</legend>
      {field.options.map((option) => (
        <label key={option.name}>
          <span>{option.label}</span>
          <input
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register(field.name, { required: field.required })}
            type="checkbox"
            value={option.name}
          />
        </label>
      ))}
    </fieldset>
  );
}
