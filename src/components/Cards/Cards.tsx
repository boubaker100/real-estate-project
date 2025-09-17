"use client";

import { Home, ShoppingCart, Key } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CardSection() {
    const router = useRouter();

    const services = [
        {
            title: "Sell",
            description: "Post your property for sale and locate it on the map quickly and easily.",
            link: "/profile/add-property",
            icon: <ShoppingCart size={40} className="text-blue-600" />,
            button: "Discover More",
            


        },
        {
            title: "Buy",
            description: "Find your dream home from thousands of listings.",
            icon: <Home size={40} className="text-green-600" />,
            link: "/apartments",
            button: "Find a Home",
            



        },
        {
            title: "Rent",
            description: "Rent an apartment or house that suits your needs.",
            icon: <Key size={40} className="text-orange-600" />,
            link: "/apartments",
            button: "Explore Rentals",
           

        },
    ];

    return (
 <section className="z-10 py-28 flex">
            <div className="px-10 mx-12 lg:px-8 max-w-7xl w-full">
                <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
                <div className="grid grid-cols-1 gap-14 md:grid-cols-3">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white h-[30rem] border border-gray-00 rounded-1xl drop-shadow-2xl  hover:shadow-2xl transition px-6 pt-28 flex flex-col items-center text-center relative overflow-hidden"  >
                        
                           

                            {/* Card content (icon, title, etc.) */}
                            <div className="relative z-10 flex flex-col items-center">
                                <div className="mb-4">{service.icon}</div>
                                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                                <p className="text-gray-600 mb-6">{service.description}</p>
                                
                                <button
                                    onClick={() => router.push(service.link)}
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 mt-7 rounded-lg transition"
                                >
                                    {service.button}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
