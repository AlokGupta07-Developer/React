# Day-5: CSS Modules and Component Folder Structure

This is my **Day-5 of learning React**. Today, I learned how to organize React components and their CSS in a better and more reliable folder structure.

I created separate folders for components like **Header** and **Button**, and kept their JSX and CSS Module files together. I also learned how **CSS Modules** work differently from normal CSS.

## 🛠️ What I Learned

- How to create a proper folder structure for React components
- Keeping component JSX and CSS together
- Using **CSS Modules** in React
- Importing `.module.css` files inside components
- Understanding the difference between normal CSS and CSS Modules
- Creating reusable components like Header and Button
- Importing components into `App.jsx`

## 📁 Project Structure

```text
Day-5/
│
├── src/
│   ├── components/
│   │   ├── header/
│   │   │   ├── Header.jsx
│   │   │   └── Header.module.css
│   │   │
│   │   └── button/
│   │       ├── Button.jsx
│   │       └── Button.module.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── package.json
└── vite.config.js
```

## 1. Component Folder Structure

Instead of keeping all JSX and CSS files in one folder, I created a separate folder for each component.

For example:

```text
header/
├── Header.jsx
└── Header.module.css
```

Similarly, for the Button component:

```text
button/
├── Button.jsx
└── Button.module.css
```

This makes the project more organized and easier to understand as the application grows.

## 2. CSS Modules

I learned how to use **CSS Modules** in React.

For the Header component, I created:

```text
Header.jsx
Header.module.css
```

Then I imported the CSS Module inside `Header.jsx`:

```jsx
import styles from "./Header.module.css";
```

I can then use the class from the imported `styles` object:

```jsx
<p className={styles.heading}>Alok Gupta</p>
```

Here, `styles` is an object containing the CSS classes from `Header.module.css`.

## 3. Why CSS Modules?

CSS Modules help keep component styles **local to that component**.

For example:

```jsx
import styles from "./Button.module.css";

const Button = () => {
  return (
    <button className={styles.button}>
      Click Me
    </button>
  );
};

export default Button;
```

The styles defined for the Button component will not behave like a normal global CSS class.

This helps avoid class-name conflicts when a project contains many components.

## 4. Normal CSS vs CSS Modules

### Normal CSS

```jsx
import "./Header.css";

<h1 className="heading">Hello</h1>
```

The class name is global and can potentially conflict with another component using the same class.

### CSS Modules

```jsx
import styles from "./Header.module.css";

<h1 className={styles.heading}>Hello</h1>
```

The class is scoped to the component, which makes component-level styling safer and more manageable.

## 5. Importing Components in App.jsx

After creating the Header and Button components, I imported them into `App.jsx`.

```jsx
import Header from "./components/header/Header";
import Button from "./components/button/Button";

const App = () => {
  return (
    <div>
      <Header />
      <Button />
    </div>
  );
};

export default App;
```

The flow is:

```text
App.jsx
   │
   ├── Header.jsx
   │      └── Header.module.css
   │
   └── Button.jsx
          └── Button.module.css
```

## 📚 Day-5 Summary

Today I learned how to create a **better component-based folder structure** in React.

I learned that keeping a component's JSX and CSS Module together makes the project more organized and easier to maintain.

I also learned how **CSS Modules work using an imported `styles` object** and how they help keep component styles scoped instead of using normal global CSS.

This helped me understand how React projects can be structured in a clean and scalable way.
