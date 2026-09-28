# Day-4: Recruitment UI using Props Drilling

This is my **Day-4 of learning React**. Today, I created a **Company Recruitment UI** using React components and **props drilling**. I created multiple job cards and used props to pass different company and job-related information to each card.

## 🛠️ What I Learned

- Props drilling in a practical project
- Creating reusable job card components
- Passing different data using props
- Creating multiple cards using the same component
- Using **Lucide React** for icons
- Organizing UI using React components

## 💼 Recruitment UI

The project contains multiple recruitment/job cards with different information such as:

- Company name
- Company logo
- Days ago
- Job role
- Working time
- Experience level
- Salary
- Location

Each card receives different values through props.

## 📁 Project Structure

```text
Day-4/
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
├── package.json
└── vite.config.js
```

## 1. Reusable Job Card

I created a reusable `Card` component and used props to display different job information.

Example:

```jsx
<Card
  company="Google"
  logo="logo-url"
  days="2 days ago"
  role="Frontend Developer"
  time="Full Time"
  level="Junior"
  salary="$80K - $100K"
  location="Remote"
/>
```

The same component can be reused for different companies by changing the props.

## 2. Multiple Job Cards

I created multiple recruitment cards by passing different values to the same `Card` component.

```text
App.jsx
   ↓
Card
   ├── Company A
   ├── Company B
   ├── Company C
   ├── Company D
   └── ...
```

This helped me understand how reusable components can reduce duplicate code.

## 3. Props Drilling

The project also helped me practice **props drilling**, where data is passed from a parent component through components to the component that needs it.

The job-related information is passed as props and displayed inside the recruitment card.

## 4. Lucide React Icons

I also used **Lucide React** to add icons to the UI.

For example, I used an icon for the **bookmark/save job** feature.

```jsx
import { Bookmark } from "lucide-react";

<Bookmark />
```

Using an icon library makes it easier to add clean and reusable icons to React applications.

## 🔄 Component Flow

```text
main.jsx
   ↓
App.jsx
   ↓
Recruitment Cards
   ↓
Card.jsx
   ↓
Job Information through Props
```

## 📚 Day-4 Summary

Today I built a practical **Recruitment UI** using React. I created reusable job cards and passed different company and job information using props.
I also practiced **props drilling** and learned how to use **Lucide React** for icons such as the bookmark icon.
This project helped me understand how props and reusable components can be used to build a real-world style React interface.
