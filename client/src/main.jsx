import React from "react";
import ReactDOM from "react-dom";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Root from "./routes/root";
import ArtistCard from "./components/ArtistCard"
import ArtistList from "./components/ArtistsList"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
