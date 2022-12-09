import React from "react";

function Weather({ data }) {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        width: "50%",
        margin: "20px auto",
      }}
    >
      <h2>
        {data.location.name}
        <br />
        {data.location.country}
      </h2>
      <p
        style={{
          display: "flex",
          flexWrap: "nowrap",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src={data.current.condition.icon}
          alt={data.current.condition.text}
        />
        {data.current.condition.text}
      </p>
      <h2>
        {data.current.temp_c}
        <sup>&bull;</sup>C/{data.current.temp_f}F
      </h2>
    </div>
  );
}

export default Weather;
