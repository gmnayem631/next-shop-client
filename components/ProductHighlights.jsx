"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import products from "@/data/products.json";

const ProductHighlights = () => {
  // Pick first 4 products
  const featured = products.slice(0, 4);

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-10 text-[#10B981]">
        Product Highlights
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {featured.map((product) => (
          <motion.div
            key={product.id}
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-md p-4 flex flex-col"
          >
            <div className="relative w-full h-48 mb-4">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {product.name}
            </h3>
            <p className="text-sm text-[#64748B] mb-3 line-clamp-2">
              {product.description}
            </p>
            <p className="text-[#10B981] font-bold mb-4">${product.price}</p>
            <Link
              href={`/products/${product.id}`}
              className="mt-auto btn bg-[#10B981] text-white hover:bg-[#0d966f]"
            >
              Details
            </Link>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link
          href="/products"
          className="btn btn-outline rounded-lg text-lg text-[#10B981] border-[#10B981] hover:bg-[#10B981] hover:text-white transition-colors"
        >
          See More
        </Link>
      </div>
    </section>
  );
};

export default ProductHighlights;
