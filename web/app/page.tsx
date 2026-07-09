import { HeaderMain } from "@/components/header-main";
import { NavMain } from "@/components/nav-main";
import { SwitchBusiness } from "@/components/switch-business";

export default function Page() {
  return (
    <div className="flex min-h-screen p-3 bg-sidebar">
      <div className="relative bg-background flex w-full flex-col rounded-xl border border-border">

        <HeaderMain />

        <NavMain className="fixed bottom-6 left-1/2 -translate-x-1/2 md:hidden" />

      </div>
    </div>
  )
}
