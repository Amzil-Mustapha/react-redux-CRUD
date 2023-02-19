import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUserAction } from "../config/actions";

export default function UpdateUser() {
  const { id } = useParams();
  const user = useSelector((state) =>
    state.users.find((e) => e.id === parseInt(id))
  );
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(id);

  const submitHnadler = (e) => {
    e.preventDefault();
    dispatch(updateUserAction({ id, name, email }));
    navigate("/");
  };
  return (
    <>
      <h1>Update</h1>
      <form onSubmit={submitHnadler}>
        Name:
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <br />
        <br />
        Email:
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <button type="submit">UPDATE</button>
      </form>
    </>
  );
}
