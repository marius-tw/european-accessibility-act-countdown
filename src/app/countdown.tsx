"use client"; // This is a client component 👈🏽
import React, { useState, useEffect } from 'react';

function Countdown() {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeRemaining() {
    const targetDate = new Date('2025-06-28T00:00:00Z').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  return (
    <div className="flex flex-col items-center">
      <h1>days left to fix our accessibility issues and inclusion gaps</h1>
      <div className="w-[200px] m-9">
        <p>{timeRemaining.days} days</p>
        <p>{timeRemaining.hours} hours</p>
        <p>{timeRemaining.minutes} minutes</p>
        <p>{timeRemaining.seconds} seconds</p>
      </div>
      <h2>You would like to have more information? <a href={"https://ec.europa.eu/social/main.jsp?catId=1202"}>maybe here</a></h2>
    </div>
  );
}

export default Countdown;

