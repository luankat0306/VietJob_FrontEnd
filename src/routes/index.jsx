import { HomeLayout, MainLayout } from '@/layouts';
import { ProfileLayout } from '@/layouts/ProfileLayout';

import ThongTinCaNhanPage from '@/pages/thong-tin-ca-nhan';
import ThongTinCaNhanNTDPage from '@/pages/nha-tuyen-dung/thong-tin-ca-nhan';
import DanhSachNhaTuyenDungPage from '@/pages/nha-tuyen-dung/danh-sach';
import ChiTietNhaTuyenDungPage from '@/pages/nha-tuyen-dung/chi-tiet-nha-tuyen-dung';
import TopCongTyPage from '@/pages/nha-tuyen-dung/top-cong-ty';
import TimKiemViecLamPage from '@/pages/viec-lam/tim-kiem';
import QuanLyBaiDangPage from '@/pages/nha-tuyen-dung/quan-ly-bai-dang';
import KiemDuyetHoSoPage from '@/pages/nha-tuyen-dung/kiem-duyet-ho-so';
import ViecLamDaUngTuyenPage from '@/pages/nguoi-tim-ciec/viec-lam-da-ung-tuyen';
import QuanLyCVPage from '@/pages/nguoi-tim-ciec/quan-ly-cv';
import ViecLamDaLuuPage from '@/pages/nguoi-tim-ciec/viec-lam-da-luu';
import DangNhapPage from '@/pages/dang-nhap';
import Home from '@/pages/trang-chu';
import ChiTietViecLamPage from '@/pages/viec-lam/[slug]';
import { useSelector } from 'react-redux';
import { selectIsLogin, selectUserInfo } from '@/redux/authSlice';
import { Navigate } from 'react-router-dom';
import ThongKePage from '@/pages/nha-tuyen-dung/thong-ke';
import DangNhapAdminPage from '@/pages/admin/dang-nhap';
import AdminLayout from '@/layouts/AdminLayout';
import ThongKeAdminPage from '@/pages/admin/thong-ke';
import QuanLyTinhThanhPage from '@/pages/admin/quan-ly-tinh-thanh';
import QuanLyNganhNghePage from '@/pages/admin/quan-ly-nganh-nghe';
import QuanLyKyNangPage from '@/pages/admin/quan-ly-ky-nang';

const AuthCandidate = ({ children }) => {
  const info = useSelector(selectUserInfo);
  const isLogin = useSelector(selectIsLogin);
  if (!info?.role === 0 && !isLogin) return <Navigate to="/dang-nhap" replace />;
  return children;
};
const routes = [
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'dang-nhap',
        element: <DangNhapPage />
      },
      {
        path: 'dang-nhap-admin',
        element: <DangNhapAdminPage />
      },
      {
        path: 'dang-ky',
        element: <DangNhapPage />
      }
    ]
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      { index: true, element: <Navigate to="/admin/thong-ke" /> },
      {
        path: 'thong-ke',
        element: <ThongKeAdminPage />
      },
      {
        path: 'quan-ly-tinh-thanh',
        element: <QuanLyTinhThanhPage />
      },
      {
        path: 'quan-ly-nganh-nghe',
        element: <QuanLyNganhNghePage />
      },
      {
        path: 'quan-ly-ky-nang',
        element: <QuanLyKyNangPage />
      }
    ]
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
    path: 'nguoi-tim-viec',
    element: (
      <AuthCandidate>
        <ProfileLayout />
      </AuthCandidate>
    ),
    children: [
      {
        index: true,
        element: <ThongTinCaNhanPage />
      },
      {
        path: 'thong-tin-ca-nhan',
        element: <ThongTinCaNhanPage />
      },
      {
        path: 'thong-tin-ca-nhan/:id',
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
    element: <MainLayout hasSearchBar={false} />,
    children: [
      {
        path: 'thong-tin-ca-nhan',
        element: <ThongTinCaNhanNTDPage />
      },
      {
        path: 'danh-sach',
        element: <DanhSachNhaTuyenDungPage />
      },
      {
        path: 'top-cong-ty',
        element: <TopCongTyPage />
      },
      {
        path: 'chi-tiet-nha-tuyen-dung/:id',
        element: <ChiTietNhaTuyenDungPage />
      },
      {
        path: 'quan-ly-bai-dang',
        element: <QuanLyBaiDangPage />
      },
      {
        path: 'kiem-duyet-ho-so/:id',
        element: <KiemDuyetHoSoPage />
      },
      {
        path: 'thong-ke',
        element: <ThongKePage />
      }
    ]
  }
];
export default routes;
