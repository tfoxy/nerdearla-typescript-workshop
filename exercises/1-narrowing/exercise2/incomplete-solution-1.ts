export interface TextField {
  type: "text";
  defaultValue: string | null;
}

export interface NumberField {
  type: "number";
  defaultValue: number | null;
}

export interface CheckboxListField {
  type: "checkboxList";
  options: string[];
}

export type Field = TextField | NumberField | CheckboxListField;


/**
 * Quiero obtener una definición de cada field que según el tipo me devuelva:
 * - checkboxList: "Checkbox options: name1, name2, name3"
 * - number: "Number default: 2.00"
 * - text: "Text default: text"
 */
export function fieldDefinition({ field }: { field: Field }): string {
  switch(field.type) {
    case "checkboxList":
      return `Checkbox options: ${field.options.join(", ")}`;
    case "number":
      return `Number default: ${field.defaultValue?.toFixed(2)}`;
    case "text":
      return `Text default: ${field.defaultValue}`;
  }
}