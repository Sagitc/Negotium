"use client"

import CardMain from "@/components/card-main";
import { useBusinessStore } from "@/stores/businessStore";

export default function SectionSingleCards() {

    const { business } = useBusinessStore();

    return (
        <section className="grid grid-cols-2 w-full gap-4 px-6 md:px-4 md:grid-cols-2">
            <CardMain cardTitle={`Meta individual (${business[0]})`} />
            <CardMain cardTitle="Loja 2" />
        </section>
    )
}