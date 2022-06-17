import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'


export default function Navbar() {
    const { user } = useAuthContext()
    const { logout } = useLogout()

  return (
    <nav className={styles.navbar}>
        <ul>
            <li className={styles.title}>myNaira</li>

            {!user && ( 
              <>
              <li><Link to='/login'>Login</Link></li>
              <li><Link to='/signup'>Signup</Link></li>
              </>
            )}

            {user && (
              <>
                <p>Hello, {user.displayName}</p>
                <li>
                    <button onClick={logout} className="btn">Logout</button>
                </li>
              </>
            )}
        </ul>
    </nav>
  )
}
