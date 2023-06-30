import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import './Portfolio.css';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import Login from '../../img/login.png';
import Makeup from '../../img/makeupCollection.png';
import Products from '../../img/my_products.png';
import Recipe from '../../img/my_recipe.png';
import LandingPage from '../../img/my_page.png';
import Lotto from '../../img/dailyLotto.png';
import MyLogin from '../../img/loginForm.png';
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


      <Swiper style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        zIndex: '1',
        display: 'flex',
        transitionProperty: 'transform',
        boxSizing: 'content-box',
        marginTop: '3rem'
      }}
        className="portfolio-slider"
        navigation={true}
        loop={true}
        grabCursor={true}
        slidesPerView={3}
        spaceBetween={30}
        loopFillGroupWithBlank={true}
      >
        <SwiperSlide>
          <a href="https://example.com">
            <img style={{ width: '20rem', height: '15rem' }} src={Login} alt="" />
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href="https://649e9d2ec6f2535258604ef2--vermillion-gingersnap-ac8133.netlify.app/">
            <img style={{ width: '20rem', height: '15rem' }} src={Makeup} alt="" />
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href="https://649e9b61e155e64f2f142d57--vermillion-gingersnap-ac8133.netlify.app/products">
            <img style={{ width: '20rem', height: '15rem' }} src={Products} alt="" />
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href="https://649e94d237fb9e4f33c8c6d1--vermillion-gingersnap-ac8133.netlify.app/">
            <img style={{ width: '20rem', height: '15rem' }} src={MyLogin} alt="" />
          </a>
        </SwiperSlide>


        <SwiperSlide>
          <a href="https://649e85a379a9e3459e9eea9f--vermillion-gingersnap-ac8133.netlify.app/">
            <img style={{ width: '20rem', height: '15rem' }} src={LandingPage} alt="" />
          </a>
        </SwiperSlide>


        <SwiperSlide>
          <a href="https://649e97a00f2b6b4f57a54313--vermillion-gingersnap-ac8133.netlify.app/">
            <img style={{ width: '20rem', height: '15rem' }} src={Lotto} alt="" />
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href="https://649e84baa61a5e443fb099be--vermillion-gingersnap-ac8133.netlify.app/">
            <img style={{ width: '20rem', height: '15rem' }} src={Recipe} alt="" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;









