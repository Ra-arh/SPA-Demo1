import './Pricing.css';
import pPremiun from '../../Assets/premium.png'; 
import pBasic from '../../Assets/basic-package.png'; 
import pPersonal from '../../Assets/personal-package.png'; 
import pTrue from '../../Assets/true.png';
import { useState } from 'react';
import crown from '../../Assets/crown.png';

export default function Pricing() {
    const [pricingFeatures] = useState([
        {
            img: pPersonal,
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
            img: pPremiun,
            isPremium: true,
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
            img: pBasic,
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
    // <div className='p-card' {pFeature.isPremium ? 'accodian-desc show': 'accodian-desc'}>
    <div className={pFeature.isPremium ? 'p-card preminumCard': 'p-card'}>
     <div className='pcard-title'>
            <div className='pcard-titlebg'>
                <img src={pFeature.img} alt="icon" />
            </div>
            <h4>{pFeature.title}</h4>
            <div className='paid-pricing'>
                {pFeature.isPremium && <img src={crown} alt="pain" />}
            </div>
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

