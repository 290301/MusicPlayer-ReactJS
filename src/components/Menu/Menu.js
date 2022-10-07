import style from './Menu.module.scss';
import classNames from 'classnames/bind';

import MenuItem from './MenuItem';
const cx = classNames.bind(style);
function Menu({ data }) {
   return (
      <nav className={cx('wrapper')}>
         <h3 className={cx('heading')}>{data[0].title}</h3>
         {data[0].items.map((item, index) => {
            return <MenuItem key={index} item={item} />;
         })}
      </nav>
   );
}

export default Menu;
