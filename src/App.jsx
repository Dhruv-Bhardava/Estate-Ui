import HomePage from "./routes/Homepage/HomePage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ListPage from "./routes/Listpage/ListPage";
import Layout from "./routes/Layout/Layout";
import SinglePage from "./routes/SinglePage/SinglePage";
import ProfilePage from "./routes/Profilepage/ProfilePage";
import Register from "./routes/Register/Register";
import Login from "./routes/Login/Login";
import NewPostPage from "./routes/NewPostPage/NewPostPage";
import ProfileUpdatePage from "./routes/ProfileUpdatePage/ProfileUpdatePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <HomePage/>
        },
        {
          path: "/list",
          element: <ListPage/>
        },
        {
          path: "/:id",
          element: <SinglePage/>
        },
        {
          path: "/profile",
          element: <ProfilePage/>
        },
        {
          path: "/register",
          element: <Register/>
        },
        {
          path: "/login",
          element: <Login/>
        },
        {
          path: "/newpost",
          element: <NewPostPage/>
        },
        {
          path: "/updateprofile",
          element: <ProfileUpdatePage/>
        }
      ]
    }
  ]);

  return (
   

    <RouterProvider router={router} />
  );
}

export default App;
