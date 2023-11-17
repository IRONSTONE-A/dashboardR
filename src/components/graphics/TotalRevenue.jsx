// import "./styles.css";
import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

import TotalRevenueData from "../../datasets/total_revenue_by_product_line.json"
const TotalRevenueDataParse = JSON.parse(TotalRevenueData)
// console.log(TotalRevenueDataParse)



const data = [
  {
    name: "Monday",
    ElectronicAccessories: TotalRevenueDataParse[0].Total,
    FashionAccessories: TotalRevenueDataParse[31].Total,
    HealthandBeauty:TotalRevenueDataParse[92].Total,
    FoodandBeverages: TotalRevenueDataParse[62].Total,
    HomeandLifestyle:TotalRevenueDataParse[122].Total,
    SportsandTravel:TotalRevenueDataParse[152].Total,

    amt: 2400
  },
  {
    name: "Tuesday",
    ElectronicAccessories: 3000,
    FashionAccessories: 4000,
    HealthandBeauty: 1398,
    FoodandBeverages: 2400,
    HomeandLifestyle:3500,
    SportsandTravel:3000,
    amt: 2210
  },
  {
    name: "Wednesday",
    ElectronicAccessories: 2000,
    FashionAccessories: 4000,
    HealthandBeauty: 9800,
    FoodandBeverages: 2400,
    HomeandLifestyle:3500,
    SportsandTravel:3000,
    amt: 2290
  },
  {
    name: "Thursday",
    ElectronicAccessories: 2780,
    FashionAccessories: 4000,
    HealthandBeauty: 3908,
    FoodandBeverages: 2400,
    HomeandLifestyle:3500,
    SportsandTravel:3000,
    amt: 2000
  },
  {
    name: "Friday",
    ElectronicAccessories: 1890,
    FashionAccessories: 4000,
    HealthandBeauty: 4800,
    FoodandBeverages: 2400,
    HomeandLifestyle:3500,
    SportsandTravel:3000,
    amt: 2181
  },
  {
    name: "Saturday",
    ElectronicAccessories: 2390,
    FashionAccessories: 4000,
    HealthandBeauty: 3800,
    FoodandBeverages: 2400,
    HomeandLifestyle:3500,
    SportsandTravel:3000,
    amt: 2500
  },
  {
    name: "Sunday",
    ElectronicAccessories: 3490,
    FashionAccessories: 4000,
    HealthandBeauty: 4300,
    FoodandBeverages: 2400,
    HomeandLifestyle:3500,
    SportsandTravel:3000,
    amt: 2100
  }
];

export default function TotalRevenue() {
  // const [monday,setMonday] = useState()
  // TotalRevenueDataParse.map((day)=>{
  //   if(day.Day == 1 ){
      
  //   }
  // })
  return (
    <BarChart
      width={700}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3 " />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="HealthandBeauty" fill="#8884d8" />
      <Bar dataKey="ElectronicAccessories" fill="#82ca9d" />
      <Bar dataKey="HomeandLifestyle" fill="#ff1199" />
      <Bar dataKey="FashionAccessories" fill="#657256" />
      <Bar dataKey="FoodandBeverages" fill="#ff1111" />
      <Bar dataKey="SportsandTravel" fill="#1111ff" />
      
    </BarChart>
  );
}