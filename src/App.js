import image from './images/image-equilibrium.jpg';
import view from './images/icon-view.svg';
import ether_icon from './images/icon-ethereum.svg';
import clock_icon from './images/icon-clock.svg';
import avatar from './images/image-avatar.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='images'>
        <img src={image} className='main-img' alt='equilibrium' />
        <img src={view} className='view-img' />
        </div>
        <h1> Equilibrium #3429</h1>
        <p>Our Equilibrium collection promotes balance and calm.
        </p>
        <div className='details'>
           <p className='ether'><img src={ether_icon} alt='etherium icon'/> 
           <span className='details_spacing'>0.041 ETH</span></p>
           <p className='clock'><img src={clock_icon} alt='clock icon'/>
           <span className='details_spacing'> 3 days left</span></p>
        </div>
        <hr />
        <span className='footer'>
          <img className='avatar' src={avatar} alt='avatar icon'/>
         <p className='footer_text'> Creation of<span className='link'> Jules Wyvern</span> </p>
        </span>
      </div>
    </div>
  );
}

export default App;
