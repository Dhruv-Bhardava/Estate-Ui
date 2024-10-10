import HomePage from "./routes/Homepage/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListPage from "./routes/Listpage/ListPage";
import  {Layout, RequireAuth } from "./routes/Layout/Layout";
import SinglePage from "./routes/SinglePage/SinglePage";
import ProfilePage from "./routes/Profilepage/ProfilePage";
import Register from "./routes/Register/Register";
import Login from "./routes/Login/Login";
import NewPostPage from "./routes/NewPostPage/NewPostPage";
import ProfileUpdatePage from "./routes/ProfileUpdatePage/ProfileUpdatePage";
import { listPostLoader, profilePageLoader, singlePostLoader } from "./lib/loaders.js";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
          loader: listPostLoader,
        },
        {
          path: "/:id",
          element: <SinglePage />,
          loader: singlePostLoader,
        },

        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/profile",
          element: <ProfilePage />,
          loader: profilePageLoader,
        },
        {
          path: "/profile/update",
          element: <ProfileUpdatePage />,
        },
        {
          path: "/add",
          element: <NewPostPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
