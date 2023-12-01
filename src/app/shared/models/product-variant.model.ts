import { ProductAttribute } from "./product-attribute.model";

export interface ProductVariant {
    id: number;
    SKU: String;
    productAttributes: ProductAttribute[];
}
