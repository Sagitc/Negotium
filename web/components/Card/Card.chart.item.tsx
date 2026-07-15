"use client"

import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  PolarAngleAxis,
  RadialBar,
  RadialBarChart,
} from "recharts"

import {
  ChartContainer,
  type ChartConfig,
} from "@/components/ui/chart"
import { useUser } from "@/context/userContext";

type Props = {
  type: 'sells' | 'purchases';
}

export default function CardChartItem({ type }: Props) {

  const user = useUser();
  const firstStore = user?.user?.business[0];
  let wholeValue: number, currentValue: number;

  const chartConfig = {
    whole: {
      label: (type === 'sells') ? "Vendas" : "Compras",
    },
    safari: {
      label: "Safari",
      color: "var(--chart-2)",
    },
  } satisfies ChartConfig

  if (chartConfig.whole.label === "Compras") {
    wholeValue = firstStore?.purchaseLimit ?? 0;
    currentValue = 50000; // Replace with a dinamic current value
  } else {
    wholeValue = firstStore?.goal ?? 0;
    currentValue = 150000; // Replace with a dinamic current value
  }

  const chartData = [
    { browser: "safari", whole: currentValue, fill: "var(--color-safari)" },
  ]

  return (
    <ChartContainer
      config={chartConfig}
      className={`mx-auto aspect-square max-h-62.5`}
    >
      <RadialBarChart
        data={chartData}
        startAngle={90}
        endAngle={-270}
        outerRadius={90}
        innerRadius={80}
      >
        <PolarAngleAxis
          type="number"
          domain={[0, wholeValue]}
          angleAxisId={0}
          tick={false}
        />
        <PolarGrid
          gridType="circle"
          radialLines={false}
          stroke="none"
          className="first:fill-muted last:fill-background"
          polarRadius={[90, 80]}
        />
        <RadialBar dataKey="whole" background cornerRadius={10} />
        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    <tspan
                      x={viewBox.cx}
                      y={viewBox.cy}
                      className="fill-foreground text-4xl font-bold"
                    >
                      {chartData[0].whole.toLocaleString()}
                    </tspan>
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) + 24}
                      className="fill-muted-foreground"
                    >
                      {chartConfig.whole.label}
                    </tspan>
                  </text>
                )
              }
            }}
          />
        </PolarRadiusAxis>
      </RadialBarChart>
    </ChartContainer>
  )
}