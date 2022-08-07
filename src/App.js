import Article from './components/Article';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content grid-layout">
        <Article />
        <Sidebar />
      </div>     
    </div>
  );
}

export default App;
