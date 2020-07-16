import React from "react";
import "./card.scss";
import chartData from "./chartdata";
import { Tooltip, AreaChart, Area } from "recharts";
const Card = ({ label, value }) => {
  return (
    <div className="card">
      <div className="card__content">
        <p className="card__content-label">{label}</p>
        <p className="card__content-value">{value}</p>
      </div>
      <div className="card__chart">
        <AreaChart
          width={100}
          height={50}
          data={chartData}
          margin={{ top: 0, right: 10, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="rgba(2, 148, 255, 0.45)"
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor="rgba(255, 255, 255, 0.0001)"
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <Tooltip />
          <Area
            type="monotone"
            dataKey="pv"
            stroke="#1875F0"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </div>
    </div>
  );
};

export default Card;