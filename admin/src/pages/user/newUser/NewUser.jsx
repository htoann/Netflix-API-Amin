import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { createUser } from "../../../context/userContext/apiCalls";
import { UserContext } from "../../../context/userContext/UserContext";
import "./newUser.css";

export default function NewUser() {
  const [user, setUser] = useState(null);
  const { dispatch } = useContext(UserContext);
  const history = useHistory();

  const handleChange = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createUser(user, dispatch);
    history.push("/users");
  };

  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input
            name="username"
            type="text"
            placeholder="John"
            onChange={handleChange}
          />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input
            name="email"
            type="email"
            placeholder="john@gmail.com"
            onChange={handleChange}
          />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input
            name="password"
            type="password"
            placeholder="password"
            onChange={handleChange}
          />
        </div>
        <button className="newUserButton" onChange={handleSubmit}>
          Create
        </button>
      </form>
    </div>
  );
}
