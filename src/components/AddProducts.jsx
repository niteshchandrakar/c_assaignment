import { useContext, useEffect, useState } from "react";
import { Sidebar } from "./Sidebar";
import { Products } from "./Products";
import { Link } from "react-router-dom";
import MyContext from "../ContextApi/MyContext";
import axios from "axios";

export const AddProduct = () => {
  // Add posts
  const [title, setName] = useState("");
  const [body, setEmail] = useState(0);
  const [image, setPassword] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [services, setServices] = useState(false);
  //Fetch data from api
  const fetchData = () => {
    axios
      .get("https://mock-api-server-fkxx.onrender.com/data")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };
// enable services
  const Updateservice = () => {
    setServices(!services);
  };

  // Add product
  const hadlesubmit = (e) => {
    e.preventDefault();

    if (title && body && image && quantity) {
      const payload = { brand: title, Price: body, img: image, quantity };

      axios
        .post("https://mock-api-server-fkxx.onrender.com/data", {
          brand: title,
          Price: body,
          img: image,
          quantity,
        })

        .then((res) => alert("Product Added"))
        .catch((err) => console.log(err));
    } else {
      alert("fill all details");
    }
  };
  useEffect(() => {
    fetchData();
  }, [count]);
  return (
    <div class="xl:flex md:flex grid-cols-1  m-auto ">
      <div>
        <Sidebar Updateservice={Updateservice} />
        {services && (
          <div class="border-t-4 border-blue-600 overflow-hidden rounded shadow-lg">
            <h3 class="text-xl text-center mt-8 mb-8">Add New Product</h3>
            <div class="px-4 mb-4">
              <input
                type="text"
                placeholder="Title"
                class="border border-gray rounded w-full p-3"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>

            <div class="px-4 mb-4">
              <input
                type="Number"
                placeholder="Price"
                class="border border-gray rounded w-full p-3"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div class="px-4 mb-4">
              <input
                type="text"
                placeholder="Image"
                class="border border-gray rounded w-full p-3"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div class="px-4 mb-4">
              <input
                type="Number"
                placeholder="Quantity"
                class="border border-gray rounded w-full p-3"
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
              />
            </div>

            <div class="px-4 mb-6">
              <button
                class="border border-blue-500 bg-blue-600 rounded w-full px-4 py-3 text-white font-semibold"
                onClick={(e) => {
                  hadlesubmit(e);
                }}
              >
                Add
              </button>
            </div>
          </div>
        )}
      </div>
      {services && (
        <div class="flex items-center justify-center  min-h-screen p-10">
          <div class="grid xl:grid-cols-6 md:grid-cols-2 grid-cols-1 gap-2 max-w-7xl">
            {data.length == 0 && (
              <h5>Please wait for Api loading or refresh the page</h5>
            )}

            {data?.map((el) => (
              <div class="flex flex-col bg-gray-200 rounded-lg p-4 m-2">
                <img class="h-40 bg-gray-400 rounded-lg" src={el.img} alt="" />
                <div></div>
                <div class="flex flex-col items-start mt-4">
                  <p class="text-sm"> {el.brand}</p>
                  <h4 class="text-xl font-semibold">MRP: {el.Price}</h4>
                  <p class="text-sm">Quantity: {el.quantity}</p>
                  <div class="flex gap-3 max-w-sm">
                    <button
                      class="py-2.5 px-6 rounded-lg text-sm font-medium bg-teal-200 text-teal-800"
                      onClick={() => {
                        axios
                          .delete(
                            `https://mock-api-server-fkxx.onrender.com/data/${el.id}`
                          )
                          .then((res) => alert("Product Deleted"))
                          .then((res) => {
                            setCount(count + 1);
                          })

                          .catch((err) => console.log(err));
                      }}
                    >
                      Delete
                    </button>
                    <button class="py-2.5 px-6 rounded-lg text-sm font-medium text-white bg-teal-600">
                      <Link
                        to={`/update/${el.id}`}
                        style={{ textDecoration: "none", color: "green" }}
                      >
                        Edit
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {!services && <Products />}
    </div>
  );
};
