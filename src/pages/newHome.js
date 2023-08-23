import React, { useState, useEffect, useRef } from "react";
import Select from "react-select";
import Carousel from "react-bootstrap/Carousel";
import "../assets/css/newHome.css";
import Question from "../component/question";
import Slider from "../component/slider";
import Wpsay from "../component/wpsay";
import VideoPanel from "../component/videoPanel";
import { LOGIN_ROUTE, USER_CONTACT } from "../utils/consts";
import { Link } from "react-router-dom";
import {
  createLangs,
  faqLangs,
  footerLangs,
  functionsLangs,
  goalLangs,
  launchLags,
  navLangs,
} from "../utils/multiLang";
import Faq from "../component/faq";

// for language select
const customComponents = {
  DropdownIndicator: () => null,
  IndicatorSeparator: () => null,
};
const customStyles = {
  control: (provided) => ({
    ...provided,
    border: "none",
    borderRadius: "10px",
    backgroundColor: "#f3f3f3",
    color: "#333",
    fontFamily: "Arial, sans-serif",
    fontSize: "1rem",
    textAlign: "center",
    outline: "none !important",
    cursor: "pointer",
  }),
  option: (provided, state) => ({
    ...provided,
    border: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: state.isSelected
      ? "#b8ff65"
      : state.isFocused
      ? "#f3f3f3"
      : "white",
    color: state.isSelected ? "black" : "black",
    textAlign: "center",
  }),
  menuList: (provided) => ({
    ...provided,
    borderRadius: "10px",
    paddingTop: 0,
    paddingBottom: 0,
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: "10px",
  }),
};
// <- for language select

const slides = (
  <>
    <div className="slide">
      <img src={require("../assets/testImg/partnyor1.png")} alt="" />
    </div>
    <div className="slide">
      <img src={require("../assets/testImg/partnyor2.png")} alt="" />
    </div>
    <div className="slide">
      <img src={require("../assets/testImg/partnyor3.png")} alt="" />
    </div>
    <div className="slide">
      <img src={require("../assets/testImg/partnyor4.png")} alt="" />
    </div>
    <div className="slide">
      <img src={require("../assets/testImg/partnyor5.png")} alt="" />
    </div>
  </>
);

