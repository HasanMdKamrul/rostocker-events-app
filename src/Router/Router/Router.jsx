import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import EventPage from "../../Pages/EventPage/EventPage";
import Events from "../../Pages/Events/Events";
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
      {
        path: "/events",
        element: <Events />,
      },
    ],
  },
]);

export default router;
