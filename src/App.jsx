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
    axios.get('https://users-crud1.herokuapp.com/users/')
    .then(res => setUsers(res.data))
  },[])

  const getUsers = () => {
    axios.get('https://users-crud1.herokuapp.com/users/')
    .then(res => setUsers(res.data))
  }

   const select = (user) =>{
    setUserSelected(user)
   }

  const deleteUser = (id) =>{
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
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
