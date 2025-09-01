import React, { useState } from 'react';
import api from '../api/axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const [form, setForm] = useState({name:'', email:'', password:'', password_confirmation:''});
    const navigate = useNavigate();

    const handleChange = e => setForm({...form,[e.target.name]: e.target.value});

    const handleSubmit = async e => {
        e.preventDefault();
        try{
            const res = await api.post('/register', form);
            localStorage.setItem('token', res.data.token);
            alert('Registered Successfully!');
            navigate('/profile');
        } catch(err){
            alert(err.response?.data?.error || 'Registration failed');
        }
    }

    return (
        <div className="container mt-5">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input className="form-control" type="text" name="name" placeholder="Name" onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <input className="form-control" type="email" name="email" placeholder="Email" onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <input className="form-control" type="password" name="password" placeholder="Password" onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <input className="form-control" type="password" name="password_confirmation" placeholder="Confirm Password" onChange={handleChange} required />
                </div>
                <button className="btn btn-primary" type="submit">Register</button>
            </form>
        </div>
    );
}
