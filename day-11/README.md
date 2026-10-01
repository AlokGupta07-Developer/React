# React Day 11 🚀

## 📚 What I Learned

Today I practiced **React state management** by building a simple **Notes App**.

I learned how to:

- Store multiple notes using `useState`
- Add new notes
- Delete notes
- Work with arrays in React state
- Use the spread operator
- Use `splice()` to remove an item
- Handle forms in React
- Create a responsive UI using Tailwind CSS
- Add hover effects to buttons

---

## 📝 Project: Notes App

I created a simple Notes App where users can:

- Enter a note title
- Enter a note description
- Add the note
- Display all added notes
- Delete a specific note

---

## 🔹 State Management

I used three states:

```jsx
const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
const [task, setTask] = useState([]);
```

### `title`

Stores the note title.

### `description`

Stores the note description.

### `task`

Stores all notes inside an array.

Example:

```js
[
  {
    title: "Learn React",
    description: "Practice useState"
  },
  {
    title: "Learn Tailwind",
    description: "Practice responsive design"
  }
]
```

---

## ➕ Adding a Note

When the form is submitted:

```jsx
const copyTask = [...task];

copyTask.push({
  title,
  description
});

setTask(copyTask);
```

### Flow

```text
User enters title
        ↓
User enters description
        ↓
Submit form
        ↓
Copy existing task array
        ↓
Add new note
        ↓
Update task state
        ↓
Note appears on screen
```

---

## 🗑️ Deleting a Note

I created a `deleteNote` function:

```jsx
const deleteNote = (index) => {
  const copyTask = [...task];

  copyTask.splice(index, 1);

  setTask(copyTask);
};
```

Here:

- `index` tells us which note to delete.
- `[...task]` creates a copy of the array.
- `splice(index, 1)` removes one note.
- `setTask(copyTask)` updates the state.

---

## 🔄 Rendering Notes

I used `.map()` to display all notes:

```jsx
{task.map(function (e, index) {
  return (
    <div key={index}>
      <h1>{e.title}</h1>
      <p>{e.description}</p>
    </div>
  );
})}
```

The `map()` function goes through every note in the `task` array and creates a note card.

---

## 🎨 Tailwind CSS

I used Tailwind CSS to create a simple responsive layout.

### Responsive Layout

```jsx
className="flex flex-col lg:flex-row"
```

On small screens:

```text
Form
 ↓
Notes
```

On large screens:

```text
Form  |  Notes
```

### Responsive Width

```jsx
className="w-full lg:w-1/2"
```

This makes the sections full width on small screens and half width on large screens.

---

## 🖱️ Button Hover Effects

I added simple hover effects to the buttons.

### Add Note

```jsx
hover:bg-blue-700
hover:scale-105
transition
```

### Delete

```jsx
hover:bg-red-800
hover:scale-105
transition
```

The `transition` class makes the hover effect smooth.

---

## 🧠 Important Concepts

### Spread Operator

```js
const copyTask = [...task];
```

Creates a new copy of the existing array.

### `push()`

```js
copyTask.push(newNote);
```

Adds a new note to the array.

### `splice()`

```js
copyTask.splice(index, 1);
```

Removes one note from the array.

### `map()`

```js
task.map(...)
```

Used to display every note from the array.

---

## 🎯 Day 11 Summary

Today I learned how to build a basic **Notes App in React** using:

- `useState`
- Form handling
- Controlled inputs
- Arrays in state
- Spread operator
- `push()`
- `splice()`
- `map()`
- Dynamic rendering
- Delete functionality
- Tailwind CSS
- Responsive design
- Hover effects

---

