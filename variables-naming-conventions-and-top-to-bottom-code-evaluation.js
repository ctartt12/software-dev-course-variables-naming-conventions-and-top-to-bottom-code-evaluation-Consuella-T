/*

Objective:
In this activity, you will reinforce the skill of creating and using variables
while practicing best practices in variable naming conventions through a hands-on,
interactive coding challenge.

The code snippet below may include:
  - Ambiguous or incorrect variable names.
  - Missing variables that need to be created.
  - Scenarios that require the use of clear and descriptive variable names.

You will:
  - Identify Issues: Review the provided code and identify any variable names that:
  - Are unclear or too vague (e.g., a, b, c).
  - Do not follow best practices (e.g., camelCase, descriptive naming).
  - Refactor the Code: Rename the variables and rewrite the program using descriptive names that clearly convey the variable's purpose.
  - Enhance the Program: Add at least two additional variables to improve the program’s functionality or clarity.

Things to reflect on:
  - Why is it important to use meaningful variable names?
  - What are the common pitfalls to avoid when naming variables?
  - How do clear variable names benefit team collaboration?
  
*/

/*let a = "Alice";
let b = 5;
let c = 20;
let d = a + " bought " + b + " items for $" + c + ".";

console.log(d);
*/

let customerName = "Alice";
let numberOfItems = 5;
let totalCost = 20;
let taxRate = 1.05; // Adding a tax rate variable to enhance functionality
let priceperItem = totalCost / numberOfItems; // Adding a variable to calculate price per item
let receipt =customerName + " bought " + numberOfItems + " items for $" + totalCost + " (including tax: $" + (totalCost * taxRate).toFixed(2) + "). Each item costs $" + priceperItem.toFixed(2) + "."; 
console.log(receipt);

/*
Variable names are meaningfukl because it gives context to the data they hold and makes it more readable for other developers to understand.
The most common pitfalls to avoid when naming variables include using vague names,using reserved keywords. Clear variable names benefit team collaboration by making it easier for team members to understand the code, reducing confusion and improving communication.
*/