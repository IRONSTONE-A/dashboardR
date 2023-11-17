// FilterPanel.jsx
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const FilterPanel = ({ onFilterChange }) => {
  const handleDateChange = (dates) => {
    if (onFilterChange) {
      onFilterChange(dates);
    }
  };

  return (
    <div>
      <DatePicker
        onChange={(date) => handleDateChange([date, null])}
        selectsStart
        placeholderText="Başlangıç Tarihi"
      />
      <DatePicker
        onChange={(date) => handleDateChange([null, date])}
        selectsEnd
        placeholderText="Bitiş Tarihi"
      />
      <button onClick={() => onFilterChange([null, null])}>Filtrele</button>
    </div>
  );
};

export default FilterPanel;
