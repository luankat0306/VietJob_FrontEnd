import { QueryClient, QueryClientProvider } from 'react-query';
import { useRoutes } from 'react-router-dom';
import './App.css';
import routes from './routes';
import MuiTheme from './theme/MuiTheme';
import './theme/style.css';
import moment from 'moment/min/moment-with-locales';
import { Slide } from '@mui/material';
import { SnackbarProvider } from 'notistack';
moment.locale('vi');
function App() {
  const elements = useRoutes(routes);
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: 1000,
        retry: false
      }
    }
  });
  return (
    <SnackbarProvider
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      maxSnack={3}
      TransitionComponent={Slide}
    >
      <QueryClientProvider client={queryClient}>
        <MuiTheme>{elements}</MuiTheme>
      </QueryClientProvider>
    </SnackbarProvider>
  );
}

export default App;
