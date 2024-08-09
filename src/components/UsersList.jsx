import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const getAllUsers = async (setUsers, navigate) => {
  const token = localStorage.getItem('token');
  if (!token) {
    navigate('/admin/login')
  }

  try {
    const response = await axios.post('http://localhost:4100/user/get', null, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    setUsers(response.data.users)
    return response.data.users; 
    
  } catch (error) {
    console.error("Error fetching all users:", error);
    navigate('/admin/login')
  }
};

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

    useEffect(() => {
      getAllUsers(setUsers, navigate);
    }, [])
    

    return (
            <div class="col-12">
              <div class="card recent-sales overflow-auto">
                <div class="card-body">
                  <h5 class="card-title">Users</h5>
                  <table class="table table-borderless datatable">
                    <thead>
                      <tr>
                        <th scope="col">N°</th>
                        <th scope="col">Sexe</th>
                        <th scope="col">Nom</th>
                        <th scope="col">Prénom</th>
                        <th scope="col">email</th>
                        <th scope="col">phone</th>
                        <th scope="col">rôle</th>
                      </tr>
                    </thead>
                    <tbody>
  
                    {users.length > 0 &&
                      users.map((user)=>(
                        <tr key={user.id}>
                        <th scope="row">{user.id}</th>
                        <td>{user.sexe}</td>
                        <td>{user.first_name}</td>
                        <td>{user.last_name}</td>
                        <td><a href={`mailto:${user.email}`}>{user.email}</a></td>
                        <td>{user.phone}</td>
                        <td>{user.role_name}</td>
                        {/* modal */}
                        <td><i class="bi bi-eye"></i></td>
                        {/* autre page  */}
                        <td><i class="bi bi-pen"></i></td>
                        {/* modal  */}
                        <td><i class="bi bi-trash"></i></td>
                      </tr>
                      ))
                      }
                    </tbody>
                  </table>

                </div>

              </div>
            </div>
    );
};

export default UsersList;
