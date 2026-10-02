//Using fetch inbuild web services to get data and get url from json placeholder free fake api
// const App = () => {
//   async function getData() {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/albums/100",
//     );
//     const data = await response.json();
//     console.log(data);
//   }
//   return (
//     <div>
//       <button onClick={getData}>Get Data</button>
//     </div>
//   );
// };
// export default App;

//Using axios third party method.. this is simple and widely used...
import axios from "axios";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/albums",
    );
    console.log(response.data);     //on console
    setData(response.data);         //on array
  };
  return (
    <div>
      <button onClick={getData}>Add Data</button>
      {/* Data show on screen */}
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
