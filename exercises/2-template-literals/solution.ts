type VerticalDirection = "t" | "b" | "c";
type HorizontalDirection = "l" | "r" | "c"
type Position = `${VerticalDirection}${HorizontalDirection}`;

function alignTo(position: Position) {
  // ...
}

alignTo("tl"); // should be ok
alignTo("cr"); // should be ok
alignTo("vl"); // should fail
alignTo("rb"); // should fail

export {};
