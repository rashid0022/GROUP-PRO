import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        
        <div className="footer-brand">
          <h2>Aid & Loan</h2>
          <p>Building a healthier and financially stable community.</p>
        </div>
        

        
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Loan application</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

       
        <div className="footer-contact">
          <h3>Contact</h3>
          <p>📍 Dar es Salaam, Tanzania</p>
          <p>📞 +255 700 123 456</p>
          <p>✉️ support@example.com</p>
        </div>

        
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#">🌍 Facebook</a>
            <a href="#">💬 WhatsApp</a>
            <a href="#">📷 Instagram</a>
          </div>
        </div>
      </div>

      
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Aid & Loan. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
