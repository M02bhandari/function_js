/*Q4. Write a JavaScript function called calculateTax that takes an income as an argument and returns the
amount of tax to be paid. Use a closure to handle different tax rates based on income ranges. Test the
function with various incomes.*/



function calculateTax() {

    var taxRates =[
       { minIncome: 300001, maxIncome: 600000, Rate: 5},
       { minIncome: 600001, maxIncome: 900000, Rate: 10},
       { minIncome: 900001, maxIncome: 1200000, Rate: 15},
       { minIncome: 1200001, maxIncome: 1500000, Rate: 20},
       { minIncome: 1500001, maxIncome: Infinity, Rate: 30}

        
    ];

     // Return a function that calculates tax based on income
     return function (income) {
        for (var i = 0; i < taxRates.length; i++) {
            if (income >=taxRates[i].minIncome && income <=taxRates[i].maxIncome ) {
                // return income * taxRates[i].Rate;
                return income * (taxRates[i].Rate / 100); // Convert rate from percentage to fraction
            } 
            
        }
     };
    
}
// Test the function with various incomes
var calculateTaxForIncome = calculateTax();

console.log("Tax for $800000 income:", calculateTaxForIncome(800000));
console.log("Tax for $1500000 income:", calculateTaxForIncome(1500000));
console.log("Tax for $1500001 income:", calculateTaxForIncome(1500001));
console.log("Tax for $600000 income:", calculateTaxForIncome(600000));
