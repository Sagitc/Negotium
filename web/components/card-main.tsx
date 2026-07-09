import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";

type Props = {
    className?: string;
    cardTitle?: string;
}

export default function CardMain({ className, cardTitle }: Props) {
    return (
        <Card size="sm" className={`mx-auto w-full  ${className}`}>
            <CardHeader>
                <CardTitle>{cardTitle || "Title"}</CardTitle>
                <CardDescription>
                    Weekly snapshots. No more manual exports.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ul className="grid gap-2 py-2 text-sm">
                    <li className="flex gap-2">
                        <ChevronRightIcon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                        <span>Choose a schedule (daily, or weekly).</span>
                    </li>
                    <li className="flex gap-2">
                        <ChevronRightIcon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                        <span>Send to channels or specific teammates.</span>
                    </li>
                    <li className="flex gap-2">
                        <ChevronRightIcon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                        <span>Include charts, tables, and key metrics.</span>
                    </li>
                </ul>
            </CardContent>
            <CardFooter className="flex-col gap-2">
                <Button size="sm" className="w-full">
                    Set up scheduled reports
                </Button>
                <Button variant="outline" size="sm" className="w-full">
                    See what&apos;s new
                </Button>
            </CardFooter>
        </Card>
    )
}