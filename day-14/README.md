# React Day 14 – useEffect Hook

Today I learned about the **`useEffect()` Hook** in React.

I practiced how `useEffect()` works with a **dependency array** and how we can control when the effect should run.

---

# ⚛️ What is useEffect?

`useEffect()` is a React Hook used to perform **side effects** in a component.

A side effect is a task that happens outside the normal UI rendering process.

Examples:

- API calls
- Fetching data
- Updating the document title
- Timers
- Event listeners
- Working with Local Storage
- Running some code when state changes

Basic syntax:

```js
useEffect(() => {
  // side effect code
}, []);
```

---

# 🧠 Why Do We Use useEffect?

Normally, React component code runs again whenever state or props change.

Sometimes we don't want a particular piece of code to run on every render.

`useEffect()` allows us to control **when that code should execute**.

---

# 🧪 My Practice Example

```jsx
import { useEffect, useState } from "react";

const App = () => {
  const [numInc, setNumInc] = useState(10);
  const [numDec, setNumDec] = useState(100);

  useEffect(
    function () {
      console.log("useEffect is running....");
    },
    [numInc]
  );

  return (
    <div>
      <h1>Increment by 1: {numInc}</h1>
      <h1>Decrement by 5: {numDec}</h1>

      <button
        onClick={() => {
          setNumInc(numInc + 1);
        }}
      >
        Increment
      </button>

      <button
        onClick={() => {
          setNumDec(numDec - 5);
        }}
      >
        Decrement by 5
      </button>
    </div>
  );
};

export default App;
```

---

# 🔗 Dependency Array

The second argument of `useEffect()` is called the **dependency array**.

```js
useEffect(() => {
  // code
}, [dependency]);
```

The dependency tells React:

> "Run this effect when this value changes."

In my example:

```js
[numInc]
```

means the effect is connected to `numInc`.

---

# 1️⃣ `useEffect` with `[numInc]`

```js
useEffect(() => {
  console.log("useEffect is running....");
}, [numInc]);
```

Here `numInc` is the dependency.

When this button is clicked:

```js
setNumInc(numInc + 1);
```

`numInc` changes.

Therefore:

```text
numInc changes
      ↓
Component re-renders
      ↓
useEffect runs
```

### Example

Initial:

```text
numInc = 10
```

Click Increment:

```text
10 → 11
```

`useEffect()` runs.

Again:

```text
11 → 12
```

`useEffect()` runs again.

---

# ❌ What Happens When `numDec` Changes?

The second button changes:

```js
setNumDec(numDec - 5);
```

For example:

```text
100 → 95
```

The component re-renders.

But:

```js
[numInc]
```

has not changed.

Therefore, the effect does **not** run because `numDec` is not its dependency.

### Important

```text
numInc changes → useEffect runs ✅

numDec changes → useEffect does not run ❌
```

This is the main concept practiced today.

---

# 2️⃣ useEffect with Empty Dependency Array `[]`

Now suppose we write:

```js
useEffect(() => {
  console.log("useEffect is running....");
}, []);
```

An empty dependency array means there are **no dependencies**.

The effect runs after the component's initial render.

```text
Component renders
      ↓
useEffect runs
      ↓
State changes
      ↓
Component re-renders
      ↓
useEffect does not run again
```

### Example

```js
useEffect(() => {
  console.log("Hello React");
}, []);
```

This is commonly used when something should happen when the component mounts.

For example:

```js
useEffect(() => {
  fetch("https://api.example.com/users");
}, []);
```

---

# 🔄 Side-by-Side Comparison

## `[numInc]`

```js
useEffect(() => {
  console.log("Effect");
}, [numInc]);
```

Runs:

```text
Initial render       → ✅
numInc changes       → ✅
numDec changes       → ❌
Other state changes  → ❌
```

---

## `[]`

```js
useEffect(() => {
  console.log("Effect");
}, []);
```

Runs:

```text
Initial render       → ✅
numInc changes       → ❌
numDec changes       → ❌
Other state changes  → ❌
```

---

# 📊 Comparison Table

| Dependency | When Effect Runs |
|---|---|
| No dependency array | After every render |
| `[]` | After initial render |
| `[numInc]` | Initial render + when `numInc` changes |
| `[numInc, numDec]` | Initial render + when either changes |

---

# ⚠️ Important: No Dependency Array

There is also a third case:

```js
useEffect(() => {
  console.log("Effect");
});
```

Here we don't provide a dependency array.

The effect runs after **every render**.

Example:

```text
Initial render → Effect
numInc changes → Effect
numDec changes → Effect
Any state change → Effect
```

So remember:

```text
useEffect(() => {
  // every render
});
```

```text
useEffect(() => {
  // only initial mount
}, []);
```

```text
useEffect(() => {
  // initial mount + numInc changes
}, [numInc]);
```

---

# 🧠 Easy Way to Remember

Think of the dependency array as a **watch list**.

```js
[numInc]
```

means:

> "React, watch `numInc`. If it changes, run this effect."

And:

```js
[]
```

means:

> "I don't have anything to watch. Run the effect after the initial render."

---

# 🎯 What I Learned

Today I learned:

- What `useEffect()` is
- What a side effect means
- Why `useEffect()` is used
- What a dependency array is
- How `[numInc]` works
- How `[]` works
- What happens when there is no dependency array
- How state changes can trigger effects
- How to run an effect only when a specific state changes

---

# 🚀 Key Takeaway

The most important concept from today's practice:

```js
useEffect(() => {
  // Effect
}, [dependency]);
```

The dependency array controls **when the effect should run**.

```text
[]          → Initial render only

[numInc]    → Initial render + numInc changes

[numInc, numDec]
            → Initial render + numInc or numDec changes

No array    → Every render
```