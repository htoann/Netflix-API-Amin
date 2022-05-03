import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../../../context/userContext/UserContext";
import { deleteUser, getUsers } from "../../../context/userContext/apiCalls";

export default function UserList() {
  const { users, dispatch } = useContext(UserContext);

  useEffect(() => {
    getUsers(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure want to delete this user?"))
      deleteUser(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 200 },
    {
      field: "user",
      headerName: "Username",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 250 },
    {
      field: "isAdmin",
      headerName: "Role",
      renderCell: (params) => {
        return <div>{params.row.isAdmin ? "Admin" : "User"}</div>;
      },
      width: 110,
    },
    {
      field: "action",
      headerName: (
        <div className="movieTitleContainer">
          <Link to="/newuser">
            <button className="movieAddButton">Create New User</button>
          </Link>
        </div>
      ),
      width: 300,
      renderCell: (params) => {
        return (
          <>
            <Link
              to={{
                pathname: "/user/" + params.row._id,
                state: { user: params.row },
              }}
            >
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={users}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={(row) => row._id}
      />
    </div>
  );
}
