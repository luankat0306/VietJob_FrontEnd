import './App.css';
import { MainLayout } from './layout/MainLayout';
import MuiTheme from './theme/MuiTheme';
import './theme/style.css';

function App() {
  return (
    <MuiTheme>
      <MainLayout />
    </MuiTheme>
  );
}

export default App;
