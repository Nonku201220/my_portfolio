import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import './Portfolio.css';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import Navbar from '../../img/navbar-login.png';
import Makeup from '../../img/makeupCollection.png';
import Products from '../../img/products.png';
import MusicApp from '../../img/musicapp.png';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import { themeContext } from '../../Context';

SwiperCore.use([Pagination, Navigation]);

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio" id="Portfolio">
      <span style={{ color: darkMode ? 'white' : '' }}> My </span>
      <span>Portfolio</span>


      <Swiper
        className="portfolio-slider"
        navigation={true}
        loop={true}
        grabCursor={true}
        slidesPerView={3}
        spaceBetween={30}
        loopFillGroupWithBlank={true}
      >
        <SwiperSlide>
          <img src={Navbar} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={Makeup} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={Products} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;





   
  


