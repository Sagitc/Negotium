import { HeaderMain } from "@/components/header-main";
import { NavMain } from "@/components/nav-main";
import SectionSingleCards from "@/components/section-single-cards";

export default function Page() {

  return (
    <div className="flex min-h-screen p-3 bg-sidebar">
      <div className="relative bg-background flex w-full flex-col rounded-xl border border-border gap-6 md:gap-4">
        
        <NavMain className="fixed bottom-6 left-1/2 -translate-x-1/2 md:hidden" />
        <HeaderMain />
        <SectionSingleCards />

      </div>
    </div>
  )
}
