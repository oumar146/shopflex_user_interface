import React, { useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const login = async (email, password, setError) => {
    try {
      const response = await axios.post('http://localhost:4100/user/login', { email, password });
      const { token } = response.data;
      localStorage.setItem('token', token); // Store token
      setError(false)
      return token;
    } catch (error) {
      console.error("Login Error:", error);
      setError(true)
      throw error;
    }
  };


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const navigate = useNavigate();
  
    const handleLogin = async () => {
      try {
        const token = await login(email, password, setError);
        console.log("Token received:", token);
        navigate(`/admin/dashboard`);
      } catch (error) {
        setError(true);
      }
    };
    
    return (
      <main>
        <div className="container">
            <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                            <div className="d-flex justify-content-center py-4">
                                <a href="index.html" className="logo d-flex align-items-center w-auto">
                                    <span className="d-none d-lg-block">Espace administrateur</span>
                                </a>
                            </div>
    
                            <div className="card mb-3">
                                <div className="card-body">
                                    <div className="pt-4 pb-2">
                                        <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                                        <p className="text-center small">Enter your username & password to login</p>
                                        {error && <p className="text-center error">Email ou mot de passe invalide</p>}

                                    </div>  
    
                                    <div className="row g-3 needs-validation" noValidate>
                                        <div className="col-12">
                                            <label htmlFor="yourUsername" className="form-label">Username</label>
                                            <div className="input-group has-validation">
                                                <span className="input-group-text" id="inputGroupPrepend">@</span>
                                                <input type="email" name="email" className='form-control' id="yourUsername" value={email} required onChange={(e) => setEmail(e.target.value)} />
                                                <div className="invalid-feedback">Please enter your username.</div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="yourPassword" className="form-label">Password</label>
                                            <input type="password" name="password" className="form-control" id="yourPassword" required value={password} onChange={(e) => setPassword(e.target.value)} />
                                            <div className="invalid-feedback">Please enter your password!</div>
                                        </div>
    
                                        <div className="col-12">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe" />
                                                <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                                            </div>
                                        </div>
    
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100" onClick={handleLogin}>Login</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </main>
    );
  };
  
  export default Login;





