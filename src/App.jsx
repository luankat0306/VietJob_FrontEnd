import { QueryClient, QueryClientProvider } from 'react-query';
import { useRoutes } from 'react-router-dom';
import './App.css';
import routes from './routes';
import MuiTheme from './theme/MuiTheme';
import './theme/style.css';

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
    <QueryClientProvider client={queryClient}>
      <MuiTheme>{elements}</MuiTheme>
    </QueryClientProvider>
  );
}

export default App;
