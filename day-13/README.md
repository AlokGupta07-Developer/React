# React Day 13 – Fetch API & Axios

Today I learned how to **fetch data from an API in React** using two different approaches:

1. **Fetch API** – Built-in JavaScript/Web API
2. **Axios** – Third-party HTTP client library

For practice, I used the free fake API **JSONPlaceholder**.

---

# 🌐 What is an API?

**API (Application Programming Interface)** allows one application to communicate with another application and exchange data.

For example:

```text
React App
    ↓
API Request
    ↓
Server
    ↓
API Response
    ↓
React App
```

In this project, I fetched album data from JSONPlaceholder.

---

# 1. Fetch API

## 📌 What is Fetch?

`fetch()` is a **built-in Web API** available in modern browsers.

We can use it to send HTTP requests and get data from an API.

No package installation is required.

### Basic Syntax

```js
fetch(url)
```

For an API request:

```js
const response = await fetch("API_URL");
const data = await response.json();
```

---

## 🧑‍💻 Fetch Example

```jsx
const App = () => {

  async function getData() {

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/albums/100"
    );

    const data = await response.json();

    console.log(data);
  }

  return (
    <div>
      <button onClick={getData}>
        Get Data
      </button>
    </div>
  );
};

export default App;
```

---

## 🔍 How Fetch Works

### Step 1 – Call the API

```js
const response = await fetch("API_URL");
```

`fetch()` sends a request to the API.

---

### Step 2 – Convert Response to JSON

```js
const data = await response.json();
```

The response needs to be converted into JSON data before we can easily use it.

---

### Step 3 – Use the Data

```js
console.log(data);
```

The API data will be displayed in the browser console.

---

# 2. Axios

## 📌 What is Axios?

**Axios** is a third-party JavaScript library used for making HTTP requests.

Unlike `fetch()`, Axios is not built into JavaScript, so we need to install it.

### Install Axios

```bash
npm install axios
```

Then import it:

```js
import axios from "axios";
```

---

# 🧑‍💻 Axios Example

```jsx
import axios from "axios";
import { useState } from "react";

const App = () => {

  const [data, setData] = useState([]);

  const getData = async () => {

    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/albums"
    );

    console.log(response.data);

    setData(response.data);
  };

  return (
    <div>

      <button onClick={getData}>
        Add Data
      </button>

      <div>
        {data.map((e, index) => {
          return (
            <h1 key={index}>
              {index}, {e.title}
            </h1>
          );
        })}
      </div>

    </div>
  );
};

export default App;
```

---

# 🔄 Understanding Axios Code

### 1. Import Axios

```js
import axios from "axios";
```

Axios is imported into the React component.

---

### 2. Create State

```js
const [data, setData] = useState([]);
```

Initially, `data` is an empty array.

After getting the API response, we store the data inside this state.

---

### 3. Send GET Request

```js
const response = await axios.get("API_URL");
```

`axios.get()` sends a GET request to the API.

---

### 4. Get API Data

With Axios, the actual response data is available directly through:

```js
response.data
```

So:

```js
console.log(response.data);
```

prints the API data.

---

### 5. Store Data in State

```js
setData(response.data);
```

The API data is stored in React state.

React then re-renders the component.

---

### 6. Display Data

```js
data.map((e, index) => {
  return (
    <h1 key={index}>
      {index}, {e.title}
    </h1>
  );
})
```

`map()` loops through the API data and displays every album title.

---

# ⚖️ Fetch vs Axios

| Feature | Fetch | Axios |
|---|---|---|
| Type | Built-in Web API | Third-party library |
| Installation | Not required | Required |
| GET request | `fetch()` | `axios.get()` |
| JSON conversion | `response.json()` | Not required |
| Data access | `data` after parsing | `response.data` |
| Error handling | Manual handling needed | Easier |
| Request syntax | More verbose | Shorter |
| Browser support | Modern browsers | Widely used |

---

# 🧠 Important Difference

### Fetch

```js
const response = await fetch("API_URL");

const data = await response.json();

console.log(data);
```

### Axios

```js
const response = await axios.get("API_URL");

console.log(response.data);
```

The biggest thing to remember:

```text
Fetch
response
   ↓
response.json()
   ↓
data

Axios
response
   ↓
response.data
```

---

# 🔁 Complete Data Flow

In this project, the flow is:

```text
Click "Add Data"
       ↓
getData() runs
       ↓
Axios sends GET request
       ↓
API sends response
       ↓
response.data
       ↓
setData(response.data)
       ↓
React state updates
       ↓
map() loops through data
       ↓
Data displayed on screen
```

---

# 🧪 API Used

For practice, I used **JSONPlaceholder**, a free fake REST API.

Example:

```text
https://jsonplaceholder.typicode.com/albums
```

It provides fake JSON data that can be used for learning and API practice.

Example response:

```json
{
  "userId": 1,
  "id": 1,
  "title": "quidem molestiae enim"
}
```

---

# 🛠️ Technologies Used

- React.js
- JavaScript
- Fetch API
- Axios
- JSONPlaceholder
- Vite

---

# 🎯 What I Learned

Today I learned:

- What an API is
- How React communicates with an API
- How to use the built-in `fetch()` method
- How to use Axios
- GET API requests
- `async/await`
- `response.json()`
- `response.data`
- `useState()` for storing API data
- `map()` for displaying API data
- How API data flows from server to React UI

---

# 📌 Interview Questions

### What is Fetch?

Fetch is a built-in Web API used to make HTTP requests.

### What is Axios?

Axios is a third-party HTTP client library used to make HTTP requests.

### Do we need to install Fetch?

No. Fetch is built into modern browsers.

### Do we need to install Axios?

Yes.

```bash
npm install axios
```

### How do you get JSON data using Fetch?

```js
const response = await fetch(url);
const data = await response.json();
```

### How do you get data using Axios?

```js
const response = await axios.get(url);
const data = response.data;
```

## 🚀 Next Step

Next, I can practice:

- POST API
- DELETE API
- PUT/PATCH API
- API error handling
- Loading state
- `useEffect()` with API calls