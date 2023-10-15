import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import store from "./Redux/Store.js";
import { Provider } from "react-redux";
import {
  RouterProvider,
  createRoutesFromElements,
  Route,
  createBrowserRouter,
} from "react-router-dom";
import Todo from "./sections/Todo.jsx";
import ExpenseTracker from "./sections/ExpenseTracker.jsx";
import Weather from "./sections/Weather.jsx";
import Home from "./sections/Home.jsx";
import conf from "./conf/Conf.js";

import { Auth0Provider } from "@auth0/auth0-react";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" exact element={<Home />} />
      <Route path="/todo" element={<Todo />} />
      <Route path="/expenseTracker" element={<ExpenseTracker />} />
      <Route path="/weather" element={<Weather />} />
    </Route>
  )
);
const domain = conf.domainKey;
const clientId = conf.clientId;

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </Auth0Provider>
);
