import { TestUtilsError } from "./errors";

export function asMock<F extends (...args: never[]) => unknown>(
  fn: F
): jest.Mock<ReturnType<F>, Parameters<F>> {
  if (!jest.isMockFunction(fn)) {
    const fnName = fn.name ? ` "${fn.name}"` : "";
    throw new TestUtilsError(`Function${fnName} is not a mock`);
  }
  return fn;
}
