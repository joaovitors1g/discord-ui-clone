import React from 'react';

import {
  Container,
  Profile,
  Avatar,
  UserData,
  Icons,
  MicIcon,
  HeadphoneIcon,
  SettingsIcon,
} from './styles';

const UserInfo: React.FC = () => {
  return (
    <Container>
      <Profile>
        <div className='user-status'>
          <Avatar
            src='https://api.adorable.io/avatars/285/Cheri Palmer@adorable.io'
            alt='Cheri'
          />
          <span className='busy'></span>
        </div>
        <UserData>
          <strong>Cheri</strong>
          <span>#3306</span>
        </UserData>
      </Profile>

      <Icons>
        <MicIcon />
        <HeadphoneIcon />
        <SettingsIcon />
      </Icons>
    </Container>
  );
};

export default UserInfo;
