import Card from "../Card/Card";
import styled from "./AddUser.module.css";
import Button from "../Button/Button";
import { useState } from "react";
import ErrorModel from "../ErrorModel/ErrorModel";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setuserAge] = useState("");
  const [errorContent, setErrorContent] = useState();

  const onSubmit = (event) => {
    event.preventDefault();
    if (userAge.trim().length === 0 && userName.trim().length === 0) {
      setErrorContent({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
    } else if (+userAge < 1) {
      setErrorContent({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
    } else {
      pushUserList();
    }
  };

  const pushUserList = () => {
    let newUserList = [
      ...props.userList,
      {
        key: props.userList.length,
        userName: userName,
        userAge: userAge,
      },
    ];
    props.addUser(newUserList);

    setUserName("");
    setuserAge("");
  };

  const clickOkay = () => {
    setErrorContent(null);
  };

  return (
    <Card className={styled.input}>
      <form onSubmit={onSubmit}>
        <label
          htmlFor="username" // htmlFor을 이용해서 label 정보를 제공
        >
          Username
        </label>
        <input
          type="text"
          name="userNameInput" // name대신 id = "username" 사용
          onChange={(e) => {
            e.preventDefault();
            setUserName(e.target.value);
          }}
          value={userName}
        ></input>
        <label>userAge (Years)</label>
        <input
          type="number"
          name="useruserAgeInput"
          onChange={(e) => {
            e.preventDefault();
            setuserAge(e.target.value);
          }}
          value={userAge}
        ></input>
        <Button type="submit">Add User</Button>
        {errorContent ? (
          <ErrorModel
            title={errorContent.title}
            message={errorContent.message}
            onClick={clickOkay}
          />
        ) : null}
      </form>
    </Card>
  );
};

export default AddUser;
