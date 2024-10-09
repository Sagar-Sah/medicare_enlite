import React from 'react';
import data from './data.json';

const BillingReport = () => {
  const { billingData } = data; // Use destructuring to extract billingData

  return (
    <div>
      <h2>Billing Report</h2>
      <ul>
        {billingData.map(({ date, amount }, index) => ( // Destructure date and amount
          <li key={index}>
            Date: {date}, Amount: ${amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BillingReport;
