import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import Feed from './components/feed/Feed';

const App = () => {
  return (
    <div className="container">
      <Sidebar />

      <div className='home'>
        <Topbar />
        <Feed />
      </div>
    </div>
  );
}

export default App;
