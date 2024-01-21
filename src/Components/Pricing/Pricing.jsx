import './Pricing.css';
import pTypeIcon from '../../Assets/premium.png'; 
import pTrue from '../../Assets/true.png';
import { useState } from 'react';

export default function Pricing() {
    const [pricingFeatures] = useState([
        {
            // img: {},
            title: "Personal",
            price: "$13",
            duration: "month",
            btag: "Best for Business",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
            feature1: "2 Free Domain Name",
            feature2: "3 Projects",
            feature3: "3 One-Click Apps",
            feature4: "1 Databases",
            feature5: "Money BackGuarantee",
            feature6: "24/7 support",
        },
        {
            // img: {},
            title: "Premium",
            price: "$15",
            duration: "month",
            btag: "Best for Business",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
            feature1: "2 Free Domain Name",
            feature2: "3 Projects",
            feature3: "3 One-Click Apps",
            feature4: "1 Databases",
            feature5: "Money BackGuarantee",
            feature6: "24/7 support",
        },
        {
            // img: {},
            title: "Basic",
            price: "$12",
            duration: "month",
            btag: "Best for Business",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
            feature1: " 2 Free Domain Name",
            feature2: "3 Projects",
            feature3: "3 One-Click Apps",
            feature4: " 1 Databases",
            feature5: "Money BackGuarantee",
            feature6: " 24/7 support",
        },
      ])  


  return (
    <div className="pricing-container">
    <div className="pricing">
      <div className="pricing-title">
          <h2>Pricing</h2>
      </div>
      <div className="pricing-subtitle">    
          <h3>Meet our monthly plan that suits you.</h3>
      </div>
    </div>
    <div className='pcard-container'>
    {pricingFeatures.map((pFeature, i) => (     
    <div className='p-card'>
        <div className='pcard-title'>
            <div className='pcard-titlebg'>
                <img src={pTypeIcon} alt="icon" />
            </div>
            <h4>{pFeature.title}</h4>
        </div>
        <div>
            <p><span className='spantag'>{pFeature.price}</span>/ {pFeature.duration}</p>
        </div>
        <div>
            <p>{pFeature.btag}</p>
        </div>
        <div className='p-button'>
            <button>Get strated</button>
        </div>
        <div>
            <p>{pFeature.description}</p>
        </div>
        <div className='p-feature'>
            <img src={pTrue} alt="i" />
            <p>{pFeature.feature1}</p>
        </div>
        <div className='p-feature'>
            <img src={pTrue} alt="i" />
            <p>{pFeature.feature2}</p>
        </div>
        <div className='p-feature'>
            <img src={pTrue} alt="i" />
            <p>{pFeature.feature3}</p>
        </div>
        <div className='p-feature'>
            <img src={pTrue} alt="i" />
            <p>{pFeature.feature4}</p>
        </div>
        <div className='p-feature'>
            <img src={pTrue} alt="i" />
            <p>{pFeature.feature5}</p>
        </div>
        <div className='p-feature'>
            <img src={pTrue} alt="i" />
            <p>{pFeature.feature6}</p>
        </div>
    </div>
    ))}
    </div>
    </div>
  )
}

