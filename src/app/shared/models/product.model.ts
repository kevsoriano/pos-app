import { ProductVariant } from "./product-variant.model";

export interface Product {
    id: number;
    name: string;
    productVariants: ProductVariant[];
}
