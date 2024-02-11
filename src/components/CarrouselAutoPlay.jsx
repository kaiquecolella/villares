import React from 'react';
import './Carrousel.scss';
import './CarrouselAutoPlay.scss';
import { Swiper, SwiperSlide } from 'swiper/react';

function CarrouselAutoPlay({ data }) {
    return (
        <Swiper
            slidesPerView={1}
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}

            className='swiper-slide container'
        >
            {data.map((item) => (
                <SwiperSlide key={item.id}>
                    <div>
                        {item.title && <h3 className='pb-1 pt-4'>{item.title}</h3>}
                        <img
                            src={item.image}
                            alt={`Slide ${item.id}`}
                            className='col-12'
                            />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default CarrouselAutoPlay;
