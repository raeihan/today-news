import React from "react";

const useDate = () => {
  const currentDate = new Date();
  const days = ["Ahad", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at"];
  const month = [
    "Januari",
    "Februari",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  const dayName = days[currentDate.getDay()]
  const date = currentDate.getDate()
  const monthName = month[currentDate.getMonth()]
  const years = currentDate.getFullYear()
  return{ dayName, date, monthName, years}
};

export default useDate;
