import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const Patch = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  let params = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && body && image) {
      const postDetails = {
        brand: title,
        Price: body,
        quantity: image,
      };
      axios
        .patch(
          `https://mock-api-server-fkxx.onrender.com/data/${params.postid}`,
          postDetails,
          {
            headers: {
              "content-type": "application/json",
            },
          }
        )
        .then((res) => {
          alert("Product Updated");
          setTimeout(() => {
            navigate("/");
          }, 2000);
        })
        .catch((err) => {
          alert("not authorized user");
        });
    } else {
      alert("fill all details");
    }
  };
  return (
    <div class="max-w-md m-auto mt-6">
      <div class="border-t-4 border-blue-600 overflow-hidden rounded shadow-lg">
        <h3 class="text-xl text-center mt-8 mb-8">
          Edit Product : {params.postid}
        </h3>

        <div class="px-4 mb-4">
          {" "}
          <input
            class="border border-gray rounded w-full p-3"
            placeholder="Title"
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div class="px-4 mb-4">
          <input
            class="border border-gray rounded w-full p-3"
            placeholder="Price"
            type="number"
            name="body"
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <div class="px-4 mb-4">
          {" "}
          <input
            class="border border-gray rounded w-full p-3"
            placeholder="Quantity"
            type="number"
            name="image"
            onChange={(e) => setImage(e.target.value)}
          />
        </div>

        <div class="px-4 mb-6">
          <button
            class="border border-blue-500 bg-blue-600 rounded w-full px-4 py-3 text-white font-semibold"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
