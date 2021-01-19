import React, { useEffect, useState } from "react";

import Button from "../Button";
import InputFeild from "../InputFeild";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [id, setId] = useState();

  const [show, setShow] = useState(false);

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

  const fillALlStateAndShowForm = (id, name, email, phone) => {
    setId(id);
    setName(name);
    setEmail(email);
    setPhone(phone);
    setShow(true);
  };

  const handelDelete = (id) => setUsers(users.filter((el) => el.id !== id));

  const handelChangeState = (value, stateCb) => stateCb(value);

  const handelSaveChanges = () => {
    const editedUser = users.map((user) => {
      if (user.id === id) {
        user.name = name;
        user.email = email;
        user.phone = phone;
        return user;
      }
      return user;
    });
    setUsers(editedUser);
    setShow(false);
  };

  return (
    <>
      {!show ? (
        <div>
          {error && <p>{error}</p>}
          {users &&
            users.map(({ id, name, email, phone }) => (
              <div>
                <p>user name : {name}</p>
                <p>email : {email}</p>
                <p>phone : {phone}</p>
                <Button
                  btnName="edit"
                  handelClick={() =>
                    fillALlStateAndShowForm(id, name, email, phone)
                  }
                >
                  edit
                </Button>
                <Button btnName="delete" handelClick={() => handelDelete(id)}>
                  delete
                </Button>
              </div>
            ))}
        </div>
      ) : (
        <form>
          <InputFeild
            value={name}
            inputName="name"
            placeholder="enter your name"
            type="text"
            handelChange={({ target: { value } }) =>
              handelChangeState(value, setName)
            }
          />
          <br />
          <InputFeild
            value={email}
            placeholder="enter your email"
            inputName="eamil"
            type="eamil"
            handelChange={({ target: { value } }) =>
              handelChangeState(value, setEmail)
            }
          />
          <br />
          <InputFeild
            value={phone}
            inputName="phone"
            type="text"
            placeholder="enter your phone"
            handelChange={({ target: { value } }) =>
              handelChangeState(value, setPhone)
            }
          />
          <br />
          <Button handelClick={handelSaveChanges}>save changes</Button>
        </form>
      )}
    </>
  );
}
