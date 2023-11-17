import React from 'react'
import Chart from 'react-google-charts';

import TopProductsData from "../../datasets/top_products.json"

// console.log(JSON.parse(TopProductsData))

const TopProducts = () => {
  const chartEvents = [
    {
      eventName: 'select',
      callback: ({ chartWrapper }) => {
        // handle select event
      },
    },
  ];

  const chartColumns = [
    { type: 'string', label: 'Task ID' },
    { type: 'string', label: 'Task Name' },
    { type: 'date', label: 'Start Date' },
    { type: 'date', label: 'End Date' },
    { type: 'number', label: 'Duration' },
    { type: 'number', label: 'Percent Complete' },
    { type: 'string', label: 'Dependencies' },
  ];

  const chartData = [
    ['Research', 'Find sources', new Date(2015, 0, 1), new Date(2015, 0, 5), null, 100, null],
    ['Write', 'Write paper', null, new Date(2015, 0, 9), daysToMilliseconds(3), 25, 'Research,Outline'],
    ['Cite', 'Create bibliography', null, new Date(2015, 0, 7), daysToMilliseconds(1), 20, 'Research'],
    ['Complete', 'Hand in paper', null, new Date(2015, 0, 10), daysToMilliseconds(1), 0, 'Cite,Write'],
    ['Outline', 'Outline paper', null, new Date(2015, 0, 6), daysToMilliseconds(1), 100, 'Research'],
  ];

  function daysToMilliseconds(days) {
    return days * 24 * 60 * 60 * 1000;
  }
  return (
    <Chart
      width={'100%'}
      height={'400px'}
      chartType="Gantt"
      loader={<div>Loading Chart</div>}
      data={[chartColumns, ...chartData]}
      options={{
        height: 275,
        gantt: {
          trackHeight: 30,
        },
      }}
      chartEvents={chartEvents}
    />
  )
}

export default TopProducts