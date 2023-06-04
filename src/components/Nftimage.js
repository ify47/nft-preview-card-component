import image from '../images/image-equilibrium.jpg';
import view from '../images/icon-view.svg';

function Nftimage() {
    return (
        <div className='images'>
        <img src={image} className='main-img' alt='equilibrium' />
        <img src={view} className='view-img' alt='hover eye' />
        </div>
    );
}

export default Nftimage;