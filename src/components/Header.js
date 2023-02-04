import axios from 'axios'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { server, headers } from '../constants'
import { UserContext } from '../context'
import '../assets/styles/header.css'
import '../assets/styles/index.css'
function Header() {
    // const isLoggedIn = false;

    const isLoggedIn = localStorage.getItem('isSignedIn')
    const refreshToken = localStorage.getItem('refreshToken')
    const userCtx = useContext(UserContext)
    const navigate = useNavigate()
    const handleLogout = async () => {
        userCtx.logout();
        const payload = { refreshToken }
        const res = await axios.post(server + '/auth/logout', payload);
        if (res.status === 200) {
            navigate('../home')
            window.location.reload(true);
        }

    }
    return (
        <div className="header">
            <h1 className="name">
                <Link className="logo" to="/">Qlio</Link>
            </h1>
            <div className="nav-lin">
                <ul className="nav-ul">
                    <li><Link className="nobrd" to="/">Home</Link></li>
                    {!isLoggedIn && <li>
                        <Link className="brd" to="/signup">Register</Link>
                        <Link className="brd" to="/login">Login</Link>
                    </li>}


                    {isLoggedIn && <li>
                        <Link className="nobrd" to="/queue">My Queues</Link>
                    </li>}
                    {isLoggedIn && <li>
                        <Link className="brd" to="/" onClick={handleLogout}>Logout</Link>
                    </li>}
                </ul>
            </div>
            <div className="icon">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </div>
    )
}

export default Header