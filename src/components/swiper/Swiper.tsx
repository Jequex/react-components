import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Swiper.module.css';
import { FaLessThan, FaGreaterThan } from 'react-icons/fa6';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { JSX, useRef, useState } from 'react';
import styled from 'styled-components';
import { Swiper as SwiperType } from 'swiper/types';

interface Props {
  children: JSX.Element[]
}

const SwiperContainer = styled.div({
  width: '100%',
  maxWidth: '1440px'
})

const Button = styled.button({
  border: 'none',
  width: '48px',
  height: '48px',
  borderRadius: '50%',
  margin: '10px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})

const SwiperComponent = ({children}: Props) => {
  const swiperRef = useRef<SwiperType>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  };
  
  return <SwiperContainer>
    <Swiper
      onSwiper={(swiper: SwiperType) => (swiperRef.current = swiper)}
      onSlideChange={handleSlideChange}
      slidesPerView={'auto'}
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      rewind={true}
      breakpoints={{
        320: {
        slidesPerView: 1,
        spaceBetween: 30
        },
        720: {
        slidesPerView: 3,
        spaceBetween: 40
        },
        1024: {
        slidesPerView: 3,
        spaceBetween: 40
        },
        1440: {
        slidesPerView: 3,
        spaceBetween: 40
        }
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {children.map(child => 
        <SwiperSlide>{child}</SwiperSlide>
      )}
    </Swiper>
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
      <Button onClick={handlePrev}>
        <FaLessThan />
      </Button>
      <Button onClick={handleNext}>
        <FaGreaterThan />
      </Button>
    </div>
  </SwiperContainer>
}

export default SwiperComponent;