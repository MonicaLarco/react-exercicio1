import Article from './components/Article';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <div className="content grid-layout">
        <Article />
        <Sidebar />
      </div>     
    </div>
  );
}

export default App;
