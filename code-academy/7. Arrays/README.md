One way we organize data in real life is to make lists. Let's make one here:

```
Bucket List:
0. Rappel into a cave
1. Take a falconry class
2. Learn to juggle
```

Let's now write this list in JavaScript, as an array:

``` javascript
var bucketList = ['Rappel into a cave',
                  'Take a falconry class',
                  'Learn to juggle'];
```

Arrays are JavaScript's way of making lists. These lists can store different data types and they are ordered, meaning the position of each list item is numbered by JavaScript.


### *Array.js* Example
``` js
var bucketList = ['Abraham', 'Carlos', 'James'];

console.log(bucketList);
```

Output:

```
[ 'Abraham', 'Carlos', 'James' ]
```

### Property Access

We can access an item using its number, just like we would in an ordinary list. There’s one catch though!

JavaScript counts starting from `0`, not `1`, so the first item in an array will be at position `0`. This is because JavaScript is zero-indexed.

We can select the first item in an array like this:

```js
var bucketList = ['Rappel into a cave', 'Take a falconry class', 'Learn to juggle'];
var listItem = bucketList[0];
console.log(listItem);
// Output: 'Rappel into a cave'
```

If we wanted the second item, we'd write:

```js
var bucketList = ['Rappel into a cave', 'Take a falconry class', 'Learn to juggle'];
var listItem = bucketList[1];
console.log(listItem);
// Output: 'Take a falconry class'
```

Access to an element in an array that doesn't exist:

```js
var bucketList = ['Abraham', 'Carlos', 'James'];

var listItem = bucketList[3];

console.log(listItem);
```

Output:

```
undefined
```

> Fun fact: You can also access each individual character in a string the same way you do with arrays. For instance, you can write:

```js
var hello = 'Hello World';
console.log(hello[6]);
// Output: W
```

`'W'` will be the output since it's the character in the 6th position. This works because JavaScript internally stores strings in a similar way that it stores arrays.

### length property
It is often convenient to know how many items are inside of an array.

We can find this out by using one of an array's built in properties, called .length. We can attach this to any variable holding an array and it will return the number of items inside.

As an example:

var bucketList = ['Rappel into a cave', 'Take a falconry class'];

console.log(bucketList.length);
// Output: 2
