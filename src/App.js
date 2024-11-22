import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import EcSite from './pages/EcSite';

const App = () => {
    return (
        <Router>
            <div className="App">
                <h1>ポートレートサイト一覧</h1>
                <ul>
                    <li><Link to="/ec-site">アパレルECサイト</Link></li>
                </ul>
                <Routes>
                    <Route path="/ec-site" element={<EcSite />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
