import classNames from 'classnames/bind';
import style from './Sidebar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faChartBar,
   faCircleDot,
   faHeart,
   faHome,
   faLayerGroup,
   faList,
   faMusic,
   faSignal,
} from '@fortawesome/free-solid-svg-icons';

import Menu from '../../components/Menu';
import { memo } from 'react';
const cx = classNames.bind(style);

const appItems = [
   {
      title: 'App',
      items: [
         {
            icon: <FontAwesomeIcon icon={faHome} />,
            heading: 'Explore',
            to: '/',
         },
         {
            icon: <FontAwesomeIcon icon={faChartBar} />,
            heading: 'Suggest',
            to: '/suggest',
         },
         {
            icon: <FontAwesomeIcon icon={faSignal} />,
            heading: 'Top Charts',
            to: '/top-chart',
         },
         {
            icon: <FontAwesomeIcon icon={faMusic} />,
            heading: 'New stuff',
            to: '/new-stuff',
         },
      ],
   },
];

const personalItem = [
   {
      title: 'Personal',
      items: [
         {
            icon: <FontAwesomeIcon icon={faHeart} />,
            heading: 'Favorite',
            to: '/favorite',
         },
         {
            icon: <FontAwesomeIcon icon={faCircleDot} />,
            heading: 'Albums',
            to: '/albums',
         },
         {
            icon: <FontAwesomeIcon icon={faList} />,
            heading: 'Playlists',
            to: '/playlists',
         },
         {
            icon: <FontAwesomeIcon icon={faLayerGroup} />,
            heading: 'Gender',
            to: '/gender',
         },
      ],
   },
];

function Sidebar() {
   return (
      <div className={cx('wrapper')}>
         <Menu data={appItems} />
         <div className="my-6"></div>
         <Menu data={personalItem} />
      </div>
   );
}

export default memo(Sidebar);
