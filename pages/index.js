import React, { useEffect, useState } from "react";
import { Alert, Button, Divider, Input } from "antd";
// import Style from "../styles/Home.module.css";
import Table from "../component/Table";

import data from "../json/leaderboard.json";

export default function Home() {
  // Default data
  const [newArr, setNewArr] = useState([]);

  // Send to Table
  const [newData, setNewData] = useState([]);

  // Other
  const [search, setSearch] = useState("");
  const [statusAlert, setStatusAlert] = useState(false);
  const [nameColor, setNameColor] = useState("");

  useEffect(() => {
    changeValueToArrObJect();
  }, []);

  useEffect(() => {
    topTenData();
  }, [newArr]);

  useEffect(() => {
    if (search != "") {
      setStatusAlert(false);
    }
  }, [search]);

  const changeValueToArrObJect = () => {
    let getdata = { ...data };

    let arr = [];

    Object.keys(getdata).forEach((key) => {
      arr.push(getdata[key]);
    });

    let filterSubscribed = arr.filter(data => data.subscribed == true)

    let sortData = filterSubscribed.sort((a, b) => {
      return b.bananas - a.bananas;
    });

    sortData.forEach((data, index) => {
      Object.assign(data, { rank: index + 1 });
    });

    setNewArr(sortData);
    console.log('New data for render : ', sortData)
  };

  const topTenData = () => {
    let cloneData = [...newArr];

    let top10 = cloneData.slice(0, 10);

    setNewData(top10);
  };

  const SearchBTN = () => {
    let cloneNewArr = [...newArr];

    let find = newArr.find((data) => {
      return (
        data.name.toLocaleLowerCase() === search.toLocaleLowerCase() ||
        data.uid.toLocaleLowerCase() === search.toLocaleLowerCase()
      );
    });

    if (search != "") {
      if (find) {
        setNameColor(find.name);
        topTenData()
        if (find.rank >= 10) {
          let filter = cloneNewArr.sort((a, b) => {
            return b.bananas - a.bananas;
          });

          let lastData = filter.slice(0, 9);

          lastData.push(find);

          setNewData(lastData);
        }
      } else {
        topTenData()
        setStatusAlert(true);
        setNameColor("");
        setSearch("");
      }
    } else {
      setNameColor("");
      topTenData();
    }
  };

  return (
    <div className="max-w-screen-lg m-auto px-5">
      <h1 className="text-center text-2xl pt-4 mb-0">
        Case Study LeaderboardD
      </h1>
      <Divider />
      <div className="max-w-screen-lg m-auto flex">
        <Input
          placeholder="Search by name and uid"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button type="primary" onClick={SearchBTN}>
          Search
        </Button>
      </div>
      <div className="mt-5">
        <Table newData={newData} nameColor={nameColor} />
      </div>
      <br />

      {statusAlert && (
        <div className="max-w-lg m-auto">
          <Alert
            message="Current user id does not exist! Please specify an existing user id!"
            type="error"
            showIcon
          />
        </div>
      )}
    </div>
  );
}
