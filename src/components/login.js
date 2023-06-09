import React, { useState } from 'react';
import "./login.css"; 

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

    function handleCheckbox() {
        setShowPassword(!showPassword);
    };

  return (
    <div className='login-page'>
      <div className='login-page-container'>
        <h1>Login</h1>
        <form>
          <div>
            <label htmlFor='email' className='form-label'>
              Email
            </label>
            <input id='email' className='form-control' type='text' name='firstname'></input>
          </div>
          <div className='div'>
            <label htmlFor='password' className='form-label'>
              Password
            </label>
            <div className="password-container">
              <input
                id='password'
                className='form-control'
                type={showPassword ? 'text' : 'password'} 
                name='password'
              />
              <label htmlFor="show-password-checkbox" className='checkBox'>
                <input
                  id="show-password-checkbox"
                  className='checkBox'
                  type="checkbox"
                  onClick={handleCheckbox}
                />
                Show password
              </label>
            </div>
          </div>
          <button type='submit' className='btn-submit'>
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

//