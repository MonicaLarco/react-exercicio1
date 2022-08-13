import Home from './components/Home';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <div className="content grid-layout">
        <Home />
        <Sidebar />
      </div>     
    </div>
  );
}

export default App;
