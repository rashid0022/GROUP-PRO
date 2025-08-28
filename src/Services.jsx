import React from "react";
import "./Services.css";

function Services() {
 if (!localStorage.getItem("adminAccount")) {
    const defaultAdmin = { username: "admin", password: "admin123" };
    localStorage.setItem("adminAccount", JSON.stringify(defaultAdmin));
  }

  return (
    <Router>
      <div className="app-container">
        <nav className="main-nav">
          <Link to="/" className="nav-link">Apply Loan</Link>
          <Link to="/login" className="nav-link">Applicant Login</Link>
          <Link to="/admin-login" className="nav-link">Admin Login</Link> 
          <Link to="/repayment" className="nav-link">Make Payment</Link>
        </nav>

        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={<ApplicantForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contract" element={<Contract />} />
            <Route path="/repayment" element={<Repayment />} />
            <Route path="/admin-login" element={<AdminLogin />} /> 
            <Route path="/admin-panel" element={<AdminPanel />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default Services;