const NewHome = () => {
  /* for price switch */
  const [priceTime, setPriceTime] = useState("monthly"); // can be "monthly", "yearly", "lifetime"
  return (
    <>
      <div className="Home">
        {/* NAVBAR */}
        <div className="home-navbar">
          <div className="navbar-box">
            <div className="navbar-left">
              <div className="logo">
                LOGO
                <span className="second-color-font">
                  <div className="dot second-color-bg"></div>
                </span>
              </div>
            </div>
            <div className="navbar-right">
              <div className="navbar-links">
                <div className="navbar-link">Home</div>
                <div className="navbar-link">About</div>
                <div className="navbar-link">Contact</div>
              </div>
              <div className="navbar-btns">
                <div className="login-btn first-btn-style">Log In</div>
                <div className="signup-btn second-btn-style ">Sign Up</div>
              </div>
            </div>
          </div>
        </div>

        {/* HERO SECTION */}
        <div className="hero-section">
          <div className="hero-box">
            <div className="hero-left">
              <div className="hero-info">
                <div className="info-title">
                  Meet NFC Wristband, a Finance App You will Love from the{" "}
                  <span className="second-color-font underlined-text">
                    First Sight
                  </span>
                </div>
                <div className="info-text">
                  <div className="third-color-font">
                    We have built NFC Wristband to help you change the way you
                    manage your money for the better.
                  </div>
                </div>
              </div>
              <div className="hero-btns">
                <div className="download-btn second-btn-style">
                  Dowdload for Free
                </div>
                <div className="demo-btn first-btn-style">Request a Demo</div>
              </div>
            </div>
            <div className="hero-right">
              <div className="big-card-img-container second-color-bg border-r-64px">
                <img src={require("../assets/img/wristband.png")} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* SLIDER SECTION */}
        <div className="home-slider-section">
          <div className="home-slider">
            <div className="slider-box">
              <div className="slider-track">
                {slides}
                {slides}
                {slides}
                {slides}
              </div>
            </div>
          </div>
        </div>

        {/* FUNCTIONS SECTION */}
        <div className="functions-section">
          <div className="section-header">
            <div className="section-header-title">
              <div>Mobile Money Management </div>
              <div>
                <span className="second-color-font underlined-text">
                  Reimagined
                </span>{" "}
                for the Better
              </div>
            </div>
            <div className="section-header-text">
              <div className="third-color-font">
                Our app drastically changes they way you manage your money on
                your phone.
              </div>
            </div>
          </div>
          <div className="functions-cards">
            <div className="functions-card">
              <div className="functions-card-icon-container">
                <div className="functions-card-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke='var(--token-057e105f-6de4-415f-b0f5-ac7d77f8a158, rgb(255, 255, 255)) /* {"name":"White"} */'
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: "100%", cursor: "auto", height: "100%" }}
                  >
                    <rect
                      x="3"
                      y="11"
                      width="18"
                      height="11"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </div>
              </div>
              <div className="functions-card-bottom">
                <div className="functions-card-info">
                  <div className="functions-card-info-title">
                    Advanced Security
                  </div>
                  <div className="functions-card-info-text">
                    Our app offers an insane level of security to protect all of
                    your important information.
                  </div>
                </div>
                <div className="functions-card-learn-container">
                  <div>Learn More</div>
                  <div>{">"}</div>
                </div>
              </div>
            </div>
            <div className="functions-card">
              <div className="functions-card-icon-container">
                <div className="functions-card-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke='var(--token-057e105f-6de4-415f-b0f5-ac7d77f8a158, rgb(255, 255, 255)) /* {"name":"White"} */'
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: "100%", cursor: "auto", height: "100%" }}
                  >
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                  </svg>
                </div>
              </div>
              <div className="functions-card-bottom">
                <div className="functions-card-info">
                  <div className="functions-card-info-title">
                    Instant Transfers
                  </div>
                  <div className="functions-card-info-text">
                    Transfer money to others locally with the speed of sound or
                    maybe even faster, who knows.
                  </div>
                </div>
                <div className="functions-card-learn-container">
                  <div>Learn More</div>
                  <div>{">"}</div>
                </div>
              </div>
            </div>
            <div className="functions-card">
              <div className="functions-card-icon-container">
                <div className="functions-card-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke='var(--token-057e105f-6de4-415f-b0f5-ac7d77f8a158, rgb(255, 255, 255)) /* {"name":"White"} */'
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: "100%", cursor: "auto", height: "100%" }}
                  >
                    <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                    <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
                  </svg>
                </div>
              </div>
              <div className="functions-card-bottom">
                <div className="functions-card-info">
                  <div className="functions-card-info-title">
                    Robust Analytics
                  </div>
                  <div className="functions-card-info-text">
                    Analyze all of your transactions with ease and have a clear
                    picture of where your money is going to.
                  </div>
                </div>
                <div className="functions-card-learn-container">
                  <div>Learn More</div>
                  <div>{">"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FEATURES SECTION */}
        <div className="features-section">
          <div className="section-header">
            <div className="section-header-title">
              <div>Get the Full Picture of Your Finances and Improve </div>
              <div>
                <span className="second-color-font underlined-text">Your</span>{" "}
                <span className="second-color-font underlined-text">
                  Financial
                </span>{" "}
                <span className="second-color-font underlined-text">
                  Habits
                </span>
              </div>
            </div>
            <div className="section-header-text">
              <div className="third-color-font">
                With our app you can easily improve your financial habits.
              </div>
            </div>
          </div>
          <div className="features-cards">
            <div className="big-card main-color-bg">
              <div className="big-card-left">
                <div className="big-card-img-container second-color-bg border-r-64px">
                  <img
                    className=""
                    src={require("../assets/img/wristband.png")}
                    alt=""
                  />
                </div>
              </div>
              <div className="big-card-right">
                <div className="big-card-info-title">
                  Advanced Analytics for You to Have a{" "}
                  <span className="second-color-font underlined-text">
                    Clear
                  </span>{" "}
                  <span className="second-color-font underlined-text">
                    Picture
                  </span>{" "}
                  of Your Finances
                </div>
                <div className="big-card-info-text">
                  <div className="third-color-font">
                    See the full picture of where your money is going and cut
                    back on unnecessary expenses easily.
                  </div>
                </div>
              </div>
            </div>
            <div className="big-card sc-theme-main-color-bg">
              <div className="big-card-left">
                <div className="big-card-img-container sc-theme-second-color-bg border-r-64px">
                  <img src={require("../assets/img/wristband.png")} alt="" />
                </div>
              </div>
              <div className="big-card-right">
                <div className="big-card-info-title">
                  Every Transaction You Make is{" "}
                  <span className="sc-theme-second-color-font underlined-text">
                    Categorized
                  </span>{" "}
                  of Your Finances
                </div>
                <div className="big-card-info-text">
                  <div className="third-color-font">
                    Don't worry about categorizing your transactions manually as
                    we have already taken care of this for you.
                  </div>
                </div>
              </div>
            </div>
            <div className="big-card trd-theme-main-color-bg">
              <div className="big-card-left">
                <div className="big-card-img-container trd-theme-second-color-bg border-r-64px">
                  <img src={require("../assets/img/wristband.png")} alt="" />
                </div>
              </div>
              <div className="big-card-right">
                <div className="big-card-info-title">
                  Share Bills and Vaults with Your{" "}
                  <span className="trd-theme-second-color-font underlined-text">
                    Friends and Family
                  </span>{" "}
                  Members
                </div>
                <div className="big-card-info-text">
                  <div className="third-color-font">
                    Our app lets you share all of your bills and savings vaults
                    with anyone you wish as long as they are the user of the app
                    too.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DASHBOARD SECTION */}
        <div className="dashboard-section">
          <div className="section-header">
            <div className="section-header-title">
              <div>Transform the Way You Spend and Save </div>
              <div>
                <span className="second-color-font underlined-text">
                  Your Money
                </span>
              </div>
            </div>
            <div className="section-header-text">
              <div className="third-color-font">
                Don't just take our word for it, take a look at some of the
                reviews below.
              </div>
            </div>
          </div>
          <div className="big-card main-color-bg border-r-64px">
            <div className="big-card-left">
              <div className="big-card-icon-container">
                <div className="big-card-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke='var(--token-057e105f-6de4-415f-b0f5-ac7d77f8a158, rgb(255, 255, 255)) /* {"name":"White"} */'
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: "100%", cursor: "auto", height: "100%" }}
                  >
                    <polyline points="17 1 21 5 17 9"></polyline>
                    <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
                    <polyline points="7 23 3 19 7 15"></polyline>
                    <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
                  </svg>
                </div>
              </div>
              <div className="big-card-info">
                <div className="big-card-info-top">
                  <div className="big-card-info-title">Sync Across Devices</div>
                  <div className="big-card-info-text">
                    <div className="third-color-font">
                      All of your transactions are automatically synced across
                      various devices you might have to offer a seamless
                      experience.
                    </div>
                  </div>
                </div>
                <div className="big-card-learn-container second-color-font">
                  <div>Learn More</div>
                  <div>{">"}</div>
                </div>
              </div>
            </div>
            <div className="big-card-right">
              <div className="big-card-img-container second-color-bg border-r-64px">
                <img src={require("../assets/img/wristband.png")} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* REVIEWS SECTION */}
        <div className="reviews-section">
          <div className="section-header">
            <div className="section-header-title">
              <div>Trusted by Millions of Happy Customers from </div>
              <div>
                <span className="second-color-font underlined-text">
                  Around the World
                </span>
              </div>
            </div>
            <div className="section-header-text">
              <div className="third-color-font">
                Don't just take our word for it, take a look at some of the
                reviews below.
              </div>
            </div>
          </div>
          <div className="reviews">
            <div className="review main-color-bg">
              <div className="review-logo">
                <img src={require("../assets/testImg/partnyor1.png")} alt="" />
              </div>
              <div className="review-text">
                "This is one of the best apps I have ever tried! It offers
                everything modern app should have and the design is just
                outstanding - so easy to use!"
              </div>
              <div className="review-author">
                <div className="review-author-img second-color-bg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 8 8"
                    id="person"
                    fill="#fff"
                    style={{ width: "100%", cursor: "auto", height: "100%" }}
                  >
                    <path d="M4 0C2.9 0 2 1.12 2 2.5S2.9 5 4 5s2-1.12 2-2.5S5.1 0 4 0zM1.91 5C.85 5.05 0 5.92 0 7v1h8V7c0-1.08-.84-1.95-1.91-2-.54.61-1.28 1-2.09 1-.81 0-1.55-.39-2.09-1z"></path>
                  </svg>
                </div>
                <div className="review-author-info">
                  <div className="review-author-name">Josh Smith</div>
                  <div className="review-author-title third-color-font">
                    Sr. Product Designer
                  </div>
                </div>
              </div>
            </div>
            <div className="review main-color-bg">
              <div className="review-logo">
                <img src={require("../assets/testImg/partnyor2.png")} alt="" />
              </div>
              <div className="review-text">
                "I was really impressed when I found out about this app. At
                first I thought it wasn't for me, but after some time, I
                realized that it's one of the best apps I ever used."
              </div>
              <div className="review-author">
                <div className="review-author-img second-color-bg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 8 8"
                    id="person"
                    fill="#fff"
                    style={{ width: "100%", cursor: "auto", height: "100%" }}
                  >
                    <path d="M4 0C2.9 0 2 1.12 2 2.5S2.9 5 4 5s2-1.12 2-2.5S5.1 0 4 0zM1.91 5C.85 5.05 0 5.92 0 7v1h8V7c0-1.08-.84-1.95-1.91-2-.54.61-1.28 1-2.09 1-.81 0-1.55-.39-2.09-1z"></path>
                  </svg>
                </div>
                <div className="review-author-info">
                  <div className="review-author-name">Samantha Johnsonith</div>
                  <div className="review-author-title third-color-font">
                    Digital Marketing Manager
                  </div>
                </div>
              </div>
            </div>
            <div className="review main-color-bg">
              <div className="review-logo">
                <img src={require("../assets/testImg/partnyor3.png")} alt="" />
              </div>
              <div className="review-text">
                "I would absolutely recommend this app to anybody who is looking
                to try something new and interesting as the features this app
                offers are just incredible."
              </div>
              <div className="review-author">
                <div className="review-author-img second-color-bg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 8 8"
                    id="person"
                    fill="#fff"
                    style={{ width: "100%", cursor: "auto", height: "100%" }}
                  >
                    <path d="M4 0C2.9 0 2 1.12 2 2.5S2.9 5 4 5s2-1.12 2-2.5S5.1 0 4 0zM1.91 5C.85 5.05 0 5.92 0 7v1h8V7c0-1.08-.84-1.95-1.91-2-.54.61-1.28 1-2.09 1-.81 0-1.55-.39-2.09-1z"></path>
                  </svg>
                </div>
                <div className="review-author-info">
                  <div className="review-author-name">Paul Anderson</div>
                  <div className="review-author-title third-color-font">
                    CEO & Founder
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PRICING SECTION */}
        <div className="pricing-section">
          <div className="section-header">
            <div className="section-header-title">
              <div>Flexible Pricing Plans to Fit </div>
              <div>
                <span className="second-color-font underlined-text">
                  All of
                </span>{" "}
                <span className="second-color-font underlined-text">
                  Your Needs
                </span>
              </div>
              <div> and More</div>
            </div>
            <div className="section-header-text">
              <div className="third-color-font">
                Find the plan that suits you the most below.
              </div>
            </div>
          </div>
          <div className="pricing-content">
            <div className="pricing-switch main-color-bg">
              <div
                className={`pricing-switch-btn ${
                  priceTime === "monthly" ? "active" : ""
                }`}
                onClick={() => setPriceTime("monthly")}
              >
                Monthly
              </div>
              <div
                className={`pricing-switch-btn ${
                  priceTime === "yearly" ? "active" : ""
                }`}
                onClick={() => setPriceTime("yearly")}
              >
                Yearly
              </div>
              <div
                className={`pricing-switch-btn ${
                  priceTime === "lifetime" ? "active" : ""
                }`}
                onClick={() => setPriceTime("lifetime")}
              >
                Lifetime
              </div>
            </div>
            <div className="pricing-plans">
              <div className="pricing-plan">
                <div className="pricing-plan-price">
                  <div className="price-title second-color-font">Free</div>
                  <div className="price-info">
                    <span className="price-number">$0 </span>
                    <span className="price-per-time third-color-font">
                      /{" "}
                      {priceTime === "monthly" ? (
                        <>Month</>
                      ) : priceTime === "yearly" ? (
                        <>Year</>
                      ) : (
                        <>Lifetime</>
                      )}
                    </span>
                  </div>
                </div>
                <div className="pricing-features">
                  <div className="pricing-feature">
                    <div className="pricing-feature-icon-container">
                      <div className="pricing-feature-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke='var(--token-28245a58-6cde-4717-bfdd-03eb721e66b9, rgb(35, 17, 35)) /* {"name":"Text / Dark / Primary"} */'
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{
                            width: "100%",
                            cursor: "auto",
                            height: "100%",
                          }}
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                    </div>
                    <div className="pricing-feature-info">
                      No Transaction Fees
                    </div>
                  </div>
                  <div className="pricing-feature">
                    <div className="pricing-feature-icon-container">
                      <div className="pricing-feature-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke='var(--token-28245a58-6cde-4717-bfdd-03eb721e66b9, rgb(35, 17, 35)) /* {"name":"Text / Dark / Primary"} */'
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{
                            width: "100%",
                            cursor: "auto",
                            height: "100%",
                          }}
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                    </div>
                    <div className="pricing-feature-info">
                      Free International Transfers
                    </div>
                  </div>
                  <div className="pricing-feature">
                    <div className="pricing-feature-icon-container">
                      <div className="pricing-feature-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke='var(--token-28245a58-6cde-4717-bfdd-03eb721e66b9, rgb(35, 17, 35)) /* {"name":"Text / Dark / Primary"} */'
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{
                            width: "100%",
                            cursor: "auto",
                            height: "100%",
                          }}
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                    </div>
                    <div className="pricing-feature-info">
                      Free International Transfers
                    </div>
                  </div>
                </div>
                <div className="pricing-start-btn first-btn-style">
                  Get Started
                </div>
              </div>
              <div className="pricing-plan">
                <div className="pricing-plan-price">
                  <div className="price-title second-color-font">Premium</div>
                  <div className="price-info">
                    <span className="price-number">
                      {priceTime === "monthly" ? (
                        <>$4.99</>
                      ) : priceTime === "monthly" ? (
                        <>$39.99</>
                      ) : (
                        <>$74.99</>
                      )}{" "}
                    </span>
                    <span className="price-per-time third-color-font">
                      /{" "}
                      {priceTime === "monthly" ? (
                        <>Month</>
                      ) : priceTime === "yearly" ? (
                        <>Year</>
                      ) : (
                        <>Lifetime</>
                      )}
                    </span>
                  </div>
                </div>
                <div className="pricing-features">
                  <div className="pricing-feature">
                    <div className="pricing-feature-icon-container">
                      <div className="pricing-feature-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke='var(--token-28245a58-6cde-4717-bfdd-03eb721e66b9, rgb(35, 17, 35)) /* {"name":"Text / Dark / Primary"} */'
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{
                            width: "100%",
                            cursor: "auto",
                            height: "100%",
                          }}
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                    </div>
                    <div className="pricing-feature-info">
                      Everything in Free
                    </div>
                  </div>
                  <div className="pricing-feature">
                    <div className="pricing-feature-icon-container">
                      <div className="pricing-feature-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke='var(--token-28245a58-6cde-4717-bfdd-03eb721e66b9, rgb(35, 17, 35)) /* {"name":"Text / Dark / Primary"} */'
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{
                            width: "100%",
                            cursor: "auto",
                            height: "100%",
                          }}
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                    </div>
                    <div className="pricing-feature-info">
                      Free Card Delivery
                    </div>
                  </div>
                  <div className="pricing-feature">
                    <div className="pricing-feature-icon-container">
                      <div className="pricing-feature-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke='var(--token-28245a58-6cde-4717-bfdd-03eb721e66b9, rgb(35, 17, 35)) /* {"name":"Text / Dark / Primary"} */'
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{
                            width: "100%",
                            cursor: "auto",
                            height: "100%",
                          }}
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                    </div>
                    <div className="pricing-feature-info">
                      Free Card Delivery
                    </div>
                  </div>
                  <div className="pricing-feature">
                    <div className="pricing-feature-icon-container">
                      <div className="pricing-feature-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke='var(--token-28245a58-6cde-4717-bfdd-03eb721e66b9, rgb(35, 17, 35)) /* {"name":"Text / Dark / Primary"} */'
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{
                            width: "100%",
                            cursor: "auto",
                            height: "100%",
                          }}
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                    </div>
                    <div className="pricing-feature-info">Priority Support</div>
                  </div>
                  <div className="pricing-feature">
                    <div className="pricing-feature-icon-container">
                      <div className="pricing-feature-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke='var(--token-28245a58-6cde-4717-bfdd-03eb721e66b9, rgb(35, 17, 35)) /* {"name":"Text / Dark / Primary"} */'
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{
                            width: "100%",
                            cursor: "auto",
                            height: "100%",
                          }}
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                    </div>
                    <div className="pricing-feature-info">
                      Early Access to New Features
                    </div>
                  </div>
                </div>
                <div className="pricing-start-btn second-btn-style">
                  Start My Free Trial
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ SECTION */}
        <div className="faq-section">
          <div className="section-header">
            <div className="section-header-title">
              <div>Frequently Asked </div>
              <div>
                <span className="second-color-font underlined-text">
                  Questions
                </span>
              </div>
            </div>
            <div className="section-header-text">
              <div className="third-color-font">
                Find answers to the questions you might have below.
              </div>
            </div>
          </div>
          <div className="faqs">
            {faqLangs.faqs["en"].map((faq, index) => (
              <Faq faq={faq} key={index} />
            ))}
          </div>
        </div>

        {/* GET STARTED SECTION */}
        <div className="start-section">
          <div className="start-box main-color-bg border-r-64px">
            <div className="section-header">
              <div className="section-header-title">
                <div>Get Started </div>
                <div>
                  <span className="second-color-font underlined-text">
                    Completely
                  </span>{" "}
                  <span className="second-color-font underlined-text">
                    for Free
                  </span>
                </div>
                <div> with No Credit Card Required</div>
              </div>
              <div className="section-header-text">
                <div className="third-color-font">
                  You can try out our app completely for free for 30 days.
                </div>
              </div>
            </div>
            <div className="start-btns">
              <div className="start-btn second-btn-style">
                Download for Free
              </div>
              <div className="start-btn first-btn-style">Request a Demo</div>
            </div>
          </div>
        </div>

        {/* FOOTER SECTION */}
        <div className="footer-section">
          <div className="footer-box main-color-bg border-r-64px">
            <div className="footer-left">
              <div className="footer-super">
                <div className="logo">
                  LOGO
                  <span className="second-color-font">
                    <div className="dot second-color-bg"></div>
                  </span>
                </div>
                <div className="rights-reserved third-color-font">
                  © IT Park 2019-2023. All Rights Reserved.
                </div>
              </div>
              <div className="footer-socials">
                <div className="footer-social">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke='var(--token-3d9f3466-3a04-4832-8618-d0889335958f, rgb(69, 33, 69)) /* {"name":"Text / Dark / Secondary"} */'
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: "100%", cursor: "auto", height: "100%" }}
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </div>
                <div className="footer-social">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke='var(--token-3d9f3466-3a04-4832-8618-d0889335958f, rgb(69, 33, 69)) /* {"name":"Text / Dark / Secondary"} */'
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: "100%", cursor: "auto", height: "100%" }}
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
                <div className="footer-social">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke='var(--token-3d9f3466-3a04-4832-8618-d0889335958f, rgb(69, 33, 69)) /* {"name":"Text / Dark / Secondary"} */'
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: "100%", cursor: "auto", height: "100%" }}
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="footer-right">
              <div className="footer-column">
                <div className="footer-column-header">Product</div>
                <div className="footer-column-links">
                  <div className="footer-column-link">Features</div>
                  <div className="footer-column-link">Pricing</div>
                  <div className="footer-column-link">Reviews</div>
                </div>
              </div>
              <div className="footer-column">
                <div className="footer-column-header">Company</div>
                <div className="footer-column-links">
                  <div className="footer-column-link">About</div>
                  <div className="footer-column-link">Contact</div>
                  <div className="footer-column-link">Support</div>
                  <div className="footer-column-link">News</div>
                  <div className="footer-column-link">Careers</div>
                </div>
              </div>
              <div className="footer-column">
                <div className="footer-column-header">Legal</div>
                <div className="footer-column-links">
                  <div className="footer-column-link">Privacy Policy</div>
                  <div className="footer-column-link">Terms of Service</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewHome;
