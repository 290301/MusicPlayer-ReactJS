import Sidebar from '../Sidebar';
import Footer from '../Footer';
import api from '../../api';

import classNames from 'classnames/bind';
import style from './DefaultLayout.module.scss';
import { createContext, useState, useCallback } from 'react';

const cx = classNames.bind(style);

export const SongsApp = createContext();

function DefaultLayout({ children }) {
   const lastSong = JSON.parse(localStorage.getItem('lastSong'));

   const [currentSong, setCurrentSong] = useState(lastSong || api[0]);

   const handleSetSong = useCallback((idSong) => {
      const nextSong = api.find((song) => song.id === idSong);
      setCurrentSong(nextSong);
   }, []);

   document.title = `${currentSong.song_name} - ${currentSong.artists_names}`;

   return (
      <SongsApp.Provider value={{ api, currentSong, handleSetSong }}>
         <div className={cx('app')}>
            <div className={cx('wrapper')}>
               <div className={cx('container')}>
                  <Sidebar />
                  <div className={cx('content')}>{children}</div>
               </div>
               <Footer />
            </div>
         </div>
      </SongsApp.Provider>
   );
}

export default DefaultLayout;
