/* eslint-disable react/jsx-props-no-spreading */
import { FormProvider, useForm } from "react-hook-form";
import { FormSchema } from "~/api";
import styles from "./Form.module.scss";
import { FormField } from "./FormField";

interface Props {
  formSchema: FormSchema;
}

export function Form({ formSchema }: Props): JSX.Element {
  const form = useForm();

  return (
    <FormProvider {...form}>
      <h3 className={styles.title}>{formSchema.title}</h3>
      {formSchema.fields.map((field) => (
        <FormField key={field.name} field={field} />
      ))}
    </FormProvider>
  );
}
