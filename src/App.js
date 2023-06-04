import Nftimage from './components/Nftimage';
import Nftdetails from './components/Nftdetails';
import Nftfooter from './components/Nftfooter';
import './App.css';

function App() {
  return (
    <div className="App">
      <main className='container'>
        <Nftimage />
        <Nftdetails />
        <Nftfooter />
      </main>
    </div>
  );
}

export default App;
