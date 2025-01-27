"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import { client } from '../../sanity/lib/client'
import Link from "next/link";


interface Product {
    _id: string;
    title: string;
    price: number;
    description: string;
    discountPercentage: number;
    imageUrl: string;
    productImage: {
        asset: {
            _ref: string;
        };
    };
    tags: string[];
}


const ProductCards: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [cart, setCart] = useState<Product[]>([]);


    const fetchProducts = async () => {
        try {
            const query = `*[_type == "product"] {
            _id,
            title,
            price,
            description,
            discountPercentage,
            "imageUrl": productImage.asset->url,
            tags
            }`;
            ;
            console.log('Query:', query);

            const data = await client.fetch(query);
            console.log('Fetched Data:', data); // Log the fetched data

            setProducts(data); // Update state with fetched data
        } catch (error) {
            console.error('Error Fetching Products:', error);
        }
    };


    const addToCart = (product: Product) => {
        setCart((prevCart) => [...prevCart, product]);
        alert(`${product.title} has been added to your cart!`)
    };

    const truncateDiscription = (description: string) => {
        return description.length > 100 ? description.substring(0, 100) + "..." : description;
    };

    useEffect(() => {
        fetchProducts()
    }, []);


    return (

        <div className="font-Montserat">
            <nav className=" w-full h-14 top-0  flex items-center justify-center">
                <h1 className="text-center font-semibold text-violet-800 w-full h-auto text-2xl sm:text-3xl md:text-5xl mt-4 mb-4 animate-pulse">
                    Products From API Data
                </h1>
            </nav>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5">
                {products.map((product) => (
                    <div
                        key={product._id}
                        className="g-white shadow-md rounded-lg-4  hover:shadow-lg transition-transform transform hover:scale-105  duration-300" >
                        <Link href={`/products/${product._id}`}>
                            <Image
                                src={product.imageUrl || '/placeholder.jpg'}
                                alt={product.title}
                                width={300}
                                height={300}
                                className="w-full h-48 object-cover rounded-md" />
                            <div className="mt-4">
                                <h1 className="text-xl ms-2 font-semibold">{product.title}</h1>
                                <p className="text-slate-800 mt-2 ms-2 text-sm">{truncateDiscription(product.description)}</p>
                                <div className="flex justify-between items-center mt-4">
                                    <div>
                                        <p className="text-slate-600 ms-2 font-bold">${product.price}</p>
                                        {product.discountPercentage > 0 && (
                                            <p className="text-sm text-green-600">
                                                {product.discountPercentage}% OFF
                                            </p>
                                        )}
                                    </div>

                                </div>
                                <div className="mt-2 ms-2 flex flex-wrap gap-2">
                                    {product.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="text-sm bg-slate-300 text-black rounded-full px-4 py-1 hover:bg-slate-400">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                            </div>
                        </Link>
                        {/*Add to cart functionality */}
                        <button className="mt-4 w-full bg-violet-600 text-white py-2 rounded-md hover:bg-violet-700" onClick={() => addToCart(product)}>
                            Add To Cart
                        </button>
                    </div>
                ))}
            </div>
            {/*cart summary */}

            <div className="mt-8 mb-10 bg-slate-100 p-10 rounded-lg shadow-md">
                <h1 className="text-2xl font-semibold text-violet-800">Cart Summary </h1>
                {cart.length > 0 ? (
                    <ul className="space-y-4">
                        {cart.map((item, index) => (
                            <li
                                key={index}
                                className="flex justify-between items-center bg-white shadow-sm p-4 rounded-md">
                                <div>
                                    <p className="font-medium text-slate-900">{item.title}</p>
                                    <p className="text-sm text-sky-600">${item.price.toFixed(2)}</p>
                                </div>
                                <Image
                                    src={item.imageUrl || '/placeholder.jpg'}
                                    alt={item.title}
                                    width={50}
                                    height={50}
                                    className="rounded-md" />
                            </li>
                        ))}

                    </ul>
                ) : (
                    <p className="text-black text-xl font-medium text-center">Your Cart Is Empty Please Add Products</p>
                )}
            </div>



        </div>
    );
};
export default ProductCards;
