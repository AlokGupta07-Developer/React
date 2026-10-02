import { useEffect, useState } from "react";

const App = () => {
  const [numInc, setNumInc] = useState(10);
  const [numDec, setNumDec] = useState(100);


  //useEffect is running only when num increment by 1
  useEffect(
    function () {
      console.log("useEffect is running....");
    },
    [numInc],
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
