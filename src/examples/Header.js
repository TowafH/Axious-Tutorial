import {Link} from 'react-router-dom'

const Header = () => {

    return(
        <header>
            <div className='navBar'>
                <Link to='/Title' className='links'>Home</Link>
                <Link to='/FirstRequest' className='links'>GET</Link>
                <Link to='/Headers' className='links'>Headers</Link>
            </div>
        </header>
    )
}

export default Header