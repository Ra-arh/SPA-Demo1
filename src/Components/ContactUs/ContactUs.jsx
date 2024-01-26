import './ContactUs.css'

export default function ContactUs() {
  return (
    <div className="contact-container">
    <div className="contact">
      <div className="contact-title">
          <h2>Contact</h2>
      </div>
      <div className="contact-subtitle">    
          <p>Get In Touch with us.</p>
      </div>
    </div>
    <div className='contact-form'>
    <form action="">
        <label htmlFor="name">First name*</label>
        <br />
        <input className='input-width40' type="text" placeholder='First name'/>
        <br /><br />
        <label htmlFor="name">Last name</label>
        <br />
        <input className='input-width40' type="text" placeholder='Last name'/>
        <br /><br />
        <label htmlFor="Email">Email*</label>
        <br />
        <input type="text" placeholder='Email address'/>
        <br /><br />
        <label htmlFor="text">Message</label>
        <br />
        <textarea name="description" cols="90" rows="5" placeholder="Type your message here"></textarea>
        <br />
        <button>Send Message</button>
    </form>
    </div>
    </div>
  )
}

