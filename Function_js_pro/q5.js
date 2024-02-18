function factorial(n) {
    // Base case: if n is 0 or 1, the factorial is 1
    if (n === 0 || n === 1) {
        return 1;
    } 
    // Recursive case: if n is greater than 1, calculate factorial recursively
    else {
        return n * factorial(n - 1);
    }
}

// Testing the function with different inputs
console.log(factorial(0));  // Output: 1
console.log(factorial(1));  // Output: 1
console.log(factorial(5));  // Output: 120 (5 * 4 * 3 * 2 * 1)
console.log(factorial(10)); // Output: 3628800 (10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1)
