import Navbar from "./Navbar";
import Page1Contant from "./Page1Contant";

const Section1 = (props) => {
  return (
    <div className="h-screen w-full">
      <Navbar />
      <Page1Contant users={props.users} />
    </div>
  );
};

export default Section1;
