import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserRowProps {
  nickname: string;
  isBot?: boolean;
  status?: 'online' | 'busy' | 'away' | 'offline';
}

const UserRow: React.FC<UserRowProps> = ({
  nickname,
  isBot,
  status = 'online',
}) => {
  return (
    <User>
      <div className='avatar'>
        <Avatar className={isBot ? 'bot' : ''} />
        <span className={['status', status].join(' ')}></span>
      </div>

      <div className='content'>
        <div className='nameDecorators'>
          <strong>{nickname}</strong>
          {isBot && <span>Bot</span>}
        </div>
        <div className='subtext'>
          <div className='activity'>
            <div className='activityText'>
              <p>Playing something!</p>
            </div>
          </div>
        </div>
      </div>
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponivel - 2</Role>
      <UserRow nickname='Cheri' status='busy' />
      <UserRow nickname='Richard' status='online' />

      <Role>Offline - 1</Role>
      <UserRow nickname='AwesomeBot' isBot />
    </Container>
  );
};

export default UserList;
