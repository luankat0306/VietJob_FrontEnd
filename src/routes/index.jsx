import { HomeLayout, MainLayout } from '@/layouts';
import { ChiTietViecLamPage, Home } from '@/pages';
import DanhSachNhaTuyenDungPage from '@/pages/nha-tuyen-dung/danh-sach';
import ChiTietNhaTuyenDungPage from '@/pages/nha-tuyen-dung/chi-tiet-nha-tuyen-dung';
import TopCongTyPage from '@/pages/nha-tuyen-dung/top-cong-ty';
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
    path: 'nha-tuyen-dung',
    element: <MainLayout />,
    children: [
      {
        path: 'danh-sach',
        element: <DanhSachNhaTuyenDungPage/>
      },
      {
        path: 'top-cong-ty',
        element: <TopCongTyPage/>
      },
      {
        path: 'danh-sach/chi-tiet-nha-tuyen-dung',
        element: <ChiTietNhaTuyenDungPage/>
      },
    ]
  }
];
export default routes;
