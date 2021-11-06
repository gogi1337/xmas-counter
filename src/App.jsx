import React, { useState, useEffect } from "react";
import Counter from "./Counter";
import Snowfall from "react-snowfall";

const year = new Date().getFullYear()
const day = new Date().getDay()
const month = new Date().getMonth()
const christmas = new Date(month == 11 && day >= 25 ? year + 1 : year, 11, 25).getTime();
const newyear = new Date(year + 1, 0, 1).getTime();

function timeToXmas() {
  let duration = christmas - Date.now();

  if (duration > 0) {
    let days, hours, minutes, seconds;
    seconds = Math.floor(duration / 1000);
    minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
    hours = Math.floor(minutes / 60);
    minutes = minutes % 60;
    days = Math.floor(hours / 24);
    hours = hours % 24;

    return { days: days, hours: hours, minutes: minutes, isXmas: false };
  } else {
    return { days: 0, hours: 0, minutes: 0, isXmas: true };
  }
}

function timeToNewYear() {
  let duration = newyear - Date.now();

  if (duration > 0) {
    let days, hours, minutes, seconds;
    seconds = Math.floor(duration / 1000);
    minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
    hours = Math.floor(minutes / 60);
    minutes = minutes % 60;
    days = Math.floor(hours / 24);
    hours = hours % 24;

    return { days: days, hours: hours, minutes: minutes, isNewYear: false };
  } else {
    return { days: 0, hours: 0, minutes: 0, isNewYear: true };
  }
}

function App() {
  const [xmas, setXmas] = useState({});
  const [newYear, setNewYear] = useState({});

  useEffect(() => {
    setXmas(timeToXmas());
    setNewYear(timeToNewYear());
    setInterval(() => {
      setXmas(timeToXmas());
      setNewYear(timeToNewYear());
    }, 30000);
  }, [])

  return (
    <div className="container">
      <Counter title="Christmas" days={xmas.days} hours={xmas.hours} minutes={xmas.minutes} />
      <Counter title="New Year" days={newYear.days} hours={newYear.hours} minutes={newYear.minutes} />
      <Snowfall />
    </div>
  );
}

export default App;
