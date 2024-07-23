import React from 'react';
import './ChatList.scss';
import useChat from '@/hooks/useChat';
import Chat from '../Chat/Chat';

const ChatList: React.FC = () => {
  const {
    chatWithAdmin,
    chatWithUser,
    setChatWithAdmin,
    setChatWithUser,
    handleSendMessage,
  } = useChat();

  return (
    <div className='chat-list'>
      <Chat 
        title='Чат с пользователем'
        user='Наталия Полянская'
        disc='Гид по Баварии, фотограф'
        currentUser='user'
        chatState={chatWithUser} 
        onNewMessageChange={(newMessage) => {
          setChatWithUser((prevChat) => ({ ...prevChat, newMessage}))
        }}
        onSendMessage={(message) => handleSendMessage('user', message)}
      />
      <Chat 
        title='Чат с администратором'
        user='Администратор'
        disc='TravelAsk'
        currentUser='admin'
        chatState={chatWithAdmin} 
        onNewMessageChange={(newMessage) => {
          setChatWithAdmin((prevChat) => ({ ...prevChat, newMessage}))
        }}
        onSendMessage={(message) => handleSendMessage('admin', message)}
      />
    </div>
  );
};

export default ChatList;