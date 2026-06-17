import "./ContactPage.css";

function ContactPage() {
  return (
    <section className="contact-section">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>
          We consider all the drivers of change gives you the components
          <br />
          you need to change to create a truly happens.
        </p>
      </div>

      <div className="contact-card">
        <form className="contact-form">
          <div className="input-row">
            <div className="input-group">
              <label>Name</label>
              <input type="text" placeholder="Enter your name" />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input type="email" placeholder="Enter email address" />
            </div>
          </div>

          <div className="input-group">
            <label>Subject</label>
            <input type="text" placeholder="Write a subject" />
          </div>

          <div className="input-group">
            <label>Message</label>
            <textarea
              rows="6"
              placeholder="Write your message"
            ></textarea>
          </div>

          <button type="submit" className="send-btn">
            Send
          </button>
        </form>
      </div>

      <div className="contact-info">
        <div className="info-box">
          <h4>Call Us:</h4>
          <p className="highlight">+1-234-567-8900</p>
        </div>

        <div className="info-box">
          <h4>Hours:</h4>
          <p>Mon-Fri: 11am - 8pm</p>
          <p>Sat, Sun: 9am - 10pm</p>
        </div>

        <div className="info-box">
          <h4>Our Location:</h4>
          <p>123 Bridge Street</p>
          <p>Nowhere Land, LA 12345</p>
          <p>United States</p>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;