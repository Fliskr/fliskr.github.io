import App from './components/App';
import Suppliers from './components/Suppliers';
import Zerosandones from './components/Zerosandones.js';

const routes = {
    title: 'Dashboard',
    src: '/',
    text: 'Dashboard',
    component: App,
    children: [{
        title: 'Suppliers',
        src: '/suppliers',
        text: 'Supplier',
        component: Suppliers,
        childRoute: {
            title: 'MR selection',
            src: '/supplier/mr',
            text: 'Markering services selection',
            component: 'MRS',
            childRoute: {
                title: 'Supplier reservation',
                src: '/supplier/mr/selectsup',
                text: 'Supplier reservation',
                component: 'ReservSup',
            }
        }
    }, {
        title: 'MR selection',
        src: '/mr',
        text: 'Marketing services selection',
        component: 'MR',
        childRoute: {
            title: 'MR reservation',
            src: '/mr/reservmr',
            text: 'Marketing services reservation',
            component: 'ReservMR'
        }
    },{
        title: 'Zerosandones',
        src:'/zeros',
        text: 'Good game to play around',
        component: Zerosandones
    }]
};


export default routes;
