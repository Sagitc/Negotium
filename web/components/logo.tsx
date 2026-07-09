import { Orbit } from "lucide-react";

export default function Logo() {
    return (
        <div className="flex items-center">
            <Orbit className="size-5" />
            <span className="text-base font-medium ml-3">Negotium</span>
        </div>
    )
}