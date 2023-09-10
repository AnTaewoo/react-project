import Card from "../Card/Card";
import styled from "./UserList.module.css"

export default function UserList(props) {
  return (
    <Card className = {styled.users} >
      <ul>
        {props.userList.map((user) => (
          <li key={user.key}>
            {user.userName} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
}