import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = ({link1, link2 }) => {
    return (
        <div className='menu'>
            <div className='logo'>
                <img src='/Neur.gif' alt='logo animada' className='logo-gif' />
            </div>
            <div className='menu-link'>
                <ul>
                    <li><Link to={`/${link1.path}`}>{link1.text}</Link></li>
                    <li><Link to={`/${link2.path}`}>{link2.text}</Link></li>

                </ul>
            </div>
        </div>
    )
}

export default NavBar
