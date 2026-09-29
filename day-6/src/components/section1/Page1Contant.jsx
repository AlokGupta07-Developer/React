import LeftContant from "./LeftContant";
import RightContact from "./RightContact";

const Page1Contant = (props) => {
  return (
    <div className="pb-16 pt-6 h-[90vh] flex justify-between gap-10 items-center px-18">
      <LeftContant />
      <RightContact users={props.users} />
    </div>
  );
};

export default Page1Contant;
