import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <a className="btn btn-ghost normal-case text-xl">Auth Master</a>
                <Link className='btn btn-ghost normal-case text-xl' to='/'>Home</Link>
                {!user && <Link className='btn btn-ghost normal-case text-xl' to='/login'>Login</Link>}
                {!user && <Link className='btn btn-ghost normal-case text-xl' to='/register'>Register</Link>}
                <Link className='btn btn-ghost normal-case text-xl' to='/order'>Orders</Link>
                {
                    user ? <>
                        <span>{user.email}</span>
                        <button onClick={handleLogout} className="btn btn-xs">Sign out</button>
                    </> : <Link to='/login'>login</Link>
                }
            </div>
        </div>
    );
};

export default Header;