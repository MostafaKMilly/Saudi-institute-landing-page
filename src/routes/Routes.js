import React from "react";
import { useRoutes } from "react-router-dom";
import { BaseLayout } from "../layouts";
import { Blogs } from "../pages/blogs/containers";
import { ContactUs } from "../pages/contactUs/containers";
import { Courses } from "../pages/courses/containers";
import { Home } from "../pages/home/containers";

const routes = [
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "courses", element: <Courses /> },
      { path: "blogs", element: <Blogs /> },
      { path: "contact-us", element: <ContactUs /> },
    ],
  },
];

function Routes() {
  return useRoutes(routes);
}

export default Routes;
