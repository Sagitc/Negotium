import { businessData } from "@/data/businessData";
import { User } from "@/types/user";
import { randomUUID } from "node:crypto";

export const User1: User = {
    id: 1,
    name: "Sagitc",
    email: "sagitc@gmail.com",
    password: "123456",
    role: "admin",
    business: businessData.filter((item) => typeof item === "string"),
};

export const User2: User = {
    id: 2,
    name: "Robert",
    email: "robert@gmail.com",
    password: "123456",
    role: "buyer",
    business: ["Couto 1"],
};
