export interface Endpoint {
  id: string;
  path: string;
  method: "GET" | "POST" | "PATCH" | "DELETE" | "PUT";
  formSchema?: FormSchema;
  enabled: boolean;
  timeout: number;
  description: string;
}

export interface CommonFieldProps {
  name: string;
  label: string;
  required: boolean;
}

export interface TextField extends CommonFieldProps {
  type: "text";
  defaultValue: string | null;
}

export interface NumberField extends CommonFieldProps {
  type: "number";
  defaultValue: number | null;
}

export interface CheckboxListField extends CommonFieldProps {
  type: "checkboxList";
  defaultValue: string[] | null;
  options: FieldOption[];
}

export type Field = TextField | NumberField | CheckboxListField;

export type FieldValue = Field["defaultValue"];

export interface FieldOption {
  name: string;
  label: string;
}

export interface FormSchema {
  title: string;
  fields: Field[];
}
