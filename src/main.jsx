import React from "react";
import ReactDOM from "react-dom/client";
import IndexPage from "./pages/IndexPage.jsx";
import LeaderHome from "./pages/LeaderHome.jsx";
import MemberHome from "./pages/MemberHome.jsx";
import LeaderProjectPage from "./pages/LeaderProjectPage.jsx";
import MemberProjectPage from "./pages/MemberProjectPage.jsx";
import CreateTaskPage from "./pages/CreateTaskPage.jsx";
import Project from "./model/Project.js";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const globalProject = new Project();

const router = createBrowserRouter([
  {
    path: "/Leader/Project/CreateTask",
    element: <CreateTaskPage project={globalProject}/>,
  },
  {
    path: "/Leader/Project",
    element: <LeaderProjectPage project={globalProject}/>,
  },
  {
    path: "/Leader",
    element: <LeaderHome project={globalProject}/>,
  },
  {
    path: "/Member/Project",
    element: <MemberProjectPage project={globalProject}/>,
  },
  {
    path: "/Member",
    element: <MemberHome project={globalProject}/>,
  },
  {
    path: "/",
    element: <IndexPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
