const LocalStorage = () => {
  //To set the item based on key value pair
  localStorage.setItem("user", "Alok Gupta");
  localStorage.setItem("Age", "23");
  localStorage.setItem("Address", "Varanasi");

  //To Update the item
  localStorage.setItem("user", "Mohit Gupta");
  localStorage.setItem("Age", "22");
  localStorage.setItem("Address", "Greater Noida");

  //To remove the single key
  localStorage.removeItem("user");

  //To clear the localStorage
  localStorage.clear();

  //If we store object in local storage...
  let userDetails = {
    userName: "Alok Gupta",
    age: 23,
    location: "Hydrabad",
    profile: "Full stack developer",
  };

  //In local storage only consider string not object so we use json.stringify()
  localStorage.setItem("userDetails", JSON.stringify(userDetails));

  //If we want to get above userDetails first we use json.parse()
  const users = JSON.parse(localStorage.getItem("userDetails"));
  console.log(users);

  //Same as Session Storage work
  sessionStorage.setItem("User", "Aman");
  return <div></div>;
};

export default LocalStorage;
