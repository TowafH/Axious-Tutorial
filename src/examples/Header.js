import {Link} from 'react-router-dom'

const Header = () => {

    return(
        <header>
            <div className='navBar'>
                <Link to='/Title' className='links'>Home</Link>
                <Link to='/FirstRequest' className='links'>GET</Link>
                <Link to='/Headers' className='links'>Headers</Link>
                <Link to='/PostRequest' className='links'>POST</Link>
                <Link to='/GlobalInstance' className='links'>GLOBAL</Link>
                <Link to='/CustomInstance' className='links'>CUSTOM</Link>
                <Link to='/Interceptors' className='links'>Interceptors</Link>
            </div>
        </header>
    )
}

export default Header