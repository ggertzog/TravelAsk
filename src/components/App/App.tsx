import React, { useState } from 'react';
import './App.scss';
import About from '../About/About';
import Reviews from '../Reviews/Reviews';
import ChatList from '../ChatList/ChatList';
import ImagePopup from '../ImagePopup/ImagePopup';

interface ImageData {
  link: string;
  alt: string;
}

const App: React.FC = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState<ImageData | null>(null);

  const openModal = (image: ImageData) => {    
    setCurrentImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentImage(null);
  };

  return (
    <div className='root'>
      <ImagePopup isOpen={isOpen} image={currentImage} onClose={closeModal} />
      <About />
      <Reviews 
        openModal={openModal}
      />
      <ChatList/>
    </div>
  );
}

export default App;