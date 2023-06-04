import avatar from '../images/image-avatar.png';

const Nftfooter = () => {
    return (
        <div className='footer'>
          <img className='avatar' src={avatar} alt='avatar icon'/>
         <p className='footer_text'> Creation of<span className='link'> Jules Wyvern</span> </p>
        </div>
    );
}

export default Nftfooter;