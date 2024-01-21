import './BannerDetails.css'
import arrow_btn from "../../Assets/arrow_btn.png";
import play_icon from '../../Assets/play_icon.png';
import pause_icon from '../../Assets/pause_icon.png';

export const BannerDetails = ({bannerData, bannerList, setBannerCount, playStatus, setPlayStatus}) => {
  return (
    <div className='banner'>
      <div className='banner-text'>
        <h1>{bannerData.text1}</h1>
        <p>{bannerData.text2}</p>
      </div>
      <div className='banner-explore'>
        <p>Get Started</p>
        <img src={arrow_btn} alt="arrow" />
      </div>
      <div className='banner-dot-play'>
        <ul className='banner-dots'>
          <li onClick={()=> setBannerCount(2)} className={bannerList===0?"banner-dot orange": "banner-dot"}></li>
          <li onClick={()=> setBannerCount(2)} className={bannerList===1?"banner-dot orange": "banner-dot"}></li>
          <li onClick={()=> setBannerCount(2)} className={bannerList===2?"banner-dot orange": "banner-dot"}></li>
        </ul>
        <div className='banner-play'>
          <img onClick={()=> setPlayStatus(!playStatus)} src={playStatus?pause_icon:play_icon} alt="videoIcon"/>
          <p>Play the video</p>
        </div>
      </div>
    </div>
  )
}
