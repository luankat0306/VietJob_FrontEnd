import { useRoutes } from 'react-router-dom';
import './App.css';
import routes from './routes';
import MuiTheme from './theme/MuiTheme';
import './theme/style.css';

function App() {
  const elements = useRoutes(routes);
  return <MuiTheme>{elements}</MuiTheme>;
}

export default App;
