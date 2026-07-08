import { Orbit } from "lucide-react";
import { NavHeader } from "@/components/nav-header";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { ThemeToggler } from "@/components/theme-toggler";
import { SwitchBusiness } from "@/components/switch-business";

export function HeaderMain() {
    return (
        <header className="text-card-foreground ease-linear border-b">
            <div className="flex items-center justify-between py-4 px-6">
                <div className="flex items-center">
                    <Orbit className="size-5" />
                    <span className="text-base font-medium ml-3">Negotium</span>
                </div>
                <NavHeader />
                <div className="flex items-center gap-4">
                    <SwitchBusiness />

                    <ThemeToggler />
                </div>
            </div>
        </header>
    )
}