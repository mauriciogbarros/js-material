# Decimal to Binary Converter

- Fundamental concepts of recursion
- Call stack
- Build a visual representation of the recursion process through animation.

## `parseInt(string)`
Parses a string argument and returns an integer of the specified radix.

### Return Value
- An integer parsed from the given `string`, or
- `NaN` when
  - The `radix` as a 32-bit integer is smaller than 2 or gibber than 36, or
  - The first non-whitespace character cannot be converted to a number.

```
parseInt(2.2); // 2
parseInt("2e+3"); // 2
parseInt("e"); // NaN
```

## `setTimout(() => {}, delay)`
The global `setTimeout()` method sets a timer which executes a function or specified piece of code once the timer expires.

```
setTimeout(() => {
  console.log("Delayed for 1 second.");
}, 1000);
```
