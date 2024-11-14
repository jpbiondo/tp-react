import { useState } from "react";
import { FormProduct } from "./FormProduct/form-product";
import { HeaderProduct } from "./HeaderProduct/header-product";
import { Product } from "../../interfaces/product.interface";
import { ListProducts } from "./ListProducts/list-products";

export const AppProduct = () => {

    const [products, setProducts] = useState<Product[]>([]);

    const handleAddProduct = (product:Product) => {
        setProducts((prevProducts) => [...prevProducts, product]);
        console.log(products);
    }

    return (
        <>
            <HeaderProduct/>
            <div className="px-3">
                <FormProduct handleAddProduct = {handleAddProduct}/>
            </div>
            <div className="px-3 pb-2">
                <ListProducts products={products}/>
            </div>
        </>
    );
}