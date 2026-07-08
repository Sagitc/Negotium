export type User = {
    id: number;
    name: string;
    email: string;
    role: 'admin' | 'buyer' | 'rh' | 'manager';
    business: string[]
}