import {
   faChevronRight,
   faChevronLeft,
   faEllipsisVertical,
   faMagnifyingGlass,
   faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import style from './Home.module.scss';
import Artists from '../../components/Artists';
import ListSongs from '../../components/ListSongs';
import TippyHeadless from '@tippyjs/react/headless';

import { SongsApp } from '../../layouts/DefaultLayout/DefaultLayout';
import { useRef, useContext, useState, useEffect } from 'react';
import useDebounce from '../../hooks/useDebounce';
import Song from '../../components/ListSongs/Song';

const cx = classNames.bind(style);
function Home() {
   const { api } = useContext(SongsApp);
   const [inputSearch, setInputSearch] = useState('');
   const [searchResult, setSearchResult] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const debouncedValue = useDebounce(inputSearch, 500);
   const spinnerRef = useRef();
   const listRef = useRef();

   useEffect(() => {
      if (debouncedValue.trim() === '') {
         setSearchResult([]);
         return;
      }
      const dataResult = api.filter((song) => song.song_name.includes(debouncedValue.trim()));
      setSearchResult(dataResult);
      setIsLoading(false);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [debouncedValue]);

   const handleClick = (e) => {
      listRef.current.childNodes.forEach((element) => {
         if (element.classList.contains(cx('active'))) {
            element.classList.remove(cx('active'));
         }
      });
      e.target.classList.add(cx('active'));
   };

   const handleChangeInput = (e) => {
      const searchValue = e.target.value;
      searchValue.length > 0 ? setIsLoading(true) : setIsLoading(false);
      setInputSearch(searchValue);
   };

   return (
      <div className={cx('wrapper')}>
         <header className={cx('header')}>
            <div className={cx('action-left')}>
               <button className={cx('icon-left')}>
                  <FontAwesomeIcon icon={faChevronLeft} />
               </button>
               <button className={cx('icon-right')}>
                  <FontAwesomeIcon icon={faChevronRight} />
               </button>
               <button className={cx('icon-search')}>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
               </button>
               <TippyHeadless
                  interactive
                  visible={inputSearch.length > 0}
                  placement={'bottom-start'}
                  render={(attrs) => (
                     <div className={cx('popper')} tabIndex="-1" {...attrs}>
                        {searchResult.length > 0
                           ? searchResult.map((item, index) => {
                                return <Song key={index} item={item} />;
                             })
                           : isLoading === false && (
                                <div ref={spinnerRef} className={cx('empty-data')}>
                                   No data
                                </div>
                             )}
                     </div>
                  )}
               >
                  <div className={cx('input-search')}>
                     <input value={inputSearch} onChange={handleChangeInput} placeholder="Search Music..." />
                     {isLoading && (
                        <span>
                           <FontAwesomeIcon icon={faSpinner} />
                        </span>
                     )}
                  </div>
               </TippyHeadless>
            </div>
            <div className={cx('action-right')}>
               <span>Login</span>
               <button className={cx('btn-more')}>
                  <FontAwesomeIcon icon={faEllipsisVertical} />
               </button>
            </div>
         </header>

         <div className={cx('content')}>
            <h3 className={cx('title')}>Explore new</h3>
            <div className={cx('list-artist')}>
               <Artists data={api} />
            </div>
            <div className={cx('popular-mood')}>
               <div className={cx('popular')}>
                  <h3 className={cx('title')}>Popular</h3>
                  <ListSongs data={api} />
               </div>
               <div className={cx('mood')}>
                  <h3 className={cx('title')}>Mood</h3>
                  <div ref={listRef} className={cx('mood-grid')}>
                     <div className={cx('grid-item', 'active')} onClick={handleClick}>
                        Ghetto Rap
                     </div>
                     <div className={cx('grid-item')} onClick={handleClick}>
                        Twerk Baby
                     </div>
                     <div className={cx('grid-item')} onClick={handleClick}>
                        Party Breaker
                     </div>
                     <div className={cx('grid-item')} onClick={handleClick}>
                        Valentine Vibe
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Home;
