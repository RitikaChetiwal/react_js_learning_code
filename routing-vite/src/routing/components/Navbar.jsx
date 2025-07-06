import { Link } from 'react-router'
import './Navbar.css'

export const Navbar = () => {
    return (
        <div>
            <div className='nav'>
                <Link to='/' >Home</Link>
                <Link to='/about' >About</Link>
                <Link to='/contact' >Contact</Link>
                <Link to='/options' >Options</Link>
                <Link to='/users' >Users</Link>   
            </div>
        </div>
    )
}
