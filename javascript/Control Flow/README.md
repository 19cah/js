# Introduction to Control Flow
Now that we've got the parts of JavaScript, let's see what they can do. In this unit, we'll explore how we can take those parts, and create decision trees, games, and much more.

In programming, making decisions with code is called control flow.

For instance, if we were making a choose-your-own-adventure game, we'd need to program a way for a user to choose which plot line they'd like to pursue. Control flow statements enable JavaScript to make those decisions by executing different code based on a condition.

In this lesson, we'll learn how to make decisions with JavaScript and how it can control the program's flow.

# if/else Statements
If you think about what we've been doing so far, we've been writing instructions for computers.

That's all programming really is: a list of instructions for computers.

The main difficulty of being a developer is translating our ideas in human-speak into ideas in computer-speak.

Let's learn how we can ask JavaScript to think like us and make decisions like us.

Let's start with human-speak. Many decisions we make everyday boil down to this sentence in some form:

"If something is true, let's do option 1, or else, if it is false, let's do option 2."

This sentence looks fairly similar when we write it with JavaScript. See for yourself:

[See example1.js](https://github.com/19cah/learn/blob/master/javascript/Control%20Flow/example1.js)

If the variable needCoffee is true, JavaScript will run one code block, and if a variable is false, it will run another.
needCoffee is the condition we are checking inside the if's parentheses. Since it is equal to true, our program will run the code between the first opening curly brace { (line 2) and the first closing curly brace } (line 4). It will completely ignore the else { ... } part. In this case, we'd see 'Finding coffee' log to the console.

Note: Code between curly braces are called blocks. if/else statements have two code blocks.
If we adjusted needCoffee to be false, only the else's console.log will run.
if/else statements are how we can process yes/no questions programmatically.

# Comparison Operators
if/else statements are made even more powerful with comparison operators.

There are two comparisons you might be familiar with:

Less than: <
Greater than: >
You may also recognize these:

Less than or equal to: <=
Greater than or equal to: >=
Comparisons need two things to compare and they will always return a boolean (true or false).

How can we use comparisons and an if/else statement to see if it's time to eat?

# Comparisons Operators II
There are two more extremely useful comparisons we can make. Often times, we might want to check if two things are equal, or if they are not.

To check if two things equal each other, we can use `===` (three equals in a row).
To check if two things do not equal each other, we can write `!==` (exclamation with two equals in a row).
Slow down here, this can be easily confused with creating variables. Variables use one equals sign = to assign a value to a variable. When you're comparing two variables, make sure to use three `===`.

How can we utilize ``===` or `!==` and an if/else statement to write a program to see whether a werewolf will turn into its wolf form this evening?
