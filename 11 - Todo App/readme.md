# Todo App

Handle local storage:
- Handle form inputs
- Manage local storage
- CRUD operations on tasks
- Implement event listeners
- Toggle UI elements

## DOMTokenList: `toggle()` method
The `toggle()` method of the `DOMTokenList`interface removes an existing token from the list and returns false. If the token doesn't exist, it is added and the function returns true.
```
element.classList.toggle("class-to-toggle");
``` 

## Event: `preventDefault()` method
Method of the Event interface that tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be.
```
event.preventDefault();
```

## `Array.prototype.findIndex()`
The `findIndex()` method of `Array` instances returns the index of the first element in an array that statisfies the provided testing function. If not elements satisfy the testing function, -1 is returned.
```
const array1 = [5, 12, 8, 13, 44];
const isLargeNumbrer = (element) => element > 13;
console.log(array1.findIndex(isLargeNumber)); // 3;
```

## Window: localStorage property
The `localStorage` read-only property of the windows interface allows you to access a `Storage` object for the `Document`'s origin; the stored data is saved across browser sessions.
Examples:
```
// Set
localStorage.setItem("myCat", "Tom");
// Get
const cat = localStorage.getItem("myCat");
// Remove
localStorage.removeItem("myCat");
// Clear
localStorage.clear();
```

## `JSON.stringify()`
The `JSON.stringify()` static method converts a JavaScript value to a JSON string, optionally replacing values if a replacer function is specified or optionally including only the specified properties if a replacer array is specified.

## `JSON.parse()`
The `JSON.parse()` static method parse a JSON string, constructing the JavaScript value or object described by the string. An optional reviver function can be provided to perform a transformation on the resulting object before it is returned.