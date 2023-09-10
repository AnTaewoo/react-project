import React, {useState} from 'react';
import AddUser from './Components/AddUser/AddUser';
import UserList from './Components/UsersList/UserList';

function App() {
  const [userList, setUserList] = useState([])

  const addUser = (NewList) => {
    setUserList(NewList)
  }

  return (
    <div>
      <AddUser userList = {userList} addUser = {addUser} />
      {userList.length ? <UserList userList = {userList} /> : null}
    </div>
  );
}

export default App;
