import { Product } from "@/domain/entities"

export const products: Product[] = Array.from({length: 18}).map((_,index)=>{
    const id = String(index + 1);
    return {
        id,
        name: `Product ${id}`,
        price: Math.floor(Math.random() * 1000)
    }
})