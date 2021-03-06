
# Variables
To write programs in JavaScript, we'll need to make our code reusable.

Part of making code reusable is removing the data we want to perform some logic on to leave only the logic. Then we can use our logic on any data. Here's what we mean:

Imagine you're writing a weather app. Your thermometer outside reports the temperature in Celsius and your goal is to report the temperature in Fahrenheit.

You write a program that takes a temperature like 15 degrees Celsius, then multiplies and divides it until you get the temperature in Fahrenheit.

Once you've done this though, you see the temperature now reads 16 degrees Celsius. In order to find Fahrenheit again, you'd need to write a whole new program to convert 16 degrees Celsius to Fahrenheit.

This would happen because the Celsius-to-Fahrenheit logic is operating directly on the Celsius data.

Luckily, JavaScript offers variables. Variables allow us to assign data to a word, then we can use that word within our program instead of the data. Then, if the variable's value changes we only have to change the variable's value instead of re-writing the entire program.



# Create a Variable
Let's dive in and see a variable in the wild. Here is how you declare a variable:

[See Example1.js](example1.js)
Let's dissect that statement and look at its parts:

var, short for variable, is the JavaScript keyword that will create a new variable for us.
myName is chosen by a developer (that's you!). Notice that the word has no spaces, and each new word is capitalized. This is a common convention in JavaScript, and is called camelCase.
= means to assign whatever's next to the variable.
'Arya' is the value that the equals = assigns into the variable myName.
After the variable is declared, we can print the variable with: console.log(myName). This will print 'Arya' to the console.

# Create a Variable II
If variables can hold strings, can they hold other data types? Let's give it a shot:

[See Example2.js](example2.js)

Variables can hold any data type, like strings, numbers, and Booleans. They can also hold data types that we have not learned yet, like arrays, functions and objects (more on that later).

# Changing a Variable's Value
Why do we care about variables?

Variables are useful in two ways:

They allow us to use the same value over and over, without having to write a string or other data type over and over.
More importantly, we can assign variables different values that can be read and changed by the program without altering our code.
For example, a weather app can show you a different high temperature every day. Instead of writing a new website everyday, they store the information in a variable and just change the value of that variable.

We can change a variable's value if we want, like this:



We created a variable by using the keyword var and the name weatherCondition.
Then, we took the existing weatherCondition variable, and set its value equal to 'Tuesday: Sunny'.
True to their name, variables are indeed variable.

# String Interpolation
In the previous lessons, we've put strings into variables. Now, let's put a variable's value into a string!

Putting a variable in a string uses concepts we've already learned. The JavaScript term for this idea is interpolation.

Interpolwhat?! —Possibly the most fun JavaScript term to say.

We can use the + operator from earlier to interpolate (insert) a variable into a string, like this:

[See Example4.js](example4.js)
