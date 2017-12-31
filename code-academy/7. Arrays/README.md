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
