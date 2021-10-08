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

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <div className="p-6 border-2 rounded-md">
            <p>What's your name?</p>
            <form onSubmit={sendWuphf}>
              <label htmlFor="name">Name</label>
              <input id="name" type="text" autoComplete="name" required />
              <button type="submit">Send WUPHF</button>
            </form>
          </div>
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
