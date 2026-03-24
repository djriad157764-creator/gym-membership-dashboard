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
  { month: "Jan", members: 180, revenue: 9000, retention: 92 },
  { month: "Feb", members: 290, revenue: 14500, retention: 93 },
  { month: "Mar", members: 410, revenue: 20500, retention: 94 },
  { month: "Apr", members: 330, revenue: 16500, retention: 93 },
  { month: "May", members: 380, revenue: 19000, retention: 95 },
  { month: "Jun", members: 520, revenue: 26000, retention: 94 },
  { month: "Jul", members: 600, revenue: 30000, retention: 96 },
  { month: "Aug", members: 550, revenue: 27500, retention: 95 },
  { month: "Sep", members: 420, revenue: 21000, retention: 97 },
  { month: "Oct", members: 470, revenue: 23500, retention: 96 },
  { month: "Nov", members: 400, revenue: 20000, retention: 98 },
  { month: "Dec", members: 590, revenue: 29500, retention: 97 },
];

// Final Member
const janMember = gymMembershipData[0].members;
const desMember = gymMembershipData[11].members;
const memberGrowth = (((desMember - janMember) / janMember) * 100).toFixed(1);

// Final Revenue
const janRevenue = gymMembershipData[0].revenue;
const desRevenue = gymMembershipData[11].revenue;
const revenueGrowth = (((desRevenue - janRevenue) / janRevenue) * 100).toFixed(
  1,
);

const janRetention = gymMembershipData[0].retention;
const desRetention = gymMembershipData[11].retention;
const retentionGrowth = desRetention - janRetention;

const GymChart = () => {
  return (
    <div
      className="bg-white rounded-xl shadow-lg p-6 focus:outline-none focus:ring-0 focus:ring-offset-0"
      tabIndex="-1"
      onMouseDown={(e) => e.preventDefault()}
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-8">
        Gym MemberShip Growth
      </h2>
      <div className="w-full h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={gymMembershipData}
            margin={{ top: 20, right: 40, left: 60, bottom: 20 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#e2e8f0"
            ></CartesianGrid>
            <XAxis
              dataKey="month"
              tick={{ fill: "#4a5568", fontSize: 12, fontWeight: 500 }}
              axisLine={{ stroke: "#cbd5e0", strokeWidth: 1.5 }}
            />
            <YAxis
              yAxisId="left"
              domain={[0, 750]}
              tick={{ fill: "#4a5568", fontSize: 11 }}
              tickCount={6}
              axisLine={{ stroke: "#cbd5e0" }}
              label={{
                value: "Number of Members",
                angle: -90,
                fill: "gray",
                style: { fontSize: "11px" },
                position: "insideLeft",
              }}
            />
            <YAxis
              yAxisId="right"
              domain={[0, 40000]}
              orientation="right"
              tick={{ fill: "#4a5568", fontSize: 11 }}
              tickFormatter={(value) => `$${value / 1000}k`}
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
                if (name === "Revenue")
                  // ← Match the name prop
                  return [`$${value.toLocaleString()}`, "Revenue"];
                if (name === "Total Members")
                  // ← Match the name prop
                  return [value.toLocaleString(), "Total Members"];
                return [value, name]; // ← Fallback
              }}
            />
            <Legend
              wrapperStyle={{
                backgroundColor: "#f7fafc",
                padding: "8px 16px",
                borderRadius: "8px",
                border: "1px solid #e2e8f0",
                marginTop: "20px",
              }}
              iconType="circle"
              align="center"
              verticalAlign="bottom"
              height={50}
            />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="members"
              stroke="#8884d8"
              strokeWidth={2}
              dot={{ fill: "#8884d8", r: 4 }}
              activeDot={{ r: 6 }}
              name="Total Members"
            ></Line>
            <Line
              yAxisId="right"
              type={"monotone"}
              dataKey="revenue"
              stroke="#82ca9d"
              strokeWidth={2}
              dot={{ fill: "#82ca9d", r: 4 }}
              activeDot={{ r: 6 }}
              name="Revenue"
            ></Line>
          </LineChart>
        </ResponsiveContainer>
      </div>
      {/* // Summary Stats */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="bg-blue-50 rounded-lg p-3 text-center">
          <p className="text-sm text-gray-600">Total Members</p>
          <p className="text-2xl font-bold text-blue-600">{desMember}</p>
          <p className="text-sm text-green-600">↑ {memberGrowth}% growth</p>
        </div>

        <div className="bg-green-50 rounded-lg p-3 text-center">
          <p className="text-sm text-gray-600">Total Revenue</p>
          <p className="text-2xl font-bold text-purple-600">${desRevenue}</p>
          <p className="text-sm text-green-600">↑ {revenueGrowth}% growth</p>
        </div>

        <div className="bg-purple-50 rounded-lg p-3 text-center">
          <p className="text-sm text-gray-600">Avg. Retention</p>
          <p className="text-2xl font-bold text-purple-600">{desRetention}%</p>
          <p className="text-sm text-green-600">
            ↑ {retentionGrowth}% from Jan
          </p>
        </div>
      </div>
    </div>
  );
};

export default GymChart;
