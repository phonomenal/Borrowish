import React from 'react';

const LoginPage = () => {
    return (
        <form>
            <label htmlFor="username">Username</label>
            <input placeholder="Username" />
            <label htmlFor="password">Password</label>
            <input placeholder="Password" type='password' />
        </form>
    )
}

export default LoginPage;