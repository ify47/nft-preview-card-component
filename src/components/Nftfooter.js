import avatar from '../images/image-avatar.png';

const Nftfooter = () => {
    return (
        <span className='footer'>
          <img className='avatar' src={avatar} alt='avatar icon'/>
         <p className='footer_text'> Creation of<span className='link'> Jules Wyvern</span> </p>
        </span>
    );
}

export default Nftfooter;