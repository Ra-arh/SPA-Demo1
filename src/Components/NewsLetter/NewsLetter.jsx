import './NewsLetter.css'

export default function NewsLetter() {
  return (
    <div className='news-container'>
        <div className='newsletter'>
            <div className='newstitle'>
                <h1>Subscribe to our News Letter</h1>
            </div>
            <div className='newsdesc'>    
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.</p>
            </div>
            <div className='enquiry'>
                <input type="email" placeholder='Enter valid a Email address' required/>
                <button>Subscribe</button>    
            </div>
        </div>
    </div>
  )
}

