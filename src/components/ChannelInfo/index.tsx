import React from 'react';

import {
  Container,
  HashtagIcon,
  Title,
  Separator,
  Description,
} from './styles';

const ChannelInfo: React.FC = () => {
  return (
    <Container>
      <HashtagIcon />
      <Title>general</Title>

      <Separator />
      <Description>General</Description>
    </Container>
  );
};

export default ChannelInfo;
