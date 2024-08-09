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
// ajouter supprimer ou modofier une couleur 
const Button = () => {

    return (
<div >
            <div>
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#basicModal">
              <i class="bi bi-plus-circle"></i>
              Ajouter une couleur
              </button>
              <div class="modal fade" id="basicModal" tabindex="-1">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title">Basic Modal</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      Non omnis incidunt qui sed occaecati magni asperiores est mollitia. Soluta at et reprehenderit. Placeat autem numquam et fuga numquam. Tempora in facere consequatur sit dolor ipsum. Consequatur nemo amet incidunt est facilis. Dolorem neque recusandae quo sit molestias sint dignissimos.
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
    );
};

const Colors = () => {

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
              <Button/>
            </main>
        </div>
    );
};

export default Colors;
