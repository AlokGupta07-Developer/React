const App = () => {
  function click() {
    console.log("Mohit");
  }

  function inputType(elem) {
    console.log(elem.target.value);
  }
  return (
    <div>
      <button onClick={click}>Click to change name</button>
      <button onDoubleClick={click}>Double Click</button>
      <button onMouseEnter={click}>Mouse Enter</button>
      <button
        onMouseLeave={() => {
          console.log("Leave");
        }}
      >
        Leave
      </button>

      <input onChange={inputType} type="text" placeholder="Enter something" />
    </div>
  );
};

export default App;
