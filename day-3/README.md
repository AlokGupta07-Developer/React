# Day-3: Props and Props Drilling in React

This is my **Day-3 of learning React**. Today, I learned about **props** and how to pass different data from one component to another. I created reusable Card components for three users and used props to provide different usernames, ages, and images.

## 🛠️ What I Learned

- What are Props in React
- Passing data from parent to child component
- Using props for reusable components
- Passing different values to the same component
- Passing images through props
- Basic understanding of Props Drilling

## 📁 Project Structure

```text
Day-3/
│
├── src/
│   ├── components/
│   │   ├── Card.jsx
│   │   
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
└── package.json
```

## 1. What are Props?

**Props** are used to pass data from a parent component to a child component.

For example, I created one reusable `Card` component and passed different values to it:

```jsx
<Card user="Alok" age={23} image="image-url" />
<Card user="Rahul" age={24} image="image-url" />
<Card user="Aman" age={22} image="image-url" />
```

The same `Card` component can display different users based on the props received.

## 2. Receiving Props

Inside `Card.jsx`, I received the props using the `props` object.

```jsx
const Card = (props) => {
  return (
    <div className="card">
      <img src={props.image} alt="" />
      <h1>{props.user}, {props.age} Gupta</h1>
    </div>
  )
}
```

Here:

- `props.user` → username
- `props.age` → user's age
- `props.image` → user's image

## 3. Reusing the Card Component

Instead of creating three separate components, I created **one reusable Card component** and passed different props for each user.

```jsx
<Card user="Alok" age={23} image="image1.jpg" />
<Card user="Rahul" age={24} image="image2.jpg" />
<Card user="Aman" age={22} image="image3.jpg" />
```

This makes the component reusable and reduces duplicate code.

## 4. Props Drilling

I also started learning about **Props Drilling**.

Props drilling happens when data is passed through multiple components from a parent component to a deeply nested child component.

For example:

```text
Parent
  ↓ props
Child
  ↓ props
GrandChild
```

The data is passed from one component to another until it reaches the component that needs it.

## 🔄 Day-3 Component Flow

```text
App.jsx
   ↓
Card.jsx
   ↓
Props
   ├── user
   ├── age
   └── image
```

## 📚 Day-3 Summary

Today I learned how **props make React components reusable**. I created cards for three different users and passed their username, age, and image using props.

I also got an introduction to **Props Drilling**, where data is passed through components to reach another component.

This helped me understand how data can be shared between React components.
