import axios from 'axios';
import { useEffect, useState } from 'react'
import UsersForm from './component/UsersForm';
import UsersList from './component/UsersList';
import './normalize.css'
import './App.css'

function App() {

  const [users, setUsers] = useState([]);
  const [userSelected, setUserSelected] = useState(null);


  useEffect(() =>{
    axios.get('http://144.126.218.162:9000/users/')
    .then(res => setUsers(res.data))
  },[])

  const getUsers = () => {
    axios.get('http://144.126.218.162:9000/users/')
    .then(res => setUsers(res.data))
  }

   const select = (user) =>{
    setUserSelected(user)
   }

  const deleteUser = (id) =>{
    axios.delete(`http://144.126.218.162:9000/users/${id}/`)
    .then(() => getUsers())
  }

  return (
    <div className="App">
      <UsersForm getUsers={getUsers} userSelected={userSelected}/>
      <UsersList users={users} deleteUser={deleteUser} select={select}/>
    </div>
  )
}

export default App
