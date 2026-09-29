import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
  return (
    <div className="h-full w-80 shrink-0 rounded-4xl relative">
      <img
        src={props.img}
        className="object-cover h-full rounded-4xl "
        alt=""
      />
      <RightCardContent id={props.id} tag={props.tag} />
    </div>
  );
};

export default RightCard;
