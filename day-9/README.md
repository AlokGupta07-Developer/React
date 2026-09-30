Day-9: Form Handling in React

This is my **Day-9 of learning React**. Today, I learned the basics of **form handling in React**.

First, I created a simple form with an input field and submit button. Then I learned how to handle the form submission using the `onSubmit` event and how to prevent the browser's default form behavior using `event.preventDefault()`.

I also learned about the `event` object and how it is passed to the event handler function.

## 🛠️ What I Learned

- Creating forms in React
- `onSubmit` event
- Form submission handling
- `event` object
- `event.preventDefault()`
- Preventing page reload
- Creating a submit handler function
- Handling form submission using React event handlers
- Why directly handling form submission is not enough for React applications
- Introduction to the need for **two-way data binding**

## 1. Creating a Simple Form

First, I created a simple form with an input field and a submit button.

```jsx
const App = () => {

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Enter name"
        />

        <button>
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
```

This creates a basic HTML form inside a React component.

## 2. Handling Form Submit

Instead of allowing the browser to handle the form automatically, I created a function and connected it with the `onSubmit` event.

```jsx
const App = () => {

  function submitHandler(e) {
    e.preventDefault();

    console.log("Form Submitted");
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter name"
        />

        <button>
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
```

Here, `submitHandler` runs whenever the form is submitted.

## 3. event Object

I learned that React passes an **event object** to the event handler function.

```jsx
function submitHandler(e) {
  console.log(e);
}
```

Here, `e` is a parameter that receives the event object.

The event object contains information about the event that occurred.

For example:

```jsx
<form onSubmit={submitHandler}>
```

When the form is submitted, React sends the event object to:

```jsx
submitHandler(e)
```

I can use this object to work with the event.

## 4. event.preventDefault()

Normally, when a form is submitted, the browser performs its default form behavior, which can cause the page to reload.

To prevent this behavior, I learned:

```jsx
e.preventDefault();
```

Example:

```jsx
function submitHandler(e) {

  e.preventDefault();

  console.log("Form Submitted");
}
```

### Without preventDefault()

```text
Submit Form
     ↓
Browser Default Behavior
     ↓
Page Reload
```

### With preventDefault()

```text
Submit Form
     ↓
React Event Handler
     ↓
e.preventDefault()
     ↓
Page Does Not Reload
     ↓
We Handle the Form Using React
```

## 5. Why Prevent Default Behavior?

Since I am using React, I don't want the browser to handle the form submission in the traditional way.

Instead, I want React to control what happens when the form is submitted.

So I use:

```jsx
e.preventDefault();
```

This prevents the default browser behavior and allows me to handle the form submission inside React.

## 6. Current Form Handling

The form I practiced today looks like this:

```jsx
const App = () => {

  function submitHandler(e) {

    e.preventDefault();

    console.log("Form Submitted");
  }

  return (
    <div>
      <form onSubmit={submitHandler}>

        <input
          type="text"
          placeholder="Enter name"
        />

        <button>
          Submit
        </button>

      </form>
    </div>
  );
};

export default App;
```

Currently, I can submit the form without reloading the page.

However, I am not yet properly storing and managing the value entered by the user using React state.

## 🔄 Form Submit Flow

```text
User Enters Data
       ↓
Clicks Submit
       ↓
onSubmit Event
       ↓
submitHandler(e)
       ↓
e.preventDefault()
       ↓
Page Does Not Reload
       ↓
React Handles the Form
```

## ⚠️ What I Learned About the Current Approach

Although I can prevent the default form behavior and handle the submit event, simply submitting the form like this is not the complete React approach.

For example, currently the input value is not connected to React state.

Since I am learning React, I need to learn how React can control and track the input value.

This leads to the next concept:

**Two-Way Data Binding**

## 📚 Day-9 Summary

Today I learned the basics of **form handling in React**.

First, I created a simple form with an input field and submit button.

Then I learned how to use the `onSubmit` event to handle form submission and how the `event` object is passed to the handler function.

I learned that `e` is a parameter containing information about the event, and I used:

```jsx
e.preventDefault();
```

to prevent the browser's default form behavior and stop the page from reloading.

I also understood that simply preventing the default behavior is not enough when working with React forms because I still need to manage the input data using React.

In the next day, I will learn **Two-Way Data Binding** and how to connect form inputs with React state.