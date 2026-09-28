import Cards from "./components/Cards";

const jobs = [
  {
    company: "Amazon",
    logo: "https://images.seeklogo.com/logo-png/40/2/amazon-icon-logo-png_seeklogo-405254.png",
    days: "5 days ago",
    role: "Senior UI/UX Designer",
    time: "Part-Time",
    level: "Senior Level",
    salary: "$120/hr",
    location: "Mumbai",
  },
  {
    company: "Google",
    logo: "https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/3:2/w_2560,c_limit/google-logo.jpg",
    days: "30 days ago",
    role: "Graphic Designer",
    time: "Part-Time",
    level: "Flexible Schedule",
    salary: "$150-220k",
    location: "Kochi",
  },
  {
    company: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    days: "18 days ago",
    role: "Project Manager",
    time: "Full-Time",
    level: "Remote",
    salary: "$85/hr",
    location: "Chennai",
  },
  {
    company: "Adobe",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_logo.svg",
    days: "8 days ago",
    role: "Frontend Developer",
    time: "Full-Time",
    level: "Mid Level",
    salary: "$110-140k",
    location: "Pune",
  },
  {
    company: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    days: "12 days ago",
    role: "React Developer",
    time: "Remote",
    level: "Senior Level",
    salary: "$180-220k",
    location: "Bengaluru",
  },
  {
    company: "Meta",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png",
    days: "2 days ago",
    role: "Software Engineer",
    time: "Full-Time",
    level: "Entry Level",
    salary: "$130-170k",
    location: "Hyderabad",
  },
  {
    company: "IBM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    days: "7 days ago",
    role: "Backend Developer",
    time: "Full-Time",
    level: "Junior Level",
    salary: "$95-125k",
    location: "Noida",
  },
  {
    company: "Oracle",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
    days: "10 days ago",
    role: "Java Developer",
    time: "Hybrid",
    level: "Mid Level",
    salary: "$105-145k",
    location: "Gurugram",
  },
];

const App = () => {
  return (
    <div className="parent">
      {jobs.map((job, index) => (
        <Cards key={index} {...job} />
      ))}
    </div>
  );
};

export default App;
