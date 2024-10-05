# Platformer Game

## Canvas API
- Can be used to create graphics in games using JavaScript and the HTML `canvas` element.
- Use the `getContext` method to provide the context for where the graphics will be rendered.
  ```
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  ```
- Properties
  - width
  - ctx.fillStyle = color_str
- Methods
  - ctx.fillRect(x, y, width, height)

## `requestAnimationFrame()` web API
- Takes in a callback and is used to update the animation on the screen.
- The `animate` function is responsible for updating and continuously draw on the canvas.

## `clearRect(x, y, width, height)` web api
- To clear the canvas before rendering the next frame of the animation.