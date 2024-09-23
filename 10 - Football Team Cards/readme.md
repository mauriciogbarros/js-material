# Football Team Cards

JavaScript methods exercise
- Processing datasets
- Output information to the screen
- Object destructuring
- Event handling
- Data filtering
- Default parameters
- `Object.freeze()`
- `switch`
- `map()`

## `Object.freeze(obj)`
Freezes `obj` and prevents any changes to be made to it.

## Object destructuring
```
const developerObj = {
  name: "Jessica Wilkins",
  isDeveloper: true
};

// Object destructuring
const { name, isDeveloper } = developerObj;
```

## Default parameters
If a function is called without an argument, then the default value will be used.
```
const greeting = (name = "Anonymous") => {
  return "Hello" + name;
}

console.log(greeting("John")); // Hello John
console.log(greeting()); // Hello Anonymous
```

## `Array.map()`
The `map()` method of `Array` instances creates a new array populated with the results of calling a provided function on every every element in the calling array.
```
const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1); // [2, 8, 18, 32]
```

## `Array.filter()`
The `filter()` method of `Array` instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
```
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 6);

console.log(result); // ["exuberant", "destruction", "present"]
```

## `switch`
```
const expr = 'Papayas';

switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;

  case 'Mangoes':

  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;

  default:
    console.log(`Sorry, we are out of ${expr}.`);
}
```