import { Fullscreen } from "lucide-react";
import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const studentMarksSimple = [
  { name: "Alice", marks: 332, average: 83.0, grade: "A" },
  { name: "Bob", marks: 324, average: 81.0, grade: "A" },
  { name: "Charlie", marks: 344, average: 86.0, grade: "A" },
  { name: "David", marks: 302, average: 75.5, grade: "B" },
  { name: "Emma", marks: 367, average: 91.8, grade: "A+" },
  { name: "Frank", marks: 311, average: 77.8, grade: "B" },
  { name: "Grace", marks: 349, average: 87.3, grade: "A" },
  { name: "Henry", marks: 322, average: 80.5, grade: "A-" },
];

const ChartCard = () => {
  return (
    <div className="chart-container" style={{ width: "100%", height: "400px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={studentMarksSimple} margin={{ right: 30, bottom: 20 }}>
          <CartesianGrid stroke="black" strokeDasharray="5 5" />

          <XAxis
            dataKey="name"
            tick={{ fill: "blue", fontSize: 14, fontWeight: 700 }}
            axisLine={{ stroke: "#cbd5e0", strokeWidth: 1.5 }}
            tickLine={false}
          />

          <YAxis
            tick={{ fill: "#4a5568", fontSize: 12 }}
            axisLine={{ stroke: "#cbd5e0" }}
            label={{
              value: "Total Marks",
              angle: -90,
              position: "insideLeft",
              fill: "#2d3748",
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
          />

          <Legend
            wrapperStyle={{
              backgroundColor: "#f7fafc",
              padding: "8px 16px",
              borderRadius: "8px",
              border: "1px solid #e2e8f0",
            }}
            iconType="circle"
            verticalAlign="top"
            height={40}
          />

          <Line
            type="monotone"
            dataKey="marks"
            stroke="#8884d8"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="average"
            stroke="#82ca9d"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
export default ChartCard;
