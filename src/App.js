import Nftimage from './components/Nftimage';
import Nftdetails from './components/Nftdetails';
import Nftfooter from './components/Nftfooter';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Nftimage />
        <Nftdetails />
        <Nftfooter />
      </div>
    </div>
  );
}

export default App;
