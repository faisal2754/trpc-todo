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

      <main className="container mx-auto flex items-center justify-center">
        hi
      </main>
    </>
  );
};

export default Home;
