import {IProduct} from "@/shared";

export interface IProductSlugDetails {
    product: Omit<IProduct, 'new' | 'onClick' | 'slug' | 'type'>;
}