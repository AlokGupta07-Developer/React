import { Bookmark } from "lucide-react";

const Cards = ({
  company,
  logo,
  days,
  role,
  time,
  level,
  salary,
  location,
}) => {
  return (
    <div className="card">
      <div className="top">
        <img src={logo} alt={company} />
        <button>
          Save <Bookmark size={16} />
        </button>
      </div>

      <div className="centre">
        <h3>
          {company} <span>{days}</span>
        </h3>

        <h2>{role}</h2>

        <div className="tags">
          <h4>{time}</h4>
          <h4>{level}</h4>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h3>{salary}</h3>
          <p>{location}</p>
        </div>

        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default Cards;
