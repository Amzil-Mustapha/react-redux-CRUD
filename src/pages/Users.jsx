import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUserAction } from "../config/actions";

export default function Users() {
  const USERS = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const clickHandler = (id) => {
    dispatch(deleteUserAction(id));
  };

  return (
    <div>
      <Link to={"add-user"}>
        <button>Add User</button> <br />
      </Link>
      <br />
      <table border="1">
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Email</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {USERS.map((user, index) => {
            return (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button onClick={() => clickHandler(user.id)}>Delete</button>

                  <Link to={`/update-user/${user.id}`}>
                    <button>Update</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
