import React from "react";

const Home = () => {
  return (
    <section className="dark:bg-slate-900 dark:text-gray-100">
      <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
        <h1 className="text-4xl font-bold leading-none sm:text-5xl">
          This is an event organising community app
          <span className="dark:text-violet-400">Make events</span>
          share & enjoy with F&F
        </h1>
        <p className="px-8 mt-8 mb-12 text-lg">
          To make events please login and register
        </p>
        <div className="flex flex-wrap justify-center">
          <button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-violet-300 dark:bg-violet-400 dark:text-gray-900">
            Sign In
          </button>
          <button className="px-8 py-3 m-2 text-lg border rounded dark:text-gray-50 dark:border-gray-700">
            Sign Up
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
