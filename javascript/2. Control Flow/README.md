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

[See example1.js](example1.js)

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

How can we utilize `===` or `!==` and an if/else statement to write a program to see whether a werewolf will turn into its wolf form this evening?
 # else if Statements
if/else statements are either this or that for us right now. They answer questions that are either yes or no.

What can we do if we have a question that has multiple yes conditions, or multiple no conditions?

We can add more conditions to our if/else statement with: else if. Check out how this fits into our current knowledge of if/else statements:
[See example2.js](example2.js)

1. We created a variable named stopLight that is assigned to the String 'green'.

2. Then, there's an if/else statement with multiple conditions, using else if. else if allows us to find multiple states of the stopLight variable, and output different things based on its color.

3. The whole thing ends with the singular else we know and love. The else is a catch-all for any other situation. For instance, if the stopLight was blinking blue, the last else would catch it and return a default message.

# switch Statements
Before we move on, let's circle back to else if statements.

Using else if is a great tool for when we have a few different conditions we'd like to consider.

else if is limited however. If we want to write a program with 25 different conditions, like a JavaScript cash register, we'd have to write a lot of code, and it can be difficult to read and understand.

To deal with times when you need many else if conditions, we can turn to a switch statement to write more concise and readable code.

Note: To a computer, a switch statement and an if/else statement are the same, but a switch statement can be easier for other humans to read. Part of being a good developer is writing code that both computers and other humans can read.

switch statements look like this:

[See `example3.js`](example3.js)

The switch keyword initiates the statement, and is followed by ( ... ), which contains the condition that each case will compare to. In the example, the condition is groceryItem.
Inside the block, { ... }, there are cases. case is like the else if part of an if/else if/else statement. The word following the first case is 'tomato'. If groceryItem equalled 'tomato', that case's console.log would run.
groceryItem equals 'papaya', so the first and second case statements are skipped. The third case runs since the case is 'papaya' matches groceryItem's value. This particular program will log out: 'Papayas are $1.29'.
Then the program stops with the break keyword. This keyword will prevent the switch statement from executing any more of its code.
At the end of each switch statement, there is a default condition. If none of the cases are true, then this code will run.


# Review Control Flow

`if/else` statements make binary decisions and execute separate code based on a condition.

We can add extra conditions with to if/else statements with else if conditions.
switch statements make complicated if/else statements easier to read, however they achieve the same result as if/else statements.

Comparison operators, like `<`, `>`, `<=`, and `>=` can compare two variables. After they compare, they always return either true or false.

Logical Operators, like `&&`, `||`, `!==`, and `!`, can compare two variables to see if a certain condition exists:

`&&` checks if both sides are true.

`||` checks if either side is true.

`!==` checks if both sides are not equal.

`!` changes a variable that is true to false, and vice versa.
