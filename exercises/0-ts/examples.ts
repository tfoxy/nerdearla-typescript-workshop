/** basic TS example */

(() => {
  function greet(person: string, date: Date) {
    console.log(`Hola ${person}, hoy es ${date.toDateString()}!`);
  }

  greet("Meli", new Date());
})();

/** structured language */

(() => {
  interface Point3D {
    x: number;
    y: number;
    z: number;
  }

  interface Point2D {
    x: number;
    y: number;
  }

  function squareDistance(point: Point2D) {
    return Math.sqrt(point.x ** 2 + point.y ** 2);
  }

  const point3D: Point3D = { x: 1, y: 2, z: 3 };

  squareDistance(point3D);
})();

/** union */

(() => {
  /**
   * Takes a string and adds "padding" to the left.
   * If 'padding' is a string, then 'padding' is appended to the left side.
   * If 'padding' is a number, then that number of spaces is added to the left side.
   */
  function padLeft(value: string, padding: number | string) {
    if (typeof padding === "number") {
      return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
      return padding + value;
    }
    throw new Error(`Expected string or number, got '${typeof padding}'.`);
  }

  padLeft("Hello world", 4); // returns "    Hello world"
  padLeft("Hello world", "---"); // returns "---Hello world"
})();
