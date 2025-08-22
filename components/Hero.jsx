import Image from "next/image";
import Link from "next/link";
import React from "react";
import product from "@/public/product.png";

const Hero = () => {
  return (
    <section className="bg-[#f9fafb]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-[#10B981] leading-tight">
            Manage Products <br /> With Confidence
          </h1>
          <p className="mt-4 text-lg text-[#64748B]">
            <strong>NextShop</strong> helps you showcase and manage your
            products effortlessly. Explore, add, and control everything from one
            dashboard.
          </p>

          <div className="mt-6 flex justify-center lg:justify-start">
            <Link
              href="/login"
              className="px-6 py-3 rounded-lg text-white font-semibold shadow-md transition hover:opacity-90"
              style={{ backgroundColor: "#10B981" }}
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <Image
            src={product} // put your image inside /public folder
            alt="Product management illustration"
            width={500}
            height={400}
            className="rounded-xl shadow-lg border border-[#F87171]" // coral accent border
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
