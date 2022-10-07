import style from './Artists.module.scss';
import classNames from 'classnames/bind';
import { memo } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import SingleArtist from './SingleArtist';

const cx = classNames.bind(style);
function Artists({ data }) {
   return (
      <div className={cx('wrapper')}>
         <Swiper className={cx('wrapper-slider')} slidesPerView={5} spaceBetween={30}>
            {data.map((item, index) => {
               return (
                  <SwiperSlide key={index} className={cx('slide-item')}>
                     <SingleArtist data={item} />
                  </SwiperSlide>
               );
            })}
         </Swiper>
      </div>
   );
}
export default memo(Artists);
