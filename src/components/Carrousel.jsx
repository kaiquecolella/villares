import React from 'react';
import './Carrousel.scss';
import { Swiper, SwiperSlide } from 'swiper/react';

function Carrousel({ data }) {
    return (
        <Swiper
            slidesPerView={1}
            navigation
            loop={true}
            pagination={{ clickable: true }}
            className='swiper-slide container'
        >
            {data.map((item) => (
                <SwiperSlide key={item.id}>
                    <img
                        src={item.image}
                        alt={`Slide ${item.id}`}
                        className='p-5 col-10 col-md-7 col-lg-5'
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default Carrousel;
