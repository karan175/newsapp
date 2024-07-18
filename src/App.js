
import './App.css';
import Navbar from './components/Navbar.js';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
// from react website
// $ npm install react-router-dom@6

// Googled
// Uninstall the current version of react-router-dom
// npm uninstall -s react-router-dom or npm un -s react-router-dom
// Install a specific v5 version
// npm install -s react-router-dom@5.3.0 or npm i -s react-router-dom@5.3.0

const App=(props)=> {
  const pagesize = 8;
  const apikey=process.env.REACT_APP_NEWS_API
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<News key="General1" PageSize={pagesize} apikey={apikey}  country="in" category="General" />} />
            <Route path="/Business" element={<News key="Business" PageSize={pagesize} apikey={apikey}  country="in" category="Business" />} />
            <Route path="/Entertainment" element={<News key="Entertainment" PageSize={pagesize} apikey={apikey}  country="in" category="Entertainment" />} />
            <Route path="/General" element={<News key="General" PageSize={pagesize} apikey={apikey}  country="in" category="General" />} />
            <Route path="/Health" element={<News Key="Health" PageSize={pagesize} apikey={apikey}  country="in" category="Health" />} />
            <Route path="/Science" element={<News key="Science" PageSize={pagesize} apikey={apikey}  country="in" category="Science" />} />
            <Route path="/Sports" element={<News key="Sports" PageSize={pagesize} apikey={apikey}  country="in" category="Sports" />} />
            <Route path="/Technology" element={<News PageSize={pagesize} apikey={apikey}  country="us" category="Technology" />} />
          </Routes>
        </Router>
      </div>
    )
}
export default App
