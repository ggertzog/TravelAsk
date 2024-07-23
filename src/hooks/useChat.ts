import { useState, useEffect } from 'react';

export interface Message {
  id: number;
  text: string;
  date: string;
  sender: 'admin' | 'user';
}

interface ChatState {
  messages: Message[];
  newMessage: string;
}

const useChat = () => {
  
  const [chatWithAdmin, setChatWithAdmin] = useState<ChatState>({
    messages: [],
    newMessage: '',
  });

  const [chatWithUser, setChatWithUser] = useState<ChatState>({
    messages: [],
    newMessage: '',
  });

  useEffect(() => {
    const initialMessages: Message[] = [
      { id: 1, 
        text: 'Из достопримечательностей могу предложить обратить внимание на вулкан Майон, путешествие запомнится вам надолго хотя бы из-за невероятной сложности подъема на него. Поверьте, это стоит того; также хотелf бы отметить очень важную область исследования ', 
        date: 'Вчера в 17:45', 
        sender: 'admin' 
      },
      { id: 2, 
        text: 'Что из себя представляет вулкан? Просто хочу убедиться, что готова к такому путешествию.', 
        date: 'Вчера в 18:45', 
        sender: 'user' 
      },
    ];

    setChatWithAdmin({ messages: initialMessages, newMessage: '' });
    setChatWithUser({ messages: initialMessages, newMessage: '' });
  }, []);

  const getCurrentTime = (): string => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  const handleSendMessage = (chat: 'admin' | 'user', message: string) => {

    const newMessage: Message = {
      id: Date.now(),
      text: message,
      date: getCurrentTime(),
      sender: chat,
    };

    if (chat === 'admin') {
      setChatWithAdmin((prevChat) => ({
        messages: [...prevChat.messages, newMessage],
        newMessage: '',
      }));
      setChatWithUser((prevChat) => ({
        messages: [...prevChat.messages, newMessage],
        newMessage: '',
      }));
    } else {
      setChatWithUser((prevChat) => ({
        messages: [...prevChat.messages, newMessage],
        newMessage: '',
      }));
      setChatWithAdmin((prevChat) => ({
        messages: [...prevChat.messages, newMessage],
        newMessage: '',
      }));
    }
  };

  return {
    chatWithAdmin,
    chatWithUser,
    setChatWithAdmin,
    setChatWithUser,
    handleSendMessage,
  };
};

export default useChat;