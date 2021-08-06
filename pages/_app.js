import React from "react";
import Head from 'next/head'

import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import "antd/dist/antd.css";

export default function Myapp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Test - Simya</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
