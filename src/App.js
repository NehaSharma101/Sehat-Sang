
import './App.css';

//for routing
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Signup from './Components/Signup'
import Login from './Components/Login'
import PgFOF from './Components/PgFOF';
import UserProfile from './Components/UserProfile'
import Addproduct from './Components/Addproduct';
import Allproductpage from './Components/Some-Product-Components/Allproductpage';
import About from './Components/About';
import ContactUs from './Components/ContactUs';
import Specificproductpage from './Components/Some-Product-Components/Specificproductpage'
import Cart from './Components/Cart';
import Allcourses from './Components/Allcourses';
import Popular from './Components/Popular';
import Trending from './Components/Trending';
import Shop from './Components/Shop';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/userprofile" element={<UserProfile />} />
        <Route exact path="/sellproduct" element={<Addproduct />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contactus" element={<ContactUs />} />
        <Route exact path="/product-type/allcourses" element={<Allcourses/>} />
        <Route exact path="/product-type/popular" element={<Popular/>} />
        <Route exact path="/product-type/trending" element={<Trending/>} />
        <Route exact path="/product-type/shop" element={<Shop/>} />
        {/* <Route exact path="/product-type/allcourses" element={<Allproductpage type={'All Courses'} />} />
        <Route exact path="/product-type/laptop" element={<Allproductpage type={' Most Popular'} />} />
        <Route exact path="/product-type/camera" element={<Allproductpage type={'Trending Now'} />} />
        <Route exact path="/product-type/shoes" element={<Allproductpage type={'Shop'} />} /> */}
        <Route exact path="/product/:type/:id" element={<Specificproductpage />} />
        <Route exact path="/cartdata" element={<Cart />} />
        <Route path="*" element={<PgFOF />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
