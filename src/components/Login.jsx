import { useContext, useState } from "react";
import { Link, json, useNavigate } from "react-router-dom";
import MyContext from "../ContextApi/MyContext";

export const Login = () => {
  const { isAuth, updateState, user, AddUser } = useContext(MyContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
// Login
  const hadlesubmit = () => {
    if (email == user.email && password == user.password) {
      updateState();
      alert("Login Success");
      navigate("/");
    } else {
      alert("invalid Credentials");
    }
  };

  return (
    <div>
      <div class="max-w-md m-auto mt-6">
        <div class="border-t-4 border-blue-600 overflow-hidden rounded shadow-lg">
          <h3 class="text-xl text-center mt-8 mb-8">Welcome back!</h3>
          <div class="px-4 mb-4">
            <input
              type="text"
              placeholder="Email Address"
              class="border border-gray rounded w-full p-3"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div class="px-4 mb-4">
            <input
              type="text"
              placeholder="Password"
              class="border border-gray rounded w-full p-3"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <div class="px-4 mb-6">
            <button
              class="border border-blue-500 bg-blue-600 rounded w-full px-4 py-3 text-white font-semibold"
              onClick={() => {
                hadlesubmit();
              }}
            >
              Sign in
            </button>
          </div>
          <div class="bg-gray-100 text-center text-gray-700 py-5">
            Don't have a account?
            <Link to="/signup" class="font-semibold no-underline text-black">
              Signup
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
