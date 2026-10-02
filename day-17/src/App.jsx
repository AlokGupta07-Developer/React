import { Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import CourseDetails from "./pages/CourseDetails";

import Men from "./pages/Men";
import Women from "./pages/Women";
import Kids from "./pages/Kids";

import Courses from "./pages/Courses";
import Navbar2 from "./components/Navbar2";

const App = () => {
  return (
    <>
      <Navbar />
      <Navbar2 />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:courseid" element={<CourseDetails />} />
        
        //Nested Route 
        <Route path="/product" element={<Product />}>
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
          <Route path="kids" element={<Kids />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
