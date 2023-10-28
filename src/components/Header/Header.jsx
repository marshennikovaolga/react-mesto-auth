import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

export default function Header({userData}) {
    return (
        <header className='header'>
        <img className="header__logo"
            src={logo}
            alt="Лого проекта"
        />
        <div className='header__menu'>
        <p className='header__email'>{userData.email}</p>
         <Link className='header__button' to='/sign-in'>Выйти</Link>
        </div>
    </header>
    )
}