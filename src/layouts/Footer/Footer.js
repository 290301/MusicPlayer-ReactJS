import classNames from 'classnames/bind';
import style from './Footer.module.scss';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import { useRef, useContext, memo } from 'react';
import { SongsApp } from '../../layouts/DefaultLayout/DefaultLayout';

const cx = classNames.bind(style);

function Footer() {
   const { currentSong, api, handleSetSong } = useContext(SongsApp);
   var isPlaying = false;
   var indexCurrentSong = api.indexOf(currentSong);

   const audioRef = useRef();
   window.addEventListener('keyup', (e) => {
      if (e.code === 'Space') {
         isPlaying = !isPlaying;
         isPlaying ? audioRef.current.audio.current.play() : audioRef.current.audio.current.pause();
      }
   });

   const handleLastSong = () => {
      if (indexCurrentSong === api.length - 1) {
         indexCurrentSong = 0;
      }
   };

   const handleClickNext = () => {
      handleLastSong();
      const nextSong = api[indexCurrentSong + 1];
      handleSetSong(nextSong.id);
   };

   const handleClickPrevious = () => {
      if (indexCurrentSong === 0) {
         indexCurrentSong = api.length - 1;
      }
      const previousSong = api[indexCurrentSong - 1];
      handleSetSong(previousSong.id);
   };

   const handleEndSong = () => {
      handleLastSong();
      const nextSong = api[indexCurrentSong + 1];
      handleSetSong(nextSong.id);
   };

   const handlePlaying = (e) => {
      localStorage.setItem('lastSong', JSON.stringify(currentSong));
   };

   return (
      <div className={cx('wrapper')}>
         <div className={cx('actionsSong')}></div>
         <div className={cx('infoSong')}>
            <div className={cx('progressSong')}>
               {/* Css AudioPlayer bên file index.css */}
               <AudioPlayer
                  ref={audioRef}
                  src={currentSong.source}
                  showSkipControls={true}
                  showJumpControls={false}
                  onClickNext={handleClickNext}
                  onClickPrevious={handleClickPrevious}
                  onEnded={handleEndSong}
                  onPlaying={handlePlaying}
               />
            </div>
         </div>
      </div>
   );
}

export default memo(Footer);
