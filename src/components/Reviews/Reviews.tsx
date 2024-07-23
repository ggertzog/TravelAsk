import React from 'react';
import './Reviews.scss';
import 'swiper/scss';
import 'swiper/scss/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';
import data from '../../utils/data';
import Card from '../Card/Card';

interface ReviewsProps {
    openModal: (image: { link: string; alt: string }) => void;
}

const Reviews: React.FC<ReviewsProps> = ({openModal}) => {

    return (
        <div className='reviews'>
            <h2 className='reviews__title'>Отзывы о Барселоне</h2>
            <div className='reviews__container'>
                <Swiper
                    slidesPerView={2.5}
                    pagination={{
                        clickable: true,
                        el: '.swiper-pagination'
                    }}
                    mousewheel={true}
                    modules={[Pagination, Mousewheel]}
                >
                    {data.map((item) => {
                        return (
                            <SwiperSlide key={item.id}>
                                <Card id={item.id} name={item.name} text={item.text} openModal={openModal} />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
            <div className='reviews__box'>
                <button className='reviews__button'>
                    Все отзывы
                </button>
                <div className='swiper-pagination'></div>
            </div>
        </div>
    )
}

export default Reviews;