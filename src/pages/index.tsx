import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <>
      <Head>
        <title>Todo App</title>
        <meta name="description" content="Manage your Todos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex h-screen w-screen flex-col items-center justify-center bg-gray-900 p-6 text-white">
        <header className="flex text-center text-4xl">Hi, guest</header>
        <main className="flex flex-grow items-center">
          <div className="group flex h-16 w-64 items-center  rounded border border-red-50 p-4 hover:cursor-pointer hover:bg-white hover:transition-all">
            <div className="mr-2 ml-2 group-hover:text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div className="group-hover:text-black">Create todo</div>
          </div>
        </main>
      </main>
    </>
  );
};

export default Home;
