import React from 'react';
import './style/UserList.css'

const UsersList = ({users, deleteUser, select}) => {
    return (
        <div className='user--list'>
            {
                users.map(user=> (
                    <div key={user.id} className='user--content'>
                        <p className='email'>email: {user.email}</p>
                        <p className='password'>password: {user.password}</p>
                        <p className='first_name'>first name: {user.first_name}</p>
                        <p className='last_name'>last name: {user.last_name}</p>
                        <p className='birthday'>Date of Birth: {user.birthday}</p>
                        <div className="btn">
                            <button className='delete btn--style' onClick={() => deleteUser(user.id)}>Delete</button>
                            <button className='select btn--style' onClick={() => select(user)}>Select</button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default UsersList;