import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// charts data
const gymMembershipData = [
  { month: "Jan", members: 245, revenue: 12250, retention: 92 },
  { month: "Feb", members: 278, revenue: 13900, retention: 93 },
  { month: "Mar", members: 312, revenue: 15600, retention: 94 },
  { month: "Apr", members: 345, revenue: 17250, retention: 93 },
  { month: "May", members: 389, revenue: 19450, retention: 95 },
  { month: "Jun", members: 423, revenue: 21150, retention: 94 },
  { month: "Jul", members: 467, revenue: 23350, retention: 96 },
  { month: "Aug", members: 512, revenue: 25600, retention: 95 },
  { month: "Sep", members: 548, revenue: 27400, retention: 97 },
  { month: "Oct", members: 589, revenue: 29450, retention: 96 },
  { month: "Nov", members: 623, revenue: 31150, retention: 98 },
  { month: "Dec", members: 678, revenue: 33900, retention: 97 },
];

const GymChart = () => {
  return (
    <div style={{ width: "100%" }} className="w-full h-[200px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={gymMembershipData} margin={{ right: 30 }}>
          <CartesianGrid strokeDasharray="4 4" stroke="black"></CartesianGrid>
          <XAxis
            dataKey="month"
            tick={{ fill: "#4a5568", fontSize: 12, fontWeight: 500 }}
            axisLine={{ stroke: "red", strokeWidth: 1.5 }}
            tickLine={false}
          />
          <YAxis
            yAxisId="left"
            tick={{ fill: "blue", fontSize: 16 }}
            axisLine={{ stroke: "#cbd5e0" }}
            label={{
              value: "Number of Members",
              angle: -90,
              fill: "gray",
              style: { fontSize: "16px" },
              position: "insideLeft,center",
            }}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            tick={{ fill: "#4a5568", fontSize: 12 }}
            axisLine={{ stroke: "#cbd5e0" }}
            label={{
              value: "Revenue ($)",
              angle: 90,
              position: "insideRight",
              fill: "#2d3748",
              style: { fontSize: "12px" },
            }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1a202c",
              border: "none",
              borderRadius: "8px",
              color: "white",
              padding: "10px",
            }}
            itemStyle={{ color: "white" }}
            labelStyle={{ color: "#fbbf24", fontWeight: "bold" }}
                      formatter={(value, name) => {
                if (name === "revenue") return [`$${value}`, "Revenue"];
                          if (name === "members") return [value, "Total Members"];
                          return(value, name)
            }}
          />
          ;<Legend></Legend>
          <Line dataKey="revenue"></Line>
          <Line dataKey="retention"></Line>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GymChart;


