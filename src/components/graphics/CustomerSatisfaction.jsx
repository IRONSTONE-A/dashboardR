import React from 'react'
import Chart from 'react-google-charts';
import CustomerSatisfactionData from "../../datasets/customer_satisfaction_by_ratings.json"

// console.log(JSON.parse(CustomerSatisfactionData))

const CustomerSatisfaction = () => {
  const data = [
    ['Date', 'Rating'],
    // Add your data here
    // For example:
    ['2019-01-01', 6.58],
    ['2019-01-02', 6.05],
    // ... (add all your data points)
  ];
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <Chart
        chartType="AreaChart"
        loader={<div>Loading Chart</div>}
        data={data}
        options={{
          title: 'Rating Over Time',
          hAxis: { title: 'Date', titleTextStyle: { color: '#333' } },
          vAxis: { minValue: 0 },
          // Customize other options as needed
        }}
        rootProps={{ 'data-testid': '1' }}
      />
    </div>
  )
}

export default CustomerSatisfaction