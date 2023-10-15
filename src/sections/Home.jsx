import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Home = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    <section className="mt-10 mb-24 ">
      <div>
        <h1 className="text-4xl font-bold mt-10">
          Welcome {isAuthenticated && (user.nickname)} to <span className="text-orange-500">SwiftSphere</span>
        </h1>
        <p className="mb-4 mt-2 text-slate-500">
          ( Emphasizing the quick and efficient handling of tasks, weather, and
          expenses )
        </p>
        <p className="w-2/3 mx-auto text-xl text-center">
          Welcome to this creative platform, this website is a combination of
          different applications like Todo app, Expense Tracker, Weather app and
          a modern Dark Mode feature which are pretty basic but handling that
          with redux is not basic at all. I've also enabled LogIn and SignUp
          functionality in it. So here i am showcasing my skills of front-end
          development in react by using{" "}
          <strong className="dark:bg-gray-900 py-1 px-4 rounded-full">
            Redux-Toolkit
          </strong>{" "}
          for state management,{" "}
          <strong className="dark:bg-gray-900 py-1 px-4 rounded-full">
            Axios
          </strong>{" "}
          for Api Management,{" "}
          <strong className="dark:bg-gray-900 py-1 px-4 rounded-full">
            Auth0
          </strong>{" "}
          for LogIn and SignUp feature and{" "}
          <strong className="dark:bg-gray-900 py-1 px-4 rounded-full">
            Tailwind
          </strong>{" "}
          for styling.
        </p>
      </div>
    </section>
  );
};

export default Home;
