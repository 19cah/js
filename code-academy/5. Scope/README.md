## Global Scope

Scope is a big idea in programming, so let's start at a high level.

Scope refers to where in a program a variable can be accessed. The idea is that some variables are unable to be accessed everywhere within a program.

Think of it like a an apartment building. Everyone who lives in the apartment building is under the global scope of the building and its manager. So, if there are rats in the shared laundry room, everyone has access to the laundry machines, and the rats.

If you write a variable outside of a function in JavaScript, it's in the global scope and can be used by any other part of the program, just like the laundry room can be used by everyone in an apartment.


## Functional Scope
In our theoretical apartment building, you have your own apartment. It has stuff in it that is yours. Other people in the building can't access it. This is like functional scope. You have access to your stuff inside your apartment, and in the building – but not anyone else's apartment.

When we write variables inside a function, only that function has access to its own variables. Therefore, they are in the functional scope.

In addition to a function having access to its own variables, it also has access to variables in the global scope.

In the last exercise we created both variables in the global scope. That is, `laundryRoom` and `mailRoom` are accessible from anywhere in our program.

Now, let's make two variables within a functional scope
