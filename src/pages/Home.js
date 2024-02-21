import React from "react";

const Home = () => {
  return (
    <>
      <div className="bg-white h-screen dark:bg-dark text-black dark:text-white">
        <nav className="flex justify-between p-4 max-w-screen-xl	m-auto">
          <div className="mobile-menu lg:hidden block">
            <div id="menuToggle">
              {/* <!--
    A fake / hidden checkbox is used as click reciever,
    so you can use the :checked selector on it.
    --> */}
              <input type="checkbox" />

              {/* <!--
    Some spans to act as a hamburger.
    
    They are acting like a real hamburger,
    not that McDonalds stuff.
    --> */}
              <span></span>
              <span></span>
              <span></span>

              {/* <!--
    Too bad the menu has to be inside of the button
    but hey, it's pure CSS magic.
    --> */}
              <ul id="menu">
                <a href="#">
                  <li>Home</li>
                </a>
                <a href="#">
                  <li>About</li>
                </a>
                <a href="#">
                  <li>Info</li>
                </a>
                <a href="#">
                  <li>Contact</li>
                </a>
                <a href="https://erikterwan.com/" target="_blank">
                  <li>Show me more</li>
                </a>
              </ul>
            </div>
          </div>
          <div className="logo ">
            <a href="">
              <span className="text-2xl">kena kata</span>
            </a>
          </div>
          <div className="menu ">
            <ul className="lg:flex hidden gap-8 ">
              <li>
                <a href="" className={"text-xl"}>
                  Home
                </a>
              </li>
              <li>
                <a href="" className={"text-xl"}>
                  Shop
                </a>
              </li>
              <li>
                <a href="" className={"text-xl"}>
                  Product
                </a>
              </li>
              <li>
                <a href="" className={"text-xl"}>
                  Blog
                </a>
              </li>
              <li>
                <a href="" className={"text-xl"}>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="nav- flex gap-6">
            <span className="text-2xl ">
              <i class="fa-regular fa-user"></i>{" "}
            </span>
            <span className="text-2xl lg:block hidden">
              <i class="fa-regular fa-heart"></i>
            </span>
            <span className="text-2xl relative lg:block hidden">
              <i class="fa-solid fa-bag-shopping"></i>
              <span className="text-sm bg-slate-800 text-white rounded-full  h-5 w-5 text-center absolute top-0">
                2
              </span>
            </span>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Home;
