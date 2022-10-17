import React, { useState } from "react";

const Customdate = () => {
  const [date, setDate] = useState<string>("");
  const [month, setMonth] = useState<string>("");
  console.log(date);
  return (
    <div>
      <input
        type="date"
        name="date"
        id="date"
        placeholder="dd-mm-yyyy"
        value={date}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDate(e.target.value)}
      />
      <p>{date}</p>
      <input
        type="month"
        name="date"
        id="date"
        placeholder="dd-mm-yyyy"
        value={month}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMonth(e.target.value)}
      />
      <p>{month}</p>
    </div>
  );
};

export default Customdate;
