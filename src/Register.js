import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('https://mystore1backend.onrender.com/api/login', {
        email,
        password,
      });

      if (response.status === 200) {
        alert('Login successful!');
        // Yahan aapko home page par navigate karna hoga:
        // Example: window.location.href = '/home';
      }
    } catch (error) {
      console.error(error);
      alert('Invalid email or password!');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Login</button>
    </div>
  );
}

export default Register;
