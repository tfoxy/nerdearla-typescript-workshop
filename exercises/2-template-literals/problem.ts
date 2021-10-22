/**
 * horizontal l = left, r = right, c= center 
 * vertical t = top, b = bottom, c = center
 * @param position tl, tr, tc, bl, br, bc, ...
 */
function alignTo(position: string) {
  // ...
}

alignTo("tl"); // should be ok
alignTo("cr"); // should be ok
alignTo("vl"); // should fail
alignTo("rb"); // should fail

function alignToStrict(position: "tl" | "tr" | "tc" | "bl" | "br" | "bc") {
  // ...
}

alignToStrict("tl"); // should be ok
alignToStrict("cr"); // should be ok
alignToStrict("vl"); // should fail
alignToStrict("rb"); // should fail

export {};
