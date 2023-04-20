import React from 'react';

const Pricing = () => {
  return (
    <div className="pricing-container">
      <div className="pricing-image-container">
        <img src="/pricingimage.svg" alt="Pricing" />
      </div>
      <div className="pricing-content-container">
        <h2>Sites starting at $0 Down, $250/month</h2>
        <h3>12 month minimum c</h3>
        <ul>
          <li>Hosting included</li>
          <li>Unlimited Edits</li>
          <li>Website Design</li>
          <li>Customer Service Included</li>
        </ul>
      </div>
    </div>
  );
};

export default Pricing;
