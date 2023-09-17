import React from 'react';
import NavLink from '../nav-link';
import homeIcon from '../../assets/icons8-home.svg';
import projectIcon from '../../assets/icons8-project-100.png';
import mailIcon from '../../assets/icons8-mail-100.png'
import { Link } from 'react-router-dom';

const SideNav = () => {
  return (
    <aside className="bg-custom w-1/6 mt-24 mx-2 h-screen p-2 fixed left-0 shadow-2xl rounded-2xl">
<nav>
  <ul className='px-4'>
    <li className='m-2 hover:container px-4 mt-6 shadow-md rounded-xl flex items-center'>
      <img src={homeIcon} alt="Home Icon" className="w-16 h-16 mr-2" />
      <NavLink to="/">Ana Ekran</NavLink>
    </li>
    <li className='m-2 hover:container px-4 shadow-md rounded-xl flex items-center'>
    <img src={projectIcon} alt="Prj Icon" className="w-16 h-16 mr-2" />
    <a href="http://localhost:3000/user/projects">
      Projeler
    </a>
    </li>
    <li className='m-2 hover:container px-4 shadow-md rounded-xl flex items-center'>
    <img src={mailIcon} alt="mail Icon" className="w-16 h-16 mr-2" />
    <a href="http://localhost:3000/user/invitations">
      Davetler
    </a>
    </li>
  </ul>
</nav>    
    </aside>
  );
};

export default SideNav;
