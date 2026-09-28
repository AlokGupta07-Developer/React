# Day-1: Learning React

This is my **Day-1 of learning React**. In this project, I created a React application using **Vite** and learned the basic React project structure, JSX, components, and how to run a React development server.

## 🛠️ Technologies Used

- React
- JavaScript
- JSX
- Vite
- ESLint

## 📁 Project Structure

```text
src/
├── App.jsx
└── main.jsx

index.html
package.json
eslint.config.js
vite.config.js
```

## 1. Vite React Setup

I created a React project using **Vite** and selected:

- React
- JavaScript

Vite provides a fast development environment for React applications.

## 2. ESLint

**ESLint** is used to find common errors and maintain clean JavaScript and React code.

## 3. `index.html`

`index.html` contains the basic HTML boilerplate.

The important part is:

```html
<div id="root"></div>
```

This is the place where React renders our application.

## 4. `App.jsx`

`App.jsx` is a React component where we write **JSX**.

JSX allows us to write HTML-like code inside JavaScript.

```jsx
function App() {
  return <h1>Hello React</h1>
}

export default App
```

## 5. JSX

**JSX = JavaScript XML**

It allows us to write HTML-like syntax inside JavaScript.

```jsx
<h1>Hello React</h1>
```

## 6. `rafce` Snippet

`rafce` is a VS Code snippet used to quickly create a React functional component.

Example:

```jsx
const App = () => {
  return (
    <div>App</div>
  )
}

export default App
```

## 7. `main.jsx`

`main.jsx` is the **entry point** of the React application.

It imports `App.jsx` and renders `<App />` inside the `root` element.

```jsx
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <App />
)
```

The basic flow is:

```text
index.html
    ↓
main.jsx
    ↓
<App />
    ↓
App.jsx
    ↓
Browser UI
```

## 8. Removing `App.css`

The Vite template provides a default `App.css` file.

I deleted `App.css` because I did not need the default styling for my Day-1 React practice.

## ▶️ Run the Project

Start the development server using:

```bash
npm run dev
```

Vite starts the local server, usually at:

```text
http://localhost:5173
```

## 📚 What I Learned

- React project setup with Vite
- Basic React folder structure
- JSX
- `App.jsx`
- `main.jsx`
- `index.html` and the root element
- `rafce` component snippet
- ESLint
- Running React with `npm run dev`
