"use client"

import { CardMain } from "@/components/Card/Card.main";

export default function CardSection() {
    return (
        <section className=" w-full px-6 md:px-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <CardMain />
                <CardMain />
            </div>
        </section>
    )
}