import React from "react";

import { Button } from "antd";

export default function Home() {
  return (
    <div>
      <div className="text-center p-5 bg-red-400">
        <h1>Test tailwind css</h1>
        <h1 className="text-white">Hello home page</h1>
        <div className="bg-gray-600 w-10 h-10 ml-10 "></div>
      </div>
      <div>
        <h1>Test ant design</h1>
        <Button shape="round" type="primary">
          Hello ant button
        </Button>
      </div>
    </div>
  );
}
