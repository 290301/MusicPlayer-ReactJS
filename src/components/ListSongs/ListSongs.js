import classNames from 'classnames/bind';
import style from './ListSongs.module.scss';
import Song from './Song';
import { memo } from 'react';
const cx = classNames.bind(style);

function ListSongs({ data, customizeClass }) {
   return (
      <div className={cx('wrapper', customizeClass)}>
         {data.map((item, index) => {
            return <Song key={index} item={item} />;
         })}
      </div>
   );
}
export default memo(ListSongs);
