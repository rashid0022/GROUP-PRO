// About.jsx
import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-3xl bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-4 text-center">
          About Our Loan and AIDS Support System
        </h1>
        <p className="text-gray-700 mb-4 text-justify leading-relaxed">
          This project is designed to provide a clear system that manages{" "}
          <span className="font-semibold">Loans</span> and gives information
          about <span className="font-semibold">AIDS awareness</span>.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">
          📌 Loan Section
        </h2>
        <p className="text-gray-600 mb-4 text-justify">
          The Loan section helps users apply for financial support, view their
          repayment schedules, and manage records in a transparent way. It
          ensures fair access to funds and accountability in repayments.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">
          📌 AIDS Awareness Section
        </h2>
        <p className="text-gray-600 mb-4 text-justify">
          The AIDS section focuses on spreading correct health information,
          fighting stigma, and offering guidance to people affected or at risk.
          It also connects users with resources for testing, counseling, and
          treatment.
        </p>

        <div className="bg-blue-50 p-4 rounded-lg mt-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">
            Our Mission 🎯
          </h3>
          <p className="text-gray-700">
            To build a digital platform that improves access to loans and
            creates awareness about AIDS for a healthier and financially stable
            community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;