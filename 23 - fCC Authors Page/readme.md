# fCC Authors Page

Authors page project to demonstrate:
- The use of fetching data from an external API
- Working asynchornously with JavaScript
- Dynamically update the DOM to display the fetched data
- Pagination

## Fetch API
- A JavaScript interface for making HTTP requests and processing the responses.
- Promise-based and integrated with features of the modern web such as **service workers** and **Cross-Origin Resource Sharing (CORS)**.
- Make a request by calling `fetch()`
  - Pass a `Request` object or string containing the URL to fetch, along with an optional argument to configure the request.
  - Returns a `Promise` which is fulfilled with a `Response` object that represents the server's response.
  - Can be use to make `GET`, `POST`, `PUT`, or `PATCH` requests.

```JavaScript
async function getData() {
  const url = "https://example.org/products.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
}
```

## `Promise`
- An object that represents the eventual completion or failure of an asynchronous operation.
- Essentially, a returned object to which you attach callbacks, instead of passing callbacks into a function.

```JavaScript
function successCallback(result) {
  console.log(`Audio file ready at URL: ${result}`);
}

function failureCallback(error) {
  console.error(`Error generating audio file: ${error}`);
}

createAudioFileAsync(audioSettings).then(successCallback, failureCallback);
```

- `.then()` returns a **new promise**, different from the original, which allows chaining.

```JavaScript
doSomething()
  .then((result) => doSomethingElse(result))
  .then((newResult) => doThirdThing(newResult))
  .then((finalResult) => console.log(finalResult))
  .catch(failureCallback);
```

- As a rule of thumb, whenever an operation encounters a promise, return it and defer its handling to the next `then` handler.

```JavaScript
const listOfIngredients = [];

doSomething()
  .then((url) => {
    // `return` keyword now included in front of fetch call.
    return fetch(url)
      .then((res) => res.json())
      .then((data) => {
        listOfIngredients.push(data);
      });
  })
  .then(() => {
    console.log(listOfIngredients);
    // listOfIngredients will now contain data from fetch call.
  });
```

- Using `async`/`await` can help to write code that is more intuitive.

```JavaScript
async function logIngredients() {
  const url = await doSomething();
  const res = await fetch(url);
  const data = await res.json();
  listOfIngredients.push(data);
  console.log(listOfIngredients);
}
```