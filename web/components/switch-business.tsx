"use client"

import { useEffect } from "react"
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox"
import { useUser } from "@/context/userContext";
import { useBusinessStore } from "@/stores/businessStore";

export function SwitchBusiness() {
  // const switchBusiness = useBusinessStore((state) => state.switchStore);

  const user = useUser();
  // const businesses = user?.user?.business ?? [];

  // useEffect(() => {
  //   if (businesses.length > 0 && businesses[0]) {
  //     switchBusiness(businesses[0]);
  //   }
  // }, [businesses, switchBusiness]);


  return (
    <Combobox items={user?.user?.business.map((b) => b.label) || []} defaultValue={user?.user?.business[0]?.label}>
      <ComboboxInput className="min-w-28 text-center" placeholder="Select a business" />
      <ComboboxContent>
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}
