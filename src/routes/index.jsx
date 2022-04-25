import { HomeLayout, MainLayout } from '@/layouts';
import { ProfileLayout } from '@/layouts/ProfileLayout';
import { ChiTietViecLamPage, Home } from '@/pages';
import ThongTinCaNhanPage from '@/pages/thong-tin-ca-nhan';
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
  },
  {
    path: 'thong-tin-ca-nhan',
    element: <ProfileLayout />,
    children: [
      {
        index: true,
        element: <ThongTinCaNhanPage />
      },
      {
        path: ':slug',
        element: <ChiTietViecLamPage />
      }
    ]
  }
];
export default routes;
