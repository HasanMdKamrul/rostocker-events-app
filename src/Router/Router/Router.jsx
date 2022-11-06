import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import EventPage from "../../Pages/EventPage/EventPage";
import Home from "../../Pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/createevent",
        element: <EventPage />,
      },
    ],
  },
]);

export default router;
