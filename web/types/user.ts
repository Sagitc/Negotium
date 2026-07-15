import { Business } from "@/types/business";

export type User = {
    id: number;
    name: string;
    email: string;
    password: string;
    role: 'admin' | 'buyer' | 'rh' | 'manager';
    business: Business[]
}