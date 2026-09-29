import "remixicon/fonts/remixicon.css";
import RightCard from "./RightCard";
const RightContact = (props) => {
  console.log(props.users);
  return (
    <div
      id="right"
      className="overflow-x-auto rounded-4xl h-full w-2/3  p-6 flex flex-no-wrap gap-10"
    >
      {props.users.map(function (elem, idx) {
        return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag} />;
      })}
    </div>
  );
};

export default RightContact;
