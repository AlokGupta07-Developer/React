# React Router DOM – Nested & Advanced Routing

In this practice, we learned **Nested Routing, Dynamic Routing, `Outlet`, `Routes`, and `Route`** using `react-router-dom`.

---

## 1. What is Routing?

Routing allows us to display different components/pages based on the URL without reloading the entire webpage.

Example:

```text
/               → Home
/about          → About
/courses        → Courses
/courses/101    → Course Details
/product/men    → Men Products
```

---

# 2. Important React Router Components

### `Routes`

`Routes` is the container that holds all the routes of our application.

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes>
```

### `Route`

`Route` connects a URL path with a React component.

```jsx
<Route path="/about" element={<About />} />
```

When the URL becomes:

```text
/about
```

React Router renders:

```jsx
<About />
```

---

# 3. Nested Routing

Nested routing means creating routes **inside another route**.

Example:

```jsx
<Route path="/product" element={<Product />}>
  <Route path="men" element={<Men />} />
  <Route path="women" element={<Women />} />
  <Route path="kids" element={<Kids />} />
</Route>
```

Here `/product` is the parent route.

The child routes are:

```text
/product/men
/product/women
/product/kids
```

### Important

For nested routes, the child route should normally use a **relative path**:

```jsx
<Route path="men" element={<Men />} />
```

Not:

```jsx
<Route path="/men" element={<Men />} />
```

---

# 4. `Outlet`

`Outlet` is used inside the parent component to tell React Router:

> "Render the matching child route here."

For example, our `Product.jsx` can contain:

```jsx
import { Outlet } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <h1>Product Page</h1>

      <Outlet />
    </div>
  );
};

export default Product;
```

Now when we visit:

```text
/product/men
```

React Router renders:

```text
Product
   ↓
Outlet
   ↓
Men
```

So the `Men` component appears where `<Outlet />` is placed.

---

# 5. Dynamic Routing

Dynamic routing is used when part of the URL changes dynamically.

Example:

```jsx
<Route path="/courses/:courseid" element={<CourseDetails />} />
```

Here:

```text
:courseid
```

is a dynamic parameter.

These URLs can all match the same route:

```text
/courses/101
/courses/102
/courses/500
/courses/react
```

---

# 6. Reading Dynamic Parameters

Inside `CourseDetails.jsx`, we can use `useParams()`.

```jsx
import { useParams } from "react-router-dom";

const CourseDetails = () => {
  const { courseid } = useParams();

  return (
    <div>
      <h1>Course Details</h1>
      <p>Course ID: {courseid}</p>
    </div>
  );
};

export default CourseDetails;
```

For example:

```text
/courses/101
```

The output will be:

```text
Course ID: 101
```

---

# 7. Project Structure

Our project can be organized like this:

```text
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Navbar2.jsx
│   └── Footer.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Product.jsx
│   ├── About.jsx
│   ├── NotFound.jsx
│   ├── CourseDetails.jsx
│   ├── Men.jsx
│   ├── Women.jsx
│   ├── Kids.jsx
│   └── Courses.jsx
│
├── App.jsx
└── main.jsx
```

---

# 8. Page Components

## Home.jsx

```jsx
const Home = () => {
  return <h1>Home Page</h1>;
};

export default Home;
```

## About.jsx

```jsx
const About = () => {
  return <h1>About Page</h1>;
};

export default About;
```

## Courses.jsx

```jsx
const Courses = () => {
  return <h1>Courses Page</h1>;
};

export default Courses;
```

## CourseDetails.jsx

```jsx
import { useParams } from "react-router-dom";

const CourseDetails = () => {
  const { courseid } = useParams();

  return (
    <div>
      <h1>Course Details</h1>
      <h2>Course ID: {courseid}</h2>
    </div>
  );
};

export default CourseDetails;
```

---

# 9. Product Parent Page

`Product.jsx` is the parent route for Men, Women, and Kids.

```jsx
import { Outlet } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <h1>Product Page</h1>

      <Outlet />
    </div>
  );
};

export default Product;
```

---

# 10. Nested Pages

## Men.jsx

```jsx
const Men = () => {
  return <h2>Men Products</h2>;
};

