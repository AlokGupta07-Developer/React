import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center py-4 px-8 bg-cyan-900 justify-between text-white">
      <h2 className="text-3xl font-bold">CodeAdda</h2>
      <div className="flex gap-10 text-2xl ">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/product">Product</Link>

        {/* In below anchor tag but this tag reload the page so instead of this
        use Link from react-router-dom */}
        {/* <a className='text-lg font-medium' href='/'>Home</a>
            <a className='text-lg font-medium' href='/about'>About</a>
             <a className='text-lg font-medium' href='/courses'>Courses</a>
            
            <a className='text-lg font-medium' href='/product'>Product</a>
             */}
      </div>
    </div>
  );
};

export default Navbar;
