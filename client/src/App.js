import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import Feed from './components/feed/Feed';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  const getUser = async () => {
    setLoading(true);

    try {
      const response = await axios.get("/api/user/1");
      setUser(response.data);
    } catch (e) {
      console.log(e);
    };
  };

  useEffect(() => {
    getUser();
  }, []);

  console.log(user);
  return (
    <div className="container">
      <Sidebar loading={loading} />

      <div className='home'>
        <Topbar loading={loading} user={user} />
        <Feed />
      </div>
    </div>
  );
}

export default App;
