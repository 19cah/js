# Introduction to Functions

Functions are like recipes. They take data or variables, perform a set of tasks on them, and then return the result. The beauty of functions is that they allow us to write a chunk of code once, then we can reuse it over and over without writing the same code over and over.

# Parameters
The calculator program should be able to perform a math operation on a number. We should be able to give a calculator a number, have it perform a task on it like multiplication, then print a result.

Currently, we have no way to give a function a number. To do this, we can use parameters. Parameters are variables that we can set when we call the function. For example:


For example: See [example1.js](example1.js)

We added inputNumber within the parentheses of the multiplyByThirteen function. inputNumber is a parameter.
Inside the `multiplyByThirteen` function, we use `console.log` to print the `inputNumber` by `13`.

When we call the `multiplyByThirteen` function on the last lines, we set the inputNumber parameter. For instance, `multiplyByThirteen(9)` calls the `multiplyByThirteen` function, and sets `inputNumber` as 9. Then, inside the block of the multiplyByThirteen function, 9 is multiplied by 13, resulting in 117 printing to the console.

Note on terminology: inputNumber is a parameter, but when we call `multiplyByThirteen(9)`, the `9` is called an argument. Therefore, arguments are provided when you call a function, and parameters receive arguments as their value. So, inputNumber is a parameter and its value is the argument `9`, since we wrote `multiplyByThirteen(9)`.

Parameters let us write logic inside functions that can be modified based on when we call the function, which will help make our functions more flexible.
