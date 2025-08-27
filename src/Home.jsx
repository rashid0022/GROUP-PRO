import "./Home.css";

function Home() {
  return (
    <section className="home-section">
      <div className="home-container">
        
       
        <div className="home-text">
          <h1>Welcome to LoanBridge System</h1>
          <p>
            Our platform provides easy access to <strong><u>Loans</u></strong> and
            promotes to build a healthier and
            financially stable community.
          </p>
          <div className="home-buttons">
            <a href="/about" className="btn-primary">Learn More</a>
            <a href="/contact" className="btn-secondary">Contact Us</a>
             <a href="/services" className="btn-secondary">Services</a>
          </div>
         </div>

        
        <div className="home-image">
          <img src="/images/logo.jpg" alt="logo" />
        </div>
      </div>


      <div className="highlights">
        <div className="highlight-box">
            <img src="/images/loan.jpg" alt="Public" className="loan-"/>
          <h2>💰 Loan Services</h2>
          <p>Apply for financial support and manage your repayments easily and transparently.</p>
        </div>
        <div className="highlight-box">
          <h2>❤️ AIDS Awareness</h2>
          <p>Access reliable health information, testing resources, and counseling support.</p>
        </div>
      </div>
    </section>
  );
}

export default Home;
