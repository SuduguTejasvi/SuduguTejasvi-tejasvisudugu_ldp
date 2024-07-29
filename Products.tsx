import React from "react";
import { useEffect,useState } from "react";
import ProductCard from "./ProductsCard";


interface Product {
	id: number;
	title: string;
	category: string;
	image: string;
	price: number;
}
export default function GetProducts(){
    	const [products, fetchProducts] = useState<Product[]>([]);

		useEffect(() => {
			getProduct();
		}, []);

		async function getProduct() {
			const res = await fetch('https://fakestoreapi.com/products');
			const data = await res.json();
			fetchProducts(data);
			console.log(data);
		}

		if (products.length === 0) {
			return (
				<>
					<h1>Fetching data</h1>
				</>
			);
		}

        return(<>
        <h2>Product list</h2>
			{products.map(p => (
				<ProductCard
					key={p.id}
					name={p.title}
					category={p.category}
					price={p.price}
					image={p.image}
				/>
			))}
        </>)



}