import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import './Portfolio.css';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import Login from '../../img/login.png';
import Makeup from '../../img/makeupCollection.png';
import Products from '../../img/my_products.png';
/* import Recipe from '../../img/recipe.png'; */
import LandingPage from '../../img/my_page.png';
import Lotto from '../../img/dailyLotto.png';
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


     <Swiper style={{position: 'relative',
width: '100%',
height: '100%',
zIndex: '1',
display: 'flex',
transitionProperty: 'transform',
boxSizing: 'content-box',
marginTop: '3rem'}}
        className="portfolio-slider"
        navigation={true}
        loop={true}
        grabCursor={true}
        slidesPerView={3}
        spaceBetween={30}
        loopFillGroupWithBlank={true}
      >
        <SwiperSlide>
          <img style= {{width: '20rem', height: '15rem'}} src={Login} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img style= {{width: '20rem', height: '15rem'}} src={Makeup} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img style= {{width: '20rem', height: '15rem'}} src={Products} alt="" />
        </SwiperSlide>

       {/*  <SwiperSlide>
          <img style= {{width: '20rem', height: '15rem'}} src={Recipe} alt="" />
          </SwiperSlide> */}

          <SwiperSlide>
          <img style= {{width: '20rem', height: '15rem'}} src={LandingPage} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img style= {{width: '20rem', height: '15rem'}}src={Lotto} alt="" />
        </SwiperSlide>
      </Swiper> 
    </div>
  );
};

export default Portfolio;





   
  


