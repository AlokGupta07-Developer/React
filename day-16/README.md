# React Router DOM

Today I learned about **React Router DOM** and how to create multiple pages/routes in a React application without reloading the browser.

---

# 📦 Installation

React Router DOM is used for handling routing in React applications.

Install it using npm:

```bash
npm install react-router-dom
```

After installation, it can be imported into the React project.

---

# 🧠 What is React Router?

**React Router** is a library used to handle navigation between different pages or views in a React application.

It allows us to change the displayed component based on the URL without refreshing the complete webpage.

For example:

```text
/          → Home
/about     → About
/contact   → Contact
```

---

# 🌐 BrowserRouter

`BrowserRouter` is a router component that enables routing in a React application.

It uses the browser's URL to keep track of the current route.

We wrap the main `<App />` component inside `BrowserRouter`.

---

# 📁 Project Structure

I created a `pages` folder:

```text
src
│
├── pages
│   ├── Home.jsx
│   ├── About.jsx
│   └── Contact.jsx
│
├── App.jsx
└── main.jsx
```

---

# 1️⃣ Create Pages

## Home.jsx

```jsx
const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

export default Home;
```

---

## About.jsx

```jsx
const About = () => {
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
};

export default About;
```

---

## Contact.jsx

```jsx
const Contact = () => {
  return (
    <div>
      <h1>Contact Page</h1>
    </div>
  );
};

export default Contact;
```

---

# 2️⃣ BrowserRouter in main.jsx

In `main.jsx`, import `BrowserRouter`:

```jsx
import { BrowserRouter } from "react-router-dom";
```

Then wrap `<App />`:

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
```

The important part is:

```jsx
<BrowserRouter>
  <App />
</BrowserRouter>
```

Now React Router can be used inside the application.

---

# 3️⃣ Routes and Route

In `App.jsx`, import:

```jsx
import { Routes, Route, Link } from "react-router-dom";
```

Then import the pages:

```jsx
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
```

---

# 🛣️ Creating Routes

`Routes` is the container for all the routes.

Inside `<Routes>`, we create individual `<Route>` components.

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
```

### Route meaning

```text
/          → Home page
/about     → About page
/contact   → Contact page
```

---

# 🔗 Link Component

For navigation, we use `Link`.

Instead of normal HTML:

```html
<a href="/about">About</a>
```

we use:

```jsx
<Link to="/about">About</Link>
```

The `Link` component changes the route **without completely reloading the webpage**.

---

# 🧑‍💻 Complete App.jsx

```jsx
import { Link, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div>

      {/* Navigation */}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </div>
  );
};

export default App;
```

---

# 🔄 How Navigation Works

Suppose we are currently on:

```text
/
```

When we click:

```jsx
<Link to="/about">About</Link>
```

React Router changes the URL to:

```text
/about
```

Then this route matches:

```jsx
<Route
  path="/about"
  element={<About />}
/>
```

So the `About` component is displayed.

---

# 🧭 Complete Flow

```text
User clicks About
       ↓
<Link to="/about">
       ↓
URL changes
       ↓
/about
       ↓
React Router checks Routes
       ↓
<Route path="/about">
       ↓
<About /> renders
```

There is **no full browser page reload** during this client-side navigation.

---

# ⚖️ `<a>` vs `<Link>`

### Normal Anchor

```html
<a href="/about">About</a>
```

The browser performs normal navigation, which can cause the document to reload.

### React Router Link

```jsx
<Link to="/about">About</Link>
```

React Router handles the navigation on the client side.

For internal routes in a React Router application, `Link` is generally preferred.

---

# 📌 Important Components

## BrowserRouter

```jsx
<BrowserRouter>
  <App />
</BrowserRouter>
```

Provides routing functionality to the React application.

---

## Routes

```jsx
<Routes>
  ...
</Routes>
```

Contains the application's route definitions.

---

## Route

```jsx
<Route
  path="/about"
  element={<About />}
/>
```

Connects a URL path with a React component.

---

## Link

```jsx
<Link to="/about">
  About
</Link>
```

Used to navigate between routes without a full page reload.

---

# 🎯 Routes Used in This Project

| Path | Component | Page |
|---|---|---|
| `/` | `<Home />` | Home |
| `/about` | `<About />` | About |
| `/contact` | `<Contact />` | Contact |

---

# 🧠 Easy Way to Remember

```text
BrowserRouter
     ↓
Enables Router

Routes
     ↓
Container for routes

Route
     ↓
Path → Component

Link
     ↓
Navigation
```

Example:

```jsx
<Link to="/about">About</Link>

<Route
  path="/about"
  element={<About />}
/>
```

`Link` sends the user to `/about`, and `Route` decides which component should be displayed there.

---

# 🚀 What I Learned

Today I learned:

- What React Router is
- How to install `react-router-dom`
- What `BrowserRouter` does
- How to wrap `<App />` with `BrowserRouter`
- How to create a `pages` folder
- How to create Home, About, and Contact pages
- How to use `Routes`
- How to use `Route`
- How `path` works
- How `element` renders a component
- How to use `Link`
- How to navigate without a full page reload

---

# 🛠️ Technologies Used

- React.js
- JavaScript
- React Router DOM
- Vite