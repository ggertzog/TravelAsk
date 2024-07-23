import React from 'react';
import './Card.scss';
import ava from '@/images/ava1.png';
import like from '@/images/like.svg';
import data from '@/utils/barselona';

interface CardParams {
    id: number;
    name: string;
    text: string;
    openModal: (image: { link: string; alt: string }) => void;
}

const Card: React.FC<CardParams> = ({name, text, openModal}) => {

  return (
    <div className='card'>
        <div className='card__person'>
            <img className='card__avatar' src={ava} alt="" />
            <h3 className='card__fullname'>{name}</h3>
        </div>
        <div className='card__description'>
            <h3 className='card__title'><span>БАРСЕЛОНА</span> — О городе:</h3>
            <p className='card__text'>{text}</p>
            <div className='card__container'>
                {data.slice(0, 4).map((item, index) => (
                    <div key={item.id} className='card__image-wrapper' onClick={() => {openModal(item)}}>
                        <img className='card__image' src={item.link} alt={item.alt}/>
                        {index === 3 && data.length > 4 && (
                            <div className='card__image-overlay'>
                                +{data.length - 4}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
        <div className='card__info'>
            <div className='card__info-box'>
                <p>около 1 года назад</p>
                <p>. 9 комментариев</p>
            </div>
            <div className='card__info-box'>
                <img className='card__like' src={like} alt="" />
                <p>9</p>
            </div>
        </div>
    </div>
  )
}

export default Card;