import React, { useEffect, useState } from "react";

import Button from "../Button";
import InputFeild from "../InputFeild";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    let isCurrent = true;
    fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
      res
        .json()
        .then((res) => {
          console.log(res);
          if (isCurrent) {
            setUsers(res);
          }
        })
        .catch((e) => setError("error,try again later"))
    );
    return () => {
      isCurrent = false;
    };
  }, []);

  const handelDelete = (id) => setUsers(users.filter((el) => el.id !== id));
  const editUser = (id) => {};

  return (
    <div>
      {error && <p>{error}</p>}
      {users &&
        users.map((user) => (
          <div>
            <p>user name : {user.name}</p>
            <p>email : {user.email}</p>
            <p>phone : {user.phone}</p>
            <Button btnName="edit" handelClick={() => editUser(user.id)}>
              edit
            </Button>
            <Button btnName="delete" handelClick={() => handelDelete(user.id)}>
              delete
            </Button>
          </div>
        ))}
    </div>
  );
}
