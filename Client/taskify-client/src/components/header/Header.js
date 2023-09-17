import React, { useContext, Fragment } from 'react';
import AccountDropdown from '../account-dropdown';
import NavLink from '../nav-link';
import { Context } from '../../providers/global-context.provider';

const Header = ( ) => {
    const { isLoggedIn, isModalOpen } = useContext(Context);


    return (
      <header className="bg-custom py-4 px-6 border-t-4 mb-3 ml-2 flex justify-between items-center fixed top-0 w-full z-10   rounded-2xl 
       shadow-2xl">
            {/* Header Icon */}
            <div className="flex items-center text-whit">
                <img src="https://cdn-icons-png.flaticon.com/512/1087/1087815.png" alt="Logo" height="50" width="50" />
                <span className=" sm:text-3xl text-4xl  ml-3 font-medium text-gray-900 ">Taskify</span>
            </div>
            {/* Account Dropdown */}
          
                {/* <span className="mr-5">
 					<NavLink to="/help" hoverColor="green-400">
 						HELP
 					</NavLink>
 				</span> */}
 <nav className="flex lg:w-2/5 flex-wrap items-center text-base lg:justify-end md:ml-auto md:mr-5">
        {isLoggedIn ? (
          <AccountDropdown show={!isModalOpen} />
        ) : (
          <Fragment>
            <span className="mr-6">
              <NavLink to="/signin" hoverColor="yellow-500" >
                Giriş Yap
              </NavLink>
            </span>
            <span className="mr-6">
              <NavLink to="/signup" hoverColor="yellow-500">
                Üye Ol
              </NavLink>
            </span>
          </Fragment>
        )}
      </nav>
        </header>
    );
};

export default Header;
