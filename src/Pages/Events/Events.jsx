import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../Contexts/AuthProvider";
import EventCard from "./EventCard";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [count, setCount] = useState(0);

  const { user } = useContext(AuthContext);

  const handleDelete = (id) => {
    try {
      const deleteData = async () => {
        const response = await fetch(`http://localhost:15000/events/${id}`, {
          method: "DELETE",
        });
        const data = await response.json();
        console.log(data);

        if (data.success) {
          toast.success(data.message);
          const reamining = events.filter((evnt) => evnt._id !== id);
          setEvents(reamining);
        }
      };
      deleteData();
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const response = await fetch(
          `http://localhost:15000/events?email=${user?.email}`,
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem("jwt-token")}`,
            },
          }
        );
        const data = await response.json();
        setEvents(data.data);
        setCount(data.count);
      } catch (error) {
        console.log(error.message);
      }
    };

    loadEvents();
  }, [user?.email]);

  return (
    <div>
      <h1 className="text-5xl text-center text-white mt-5 font-extrabold">
        All Events ({count})
      </h1>
      <div className="mx-16">
        <fieldset className="w-full space-y-1 dark:text-gray-100">
          <label htmlFor="Search" className="hidden">
            Search
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <button
                type="button"
                title="search"
                className="p-1 focus:outline-none focus:ring"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  className="w-4 h-4 dark:text-gray-100"
                >
                  <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                </svg>
              </button>
            </span>
            <input
              name="upper"
              type="text"
              placeholder="Party Range more than this fee...."
              className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900 focus:dark:border-violet-400"
            />
          </div>
        </fieldset>
        <fieldset className="w-full space-y-1 dark:text-gray-100">
          <label htmlFor="Search" className="hidden">
            Search
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <button
                type="button"
                title="search"
                className="p-1 focus:outline-none focus:ring"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  className="w-4 h-4 dark:text-gray-100"
                >
                  <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                </svg>
              </button>
            </span>
            <input
              name="lower"
              type="text"
              placeholder="Party Range less than this fee...."
              className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900 focus:dark:border-violet-400"
            />
          </div>
        </fieldset>
        <button className="px-4 py-1 rounded mt-2  bg-sky-400">Find</button>
      </div>
      <div>
        {events?.map((evnt) => (
          <EventCard handleDelete={handleDelete} key={evnt._id} evnt={evnt} />
        ))}
      </div>
    </div>
  );
};

export default Events;
