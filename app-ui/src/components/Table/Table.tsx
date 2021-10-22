/* eslint-disable react/no-array-index-key */
import { ConditionalKeys } from "type-fest";
import { getFormattedTableCell } from "~/utils";

export interface TableColumn<T> {
  label: string;
  name: ConditionalKeys<T, string | number | boolean | Date | undefined>;
  className?: string;
}

interface Props<T> {
  className: string;
  columns: Array<TableColumn<T>>;
  values: T[];
  onRowClicked: (item: T) => void;
}

export function Table<T extends { [K in keyof T]: T[K] }>({
  className,
  columns,
  values,
  onRowClicked,
}: Props<T>): JSX.Element {
  return (
    <table className={className}>
      <thead>
        <tr>
          {columns.map((col, index) => (
            <th key={index}>{col.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {values.map((row, rowIndex) => {
          return (
            <tr onClick={onRowClicked.bind(null, row)} key={rowIndex}>
              {columns.map((col) => {
                const cellValue = row[col.name];
                return <td key={String(col.name)}>{cellValue}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
