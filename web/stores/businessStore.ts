import { Business } from "@/types/business"
import { create } from "zustand"

type BusinessStore = {
    businesses: Business[],
    addStore: (business: Business) => void,
    removeStore: (business: Business) => void,
    switchStore: (business: Business) => void
}

export const useBusinessStore = create<BusinessStore>((set) => ({
    businesses: [],
    addStore: (store: Business) => set((state) => ({
        businesses: [...state.businesses, store]
    })),
    removeStore: (store: Business) => set((state) => ({
        businesses: state.businesses.filter((b) => b.id !== store.id)
    })),
    switchStore: (store: Business) => set(() => ({
        businesses: [store]
    }))
}))