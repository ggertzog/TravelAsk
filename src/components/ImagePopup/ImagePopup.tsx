import React from 'react';
import './ImagePopup.scss';
import closeIcon from '@/images/close.svg';

interface ModalProps {
  isOpen: boolean;
  image: { link: string; alt: string } | null;
  onClose: () => void;
}

const ImagePopup: React.FC<ModalProps> = ({ isOpen, image, onClose }) => {
  return (
    <div className={`popup popup-image ${isOpen ? 'popup_opened' : ''}`}>
      <figure className='popup-image__figure'>
        <div className='popup-image__container'>
          {image && (
            <img src={image.link} alt={image.alt} className='popup-image__element' />
          )}
          <button className='popup-image__button-close' type='button' onClick={onClose}>
            <img src={closeIcon} alt='закрыть' className='popup-image__button-image' />
          </button>
        </div>  
      </figure>
    </div>
  );
};

export default ImagePopup;
