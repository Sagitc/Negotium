import { Business } from "@/types/business"
import { create } from "zustand"

type BusinessStore = {
    business: Business[]
    switchBusiness: (business: Business) => void
}

export const useBusinessStore = create<BusinessStore>((set) => ({
    business: [],
    switchBusiness: (store: Business) => set(() => ({
        business: [store]
    }))
}))