import React, { useState, useEffect } from 'react';
import './App.css';
import Fashion from './assets/fashion/Fashion';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import image1 from './assets/images/01.jpg';
import image2 from './assets/images/02.jpg';
import image3 from './assets/images/03.jpg';
import image4 from './assets/images/logo.svg';

const images = [image1, image2, image3];

function NavBar() {
  return (
    <div className="head-nav-bar">
      <div className='logo'>
        <img src={image4} alt="logo" />
      </div>
      <Link className="active" to="/">Home</Link>
      <Link to="/news">News</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

function UpperBody() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="App">
      <div className="image-container">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      </div>
    </div>
  );
}

function Categories() {
  return (
    <div className='category'>
      <div className='category-p'>
        <img src='https://rukminim1.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100' alt="Grocery" />
        <p className='cat-name'><Link to='/grocery'>Grocery</Link></p>
      </div>
      <div className='category-p'>
        <img src='https://rukminim1.flixcart.com/flap/64/64/image/22fddf3c7da4c4f4.png?q=100' alt="Mobiles" />
        <p className='cat-name'><Link to='/mobiles'>Mobiles</Link></p>
      </div>
      <div className='category-p'>
        <img src='https://rukminim1.flixcart.com/fk-p-flap/64/64/image/0139228b2f7eb413.jpg?q=100' alt="Appliances" />
        <p className='cat-name'><Link to='/appliances'>Appliances</Link></p>
      </div>
      <div className='category-p'>
        <img src='https://rukminim2.flixcart.com/flap/64/64/image/69c6589653afdb9a.png?q=100' alt="Electronics" />
        <p className='cat-name'><Link to='/electronics'>Electronics</Link></p>
      </div>
      <div className='category-p'>
        <img src='https://rukminim2.flixcart.com/flap/64/64/image/ab7e2b022a4587dd.jpg?q=100' alt="Home & Furniture" />
        <p className='cat-name'><Link to='/home-furniture'>Home & Furniture</Link></p>
      </div>
      <div className='category-p'>
        <img src='https://rukminim2.flixcart.com/fk-p-flap/64/64/image/0d75b34f7d8fbcb3.png?q=100' alt="Fashion" />
        <p className='cat-name'><Link to='/fashion'>Fashion</Link></p>
      </div>
    </div>
  );
}

function MiddleBody() {
  return (
    <div className="grid-container-middle">
      <div className="middle-product">
        <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/k/h/c/xxl-gucci-tshirt-sti-original-imahfzr6xbmxhdjh.jpeg?q=70" alt="Product 1" />
        <p>Up to 50% Off</p>
      </div>
      <div className="middle-product">
        <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/8/h/w/-original-imagxp8uhqezpuww.jpeg?q=70" alt="Product 2" />
        <p>Up to 35% Off</p>
      </div>
      <div className="middle-product">
        <img src="https://rukminim2.flixcart.com/image/416/416/k3q76a80/camera/a/9/y/sony-apsc-ilce-6100l-b-in5-mirrorless-original-imafm6msv5uzrmgt.jpeg?q=70&crop=false" alt="Product 3" />
        <p>Up to 70% Off</p>
      </div>
      <div className="middle-product">
        <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/shaver/b/x/n/ph-svr-s1151-03-philips-original-imah243ehs64fzxw.jpeg?q=70" alt="Product 4" />
        <p>Up to 70% Off</p>
      </div>
      <div className="middle-product">
        <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/cycle/c/4/n/premium-city-bike-cycle-26t-with-inbuilt-carrier-26-18-east-original-imahyg67mmvsnrz5.jpeg?q=70" alt="Product 5" />
        <p>Up to 40% Off</p>
      </div>
      <div className="middle-product">
        <img src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/0d75b34f7d8fbcb3.png?q=100" alt="Fashion" />
        <p>Up to 70% Off</p>
      </div>
      <div className="middle-product">
        <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/sport-mat/a/0/n/lightweight-anti-slip-soft-eva-mat-with-carry-bag-for-women-men-original-imagzdhjtag42n4x.jpeg?q=70" alt="Product 7" />
        <p>From $12</p>
      </div>
      <div className="middle-product">
        <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/remote-control-toy/n/a/m/famous-car-remote-control-3d-with-led-lights-chargeable-1-caddle-original-imahfbqryyaxct5n.jpeg?q=70" alt="Product 8" />
        <p>Up to 80% Off</p>
      </div>
      <div className="middle-product">
        <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/g/e/q/9-rng-432-black-43-bruton-black-original-imagexxrjaexcept-bb.jpeg?q=70" alt="Product 9" />
        <p>From $10</p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="tail-nav-bar">
      <Link to="#about">About</Link>
      <Link to="#consumer-policy">Consumer Policy</Link>
      <Link to="#help">Help</Link>
      <Link to="#mail-us">Mail Us</Link>
      <Link to="#registered-office">Registered Office</Link>
      <Link to="#socials">Socials</Link>
    </div>
  );
}


function Profile() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<>
          <UpperBody />
          <Categories />
          <MiddleBody />
          <Footer />
        </>} />
        <Route path="/fashion/*" element={<Fashion />} /> {/* Use `*` to match subroutes */}
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default Profile;
