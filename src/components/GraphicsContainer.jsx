import React from 'react'
import "./graphicsContainer.css"
import TodaySales from './graphics/TodaySales'
import SalesMapping from './graphics/SalesMapping'
import TotalRevenue from './graphics/TotalRevenue'
import CustomerSatisfaction from './graphics/CustomerSatisfaction'
import RevenuePayments from './graphics/RevenuePayments'
import TopProducts from "./graphics/TopProducts"
import SalesBranch from "./graphics/SalesBranch"
import CustomerInsight from './graphics/CustomerInsight'
import DataFilterComponentmap from './DataFilterComponentmap'
import DataFilterComponent from './DataFilterComponent'

import data1 from "../datasets/sales_mapping_by_country.json"
import data2 from "../datasets/sales_by_branch.json"

import RevenuePaymentsData from "../datasets/revenue_by_payments.json"
console.log(RevenuePaymentsData)
const RevenuePaymentsDataParse = JSON.parse(RevenuePaymentsData)
console.log(RevenuePaymentsDataParse)

const GraphicsContainer = () => {

  let data = JSON.parse(data1)
  let salesBranchData = JSON.parse(data2)
  return (
    <div className='graphics-container'>
        <div className="first-line">
            
            <TodaySales/>
            <CustomerInsight/>
            
        </div>
        <div className="second-line">
          <TotalRevenue/>
          <CustomerSatisfaction/>
          <RevenuePayments data = {RevenuePaymentsDataParse}/>
        </div>
        <div className="third-line">
        <div><input type="text" /></div>
        <div className="third-line-content">
        <TopProducts/>
        <SalesMapping data={data}/>
        {/* <DataFilterComponent data = {salesBranchData}/> */}
        <SalesBranch data = {salesBranchData}/>
        </div>
        
        </div>

    </div>
  )
}

export default GraphicsContainer