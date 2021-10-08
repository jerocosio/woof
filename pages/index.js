import Head from "next/head";
import React, { useEffect } from "react";

export default function Home() {
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
    console.log(result);
  };
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

      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
        <div>
          <img src="/logo.jpg" />
        </div>
        <h1 className="text-5xl font-bold">
          Subscribe now and receive{" "}
          <span className="text-orange-500">WUPHFs</span> from everyone 🐶!
        </h1>

        <h2 className="mt-3 text-2xl">
          You'll receive a notification everytime someone sends a notification
          through this site! Get to know your new friends and don't forget to
          send a <span className="font-bold text-orange-500">WUPHFs</span> back
          🐶!
        </h2>
        <div class="w-full max-w-xs mt-8">
          <form
            class="bg-white border-2 rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={sendWuphf}
          >
            <div class="mb-4">
              <label class="block mb-2" for="name">
                What's your name?
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Name"
                type="text"
                autoComplete="name"
                required
              />
            </div>
            <div class="flex items-center justify-between">
              <button
                class="bg-orange-500 hover:bg-orange-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Send WUPHF!
              </button>
            </div>
          </form>
          <p class="text-center text-gray-500 text-xs">
            Inspired by this great idea{" "}
            <a
              href="https://www.youtube.com/watch?v=bjaZtXRfJ5o"
              className="underline"
            >
              from The Office
            </a>
          </p>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full text-white bg-blue-800">
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
