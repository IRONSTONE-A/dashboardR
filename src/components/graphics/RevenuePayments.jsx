import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

const RevenuePayments = ({ data }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // Veriyi Google Charts formatına dönüştür
    const chartDataFormatted = [["Month", "Cash", "Credit Card", "Ewallet"]];

    data.forEach((entry) => {
      const { Month, Payment, Total } = entry;

      // Eğer bu ay için henüz bir giriş yoksa, yeni bir dizi oluştur
      if (!chartDataFormatted[Month]) {
        chartDataFormatted[Month] = [Month, 0, 0, 0];
      }

      // Ödeme yöntemine göre toplamı ilgili sütuna ekleyin
      switch (Payment) {
        case "Cash":
          chartDataFormatted[Month][1] += Total;
          break;
        case "Credit card":
          chartDataFormatted[Month][2] += Total;
          break;
        case "Ewallet":
          chartDataFormatted[Month][3] += Total;
          break;
        default:
          break;
      }
    });

    // Boş olan ayları sıfır ile doldur
    chartDataFormatted.forEach((monthData, index) => {
      if (!monthData) {
        chartDataFormatted[index] = [index, 0, 0, 0];
      }
    });

    setChartData(chartDataFormatted);
  }, [data]);

  return (
    <Chart
      width={"100%"}
      height={"400px"}
      chartType="ColumnChart"
      loader={<div>Loading Chart</div>}
      data={chartData}
      options={{
        title: "Monthly Payments",
        hAxis: {
          title: "Month",
          minValue: 0,
        },
        vAxis: {
          title: "Total",
        },
        seriesType: "bars",
        series: { 5: { type: "line" } },
      }}
      rootProps={{ "data-testid": "1" }}
    />
  );
};

export default RevenuePayments;
