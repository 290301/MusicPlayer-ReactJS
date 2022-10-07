import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useState, useContext, useEffect, useRef } from 'react';
import { SongsApp } from '../../../layouts/DefaultLayout/DefaultLayout';
import style from '../ListSongs.module.scss';
import TippyHeadless from '@tippyjs/react/headless';

const cx = classNames.bind(style);
function Song({ item }) {
   const { handleSetSong, currentSong } = useContext(SongsApp);
   const [activeSong, setActiveSong] = useState(0);
   const handleActiveSong = (idSong) => {
      handleSetSong(idSong);
      setActiveSong(idSong);
   };
   const songActiveRef = useRef();

   const handelClickMore = (e) => {
      e.stopPropagation();
   };

   useEffect(() => {
      if (songActiveRef.current.id === currentSong.id) {
         songActiveRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      setActiveSong(currentSong.id);
   }, [currentSong]);

   return (
      <div
         id={item.id}
         ref={songActiveRef}
         className={cx('wrapper-song', activeSong === item.id && 'active')}
         onClick={() => handleActiveSong(item.id)}
      >
         <img className={cx('song-image')} src={item.thumbnail} alt={item.name} />
         <p className={cx('song-name')}>{item.song_name}</p>
         <TippyHeadless
            interactive
            placement={'bottom-end'}
            render={(attrs) => (
               <div className={cx('popper')} tabIndex="-1" {...attrs}>
                  My tippy box
               </div>
            )}
         >
            <button className={cx('btn-more')} onClick={handelClickMore}>
               <FontAwesomeIcon icon={faEllipsis} />
            </button>
         </TippyHeadless>
      </div>
   );
}

export default Song;
