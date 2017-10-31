# Logical Operators
So far, we've been able to translate certain thoughts into JavaScript code, like, "Are these things equal?" with `===` or, "Is one thing greater than another thing?" with `>`.

In English, sometimes we say "both of these things" or "either one of these things." Let's translate those phrases into JavaScript with some special operators called logical operators.

To say "both must be true," we can use `&&`.
To say "either can be true," we can use `||`.
To say "I want to make sure this is the opposite of what it really is," we can use `!`.
To say "these should not be equal to each other," we can use `!==`.

For example: See [example1.js](example1.js)

In the example above, we make sure that the stopLight is 'green' and && there are no pedestrians before we log 'Go!'.
If either of those conditions are false, we log 'Stop'.
Just like the operators we learned previously, these logical operators will return either true or false.

These logical operators are helpful when writing if/else statements, since they let us make sure multiple variables are true or false.
