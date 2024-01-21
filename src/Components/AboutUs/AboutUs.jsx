import "./AboutUs.css";
import about_img from '../../Assets/about.png';
import check from '../../Assets/check.png';

export default function AboutUs() {
    return (
    <div className="about-container">
      <div className="about">
        <div className="about-title">
            <h2>About Us</h2>
        </div>
        <div className="sub-title">    
            <p>Our mission is to make work meaningful.</p>
        </div>
        <div className="about-details">
            <div className="about-img">
                <img src={about_img} alt="aboutImg" />
            </div>
            <div className="about-content">
                <h2>We are a creative agency with a passion for design.</h2>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis</p>
                <div className="about-points">
                    <img src={check} alt="check"/>
                    <p>Quality & Clean Code</p>
                </div>
                <div className="about-points">
                    <img src={check} alt="check"/>
                    <p>Quality & Clean Code</p>
                </div>    
                <div className="about-points">    
                    <img src={check} alt="check"/>
                    <p>Quality & Clean Code</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

