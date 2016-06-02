export default function autobind(fn, ...args) {
  return fn.bind(fn, ...args);
}
