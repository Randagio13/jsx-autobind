export function jsxBind(fn, ...args) {
  return fn.bind(fn, ...args);
}
