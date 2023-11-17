// GeoChartComponent.jsx
import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';
import FilterPanel from './FilterPanel';

const GeoChartComponent = ({ data }) => {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    handleFilterChange(); // Bileşen yüklendiğinde varsayılan filtreleme yap
  }, []); // Boş bağımlılık dizisi, sadece bir kere çalıştırılmasını sağlar

  const handleFilterChange = (dates) => {
    // Seçilen tarih aralığına göre verileri filtrele
    const filtered = data.filter((item) => {
      const itemDate = new Date(item.Date); // Veri setinizdeki tarih formatına göre ayarlayın
      return (
        !isNaN(itemDate.getTime()) &&
        ((dates[0] === null && dates[1] === null) ||
          (dates[0] !== null && dates[1] !== null && itemDate >= dates[0] && itemDate <= dates[1]))
      );
    });

    // Her ülke için toplam total değerini hesapla
    const totalByCountry = {};
    filtered.forEach((item) => {
      const country = item.Country;
      const total = totalByCountry[country] || 0;
      totalByCountry[country] = total + item.Total;
    });

    // Her ülke için renk oluştur ve sonuçları uygun formata çevir
    const result = [['Country', 'Total', { role: 'style' }]];
    Object.keys(totalByCountry).forEach((country, index) => {
      result.push([country, totalByCountry[country], index]); // Renk indeksi
    });

    setFilteredData(result);
  };

  return (
    <div>
      <FilterPanel onFilterChange={handleFilterChange} />
      <Chart
        width={'100%'}
        height={'400px'}
        chartType="GeoChart"
        loader={<div>Loading Chart...</div>}
        data={filteredData}
        options={{
          colorAxis: { colors: ['yellow', 'red'] }, // Sarıdan kırmızıya renk skalası
          backgroundColor: '#81d4fa',
          datalessRegionColor: '#f8bbd0',
          defaultColor: '#f5f5f5',
        }}
      />
    </div>
  );
};

export default GeoChartComponent;
