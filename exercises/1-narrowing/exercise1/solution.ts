/**
 * Quiero mi función soporte values de tipo:
 * - number
 * - boolean
 * - string
 * - Date
 */
export function getFormattedTableCell(value: string | number | boolean | Date): string {
  if (typeof value === "number") {
    return value.toString(); // 0 is not rendered by default, so convert it to string
  }
  if (typeof value === "boolean") {
    return value ? "✓" : "✘";
  }
  if (value instanceof Date) {
    return value.toUTCString();
  }
  return value.trim().toLowerCase();
}
