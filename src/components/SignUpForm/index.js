import React, { useState } from "react";

import Input from "../InputFeild";
import Button from "../Button";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [ok, setOk] = useState(false);

  const clearData = () => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const handelSubmit = () => {
    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
      alert("error , you have empty value");
    } else if (password !== confirmPassword) {
      alert("password and confirmed password doesn't match");
    } else {
      setOk(true);
    }
  };

  const deleteInfo = (e) => {
    clearData();
    setOk(false);
  };

  return (
    <>
      {ok ? (
        <>
          <p>user data</p>
          <p>your email is : {email}</p>
          <p>your password is : {password}</p>
          <Button handelClick={deleteInfo} btnName="deleteInfo" type="submit">
            delete info
          </Button>
        </>
      ) : (
        <form onSubmit={(e) =>  e.preventDefault()}>
          <Input
            type="email"
            inputName="email"
            handelChange={({ target: { value } }) => setEmail(value)}
            placeholder="enter your email"
            value={email}
          />
          <Input
            type="password"
            inputName="password"
            handelChange={({ target: { value } }) => setPassword(value)}
            placeholder="enter your password"
            value={password}
          />
          <Input
            type="password"
            inputName="confirmPassword"
            handelChange={({ target: { value } }) => setConfirmPassword(value)}
            placeholder="enter confirm password"
            value={confirmPassword}
          />
          <Button btnName="submit" handelClick={handelSubmit}>
            submit info
          </Button>
          <Button btnName="reset" type="reset">
            reset
          </Button>
        </form>
      )}
    </>
  );
}
