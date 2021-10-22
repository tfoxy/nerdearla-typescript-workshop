interface Endpoint {
  path: string;
  schema: Schema;
}

interface Schema {
  name: string;
  fields: Field[];
  // ... muchas otras propiedades
}

interface Field {
  name: string;
  label: string;
  // ... muchas otras propiedades
}

type DeepPartial<T> = {
  [K in keyof T]?: T extends object ? DeepPartial<T[K]> : T;
};

function createSafeObject<T>(value: DeepPartial<T>): T {
  return new Proxy(value, {
    // ...
  }) as T;
}

// ok
const endpoint = createSafeObject<Endpoint>({
  path: "/project/1",
  schema: { name: "Example" },
});

// error
const endpoint2 = createSafeObject<Endpoint>({
  path: "/project/1",
  schema: { nam: "Example" },
});

// ok
const endpoint3 = createSafeObject<Endpoint>({
  path: "/project/1",
  schema: { name: "Example", fields: [{ name: "field1" }] },
});

export {};
