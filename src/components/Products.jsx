import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Products = () => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    axios
      .get("https://mock-api-server-fkxx.onrender.com/data")

      .then((res) => setData(res.data))

      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div class="flex items-center justify-center  min-h-screen p-10">
      <div class="grid xl:grid-cols-6 md:grid-cols-2 grid-cols-1 gap-2 max-w-7xl">
        {data.length == 0 && (
          <h1>Api is loading please wait or refresh page</h1>
        )}
        {data?.map((el) => (
          <div class="flex flex-col bg-gray-200 rounded-lg p-4 m-2">
            <img class="h-40 bg-gray-400 rounded-lg" src={el.img} alt="" />
            <div></div>
            <div class="flex flex-col items-start mt-4">
              <p class="text-sm"> {el.brand}</p>
              <h4 class="text-xl font-semibold">MRP: {el.Price}</h4>
              <p class="text-sm">Quantity: {el.quantity}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
