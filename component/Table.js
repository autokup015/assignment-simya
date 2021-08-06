import React from "react";

export default function Tables({ newData, nameColor }) {
  return (
    <div className="max-w-screen-lg m-auto">
      <table className="border-collapse" style={{ width: "100%" }}>
        <tbody>
          <tr style={{ borderBottom: "1px solid darkgray" }}>
            <th style={{ textAlign: "left" }}>Name</th>
            <th className="text-center">Rank</th>
            <th className="text-center">Number of bananas</th>
            <th className="text-center">isCurrentUser?</th>
          </tr>
          {newData &&
            newData.map((item, index) => {
              return (
                <tr key={index}>
                  <td style={nameColor == item.name ? { color: "red" } : {}}>
                    {item.name}
                  </td>
                  <td className="text-center">{item.rank}</td>
                  <td className="text-center">{item.bananas}</td>
                  <td className="text-center">
                    {item.subscribed ? "yes" : "no"}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
