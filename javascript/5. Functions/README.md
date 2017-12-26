# Introduction to Functions

Functions are like recipes. They take data or variables, perform a set of tasks on them, and then return the result. The beauty of functions is that they allow us to write a chunk of code once, then we can reuse it over and over without writing the same code over and over.

## See examples

- [`pizza.js`](examples/pizza.js)

# Parameters
The calculator program should be able to perform a math operation on a number. We should be able to give a calculator a number, have it perform a task on it like multiplication, then print a result.

Currently, we have no way to give a function a number. To do this, we can use parameters. Parameters are variables that we can set when we call the function. For example:


For example: See [example1.js](example1.js)

We added inputNumber within the parentheses of the multiplyByThirteen function. inputNumber is a parameter.
Inside the `multiplyByThirteen` function, we use `console.log` to print the `inputNumber` by `13`.

When we call the `multiplyByThirteen` function on the last lines, we set the inputNumber parameter. For instance, `multiplyByThirteen(9)` calls the `multiplyByThirteen` function, and sets `inputNumber` as 9. Then, inside the block of the multiplyByThirteen function, 9 is multiplied by 13, resulting in 117 printing to the console.

Note on terminology: inputNumber is a parameter, but when we call `multiplyByThirteen(9)`, the `9` is called an argument. Therefore, arguments are provided when you call a function, and parameters receive arguments as their value. So, inputNumber is a parameter and its value is the argument `9`, since we wrote `multiplyByThirteen(9)`.

Parameters let us write logic inside functions that can be modified based on when we call the function, which will help make our functions more flexible.

# Parameters II
If we can set one parameter, can we set two?

We can set as many parameters as we'd like by adding them when we declare the function, separated by commas, like this:

For example: See [example2.js](example2.js)

The getRemainder function has two parameters: numberOne and numberTwo.

When we call the getRemainder function on the last line, we include two numbers as the parameters, also separated by commas. This is referred to as passing in parameters to a function.

In this case, we are telling the function to assign numberOne the value of 365 and numberTwo the value of 27. We are passing in 365 and 27 to the getRemainder function.

When the getRemainder runs, the function knows what numberOne and numberTwo equal since we passed in two parameters when we called the function. Therefore it evaluates 365 % 27, which produces the result 14.

By adding multiple parameters, we can build functions that are more flexible. Now the function has two variables that we can define when we call the function.
