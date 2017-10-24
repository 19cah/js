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
