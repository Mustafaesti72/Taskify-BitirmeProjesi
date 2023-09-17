import React, { useContext, useState } from 'react';
import { AccountDropdownContainer } from './index.styles';

import { Context } from '../../providers/global-context.provider';
import AccountDropdownMenu from '../account-dropdown-menu';
import Avatar from '../avatar';

const AccountDropdown = ({ show }) => {
  const [avatarIsClicked, setAvatarIsClicked] = useState(false);
  const { user } = useContext(Context);

  const handleAvatarClick = () => {
    setAvatarIsClicked(!avatarIsClicked);
  };

  return (
    <AccountDropdownContainer visible={show}>
      <Avatar bgColor="orange" handleClick={handleAvatarClick} user={user} />
      {avatarIsClicked && <AccountDropdownMenu />}
    </AccountDropdownContainer>
  );
};

export default AccountDropdown;
