import React, { useEffect } from "react";
import CardTable from "components/users/users";
import { users } from "redux/reducers/usersReducer";
import { useDispatch, useSelector } from "react-redux";

const tableHeader = ["Phone number", "Longitude", "Latitude", "Date Joined"];

const Users = () => {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.users.users);

  const getUsers = () => {
    dispatch(users())
      .then(() => {})
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTable
            tableHeader={tableHeader}
            tableType="Users"
            users={allUsers}
          />
        </div>
      </div>
    </>
  );
};

export default Users;
