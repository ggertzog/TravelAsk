import React from 'react';
import './Chat.scss';
import flag from '@/images/flag.svg';
import avatar from '@/images/ava1.png';
import gaga from '@/images/user.jpg';
import star from '@/images/star.svg';
import send from '@/images/send.svg';

interface ChatProps {
    title: string;
    user: string;
    disc: string;
    chatState: {
        messages: { id: number; text: string; date: string; sender: string }[];
        newMessage: string;
    };
    onNewMessageChange: (newMessage: string) => void;
    onSendMessage: (message: string) => void;
    currentUser: 'admin' | 'user';
}


const Chat: React.FC<ChatProps> = ({title, user, disc, chatState, onNewMessageChange, onSendMessage, currentUser}) => {

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
          onSendMessage(chatState.newMessage);
        }
    };

  return (
    <div className='chat'>
        <h2 className='chat__title'>{title}</h2>
        <div className='chat__container'>
            <div className='chat__description'>
                <div className='chat__description-container'>
                    <img className='chat__avatar' src={currentUser === 'admin' ? avatar : gaga} alt="Аватар" />
                    <div className='chat__user'>
                        <h3 className='chat__user-name'>{user}</h3>
                        <p className='chat__user-about'><img src={flag} />{disc}</p>
                    </div>
                </div>
                {currentUser === 'user' && 
                    <div className='chat__raiting-box'>
                        <img className='chat__raiting' src={star} alt="Рейтинг" />
                        <img className='chat__raiting' src={star} alt="Рейтинг" />
                        <img className='chat__raiting' src={star} alt="Рейтинг" />
                        <img className='chat__raiting' src={star} alt="Рейтинг" />
                        <img className='chat__raiting' src={star} alt="Рейтинг" />
                    </div>
                }
            </div>
            <ul className='chat__message-list'>
                {chatState.messages.map((message) => (
                    <li key={message.id} className={`chat__message ${message.sender === currentUser ? 'chat__message_type_owner' : ''}`}>
                        <img className='chat__avatar' src={message.sender === 'admin' ? gaga : avatar} alt="Аватар" />
                        <div className='chat__message-box'>
                            <p className='chat__message-text'>{message.text}</p>
                            <span className='chat__message-date'>{message.date}</span>
                        </div>
                    </li>
                ))}
            </ul>
            <div className='chat__panel'>
                <img className='chat__avatar' src={currentUser === 'admin' ? gaga : avatar} alt="Аватар" />
                <input 
                    className='chat__input' 
                    type="text" 
                    placeholder='Напишите сообщение...'
                    onChange={(e) => onNewMessageChange(e.target.value)}
                    value={chatState.newMessage}
                    onKeyDown={handleKeyDown}
                />
                <button className='chat__submit-button'
                    onClick={() => onSendMessage(chatState.newMessage)}
                >
                    <img className='chat__button-icon' src={send} />
                </button>
            </div>
        </div>
    </div>
  )
}

export default Chat;