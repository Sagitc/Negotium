"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { ButtonGroup } from "./ui/button-group"

const roleAreas = [
    'Início',
    'Negociações',
    'Acordos',
    'Relatórios'
]

function handleBtnClick() {

}


export function NavHeader() {

    const [selectedRole, setSelectedRole] = useState(roleAreas[0])

    return (
        <nav className="flex items-center gap-2 bg-sidebar p-1 rounded-xl border border-border">
            {roleAreas.map((area) => (
                <Button 
                    className={ selectedRole === area ? "bg-primary text-primary-foreground hover:bg-primary/80" : "bg-sidebar text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground"}
                    onClick={() => setSelectedRole(area)}
                    // onClick={handleBtnClick}
                    size="lg" 
                    key={area} 
                    data-key={area} 
                    variant="default"
                >
                    {area}
                </Button>
            ))}
        </nav>
    )
}