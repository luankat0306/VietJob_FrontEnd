import { HomeLayout, MainLayout } from '@/layouts';
import { ChiTietViecLamPage, Home } from '@/pages';
import TimKiemViecLamPage from '@/pages/viec-lam/tim-kiem';

const routes = [
  {
    path: '/',
    element: <HomeLayout />,
    children: [{ index: true, element: <Home /> }]
  },
  {
    path: 'viec-lam',
    element: <MainLayout />,
    children: [
      {
        path: 'tim-kiem',
        element: <TimKiemViecLamPage />
      },
      {
        path: ':slug',
        element: <ChiTietViecLamPage />
      }
    ]
  }
];
export default routes;
