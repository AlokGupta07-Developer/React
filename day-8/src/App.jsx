// const App = () => {
//   let a = 10;
//   function changeA() {
//     console.log(a);         //current value = 10
//     a++;                    //Increment opr...
//     console.log(a);         //change value = 11
//   }
//   return (
//     <div>
//       <button onClick={changeA}>Change</button>
//     </div>
//   );
// };
//In above this is only change in the console not change in screen because i write directly.. If i use React then use react as a middleware so i use useState hook used to change the state

// import { useState } from "react";
// const App = () => {
//   const [num, setNum] = useState(10);
//   const [userName, setUserName] = useState("Mohit");
//   const [users, setUsers] = useState([10, 20, 30]);

//   function changeA() {
//     setNum(28);
//     setUserName("Alok");
//     setUsers([40, 50, 60]);
//   }
//   return (
//     <div>
//       <button onClick={changeA}>Change A</button>
//       <h1>
//         Value of A is <span>{num}</span>
//         <br /> name is <span>{userName}</span>
//         <br />
//         Array value is <span>{users}</span>
//       </h1>
//     </div>
//   );
// };
//In above i use useState hook this is used to change the state num: Read only value = current value, setNum: Write only value when we call fnc then change state...

// import { useState } from "react";
// const App = () => {
//   const [num, setNum] = useState(0)

//   function incrementValue() {
//     setNum(num+1)
//   }

//   function decrementValue() {
//     setNum(num-1)
//   }

//   function jumpBy5() {
//     setNum(num+5)
//   }

//   return (

//     <div>
//       <h1>{num}</h1>
//       <button onClick={incrementValue}>Increase</button>
//       <button onClick={decrementValue}>Decrease</button>
//       <button onClick={jumpBy5}>Jump by 5</button>
//     </div>
//   )
// }
//In above i make a practice Project: Increment Decrement counter based on useState hook...

// import { useState } from "react";
// const App = () => {
//   const [num, setNum] = useState(10);

//   function changeNum() {
//     setNum(num);
//   }
//   return (
//     <div>
//       <h1>Value of num is {num}</h1>
//       <button onClick={changeNum}>Change</button>
//     </div>
//   );
// };
//In above React useState identify  this is same value so not update or re-render...

// import { useState } from "react";
// const App = () => {
//   const [num, setNum] = useState(10);

//   function changeNum() {
//     console.log(num);
//     setNum(num + 10); //Asynchroneous
//     console.log(num); //Synchroneous
//   }
//   return (
//     <div>
//       <h1>Value of num is {num}</h1>
//       <button onClick={changeNum}>Change</button>
//     </div>
//   );
// };
//In above Synchroneous process execute line by line so console.log(num) works 1-step before instead of Asynchroneous setNum(num+10) just update the state..

// import { useState } from "react";
// const App = () => {
//   const [users, setUser] = useState({
//     user: "Alok Gupta",
//     age: 23,
//     role: "java",
//   });

//   function updateUser() {
//     const newUsers = { ...users }; //Method 1: Destructure
//     newUsers.user = "Mohit Gupta";
//     newUsers.age = 13;
//     setUser(newUsers);
//     setUser((prev) => ({ ...prev, role: "MERN" })); //Method 2: Using previous
//   }
//   return (
//     <div>
//       <h1>
//         Updated User is: {users.user}, {users.age}, {users.role}
//       </h1>
//       <button onClick={updateUser}>Get user</button>
//     </div>
//   );
// };
//In above we create a object of user details and when i click button then change the user details so we destructure the previous object and update username,age.. I also have a another method using prev to update the object without destructuring

// export default App;
