import { useState } from "react";
import Code_review from "../../Assets/code-review.png"
import "./Cards.css"

function Cards() {
    const [cardList] = useState([
    {
        img: {Code_review},
        title: "Code Quality", 
        description: "Admin code is maintained very cleanly and well-structured with proper comments.",
    },
    {
        img: {Code_review},
        title: "Code Quality", 
        description: "Admin code is maintained very cleanly and well-structured with proper comments.",
    },
    {
        img: {Code_review},
        title: "Code Quality", 
        description: "Admin code is maintained very cleanly and well-structured with proper comments.",
    }
  ])

  return (
    <div className="container">
      <div className="cards">  
        {cardList.map((card, i) => (
            <div key={i} className="card">
               <div className="card-icon">
               <img src={Code_review} alt="code" />
                {/* <img src={card.img} alt="code" /> */}
               </div>
               <h3>{card.title}</h3>
               <p>{card.description}</p>
            </div>
        ))}
      </div>  
    </div>
  )
}

export default Cards;