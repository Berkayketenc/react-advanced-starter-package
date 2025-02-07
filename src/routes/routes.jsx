import React from "react";

const HomePage = React.lazy(() => import("../pages/homePage/HomePage.jsx"));
const ListPage = React.lazy(() => import("../pages/listPage/ListPage.jsx"));
const NotFound = React.lazy(() => import("../layouts/notFound/NotFound.jsx"));

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/list",
    element: <ListPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;