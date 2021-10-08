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
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Woof POC from The Office using One Signal</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          src="https://cdn.onesignal.com/sdks/OneSignalSDK.js"
          async=""
        ></script>
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
        <h1 className="text-6xl font-bold">
          So you want to receive a <span className="text-blue-600">Woof!?</span>
        </h1>

        <p className="mt-3 text-2xl">
          Get started by editing{" "}
          <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
            pages/index.js
          </code>
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <a
            href="https://nextjs.org/docs"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Documentation &rarr;</h3>
            <p className="mt-4 text-xl">
              Find in-depth information about Next.js features and API.
            </p>
          </a>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full text-white bg-red-500">
        <p className="p-2">
          Built using <a className="underline">Next.js</a>, styled with{" "}
          <a className="underline">Tailwind</a>, and deployed to{" "}
          <a className="underline">Vercel</a>.
        </p>
      </footer>
    </div>
  );
}
