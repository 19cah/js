
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

[See Example1.js](/example1.js)
Let's dissect that statement and look at its parts:

var, short for variable, is the JavaScript keyword that will create a new variable for us.
myName is chosen by a developer (that's you!). Notice that the word has no spaces, and each new word is capitalized. This is a common convention in JavaScript, and is called camelCase.
= means to assign whatever's next to the variable.
'Arya' is the value that the equals = assigns into the variable myName.
After the variable is declared, we can print the variable with: console.log(myName). This will print 'Arya' to the console.
