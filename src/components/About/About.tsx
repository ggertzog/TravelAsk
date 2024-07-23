import React from 'react';
import './About.scss';

import barsa from '@/images/barsa.jfif';

const About: React.FC = () => {
    return (
        <div className='about'>
            <img className='about__image' src={barsa} alt='Церковь' />
            <div className='about__container'>
                <h1 className='about__title'>Барселона — обзор города</h1>
                <p className='about__text'>Барселона с её золотистыми пляжами, архитектурными шедеврами Гауди, многочисленными фестивалями и гастрономическим разнообразием понравилась мне в первый же день пребывания и стала местом, в котором...</p>
                <a className='about__link' href='https://travelask.ru/spain/barcelona' target='_blank'>Читать дальше</a>
            </div>
        </div>
    )
};

export default About;