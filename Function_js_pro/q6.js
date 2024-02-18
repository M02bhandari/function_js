function curry(func) {
    return function curried(...args) {
        // Check if all arguments are provided
        if (args.length >= func.length) {
            // If all arguments are provided, execute the original function
            return func.apply(this, args);
        } else {
            // If not all arguments are provided, return a new curried function
            return function (...moreArgs) {
                return curried.apply(this, args.concat(moreArgs));
            };
        }
    };
}

// Test the curry function with a function that adds two numbers
function add(a, b) {
    return a + b;
}

const curriedAdd = curry(add);

console.log(curriedAdd(2)(3));       // Output: 5
console.log(curriedAdd(2, 3));      // Output: 5
console.log(curriedAdd(2)(3, 4));   // Output: 5
console.log(curriedAdd(2)(3)(4));  // Output: 5
