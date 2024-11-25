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
  ReferenceLine,
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
const controlData = [
  { time: "08:00", value: 10.2 },
  { time: "09:00", value: 10.3 },
  { time: "10:00", value: 10.1 },
  { time: "11:00", value: 10.4 },
  { time: "12:00", value: 10.2 },
  { time: "13:00", value: 10.5 },
  { time: "14:00", value: 10.3 },
  { time: "15:00", value: 10.2 },
];

const average = 10.3;
const ucl = 10.6; // Upper Control Limit
const lcl = 10.0; // Lower Control Limit

export default function ControlChart() {
  return (
    <Card className="w-full max-w-3xl">
      <CardHeader>
        <CardTitle>Control Chart</CardTitle>
        <CardDescription>
          Process Control Chart with Control Limits
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            value: {
              label: "Process Value",
              color: "hsl(var(--chart-1))",
            },
          }}
          className="h-[400px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={controlData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis domain={[9.8, 10.8]} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Legend />
              <Line
                type="monotone"
                dataKey="value"
                stroke="var(--color-value)"
                name="Process Value"
              />
              <ReferenceLine
                y={average}
                label="Average"
                stroke="green"
                strokeDasharray="3 3"
              />
              <ReferenceLine
                y={ucl}
                label="UCL"
                stroke="red"
                strokeDasharray="3 3"
              />
              <ReferenceLine
                y={lcl}
                label="LCL"
                stroke="red"
                strokeDasharray="3 3"
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
