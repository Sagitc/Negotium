import { businessData } from "@/data/business"


type BusinessStore = {
    business: typeof businessData[number][]
    switchBusiness: (business: typeof businessData[number]) => void
}

// export const useBusinessStore = create<BusinessStore>((set) => ({
//     business: [],
//     switchBusiness: (business) => {

//     }
// }))