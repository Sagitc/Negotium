import { User } from "@/types/user";

import {
    store1,
    store2,
    store3,
    store4,
    store5,
    store6,
    store7
} from "@/data/businessData";

export const User1: User = {
    id: 1,
    name: "Sagitc",
    email: "sagitc@gmail.com",
    password: "123456",
    role: "admin",
    business: [store1, store2, store3, store4, store5, store6, store7],
};

export const User2: User = {
    id: 2,
    name: "Robert",
    email: "robert@gmail.com",
    password: "123456",
    role: "buyer",
    business: [store1, store2],
};
