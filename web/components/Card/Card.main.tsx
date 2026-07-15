"use client"

import { useEffect } from "react"
import { Calendar, TrendingDown, TrendingUp } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { useBusinessStore } from "@/stores/businessStore"
import { CardCarousel } from "./Card.chart.carousel"
import CardChartItem from "./Card.chart.item"
import { useUser } from "@/context/userContext"



export function CardMain() {
  const user = useUser();

  const storeList = user?.user?.business ?? [];

  const businesses = useBusinessStore((state) => state.businesses);
  const addStore = useBusinessStore((state) => state.addStore);

  useEffect(() => {
    const existingIds = new Set(businesses.map((store) => store.id));

    if (storeList.length > 0) {
      storeList.forEach((store) => {
        if (!existingIds.has(store.id)) {
          addStore(store);
        }
      });
    }
  }, [storeList, businesses, addStore]);

  return (
    <Card className="flex flex-col">
      <CardHeader className="flex items-center pb-0">
        <div>
          <CardTitle>Meta individual</CardTitle>
          <CardDescription>{storeList[0]?.label}</CardDescription>
        </div>
        <Calendar className="ml-auto h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="flex justify-center content-center flex-1 pb-0">

        <CardCarousel className="md:hidden" />

        <div className="hidden md:flex">
          <CardChartItem type="purchases" />
          <CardChartItem type="sells" />
        </div> 

      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          Crescimento de 5.2% nesse mês <TrendingUp className="h-4 w-4" />
        </div>
      </CardFooter>
    </Card>
  )
}
