import Card from "./components/Card";

const App = () => {
  return (
    <div className="parent">
      <Card
        user="Alok"
        age={23}
        img="https://media.istockphoto.com/id/673830534/photo/cute-baby-boy.jpg?s=1024x1024&w=is&k=20&c=e7QrwJkjLaD_rf9G5iiFXA964T0eeky8PMeM1k7pjyI="
      />
      <Card
        user="Mohit"
        age={25}
        img="https://thumbs.dreamstime.com/b/portrait-young-handsome-man-white-shirt-outdoor-portrait-young-handsome-man-white-shirt-outdoor-nice-appearance-131934608.jpg"
      />
    </div>
  );
};

export default App;
