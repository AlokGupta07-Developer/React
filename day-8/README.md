Day-8: React Hooks and useState

This is my **Day-8 of learning React**. Today, I learned about **React Hooks**, mainly the `useState` hook, and how it is used to manage state in React components.

First, I practiced changing values using normal variables and understood that changing a normal variable does not automatically update the UI in React.

After that, I learned `useState` and understood how the state value and state setter function work. I also created an **Increment and Decrement Counter** project using `useState`.

I also practiced working with objects in state, destructuring, previous state using `prev`, and batch updates.

## 🛠️ What I Learned

- React Hooks
- `useState`
- Managing local state
- State value and state setter function
- Updating state using buttons
- Increment and decrement counter
- State updates and `console.log()`
- Working with objects in state
- Object destructuring
- Spread operator
- Previous state using `prev`
- Functional state updates
- Batch updates in React

## 1. Without State

First, I created a normal variable and tried to change its value.

```jsx
let num = 0;

function increase() {
  num++;
  console.log(num);
}
```

The value can be changed in JavaScript, but React does not automatically re-render the component when a normal variable changes.

This helped me understand why React needs state.

## 2. useState Hook

After that, I learned about the `useState` hook.

```jsx
import { useState } from "react";

const App = () => {

  const [num, setNum] = useState(0);

  return (
    <div>
      <h1>{num}</h1>

      <button onClick={() => setNum(num + 1)}>
        Increase
      </button>
    </div>
  );
};

export default App;
```

### useState Syntax

```jsx
const [num, setNum] = useState(0);
```

Here:

- `num` is the current state value.
- `setNum` is the function used to update the state.
- `0` is the initial value.

I understood that the state value is **read-only**, and we use the setter function to update it.

## 3. Updating State Using a Function

I also learned how to create a separate function for updating the state.

```jsx
const [num, setNum] = useState(0);

function increaseNumber() {
  setNum(num + 1);
}
```

Then I can call the function using a button.

```jsx
<button onClick={increaseNumber}>
  Increase
</button>
```

When the button is clicked, the state changes and React re-renders the component.

## 4. Increment and Decrement Counter

After learning `useState`, I created a practice project using two buttons.

The project contains:

- Increment button
- Decrement button
- Counter value

```jsx
import { useState } from "react";

const App = () => {

  const [num, setNum] = useState(0);

  function increment() {
    setNum(num + 1);
  }

  function decrement() {
    setNum(num - 1);
  }

  return (
    <div>
      <h1>{num}</h1>

      <button onClick={increment}>
        Increment
      </button>

      <button onClick={decrement}>
        Decrement
      </button>
    </div>
  );
};

export default App;
```

This helped me understand how state changes can be connected with user actions.

## 5. setState and console.log()

I also checked how `setNum()` and `console.log()` work together.

```jsx
function increase() {
  setNum(num + 1);

  console.log(num);
}
```

I observed that `console.log(num)` immediately after `setNum()` can show the previous value.

This helped me understand that the updated state value is not immediately available in the same function execution.

## 6. Object in useState

I also learned how to store an object inside state.

```jsx
const [user, setUser] = useState({
  name: "Alok",
  age: 23,
  role: "Developer"
});
```

To update a particular property, I can use the spread operator.

```jsx
setUser({
  ...user,
  role: "MERN Developer"
});
```

The spread operator copies the existing properties of the object and allows me to update a specific property.

## 7. Object Destructuring

I also practiced object destructuring.

```jsx
const user = {
  name: "Alok",
  age: 23,
  role: "Developer"
};

const { name, age, role } = user;

console.log(name);
console.log(age);
console.log(role);
```

Destructuring allows us to directly extract properties from an object.

## 8. Previous State Using prev

I learned how to update state using the previous state.

```jsx
setNum((prev) => prev + 1);
```

Here, `prev` represents the previous state value.

This method is useful when the new state depends on the previous state.

For an object:

```jsx
setUser((prev) => ({
  ...prev,
  role: "MERN Developer"
}));
```

This allows me to update one property while keeping the other properties.

## 9. Batch Updates

I also learned about **batch updates** in React.

For example:

```jsx
setNum(num + 1);
setNum(num + 1);
setNum(num + 1);
```

These updates can use the same state value because React batches state updates.

To correctly perform multiple updates based on the previous state, I learned to use the functional update method.

```jsx
setNum((prev) => prev + 1);
setNum((prev) => prev + 1);
setNum((prev) => prev + 1);
```

Here, every update uses the result of the previous update.

## 🔄 State Flow

```text
User Performs Action
        ↓
Event Handler
        ↓
setState()
        ↓
State Changes
        ↓
React Re-renders
        ↓
Updated UI
```

## 📚 Day-8 Summary

Today I learned the basics of **React Hooks and state management using `useState`**.

First, I practiced changing values using normal variables and understood that React does not automatically update the UI when a normal variable changes.

Then I learned `useState`, where the state value is read-only and the setter function is used to update the state.

I created an **Increment and Decrement Counter** using `useState` and practiced updating state through buttons.

I also checked the behavior of `setNum()` and `console.log()` and understood why the console can show the previous state value immediately after a state update.

After that, I learned how to store and update objects in state, use object destructuring and the spread operator, and update state using the previous state with `prev`.

Finally, I learned about **batch updates** and why functional state updates are useful when multiple updates depend on the previous state.

This helped me understand the basic concept of **state management and re-rendering in React**.
