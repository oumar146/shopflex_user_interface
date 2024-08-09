import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { useNavigate } from 'react-router-dom';

const tokenCheck = async (navigate, setUser) => {
  const token = localStorage.getItem('token');
  if (!token) {
    navigate('/admin/login')
  }

  try {
    const response = await axios.post('http://localhost:4100/user/token-check', null, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    setUser(response.data.user[0])    
  } catch (error) {
    console.error("Error fetching protected resource:", error);
    navigate('/admin/login')
  }
};

const Orders = () => {

  const navigate = useNavigate();
  const [user, setUser] = useState({});

  useEffect(() => {
    tokenCheck(navigate, setUser);
  }, [])

    return (
        <div>
            <Header user={user}/>
            <Sidebar/>
            <main id="main" className="main">
              Commande
            </main>
        </div>
    );
};

export default Orders;
