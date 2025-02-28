import React, { useEffect, useState } from "react";
import { getAPI } from "./../API/GetApi";
import Input from "./Ui/Input";
import Card from "./Ui/Card";
const Axios = () => {
  const [data, setData] = useState([]);
  const [updateData, setUpdatedata] = useState({});
  const [loading, setLoading] = useState(true);
  const getAPIdata = async () => {
    const apidata = await getAPI();
    setData(apidata.data);
    setLoading(false);
  };

  useEffect(() => {
    getAPIdata();
  }, []);

  if (loading) {
    return (
      <section className="bg-gray-900 text-white  h-lvh justify-center items-center flex">
        <h1 className="text-2xl font-bold "> Loading......</h1>
      </section>
    );
  }
  return (
    <section className="bg-gray-900 text-white p-4">
      <Input
        data={data}
        setData={setData}
        updateData={updateData}
        setUpdatedata={setUpdatedata}
      />
      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-6 mx-auto max-w-5xl p-4">
        {data.map((item) => (
          <Card
            key={item.id}
            item={item}
            setData={setData}
            data={data}
            setloading={setLoading}
            updateData={updateData}
            setUpdatedata={setUpdatedata}
          />
        ))}
      </div>
    </section>
  );
};

export default Axios;
