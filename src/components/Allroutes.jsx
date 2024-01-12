import { Route, Routes } from "react-router-dom";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { Posts } from "./Products";
import { Patch } from "./Patch";
import { AddProduct} from "./AddProducts";

export const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AddProduct />} />
      <Route path="/add" element={<AddProduct />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/update/:postid" element={<Patch />} />
    </Routes>
  );
};
