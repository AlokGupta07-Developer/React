# Local Storage & Session Storage

Today I learned about **Local Storage** and **Session Storage** in JavaScript/React.

Both are browser storage mechanisms used to store data on the user's browser as **key-value pairs**.

---

## 📦 What is Web Storage?

Web Storage allows us to store data in the browser.

There are two main types:

1. **Local Storage**
2. **Session Storage**

Both store data in the form of:

```text
key → value
```

Example:

```js
localStorage.setItem("user", "Alok Gupta");
```

Here:

```text
Key   = user
Value = Alok Gupta
```

---

# 1. Local Storage

## 📌 Definition

**Local Storage** is a browser storage mechanism that allows us to store data on the user's browser.

The data remains stored even after:

- Page refresh
- Browser tab close
- Browser restart

The data remains there until we manually remove it or clear the storage.

### Example

```js
localStorage.setItem("user", "Alok Gupta");
```

---

## ➕ Set Data

To store data:

```js
localStorage.setItem("user", "Alok Gupta");
localStorage.setItem("Age", "23");
localStorage.setItem("Address", "Varanasi");
```

Syntax:

```js
localStorage.setItem(key, value);
```

---

## 🔄 Update Data

If the same key already exists, `setItem()` updates its value.

```js
localStorage.setItem("user", "Alok Gupta");

localStorage.setItem("user", "Mohit Gupta");
```

Now:

```text
user → Mohit Gupta
```

It does not create another `user` key.

---

## 🔍 Get Data

To get stored data:

```js
const user = localStorage.getItem("user");

console.log(user);
```

Output:

```text
Alok Gupta
```

Syntax:

```js
localStorage.getItem(key);
```

---

## ❌ Remove One Item

To remove a particular key:

```js
localStorage.removeItem("user");
```

Only the `user` item will be removed.

---

## 🧹 Clear Local Storage

To remove everything from Local Storage:

```js
localStorage.clear();
```

This removes all Local Storage data for that website.

---

# 2. Storing Objects in Local Storage

Local Storage stores values as **strings**.

We cannot directly store a JavaScript object like this:

```js
const userDetails = {
  userName: "Alok Gupta",
  age: 23
};

localStorage.setItem("userDetails", userDetails);
```

The object will not be stored in its original object format.

Therefore, we use:

```js
JSON.stringify()
```

---

## 🔄 JSON.stringify()

`JSON.stringify()` converts a JavaScript object into a JSON string.

```js
const userDetails = {
  userName: "Alok Gupta",
  age: 23,
  location: "Hyderabad",
  profile: "Full stack developer"
};

localStorage.setItem(
  "userDetails",
  JSON.stringify(userDetails)
);
```

The object is converted into a string before storing it.

---

# 3. Getting Object Data

When we retrieve the data:

```js
const users = localStorage.getItem("userDetails");
```

The result is a string.

To convert the JSON string back into a JavaScript object, we use:

```js
JSON.parse()
```

Example:

```js
const users = JSON.parse(
  localStorage.getItem("userDetails")
);

console.log(users);
```

Now we can access properties:

```js
console.log(users.userName);
console.log(users.age);
console.log(users.profile);
```

### Easy Formula

```text
Object
   ↓
JSON.stringify()
   ↓
String
   ↓
Local Storage
   ↓
JSON.parse()
   ↓
Object
```

---

# 4. Session Storage

## 📌 Definition

**Session Storage** is also used to store key-value data in the browser.

The main difference is that Session Storage is associated with the **current browser tab/session**.

When that tab is closed, its session storage data is cleared.

### Example

```js
sessionStorage.setItem("User", "Aman");
```

---

## ➕ Set Data

```js
sessionStorage.setItem("User", "Aman");
sessionStorage.setItem("Age", "22");
```

---

## 🔍 Get Data

```js
const user = sessionStorage.getItem("User");

console.log(user);
```

---

## ❌ Remove One Item

```js
sessionStorage.removeItem("User");
```

---

## 🧹 Clear Session Storage

```js
sessionStorage.clear();
```

This removes all Session Storage data for the current origin/session.

---

# ⚖️ Local Storage vs Session Storage

| Feature | Local Storage | Session Storage |
|---|---|---|
| Storage type | Browser storage | Browser storage |
| Data format | Key-value | Key-value |
| Data remains after refresh | ✅ Yes | ✅ Yes |
| Data remains after closing tab | ✅ Yes | ❌ No |
| `setItem()` | ✅ | ✅ |
| `getItem()` | ✅ | ✅ |
| `removeItem()` | ✅ | ✅ |
| `clear()` | ✅ | ✅ |
| Stores objects directly | ❌ | ❌ |
| Uses JSON for objects | `JSON.stringify()` / `JSON.parse()` | `JSON.stringify()` / `JSON.parse()` |

---

# 🛠️ Important Methods

## Local Storage

```js
localStorage.setItem("key", "value");
localStorage.getItem("key");
localStorage.removeItem("key");
localStorage.clear();
```

## Session Storage

```js
sessionStorage.setItem("key", "value");
sessionStorage.getItem("key");
sessionStorage.removeItem("key");
sessionStorage.clear();
```

---

# 💡 Where Can We Use Them?

## Local Storage

Useful for data that should survive browser restarts, for example:

- Theme preference
- Language preference
- Simple user preferences
- Non-sensitive application settings
- Some client-side app data

Example:

```js
localStorage.setItem("theme", "dark");
```

---

## Session Storage

Useful for temporary data that should exist only during a tab session.

For example:

- Temporary form data
- Temporary UI state
- Multi-step form progress
- Short-lived session-specific data

Example:

```js
sessionStorage.setItem("step", "2");
```

---

# ⚠️ Important Security Point

Do **not** store sensitive information such as passwords or highly sensitive secrets in Local Storage or Session Storage.

JavaScript running on the page can access this storage.

---

# 🧠 Complete Practice Example

```js
const LocalStorage = () => {

  // Set items
  localStorage.setItem("user", "Alok Gupta");
  localStorage.setItem("Age", "23");
  localStorage.setItem("Address", "Varanasi");

  // Update items
  localStorage.setItem("user", "Mohit Gupta");
  localStorage.setItem("Age", "22");
  localStorage.setItem("Address", "Greater Noida");

  // Remove one item
  localStorage.removeItem("user");

  // Clear Local Storage
  localStorage.clear();

  // Object
  const userDetails = {
    userName: "Alok Gupta",
    age: 23,
    location: "Hyderabad",
    profile: "Full stack developer",
  };

  // Object → JSON string
  localStorage.setItem(
    "userDetails",
    JSON.stringify(userDetails)
  );

  // JSON string → Object
  const users = JSON.parse(
    localStorage.getItem("userDetails")
  );

  console.log(users);

  // Session Storage
  sessionStorage.setItem("User", "Aman");

  return <div></div>;
};

export default LocalStorage;
```

---

# 🎯 Summary

### Local Storage

```text
Long-term browser storage
        ↓
Data remains after closing browser/tab
```

### Session Storage

```text
Temporary browser-tab storage
        ↓
Data is removed when the tab/session ends
```

### For Objects

```text
JavaScript Object
      ↓
JSON.stringify()
      ↓
Storage
      ↓
JSON.parse()
      ↓
JavaScript Object
```

## 🚀 What I Learned

- Local Storage
- Session Storage
- `setItem()`
- `getItem()`
- `removeItem()`
- `clear()`
- `JSON.stringify()`
- `JSON.parse()`
- Storing and retrieving objects
- Difference between Local Storage and Session Storage
- Practical uses of browser storage