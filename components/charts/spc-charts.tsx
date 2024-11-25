"use client";

import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// Sample data
const spcData = [
  { time: "08:00", xBar: 10.2, r: 0.5, max: 10.5, min: 9.9 },
  { time: "09:00", xBar: 10.3, r: 0.6, max: 10.6, min: 10.0 },
  { time: "10:00", xBar: 10.1, r: 0.4, max: 10.3, min: 9.9 },
  { time: "11:00", xBar: 10.4, r: 0.7, max: 10.8, min: 10.1 },
  { time: "12:00", xBar: 10.2, r: 0.5, max: 10.5, min: 10.0 },
];

export default function SPCChart() {
  return (
    <Card className="w-full max-w-3xl">
      <CardHeader>
        <CardTitle>X-bar and R Chart</CardTitle>
        <CardDescription>Statistical Process Control Chart</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            xBar: {
              label: "X-bar",
              color: "hsl(var(--chart-1))",
            },
            r: {
              label: "R",
              color: "hsl(var(--chart-2))",
            },
            max: {
              label: "Max",
              color: "hsl(var(--chart-3))",
            },
            min: {
              label: "Min",
              color: "hsl(var(--chart-4))",
            },
          }}
          className="h-[400px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={spcData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Legend />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="xBar"
                stroke="var(--color-xBar)"
                name="X-bar"
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="r"
                stroke="var(--color-r)"
                name="R"
              />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="max"
                stroke="var(--color-max)"
                name="Max"
                strokeDasharray="5 5"
              />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="min"
                stroke="var(--color-min)"
                name="Min"
                strokeDasharray="5 5"
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
