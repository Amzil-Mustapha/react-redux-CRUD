import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddUser from "./pages/Add";
import UpdateUser from "./pages/Update";
import Users from "./pages/Users";
import "./styles.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/update-user/:id?" element={<UpdateUser />} />
          <Route path="/add-user" element={<AddUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
