import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import EventPage from "../../Pages/EventPage/EventPage";
import Events from "../../Pages/Events/Events";
import EventUpdate from "../../Pages/EventUpdate/EventUpdate";
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
      {
        path: "//events/update/:id",
        element: <EventUpdate />,
        loader: ({ params: { id } }) =>
          fetch(`http://localhost:15000/events/${id}`),
      },
    ],
  },
]);

export default router;
