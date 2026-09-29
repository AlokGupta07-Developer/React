# Day-7: React Events, Functions and Form Handling

This is my **Day-7 of learning React**. Today, I learned how to work with **functions and events in React.js**.

I learned how to create functions and call them when different events occur, such as button click, mouse enter, mouse leave, double click, and input change.

I also practiced working with form inputs and learned how to get the value entered by the user using `event.target.value`.

## 🛠️ What I Learned

- Creating and calling functions in React
- Handling events in React
- Using event handlers with buttons and other elements
- `onClick`
- `onDoubleClick`
- `onMouseEnter`
- `onMouseLeave`
- `onChange`
- Understanding the React event object
- Using `event.target.value`
- Getting user input from form fields
- Calling functions directly inside event handlers

## 1. Creating Functions in React

In React, we can create a function inside the component and call it when an event happens.

For example:

```jsx
const App = () => {

  const handleClick = () => {
    console.log("Button Clicked");
  };

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
};

export default App;
```

Here, `handleClick` is called when the button is clicked.

## 2. Function Inside Event Handler

We can also write a function directly inside an event handler.

```jsx
<button
  onClick={() => {
    console.log("Button Clicked");
  }}
>
  Click Me
</button>
```

Both approaches can be used depending on the situation.

## 3. Different React Events

I practiced different events in React.

### onClick

Runs when an element is clicked.

```jsx
<button onClick={handleClick}>
  Click Me
</button>
```

### onDoubleClick

Runs when an element is double-clicked.

```jsx
<button onDoubleClick={handleDoubleClick}>
  Double Click
</button>
```

### onMouseEnter

Runs when the mouse enters an element.

```jsx
<div onMouseEnter={handleMouseEnter}>
  Move Mouse Here
</div>
```

### onMouseLeave

Runs when the mouse leaves an element.

```jsx
<div onMouseLeave={handleMouseLeave}>
  Move Mouse Away
</div>
```

## 4. onChange Event

I also learned how to handle input fields using the `onChange` event.

```jsx
<input
  type="text"
  onChange={(event) => {
    console.log(event.target.value);
  }}
/>
```

Whenever the user types something, the `onChange` event runs.

### event.target.value

`event.target.value` gives us the current value entered inside the input field.

For example:

```text
User types: Alok

event.target.value
        ↓
      "Alok"
```

This is useful when working with forms and user input.

## 5. Finding Details from Form Input

I practiced using form input to take information from the user and then working with that value.

For example:

```jsx
const handleChange = (event) => {
  console.log(event.target.value);
};

<input
  type="text"
  placeholder="Enter your name"
  onChange={handleChange}
/>
```

Whenever the user types in the input, the entered value can be accessed through:

```jsx
event.target.value
```

## 🔄 Event Flow

```text
User Performs Event
        ↓
React Event Handler
        ↓
Function Executes
        ↓
event Object
        ↓
event.target.value
        ↓
User Input
```

## 📚 Day-7 Summary

Today I learned how **events and functions work in React.js**.

I practiced creating separate functions and calling them through event handlers. I also learned that functions can be written directly inside event handlers when required.

I worked with different events such as **click, double click, mouse enter, mouse leave, and change**.

Finally, I learned how to handle form input using `onChange` and get the user's entered data using **`event.target.value`**.

This helped me understand how React applications respond to user interactions and handle user input.
