import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { GrLogout } from 'react-icons/gr';
import { useNavigate} from 'react-router-dom';
import Cookies from 'js-cookie';

import DataContext from '../context/data';

export default function Navbar() {
  const { setIsAuth } = useContext(DataContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    Cookies.remove('jwt');
    setIsAuth(false);
    navigate('/');
  };
  return (
    <nav className='navbar navbar-expand navbar-light shadow '>
      <div className='container-fluid flex-row'>
        <div className='collapse navbar-collapse col-2' id='navbarNavAltMarkup'>
          <div className='navbar-brand fs-4 ms-2 me-3' href='#'>
            Welcome
          </div>
          <div className='navbar-nav w-100'>
            <Link to='/profile' className='nav-link fs-5  mx-2 rounded-3'>
              User Profile
            </Link>
            <Link to='/projects' className='nav-link fs-5  mx-2 rounded-3'>
              Projects
            </Link>

            <div className='dropdown my-auto' style={{ marginLeft: '70%' }}>
              <Link
                to='#'
                className='d-flex align-items-center text-white text-decoration-none dropdown-toggle'
                id='dropdownUser1'
                data-bs-toggle='dropdown'
                aria-expanded='false'>
                <img
                  src='https://github.com/mdo.png'
                  alt=''
                  width='40'
                  height='40'
                  className='rounded-circle me-2'
                />
                <strong>mdo</strong>
              </Link>

              <ul
                className='dropdown-menu dropdown-menu-white text-small shadow me-0'
                aria-labelledby='dropdownUser1'>
                <li>
                  <Link className='dropdown-item' to='/projects/create'>
                    New project...
                  </Link>
                </li>
                <li>
                  <Link className='dropdown-item' to='#'>
                    Settings
                  </Link>
                </li>
                <li>
                  <Link className='dropdown-item' to='#'>
                    Profile
                  </Link>
                </li>
                <li>
                  <hr className='dropdown-divider' />
                </li>
                <li onClick={handleLogout}>
                  <div className='dropdown-item' role='button'>
                    <GrLogout className='text-white me-1' />
                    Sign out
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
