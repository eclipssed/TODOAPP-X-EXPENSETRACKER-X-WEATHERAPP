import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { moon, sun, hamburger, cross } from "../assets/index";
import Button from "./Button";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const [theme, setTheme] = useState("dark");
  const [showHamburger, setShowHamburger] = useState(true);
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const menuRef = useRef(null);

  // Add event listener to close menu when clicking outside of it. i wrote this function to handle the click that is outside of the menu section. but it made the other functionlities disabled. if you can fix it then it will be highly appreciated.

  // useEffect(() => {
  //   const handleOutsideClick = (event) => {
  //     if (menuRef.current && menuRef.current.contains(event.target)) {
  //       setShowHamburger(true);
  //     }
  //     else if (menuRef.current && !menuRef.current.contains(event.target)) {
  //       setShowHamburger(true);
  //     }
  //   };

  //   document.addEventListener("mousedown", handleOutsideClick);
  //   return () => {
  //     document.removeEventListener("mousedown", handleOutsideClick);
  //   };
  // }, []);

  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(theme);
  };

  return (
    <header className="shadow sticky z-50 top-0 border-y">
      <nav className="bg-white dark:bg-gray-900 border-gray-200 px-4 lg:px-6 py-2.5 ">
        <div className="flex font-bold justify-between items-center dark:text-white">
          <Link to="/">
            <h1 className="text-2xl text-orange-500">SwiftSphere</h1>
          </Link>
          <ul className="flex max-md:hidden gap-6 ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${
                  isActive ? "text-orange-500" : "text-gray-500 dark:text-white"
                } `
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/todo"
              className={({ isActive }) =>
                `${
                  isActive ? "text-orange-500" : "text-gray-500 dark:text-white"
                } `
              }
            >
              Todo
            </NavLink>
            <NavLink
              to="/expenseTracker"
              className={({ isActive }) =>
                `${
                  isActive ? "text-orange-500" : "text-gray-500 dark:text-white"
                } `
              }
            >
              Expense Tracker
            </NavLink>
            <NavLink
              to="/weather"
              className={({ isActive }) =>
                `${
                  isActive ? "text-orange-500" : "text-gray-500 dark:text-white"
                } `
              }
            >
              Weather
            </NavLink>
          </ul>
          <div className="flex gap-4 justify-center items-center">
            <button onClick={handleTheme} className="">
              {theme === "light" ? (
                <img height={35} width={35} src={sun} alt="sun" />
              ) : (
                <img height={35} width={35} src={moon} alt="moon" />
              )}
            </button>
            <Link>
              <h3 className="flex  gap-2">
                {isAuthenticated ? (
                  <Button
                    border={"border border-orange-500"}
                    txtColor={"text-white"}
                    label={"Log Out"}
                    onClick={() =>
                      logout({
                        logoutParams: { returnTo: window.location.origin },
                      })
                    }
                    bgColor={"bg-orange-500"}
                  />
                ) : (
                  <Button
                    border={"border border-orange-500"}
                    txtColor={"text-white"}
                    label={"Log In"}
                    onClick={() => loginWithRedirect()}
                    bgColor={"bg-orange-500"}
                  />
                )}
              </h3>
            </Link>

            {/* hamburger section */}

            <button className="md:hidden dark:invert ">
              {showHamburger ? (
                <img
                  onClick={() => {
                    setShowHamburger(false);
                  }}
                  height={35}
                  width={35}
                  src={hamburger}
                  alt="hamburger"
                />
              ) : (
                <img
                  onClick={() => {
                    setShowHamburger(true);
                  }}
                  height={35}
                  width={35}
                  src={cross}
                  alt="cross"
                />
              )}
            </button>

            {/* menu section */}
            <div ref={menuRef} className="md:hidden">
              {!showHamburger && (
                <>
                  {" "}
                  <ul
                    
                    className="flex flex-col fixed w-[200px] dark:bg-gray-900 h-auto justify-center items-center right-[32px] top-[98px] bg-gray-300 px-10 py-8 gap-6 "
                  >
                    <NavLink
                      onClick={() => setShowHamburger(true)}
                      to="/"
                      className={({ isActive }) =>
                        `${
                          isActive
                            ? "text-orange-500"
                            : "text-gray-500 dark:text-white"
                        } `
                      }
                    >
                      Home
                    </NavLink>
                    <NavLink
                      onClick={() => setShowHamburger(true)}
                      to="/todo"
                      className={({ isActive }) =>
                        `${
                          isActive
                            ? "text-orange-500"
                            : "text-gray-500 dark:text-white"
                        } `
                      }
                    >
                      Todo
                    </NavLink>
                    <NavLink
                      onClick={() => setShowHamburger(true)}
                      to="/expenseTracker"
                      className={({ isActive }) =>
                        `${
                          isActive
                            ? "text-orange-500"
                            : "text-gray-500 dark:text-white"
                        } `
                      }
                    >
                      Expense Tracker
                    </NavLink>
                    <NavLink
                      onClick={() => setShowHamburger(true)}
                      to="/weather"
                      className={({ isActive }) =>
                        `${
                          isActive
                            ? "text-orange-500"
                            : "text-gray-500 dark:text-white"
                        } `
                      }
                    >
                      Weather
                    </NavLink>
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
