# React Day 15 – API Gallery & Lazy Loading

Today I created a **responsive image gallery using React.js, Axios, useEffect, and Tailwind CSS**.

I used the **Picsum Photos API** to fetch 100 images and display them on the screen.

I also learned how to use **lazy loading for images**.

---

# 🚀 Project Features

- Fetch images from an API
- Use Axios for API requests
- Use `useEffect()` to fetch data automatically
- Store API data using `useState()`
- Display images using `map()`
- Responsive image gallery
- Loading state
- Image lazy loading
- Hover effects
- Responsive Tailwind CSS grid

---

# 🌐 API Used

I used the Picsum Photos API:

```text
https://picsum.photos/v2/list?page=2&limit=100
```

This API returns image information such as:

```json
{
  "id": "10",
  "author": "Paul Jarvis",
  "width": 2500,
  "height": 1667,
  "url": "https://unsplash.com/...",
  "download_url": "https://picsum.photos/..."
}
```

The `download_url` is used as the image source.

---

# ⚛️ useState

I used two states:

```js
const [userData, setUserData] = useState([]);
const [loading, setLoading] = useState(true);
```

### `userData`

Stores the images received from the API.

Initially:

```js
[]
```

After the API request:

```text
userData → 100 images
```

### `loading`

Used to show a loading message while the API request is running.

---

# 📡 Fetching Data Using Axios

I created a function to fetch the API data:

```js
const getData = async () => {
  try {
    const { data } = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=100"
    );

    setUserData(data);
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
};
```

### Axios Flow

```text
Axios GET Request
       ↓
API Response
       ↓
data
       ↓
setUserData(data)
       ↓
React State Updates
       ↓
Gallery Displays
```

---

# 🔄 useEffect

Instead of using a button to fetch the data, I used `useEffect()`.

```js
useEffect(() => {
  getData();
}, []);
```

The empty dependency array `[]` means the effect runs after the initial render.

Therefore, when the page is refreshed:

```text
Page Refresh
     ↓
Component renders
     ↓
useEffect runs
     ↓
getData()
     ↓
Axios API request
     ↓
Images received
     ↓
Images displayed
```

There is no need to click a button.

---

# 🖼️ Displaying Images

I used `map()` to loop through the API data:

```jsx
{userData.map((elem) => {
  return (
    <div key={elem.id}>
      <img
        src={elem.download_url}
        alt={elem.author}
      />

      <p>{elem.author}</p>
    </div>
  );
})}
```

Each API object contains information about one image.

---

# ⚡ Lazy Loading

I added:

```html
loading="lazy"
```

to the `<img>` element.

Example:

```jsx
<img
  src={elem.download_url}
  alt={elem.author}
  loading="lazy"
/>
```

## What is Lazy Loading?

Lazy loading means images can be loaded when they are close to becoming visible instead of requiring all off-screen images to load immediately.

For example:

```text
Page opens
    ↓
Visible images load
    ↓
User scrolls
    ↓
More images load
```

This can reduce unnecessary initial image loading for a large gallery.

---

# 📱 Responsive Tailwind CSS

I used Tailwind CSS Grid:

```jsx
className="
  grid
  grid-cols-1
  sm:grid-cols-2
  md:grid-cols-3
  lg:grid-cols-4
  xl:grid-cols-5
"
```

The number of columns changes according to screen size:

```text
Mobile       → 1 column
Small        → 2 columns
Medium       → 3 columns
Large        → 4 columns
Extra Large  → 5 columns
```

---

# 🎨 Card Design

Each image is displayed inside a card:

```jsx
<div
  className="
    overflow-hidden
    rounded-xl
    bg-white
    text-black
    shadow-lg
    transition
    duration-300
    hover:-translate-y-1
    hover:scale-[1.02]
  "
>
```

I used hover effects to make the cards interactive.

---

# ⏳ Loading State

While the API request is running:

```jsx
{loading ? (
  <h2>Loading images...</h2>
) : (
  // Gallery
)}
```

Initially:

```text
loading = true
```

After the API request:

```js
setLoading(false);
```

Then the gallery is displayed.

---

# 🔑 Important Concepts

## Axios

Used to make the API request:

```js
axios.get(url)
```

## useEffect

Used to automatically call the API after the component renders:

```js
useEffect(() => {
  getData();
}, []);
```

## useState

Used to store API data:

```js
const [userData, setUserData] = useState([]);
```

## map()

Used to display every image:

```js
userData.map(...)
```

## loading="lazy"

Used for image lazy loading:

```jsx
<img loading="lazy" />
```

---

# 🔄 Complete Project Flow

```text
React Component
       ↓
useEffect()
       ↓
getData()
       ↓
Axios GET Request
       ↓
Picsum API
       ↓
API Response
       ↓
setUserData()
       ↓
React Re-render
       ↓
map()
       ↓
Responsive Image Cards
       ↓
Lazy Loaded Images
```

---

# 🛠️ Technologies Used

- React.js
- JavaScript
- Axios
- React `useState`
- React `useEffect`
- Tailwind CSS
- Picsum Photos API

---

# 🎯 What I Learned

Today I learned:

- How to fetch API data automatically
- How to use Axios with React
- How to use `useEffect()` with `[]`
- How to store API data using `useState()`
- How to render API data using `map()`
- How to create a responsive grid using Tailwind CSS
- How to create image cards
- How to add loading state
- What image lazy loading is
- How `loading="lazy"` works

---

