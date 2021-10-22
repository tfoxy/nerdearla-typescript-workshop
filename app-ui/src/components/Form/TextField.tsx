import { useFormContext } from "react-hook-form";
import { TextField as ITextField } from "~/api";
import styles from "./Form.module.scss";

interface Props {
  field: ITextField;
}

export function TextField({ field }: Props): JSX.Element {
  const { register } = useFormContext();

  return (
    <label className={styles.fieldContainer}>
      <span>{field.label}</span>
      <input
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...register(field.name, { required: field.required })}
        type="text"
        defaultValue={field.defaultValue ?? undefined}
      />
    </label>
  );
}
