export type Product = {
    name: string;
    price: number;
    comparePrice: number;
    option: {
        name: string;
        values: string[];
    }
}