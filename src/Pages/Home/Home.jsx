import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const Home = () => {
  const { socialProvider } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();

  const handleGoogle = () => {
    const googleLogin = async () => {
      try {
        const result = await socialProvider(googleProvider);
        const user = result?.user;
        const payLoadData = {
          email: user?.email,
        };

        // ** Ask for jwt token

        const sendPayload = async () => {
          try {
            const response = await fetch(`http://localhost:15000/jwt`, {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(payLoadData),
            });

            const data = await response.json();
            const token = data.token.token;

            // ** save the token into ls
            localStorage.setItem("jwt-token", token);
          } catch (error) {
            console.log(error);
          }
        };
        sendPayload();
      } catch (error) {
        console.log(error);
      }
    };
    googleLogin();
  };

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
          <button
            onClick={handleGoogle}
            className="px-8 py-3 m-2 text-lg font-semibold rounded bg-violet-300 dark:bg-violet-400 dark:text-gray-900"
          >
            Google
          </button>
          <button className="px-8 py-3 m-2 text-lg border rounded dark:text-gray-50 dark:border-gray-700">
            Sign Up
          </button>
          <Link to="/createevent">
            <button className="px-8 py-3 m-2 text-lg border rounded dark:text-gray-50 dark:border-gray-700">
              Make Event
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
