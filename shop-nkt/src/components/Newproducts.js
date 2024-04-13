"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
const href = "http://localhost/wordpress/wp-json/wp/v2/product";
export const Newproducts = () => {
    const [products, setProduct] = useState([]);
    const ListProducts = async () => {
        await fetch(href, {
            method: "GET",
        })
            .then((e) => {
                return e.json();
            })
            .then((n) => {
                setProduct(n);
            });
    };
    useEffect(() => {
        ListProducts();
    }, []);
    console.log(products);

    //image
    const [images, setImages] = useState([]);
    const ListImages = async () => {
        await fetch("http://localhost/wordpress/wp-json/wp/v2/media/", {
            method: "GET",
        })
            .then((e) => {
                return e.json();
            })
            .then((n) => {
                setImages(n);
            });
    };
    useEffect(() => {
        ListImages();
    }, []);
    //const linkimage = "http://localhost/wordpress/wp-json/wp/v2/media/";
    return (
        <div>
            <div className="container pt-8 ">
                <h2 className="font-medium text-2xl pb-4">New Product</h2>
                <div className="grid grid-cols-1 place-items-center sm:place-content-start sm:grid-cols-2 lg: grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
                    {
                        images.map((item1, index1) => (
                            <>
                                <div className="px-4 border border-gray-200 rounded-xl max-w-[400px] max-h-[300]">
                                    <div>
                                        <Link href={"/sanpham/"+item1.id}>
                                            <Image
                                                className="w-auto h-auto"
                                                src={item1.guid.rendered}
                                                width={200}
                                                height={300}
                                                alt={item1.title.rendered}
                                            />
                                        </Link>
                                    </div>

                                    <div className="space-y-2 py-2">
                                        <h2 className="text-accent font-medium uppercase">
                                            {item1.title.rendered}
                                        </h2>
                                        <p className="text-gray-500 max-w-[150px]"></p>
                                    </div>
                                </div>
                            </>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Newproducts;
