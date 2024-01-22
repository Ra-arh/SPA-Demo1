// import { connect } from 'react-redux'
import './Feature.css'
import { useState } from 'react'
import Code_review from "../../Assets/code-review.png"

export default function Features() {
  const [featureList] = useState([
    {
      img: {Code_review},
      title: "Unique Design", 
      description: "Azea has a unique design that you cannot compare with any other templates. It has unique Design",
    },
    {
      img: {Code_review},
      title: "Unique Design", 
      description: "Azea has a unique design that you cannot compare with any other templates. It has unique Design",
    },
    {
      img: {Code_review},
      title: "Unique Design", 
      description: "Azea has a unique design that you cannot compare with any other templates. It has unique Design",
    },
    {
      img: {Code_review},
      title: "Unique Design", 
      description: "Azea has a unique design that you cannot compare with any other templates. It has unique Design",
    },
    {
      img: {Code_review},
      title: "Unique Design", 
      description: "Azea has a unique design that you cannot compare with any other templates. It has unique Design",
    },
    {
      img: {Code_review},
      title: "Unique Design", 
      description: "Azea has a unique design that you cannot compare with any other templates. It has unique Design",
    }
  ])

  return (
    <div className="feature-container">
      <div className="feature">
        <div className="feature-title">
            <h2>Features</h2>
        </div>
        <div className="feature-subtitle">    
            <h3>Azea Main Features.</h3>
        </div>
        <div className="feature-titlecontent">    
            <p>The Azea admin template comes with ready-to-use features that are completely easy-to-use for any user, even for a beginner.</p>
        </div>
        <div className="feature-cards">  
          {featureList.map((feature, i)=> (
            <div key={i} className="feature-card">
              <div className="feature-card-icon">
                <img src={Code_review} alt="code" />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>        
          ))}
      </div>
      </div> 
    </div>
  )
}

