export const pipe = (...functions) => initialValue => functions
    .filter(fn => !!fn)
    .reduce((accumulator, fn) => fn(accumulator), initialValue);

export const compose = (...functions) => initialValue => functions
    .filter(fn => !!fn)
    .reduceRight((accumulator, fn) => fn(accumulator), initialValue);

export const curry = func => (...args) =>
    args.length >= func.length
        ? func(...args)
        : (...nextArgs) => curry(func)(...args, ...nextArgs);

export const withPostFunction = (post, fn) => compose(fn, post)

export const nonFunction = () => {}