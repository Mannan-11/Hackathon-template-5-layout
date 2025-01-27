"use client"
import { useEffect, useState } from "react";
import { client } from "../../../sanity/lib/client";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

interface Product {
    _id: string;
    title: string;
    price: number;
    description: string;
    discountPercentage: number;
    imageUrl: string;
    tags: string[];
}

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        if (!id) return;

        const fetchProduct = async () => {
            try {
                const query = `*[_type == "product" && _id == "${id}"] {
                    _id,
                    title,
                    price,
                    description,
                    discountPercentage,
                    "imageUrl": productImage.asset->url,
                    tags
                }`;

                const data = await client.fetch(query);
                if (data.length > 0) {
                    setProduct(data[0]);
                } else {
                    console.error("Product not found!");
                }
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };

        fetchProduct();
    }, [id]);

    if (!product) {
        return <div>
            <p>Loading...</p>;
            <div className="flex flex-col justify-center items-center h-screen px-4">
                <h2 className="text-3xl font-bold text-red-500 mb-4 text-center md:text-4xl">Product Not Found</h2>
                <p className="text-lg mb-6 text-center md:text-xl">Sorry, the product you are looking for does not exist or is no longer available.</p>
                <button
                    className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 text-base md:text-lg"
                    onClick={() => window.location.href = '/'}
                >
                    Go to Homepage
                </button>
            </div>

        </div>

    }

    return (
        <div className="font-Montserat p-8 bg-gradient-to-r from-purple-200 to-blue-200 shadow-lg rounded-lg md:p-10 lg:p-12">
            <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2">
                <div >
                <h1 className="text-3xl md:text-4xl font-extrabold text-violet-900 hover:text-violet-600 transition duration-300">{product.title}</h1>
                <Image
                    src={product.imageUrl || "/placeholder.jpg"}
                    alt={product.title}
                    width={500}
                    height={500}
                    className="object-cover rounded-lg shadow-md mt-6 transition-transform transform hover:scale-105"
                    />
                    <p className="text-3xl md:text-3xl font-extrabold text-violet-900 hover:text-violet-600 transition duration-300 mt-5">Product Description</p>
                <p className="mt-6 text-gray-700 text-base md:text-lg">{product.description}</p>
                    </div>
                    <div className="m-10"> 
                        <div className="flex items-center gap-3">
                            <p className="text-3xl mt-3 md:text-4xl font-extrabold text-violet-900 hover:text-violet-600 transition duration-300">Price</p>
                    <p className="text-xl md:text-2xl font-semibold text-violet-800 mt-4">${product.price}</p>
                        </div>
                {product.discountPercentage > 0 && (
                    <p className="text-green-600 text-sm font-medium mt-2">{product.discountPercentage}% OFF</p>
                )}
                <div className="mt-4 flex flex-wrap gap-3">
                    {product.tags.map((tag, index) => (
                        <span
                        key={index}
                        className="text-sm bg-slate-300 text-black rounded-full px-4 py-2 hover:bg-slate-400 transition duration-200"
                        >
                            {tag}
                        </span>
                    ))}
                    </div><Link href="/Payment">
                    <button className="mt-10 text-2xl md:text-3xl font-extrabold text-violet-900 hover:text-violet-600 transition duration-300">Buy Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;