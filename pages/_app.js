import React from "react";

// import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import "antd/dist/antd.css";

export default function Myapp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}
