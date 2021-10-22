// union

export function getFormattedTableCell(
  value: number | boolean | Date | string | undefined
): string | undefined {
  if (typeof value === "number") {
    return value.toString();
  }
  if (typeof value === "boolean") {
    return value ? "✓" : "✘";
  }
  if (value instanceof Date) {
    return value.toUTCString();
  }
  return value;
}