export default Men;
```

## Women.jsx

```jsx
const Women = () => {
  return <h2>Women Products</h2>;
};

export default Women;
```

## Kids.jsx

```jsx
const Kids = () => {
  return <h2>Kids Products</h2>;
};

export default Kids;
```

---

# 11. Not Found Page

`*` is used for routes that don't match any defined route.

```jsx
const NotFound = () => {
  return <h1>404 - Page Not Found</h1>;
};

export default NotFound;
```

Example:

```text
/abc
/random
/test
```

If these routes don't exist, the `NotFound` component will render.

---

# 12. Complete `App.jsx`

```jsx
import { Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";

import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import CourseDetails from "./pages/CourseDetails";

import Men from "./pages/Men";
import Women from "./pages/Women";
import Kids from "./pages/Kids";

import Courses from "./pages/Courses";

const App = () => {
  return (
    <>
      <Navbar />
      <Navbar2 />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/courses" element={<Courses />} />

        {/* Dynamic Route */}
        <Route
          path="/courses/:courseid"
          element={<CourseDetails />}
        />

        {/* Nested Routes */}
        <Route path="/product" element={<Product />}>
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
          <Route path="kids" element={<Kids />} />
        </Route>

        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
```

---

# 13. Route Structure

Our routes are:

| URL | Component | Type |
|---|---|---|
| `/` | `Home` | Normal Route |
| `/about` | `About` | Normal Route |
| `/courses` | `Courses` | Normal Route |
| `/courses/:courseid` | `CourseDetails` | Dynamic Route |
| `/product` | `Product` | Parent Route |
| `/product/men` | `Men` | Nested Route |
| `/product/women` | `Women` | Nested Route |
| `/product/kids` | `Kids` | Nested Route |
| `*` | `NotFound` | 404 Route |

---

# 14. How Nested Routing Works

Suppose we visit:

```text
/product/men
```

React Router first matches:

```jsx
<Route path="/product" element={<Product />}>
```

Then it matches:

```jsx
<Route path="men" element={<Men />} />
```

The final structure becomes:

```text
Product
   │
   └── Outlet
          │
          └── Men
```

Therefore, `Men` is displayed inside the `<Outlet />` of `Product`.

---

# 15. Navigation

We can use `Link` for navigation without a full page reload.

```jsx
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/courses">Courses</Link>
      <Link to="/product/men">Men</Link>
      <Link to="/product/women">Women</Link>
      <Link to="/product/kids">Kids</Link>
    </nav>
  );
};

export default Navbar;
```

---

# 16. Important Difference: Parent and Child Path

For nested routing:

```jsx
<Route path="/product" element={<Product />}>
  <Route path="men" element={<Men />} />
</Route>
```

The child path:

```jsx
path="men"
```

is combined with the parent path:

```text
/product + /men
```

Final URL:

```text
/product/men
```

---

# 17. `Outlet` vs `Routes`

### `Routes`

`Routes` decides **which route/component should be rendered**.

```jsx
<Routes>
  <Route path="/about" element={<About />} />
</Routes>
```

### `Outlet`

`Outlet` decides **where the matched child route should appear inside the parent component**.

```jsx
const Product = () => {
  return (
    <div>
      <h1>Product</h1>

      <Outlet />
    </div>
  );
};
```

Simple way to remember:

```text
Routes → Finds the route

Route → Connects path with component

Outlet → Displays child route inside parent
```

---

# 18. What I Learned

- React Router DOM
- `Routes`
- `Route`
- Nested Routing
- `Outlet`
- Dynamic Routing
- `useParams()`
- 404 / `*` route
- Parent and child routes
- Route parameters
- `Link` navigation
- Organizing pages and components
- Multiple page components in a React application

---

## Key Takeaway

```text
Routes
  ↓
Route
  ↓
Parent Route
  ↓
Nested Route
  ↓
Outlet
  ↓
Child Component
```

Dynamic route:

```text
/courses/:courseid
       ↓
   useParams()
       ↓
   courseid
```

Nested route:

```text
/product
   ├── men
   ├── women
   └── kids
```

Final URLs:

```text
/product/men
/product/women
/product/kids
```