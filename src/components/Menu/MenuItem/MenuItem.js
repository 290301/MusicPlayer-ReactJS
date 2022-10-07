import style from './MenuItem.module.scss';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(style);
function MenuItem({ item }) {
   return (
      <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to={item.to} end>
         <span>{item.icon}</span>
         <span>{item.heading}</span>
      </NavLink>
   );
}

export default MenuItem;
