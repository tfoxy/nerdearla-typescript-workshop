import { Field } from "~/api";
import { CheckboxListField } from "./CheckboxListField";
import { NumberField } from "./NumberField";
import { TextField } from "./TextField";

interface Props {
  field: Field;
}

function logWarning(field: never) {
  console.warn("Field has an unknown type", field);
}

export function FormField({ field }: Props): JSX.Element | null {
  switch (field.type) {
    case "checkboxList":
      return <CheckboxListField field={field} />;
    case "number":
      return <NumberField field={field} />;
    case "text":
      return <TextField field={field} />;
    default:
      logWarning(field);
      return null;
  }
}
