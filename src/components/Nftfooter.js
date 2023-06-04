import avatar from '../images/image-avatar.png';

const Nftfooter = () => {
    return (
        <p className='footer'>
          <img className='avatar' src={avatar} alt='avatar icon'/>
         <p className='footer_text'> Creation of<span className='link'> Jules Wyvern</span> </p>
        </p>
    );
}

export default Nftfooter;