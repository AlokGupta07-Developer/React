# React Day 10 🚀

## 📚 What I Learned

Today I learned **Form Handling in React** and how to manage form input values using the `useState` hook.

### Topics Covered

- React Forms
- `useState`
- Controlled Inputs
- `value`
- `onChange`
- `onSubmit`
- `event.target.value`
- `event.preventDefault()`
- Form submission handling
- Updating state from input values

---

## 📝 Form Handling in React

In React, we can control form inputs using state.

Example:

```jsx
const [title, setTitle] = useState("");
```

Here:

- `title` stores the current input value.
- `setTitle` updates the input value.

---

## 🎯 Controlled Input

```jsx
<input
  type="text"
  placeholder="Enter your name"
  value={title}
  onChange={(e) => {
    setTitle(e.target.value);
  }}
/>
```

### How it works

```text
User types
    ↓
onChange event
    ↓
e.target.value
    ↓
setTitle()
    ↓
State updates
    ↓
Input value updates
```

---

## 🚫 preventDefault()

Normally, submitting an HTML form reloads the page.

In React, we can prevent this using:

```jsx
e.preventDefault();
```

This allows us to handle the form submission without reloading the page.

---

## 📤 Form Submission

```jsx
const submitHandler = (e) => {
  e.preventDefault();

  console.log("Form Submitted by", title);
};
```

Then we can attach it to the form:

```jsx
<form onSubmit={submitHandler}>
```

---

## 💻 Practice Code

```jsx
import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    console.log("Form Submitted by", title);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter your name"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
```

---

## 🧠 Important Learning

### `value`

```jsx
value={title}
```

Connects the input with React state.

### `onChange`

```jsx
onChange={(e) => setTitle(e.target.value)}
```

Updates the state whenever the user types something.

### `onSubmit`

```jsx
<form onSubmit={submitHandler}>
```

Runs the function when the form is submitted.

### `e.target.value`

Gets the current value entered by the user.

---

## 🎯 Key Concept

React forms can be controlled by keeping the input value inside **state**.

```text
State → Input
Input → onChange → State
```

This creates a **controlled component**.

---

## 📌 Day 10 Summary

Today I learned how to:

- Create forms in React
- Manage form data using `useState`
- Create controlled inputs
- Handle `onChange`
- Get input values using `event.target.value`
- Handle form submission using `onSubmit`
- Prevent page reload using `preventDefault()`
- Update React state based on user input

---

## 🚀 Next Step

Practice multiple form fields such as:

- Name
- Email
- Password
- Age
- City

and store all the values in a single state object.
