import React, { useEffect, useState } from "react";
import EventCard from "../Events/EventCard";

const AllEvents = () => {
  const [events, setEvents] = useState([]);
  const [count, setCount] = useState(0);

  //   const { count, data: events } = alleventsData;
  const [currentPage, setCurrentPage] = useState(0);
  const [dataPerPage, setDataPerPage] = useState(1);
  const numberOfPages = Math.ceil(count / dataPerPage);

  console.log(events);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch(
          `http://localhost:15000/allevents?size=${dataPerPage}&&currentPage=${currentPage}`
        );
        const data = await response.json();

        setEvents(data.data);
        setCount(data.count);
      } catch (error) {
        console.log(error);
      }
    };
    loadData();
  }, [currentPage, dataPerPage]);

  //   ** current Page
  // ** dataPerPage
  // ** Number of pages Math.celi(count/dataPerPage)

  return (
    <div>
      <h1 className="text-3xl text-white text-center mt-5">
        All Events ({count})
      </h1>
      <div>
        {events?.map((evnt) => (
          <EventCard key={evnt._id} evnt={evnt} />
        ))}
      </div>
      <div className="flex my-5 justify-center space-x-1  dark:text-gray-100">
        <h1 className="text-center text-white">
          Currently On : {currentPage + 1}
        </h1>
        {[...Array(numberOfPages).keys()]?.map((number) => (
          <>
            <button
              onClick={() => setCurrentPage(number)}
              key={number}
              type="button"
              className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md dark:bg-gray-900 dark:border-gray-800"
              title="Page 2"
            >
              {number + 1}
            </button>
          </>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <select onChange={(e) => setDataPerPage(e.target.value)}>
          <option selected value="1">
            1
          </option>
          <option value="2">2</option>
          <option value="2">3</option>
        </select>
      </div>
    </div>
  );
};

export default AllEvents;
