import axios from "axios";

interface Endpoint {
  path: string;
  schema: Schema;
}

interface Schema {
  name: string;
  // ... muchas otras propiedades
}

/* conditional types */

type IsStringANumber = string extends number ? true : false;

type StringToNumber<T> = T extends string ? number : number[];

function mapStringToNumber<T extends string | string[]>(
  value: T
): StringToNumber<T> {
  // ...
  return {} as any;
}

const num = mapStringToNumber("foo");
const num2 = mapStringToNumber(["foo"]);

/* mapped types */

function keyToValue(key: keyof Endpoint) {
  switch (key) {
    case "path":
      return;
    case "schema":
      return;
  }
}

type PromisesToValues<T extends Record<keyof T, () => unknown>> = {
  [K in keyof T]: Awaited<ReturnType<T[K]>>;
};

function resolveObjectPromises<T>(obj: T): PromisesToValues<T> {
  // ...
  return {} as any;
}

const obj = resolveObjectPromises({
  num: () => axios.get<number>("/random-number"),
  str: () => axios.get<string>("/random-string"),
});

const objNum = obj.num;

export {};
