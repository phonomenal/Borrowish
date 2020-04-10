import React from 'react';

const LoginPage = () => {
    return (
        <form>
            <label htmlFor="username">Username</label>
            <input placeholder="Username" />
            <label htmlFor="password">Password</label>
            <input placeholder="Password" type='password' />
            <button type='submit'>Login</button>
        </form>
    )
}

export default LoginPage;