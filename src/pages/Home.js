import React, { useState } from "react";
import Slider from "../components/Slider";

const Home = () => {
  const [newItem, setnewItem] = useState("");

  return (
    <>
      <div className="bg-white min-h-screen dark:bg-dark text-black dark:text-white">
        <nav className="flex justify-between items-center p-4 max-w-screen-xl	m-auto">
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
        <section>
          <Slider></Slider>
        </section>
        <section className="py-16">
          <h1 className="text-6xl font-semibold capitalize text-center">
            What's new
          </h1>
          <div className="new-products-tab">
            <div
              role="tablist"
              className="tabs  tabs-boxed bg-slate-100 max-w-96 m-auto mt-6"
            >
              <button
                role="tab"
                onClick={(e) => setnewItem("Top")}
                className={`tab font-bold text-gray-500 ${
                  newItem === "Top" && "tab-active"
                }`}
              >
                Top
              </button>
              <button
                role="tab"
                onClick={(e) => setnewItem("T-Shirt")}
                className={`tab font-bold text-gray-500 ${
                  newItem === "T-Shirt" && "tab-active"
                }`}
              >
                T-Shirt
              </button>
              <button
                role="tab"
                onClick={(e) => setnewItem("Dress")}
                className={`tab font-bold text-gray-500 ${
                  newItem === "Dress" && "tab-active"
                }`}
              >
                Dress
              </button>
              <button
                role="tab"
                onClick={(e) => setnewItem("Sets")}
                className={`tab font-bold text-gray-500 ${
                  newItem === "Sets" && "tab-active"
                }`}
              >
                Sets
              </button>
              <button
                role="tab"
                onClick={(e) => setnewItem("Shirt")}
                className={`tab font-bold text-gray-500 ${
                  newItem === "Shirt" && "tab-active"
                }`}
              >
                Shirt
              </button>
            </div>
          </div>
          <div className="products-list-container">
            <div className="container  grid grid-cols-4 gap-">
              <div className="product-container">
                <div className="avatar">
                  <div className="w-full rounded">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
              </div>
              <div className="product-container">
                <div className="avatar">
                  <div className="w-full rounded">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
              </div>
              <div className="product-container">
                <div className="avatar">
                  <div className="w-full rounded">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
              </div>
              <div className="product-container">
                <div className="avatar">
                  <div className="w-full rounded">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
