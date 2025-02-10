import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="lg:px-24 px-6">
      <main className="min-h-[80vh] flex items-center">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="flex justify-center">
            <Image
              src={"/hero1.jpg"}
              width={600}
              height={600}
              alt="Pulse Tech Accessories"
              className="w-full max-w-[450px] h-auto rounded-xl opacity-100"
            />
          </div>
          <div className="my-auto grid gap-6">
            <h1 className="lg:text-5xl text-3xl font-semibold font-sans lg:leading-[60px]">
              Power Up Your Devices with <span className="text-blue-500">Pulse Tech</span>!
            </h1>
            <h3 className="text-gray-700">
              Pulse Tech is your go-to platform for high-quality mobile accessories.
              Get the best deals on chargers, earphones, cases, and more at unbeatable prices!
            </h3>
            <div className="pt-3">
              <Link
                href={"/product"}
                className="px-6 py-3 rounded-lg bg-black text-white hover:bg-blue-600 transition"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;