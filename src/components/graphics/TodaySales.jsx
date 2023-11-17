import React from 'react'
import todaySales from "../../datasets/todays_sales.json"
// import {Bar} from "react-chartjs-2"

const TodaySales = () => {

    // console.log("ilk", todaySales[0])
    // const {today_product_sold,today_total_order,today_total_sales} = todaySales

  return (
    <div>
    <h2>today </h2>
<div className="today_total_sales">
  {todaySales[0].today_total_sales}
</div>
<div className="today_total_order">
{todaySales[0].today_total_order}
</div>
<div className="today_product_sold">
{todaySales[0].today_product_sold}
</div>
    </div>
  )
}

export default TodaySales