import './Background.css';
import Video1 from '../../Assets/video1.mp4';
import Image1 from '../../Assets/image1.jpg';
import Image2 from '../../Assets/image2.jpg';
import Image3 from '../../Assets/image3.jpg';


export const Background = ({playStatus, bannerList}) => {
    if(playStatus){
        return(
            <video className='background fade-in' autoPlay loop muted>
                <source src={Video1} type='video/mp4' />
            </video>
        );
    }
    else if(bannerList===0){
        return <img src={Image1} className='background fade-in' alt='bannerImg'/>
    }
    else if(bannerList===1){
        return <img src={Image2} className='background fade-in' alt='bannerImg'/>
    }
    else if(bannerList===2){
        return <img src={Image3} className='background fade-in' alt='bannerImg'/>
    }
}
