export interface IProduct {
    type: 'product';
    slug: string;
    title: string;
    price: number;
    author: string;
    images?: string[];
    new?: boolean;
    description: string;
    onClick?: () => void;
};