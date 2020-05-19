
import HomePage from '../pages/home.f7.html';
import AboutPage from '../pages/about.f7.html';
import NotFoundPage from '../pages/404.f7.html';
import BlankPage from '../pages/blank.page.f7.html';

var routes = [
  {
    path: '/',
    component: HomePage,
    },
  {
    path: '/blankpage/',
    component: BlankPage,
    },
  {
    path: '/about/',
    component: AboutPage,
    },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;