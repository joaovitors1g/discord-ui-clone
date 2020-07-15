import React, { useRef, useEffect, useState } from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

import ChannelMessage, { Mention } from '../ChannelMessage';

const ChannelData: React.FC = () => {
  const [messages, setMessages] = useState([
    {
      author: {
        username: 'Cheri',
        avatar_url: '',
        isBot: false,
      },
      content: 'Good afternoon',
      date: '06/18/2020',
      hasMentions: false,
    },
    {
      author: {
        username: 'Richard',
        avatar_url: '',
        isBot: true,
      },
      content: (
        <>
          Hello <Mention>@Cheri</Mention>, how are you doing?
        </>
      ),
      date: '06/18/2020',
      hasMentions: true,
    },
  ]);
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages>
        {messages.map((msg) => (
          <ChannelMessage
            author={msg.author.username}
            content={msg.content}
            date={msg.date}
            hasMentions={msg.hasMentions}
            isBot={msg.author.isBot}
          />
        ))}
      </Messages>
      <InputWrapper>
        <Input type='text' placeholder='Conversar em #general' />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
