import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUserAction } from "../config/actions";

export default function AddUser() {
  const USERS_COUNT = useSelector((state) => state.users.length);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitHnadler = (e) => {
    e.preventDefault();
    dispatch(
      addUserAction({
        id: USERS_COUNT + 1,
        name: name,
        email: email
      })
    );
    navigate("/");
  };
  return (
    <form onSubmit={submitHnadler}>
      Name:
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      Eamil:
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />
      <button type="submit">ADD</button>
    </form>
  );
}
