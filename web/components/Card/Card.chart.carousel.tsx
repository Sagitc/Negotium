import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  PolarAngleAxis,
  RadialBar,
  RadialBarChart,
} from "recharts"

import { ChartContainer } from "../ui/chart"
import CardChartItem from "./Card.chart.item"

export function CardCarousel({ className }: { className?: string }) {
    return (
        <Carousel className={`w-full max-w-48 sm:max-w-xs ${className || ''}`}>
            <CarouselContent>
                <CarouselItem key="boughts">
                    <CardChartItem type="purchases"/>
                </CarouselItem>
                <CarouselItem key="sells">
                    <CardChartItem type="sells"/>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
