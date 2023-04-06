import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PrivateRouter from "./PrivateRouter";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Detail from "../pages/Detail";
import NewBlog from "../pages/NewBlog";
import About from "../pages/About";
import MyBlogs from "../pages/MyBlogs";
import Profile from "../pages/Profile";

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        
        <Route path="" element={<PrivateRouter />} >
          <Route path="detail/:id" element={<Detail />} />
          <Route path="new-blog" element={<NewBlog />} />
          <Route path="profile" element={<Profile />} />
          <Route path="my-blogs" element={<MyBlogs />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
