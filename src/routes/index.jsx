import { HomeLayout, MainLayout } from '@/layouts';
import { ProfileLayout } from '@/layouts/ProfileLayout';
import { ChiTietViecLamPage, Home } from '@/pages';
import ThongTinCaNhanPage from '@/pages/thong-tin-ca-nhan';
import DanhSachNhaTuyenDungPage from '@/pages/nha-tuyen-dung/danh-sach';
import ChiTietNhaTuyenDungPage from '@/pages/nha-tuyen-dung/chi-tiet-nha-tuyen-dung';
import TopCongTyPage from '@/pages/nha-tuyen-dung/top-cong-ty';
import TimKiemViecLamPage from '@/pages/viec-lam/tim-kiem';
import ViecLamDaUngTuyenPage from '@/pages/nguoi-tim-ciec/viec-lam-da-ung-tuyen';
import QuanLyCVPage from '@/pages/nguoi-tim-ciec/quan-ly-cv';
import ViecLamDaLuuPage from '@/pages/nguoi-tim-ciec/viec-lam-da-luu';

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
  },
  {
    path: 'nguoi-tim-viec',
    element: <ProfileLayout />,
    children: [
      {
        index: true,
        element: <ThongTinCaNhanPage />
      },
      {
        path: 'viec-lam-da-ung-tuyen',
        element: <ViecLamDaUngTuyenPage />
      },
      {
        path: 'viec-lam-da-luu',
        element: <ViecLamDaLuuPage />
      },
      {
        path: 'quan-ly-cv',
        element: <QuanLyCVPage />
      }
    ]
  },
  {
    path: 'nha-tuyen-dung',
    element: <MainLayout />,
    children: [
      {
        path: 'danh-sach',
        element: <DanhSachNhaTuyenDungPage />
      },
      {
        path: 'top-cong-ty',
        element: <TopCongTyPage />
      },
      {
        path: 'danh-sach/chi-tiet-nha-tuyen-dung',
        element: <ChiTietNhaTuyenDungPage />
      }
    ]
  }
];
export default routes;
