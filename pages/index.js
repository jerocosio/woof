import Head from "next/head";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [resultApi, setResultApi] = useState();
  useEffect(() => {
    window.OneSignal = window.OneSignal || [];
    OneSignal.push(function () {
      OneSignal.init({
        appId: "8f9b57f7-4cd8-4eff-ad18-1dfd18f7ce17",
        notifyButton: {
          enable: true,
        },

        allowLocalhostAsSecureOrigin: true,
      });
    });

    return () => {
      window.OneSignal = undefined;
    };
  }, []);
  const sendWuphf = async (event) => {
    event.preventDefault();
    const res = await fetch("/api/wuphf", {
      body: JSON.stringify({
        name: event.target.name.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const result = await res.json();

    if (result) {
      setResultApi(result);
    }
    console.log(result);
  };
  console.log(resultApi);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Woof POC from The Office using One Signal</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          src="https://cdn.onesignal.com/sdks/OneSignalSDK.js"
          async=""
        ></script>
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 w-full px-4 text-center lg:px-20">
        <div>
          <img src="/logo.jpg" />
        </div>
        <h1 className="text-2xl font-bold lg:text-5xl">
          Subscribe now and receive{" "}
          <span className="text-orange-500">WUPHFs</span> from everyone 🐶!
        </h1>

        <h2 className="mt-3 text-md lg:text-2xl">
          You'll receive a notification everytime someone sends a notification
          through this site! Get to know your new friends and don't forget to
          send a <span className="font-bold text-orange-500">WUPHFs</span> back
          🐶!
        </h2>
        <div className="w-full max-w-xs mt-8">
          {resultApi && (
            <div className="p-4 my-4 bg-green-100 rounded-md">
              <p>{`Message sent to all the WUPHF friends`}</p>
            </div>
          )}
          <form
            className="px-8 pt-6 pb-8 mb-4 bg-white border-2 rounded"
            onSubmit={sendWuphf}
          >
            <div className="mb-4">
              <label className="block mb-2" htmlFor="name">
                What's your name?
              </label>
              <input
                onFocus={() => {
                  setResultApi();
                }}
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Name"
                type="text"
                autoComplete="name"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="w-full px-4 py-2 font-bold text-white bg-orange-500 rounded hover:bg-orange-700 focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Send WUPHF!
              </button>
            </div>
          </form>
          <p className="text-xs text-center text-gray-500">
            Inspired by this great idea{" "}
            <a
              href="https://www.youtube.com/watch?v=bjaZtXRfJ5o"
              className="underline"
            >
              from The Office
            </a>
          </p>
          <p className="text-xs text-center text-gray-500">
            You can find the whole source code{" "}
            <a href="https://github.com/jerocosio/woof" className="underline">
              here
            </a>
            .
          </p>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full mt-6 text-xs text-white bg-blue-800 lg:text-base">
        <p className="p-2">
          Inspired by The Office, built using{" "}
          <a className="underline" href="https://nextjs.org/">
            Next.js
          </a>
          , styled with{" "}
          <a className="underline" href="https://tailwindcss.com/">
            Tailwind
          </a>
          , using{" "}
          <a className="underline" href="https://onesignal.com/">
            One Signal
          </a>{" "}
          to manage notifications and deployed to{" "}
          <a className="underline" href="https://vercel.com/">
            Vercel
          </a>
          .
        </p>
      </footer>
    </div>
  );
}
