export default (fn, ...args) => fn.bind(fn, ...args)
