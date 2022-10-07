import style from './SingleArtist.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);
function SingleArtist({ data, small }) {
   return (
      <div className={cx('artist', small ? 'small' : '')}>
         <div className={cx('artist-img')}>
            <img src={data.thumbnail} alt={data.name} />
         </div>
         <div className={cx('artist-info')}>
            <h3 className={cx('artist-name-artists')}>{data.artists_names}</h3>
            <p className={cx('artist-song-name')}>{data.song_name}</p>
         </div>
      </div>
   );
}

export default SingleArtist;
