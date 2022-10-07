import Home from '../pages/Home';
import Suggest from '../pages/Suggest';
import TopCharts from '../pages/Topcharts';
import NewStuff from '../pages/Newstuff';

const publicRoutes = [
   {
      path: '/',
      component: Home,
   },
   {
      path: '/suggest',
      component: Suggest,
   },
   {
      path: '/top-chart',
      component: TopCharts,
   },
   {
      path: '/new-stuff',
      component: NewStuff,
   },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
