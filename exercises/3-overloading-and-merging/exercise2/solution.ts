// declare global {
//   interface Boolean {
//     toString(): "true" | "false";
//   }
// }

function setAriaHidden(ariaHidden: "true" | "false") {
  // ...
}

function renderElement(hidden: boolean) {
  setAriaHidden(hidden.toString());
}

export {};
