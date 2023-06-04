import { Component } from "react";
import ether_icon from '../images/icon-ethereum.svg';
import clock_icon from '../images/icon-clock.svg';

class Nftdetails extends Component {
    render(){
        return (
            <>
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
            </>
        );
    }
}

export default Nftdetails;
