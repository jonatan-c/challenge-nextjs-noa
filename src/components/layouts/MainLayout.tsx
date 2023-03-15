import Head from "next/head";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: Props): JSX.Element => {
  return (
    <>
      <Head>
        <title>Pokemon App</title>
        <meta name="description" content=" " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/pokebola.png" />
      </Head>
      <main>{children}</main>
    </>
  );
};
