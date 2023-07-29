import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Templates/Root.jsx";
import { Provider } from "react-redux";
import { store } from "./Redux/store.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <div>error 0-0</div>,
    children: [
      {
        index: true,
        element: <div>children</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
