import './Faq.css'
import { useState } from 'react'

export default function Faq() {
    const [selected, setSelected] = useState(null)
    
    const toggle = (i) => {
        if(selected === i){
            return setSelected(null)
        }
        setSelected(i)
    }
    
    const accordianData = [
        {
            question: "Query 1 ?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quos debitis aliquam .Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.",
        },
        {
            question: "Query 2 ?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quos debitis aliquam .Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.",
        },
        {
            question: "Query 3 ?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quos debitis aliquam .Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.",
        },
        {
            question: "Query 4 ?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quos debitis aliquam .Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.",
        },
        {
            question: "Query 5 ?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quos debitis aliquam .Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.",
        },
        {
            question: "Query 6 ?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quos debitis aliquam .Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.",
        },
    ]


  return (
    <div className="faq-container">
      <div className="faq">
        <div className="faq-title">
            <h2>FAQ'S ?</h2>
        </div>
        <div className="faq-subtitle">    
            <h3>We are here to help you</h3>
        </div>
        <div className="faq-titlecontent">    
            <p>The Azea admin template is one of the modern dashboard templates. It is also a premium admin dashboard.</p>
        </div>
      </div>
      <div className='wrapper'>
        <div className='accordian'>
            {accordianData.map((item, i) => (
                <div className='item' onClick={() => toggle(i)}>
                    <div className='accodian-title'>
                        <p>{item.question}</p>
                        <span>{selected === i ? '-': '+'}</span>
                    </div>
                    <div className={selected === i ? 'accodian-desc show': 'accodian-desc'}>
                        <p>{item.answer}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

