import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async function() {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await response.json();
                // console.log(data)
                setUsers(data)
            } catch(err){
                console.log(err);
            }
        }
        fetchUsers()

    },[])
  return (
   <div>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Company Name</th>
                <th>City</th>
            </tr>
        </thead>
        <tbody>
            {users.map(user => (
                <tr key={user.id}>
                    <th>{user.id}</th>
                    <th>{user.name}</th>
                    <th>{user.email}</th>
                    <th>{user.phone}</th>
                    <th>{user.company.name}</th>
                    <th>{user.address.city}</th>
                </tr>
            ))}
        </tbody>
    </table>
   </div>
  )
}

export default UseEffect