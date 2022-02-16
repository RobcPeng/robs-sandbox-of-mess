// This means input is expecting Type T - It's like any but we keep type information!
export function lastInArr<T>(input: T[]) {
  return input[input.length - 1];
}

export function lastInArrTwo<T>(input: string, stuff: T[]) {}

export function lastInArrExtend<T extends { name: string }>(obj: T[]) {
  // we get to keep the type!
  return obj.map((v) => v.name);
}
