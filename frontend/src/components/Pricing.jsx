import React from 'react';
import { FcCheckmark } from "react-icons/fc";

const Pricing = () => {
  return (
    <div className="pricing-container">
      <div className="pricing-image-container">
        <img src="/pricingimage.svg" alt="Pricing" />
      </div>
      <div className="pricing-content-container">
        <h2>Websites starting at $0 Down, $200/month</h2>
        <h5>Choose from a variety of customizable websites</h5>
        <ul>
          <li><FcCheckmark /> Hosting included</li>
          <li><FcCheckmark /> Unlimited Edits</li>
          <li><FcCheckmark /> Website Design</li>
          <li><FcCheckmark /> Customer Service Included</li>
        </ul>
      </div>
    </div>
  );
};

export default Pricing;
