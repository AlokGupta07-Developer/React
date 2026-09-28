# Day-2: Component-Based Architecture in React

This is my **Day-2 of learning React**. Today, I learned about **component-based architecture** and how to create, organize, import, and use React components.

## 🛠️ What I Learned

- Component-based architecture
- Creating reusable components
- Organizing components inside a `components` folder
- Importing components into other components
- Rendering components using JSX

## 📁 Project Structure

```text
Day-2/
│
├── src/
│   ├── components/
│   │   ├── Card.jsx
│   │   └── Navbar.jsx
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── package.json
└── vite.config.js
```

## 1. Component-Based Architecture

React applications are built using **components**.

Instead of writing the complete UI in one file, we can divide the UI into smaller and reusable components.

For example:

```text
App
├── Card
└── Navbar
```

This makes the code easier to understand, maintain, and reuse.

## 2. Components Folder

Inside the `src` folder, I created a `components` folder.

```text
src/
└── components/
    ├── Card.jsx
    └── Navbar.jsx
```

I keep my reusable React components inside this folder.

## 3. Creating `Card.jsx`

I created a `Card.jsx` component.

```jsx
const Card = () => {
  return (
    <div>
      <h2>This is Card Component</h2>
    </div>
  )
}

export default Card
```

## 4. Importing Card in `App.jsx`

After creating the `Card` component, I imported it into `App.jsx`.

```jsx
import Card from "./components/Card"

function App() {
  return (
    <div>
      <Card />
    </div>
  )
}

export default App
```

Here, `<Card />` renders the `Card` component inside `App`.

## 5. Importing Navbar in Card

I also learned that one React component can import and use another component.

For example, `Card.jsx` can import `Navbar.jsx`:

```jsx
import Navbar from "./Navbar"

const Card = () => {
  return (
    <div>
      <Navbar />
      <h2>This is Card Component</h2>
    </div>
  )
}

export default Card
```

So the component relationship becomes:

```text
App.jsx
   ↓
Card.jsx
   ↓
Navbar.jsx
```

## 🔄 Component Flow

```text
main.jsx
   ↓
App.jsx
   ↓
Card.jsx
   ↓
Navbar.jsx
```

This shows how React components can be combined to build a complete user interface.

## 📚 Day-2 Summary

Today I learned how React uses a **component-based architecture**. I created separate components, organized them inside a `components` folder, and learned how to import and render one component inside another.

This helped me understand how larger React applications can be divided into smaller, manageable, and reusable components.