import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { year: "2019", nrr: 125 },
  { year: "2020", nrr: 128 },
  { year: "2021", nrr: 132 },
  { year: "2022", nrr: 118 },
  { year: "2023", nrr: 108 },
  { year: "2024", nrr: 102 },
];

export const GraphOfTheWeekChart = () => {
  return (
    <div className="w-full h-64 mt-6">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
          <defs>
            <linearGradient id="nrrGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(25, 70%, 48%)" stopOpacity={0.3} />
              <stop offset="95%" stopColor="hsl(25, 70%, 48%)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(35, 15%, 88%)" />
          <XAxis 
            dataKey="year" 
            tick={{ fill: "hsl(30, 6%, 45%)", fontSize: 12 }}
            axisLine={{ stroke: "hsl(35, 15%, 88%)" }}
          />
          <YAxis 
            domain={[90, 140]}
            tick={{ fill: "hsl(30, 6%, 45%)", fontSize: 12 }}
            axisLine={{ stroke: "hsl(35, 15%, 88%)" }}
            tickFormatter={(value) => `${value}%`}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: "hsl(40, 25%, 99%)",
              border: "1px solid hsl(35, 15%, 88%)",
              borderRadius: "8px",
              fontSize: "14px"
            }}
            formatter={(value: number) => [`${value}%`, "Net Retention"]}
          />
          <Area 
            type="monotone" 
            dataKey="nrr" 
            stroke="hsl(25, 70%, 48%)" 
            strokeWidth={2}
            fill="url(#nrrGradient)" 
          />
        </AreaChart>
      </ResponsiveContainer>
      <p className="text-xs text-text-meta text-center mt-2">
        SaaS Net Revenue Retention (NRR) — Public Company Median
      </p>
    </div>
  );
};
