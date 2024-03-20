import React from "react";
import ReactDOM from "react-dom/client";
import IndexPage from "./pages/IndexPage.jsx";
import LeaderHome from "./pages/LeaderHome.jsx";
import MemberHome from "./pages/MemberHome.jsx";
import LeaderProjectPage from "./pages/LeaderProjectPage.jsx";
import LeaderProjectCompletedPage from "./pages/LeaderProjectCompletedPage.jsx";
import LeaderProjectUncompletedPage from "./pages/LeaderProjectUncompletedPage.jsx";
import MemberProjectPage from "./pages/MemberProjectPage.jsx";
import MemberProjectCompletedPage from "./pages/MemberProjectCompletedPage.jsx";
import MemberProjectUncompletedPage from "./pages/MemberProjectUncompletedPage.jsx";
import CreateTaskPage from "./pages/CreateTaskPage.jsx";
import EditTaskPage from "./pages/EditTaskPage.jsx";
// import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/Leader/Project/EditTask/:taskId",
    element: <EditTaskPage />,
  },
  {
    path: "/Leader/Project/CreateTask",
    element: <CreateTaskPage />,
  },
  {
    path: "/Leader/Project/Uncompleted",
    element: <LeaderProjectUncompletedPage />,
  },
  {
    path: "/Leader/Project/Completed",
    element: <LeaderProjectCompletedPage />,
  },
  {
    path: "/Leader/Project",
    element: <LeaderProjectPage />,
  },
  {
    path: "/Leader",
    element: <LeaderHome />,
  },
  {
    path: "/Member/Project/Uncompleted",
    element: <MemberProjectUncompletedPage />,
  },
  {
    path: "/Member/Project/Completed",
    element: <MemberProjectCompletedPage />,
  },
  {
    path: "/Member/Project",
    element: <MemberProjectPage />,
  },
  {
    path: "/Member",
    element: <MemberHome />,
  },
  {
    path: "/",
    element: <IndexPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
