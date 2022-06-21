import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import authApi from '../../api/authApi';
import { authActions } from '../../redux/authSlice';

const useAuth = () => {
  const { mutate: mutateLogin, error: errorLogin } = useMutation(authApi.login);
  const { mutate: mutateSignup, error: errorSignup } = useMutation(authApi.signup);
  const { mutate: mutateLogout, error: errorLogout } = useMutation(authApi.logout);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const login = async ({ email, password, role }) => {
    mutateLogin(
      { email, password },
      {
        onSuccess: (res) => {
          dispatch(authActions.login(res));
          if (role === 3) {
            navigate('/admin/thong-ke');
            return;
          }

          navigate('/');
        }
      }
    );
  };

  const signup = async ({ email, password, role }) => {
    mutateSignup(
      { email, password, role: role ? 1 : 0 },
      {
        onSuccess: (data) => {
          navigate('/dang-nhap');
        },
        onError: (error) => {
          return error.message;
        }
      }
    );
  };

  const logout = async () => {
    mutateLogout(undefined, {
      onSuccess: () => {
        dispatch(authActions.logout());
        navigate('/');
      },
      onError: (error) => {
        return error.message;
      }
    });
  };

  return {
    login,
    signup,
    logout,
    errorLogin,
    errorSignup,
    errorLogout
  };
};

export default useAuth;
