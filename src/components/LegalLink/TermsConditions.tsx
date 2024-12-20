import React from 'react';

const TermsConditions: React.FC = () => {
  return (
    <div className="prose max-w-none">
      <h2>Cancellation & Refund Policy</h2>
      <p className="text-sm text-gray-600">Last updated on 12-12-2024 13:26:28</p>
      
      <p>SANSKAR SASWAT believes in helping its customers as far as possible, and has therefore a liberal cancellation policy. Under this policy:</p>
      
      <ul className="list-disc pl-6 space-y-4">
        <li>
          Cancellations will be considered only if the request is made immediately after placing the order. 
          However, the cancellation request may not be entertained if the orders have been communicated to the 
          vendors/merchants and they have initiated the process of shipping them.
        </li>
        
        <li>
          SANSKAR SASWAT does not accept cancellation requests for perishable items like flowers, eatables etc. 
          However, refund/replacement can be made if the customer establishes that the quality of product 
          delivered is not good.
        </li>
        
        <li>
          In case of receipt of damaged or defective items please report the same to our Customer Service team. 
          The request will, however, be entertained once the merchant has checked and determined the same at his 
          own end. This should be reported within 7 Days days of receipt of the products. In case you feel that the 
          product received is not as shown on the site or as per your expectations, you must bring it to the notice 
          of our customer service within 7 Days days of receiving the product. The Customer Service Team after 
          looking into your complaint will take an appropriate decision.
        </li>
        
        <li>
          In case of complaints regarding products that come with a warranty from manufacturers, please refer 
          the issue to them. In case of any Refunds approved by the SANSKAR SASWAT, it'll take 9-15 Days 
          days for the refund to be processed to the end customer.
        </li>
      </ul>
    </div>
  );
};

export default TermsConditions;