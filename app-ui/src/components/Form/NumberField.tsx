import { useFormContext } from "react-hook-form";
import { NumberField as INumberField } from "~/api";
import styles from "./Form.module.scss";

interface Props {
  field: INumberField;
}

export function NumberField({ field }: Props): JSX.Element {
  const { register } = useFormContext();

  return (
    <label className={styles.fieldContainer}>
      <span>{field.label}</span>
      <input
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...register(field.name, {
          required: field.required,
          valueAsNumber: true,
        })}
        type="number"
        defaultValue={5}
      />
    </label>
  );
}
