import React from 'react';

import { Container, Category, AddCategoryIcon } from './styles';

import ChannelButton from '../ChannelButton';

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName='general' />
      <ChannelButton channelName='stream' />
      <ChannelButton channelName='rules' />
      <ChannelButton channelName='images' />
    </Container>
  );
};

export default ChannelList;
