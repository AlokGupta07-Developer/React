import Section1 from "./components/section1/Section1.jsx";
import Section2 from "./components/section2/Section2.jsx";

const App = () => {
  const users = [
    {
      img: "https://plus.unsplash.com/premium_photo-1661593195372-874ca9d29713?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "",
      tag: "Setisfied",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661722273422-8d1723e8f905?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "",
      tag: "Underserved",
    },
    {
      img: "https://images.unsplash.com/photo-1624835567150-0c530a20d8cc?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "",
      tag: "Underbanked",
    },
  ];
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  );
};

export default App;
