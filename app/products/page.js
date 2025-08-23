"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import productsData from "@/data/products.json";

function ProductList() {
  const [visibleCount, setVisibleCount] = useState(12);

  const handleLoadMore = () => {
    setVisibleCount(productsData.length);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-10 text-[#10B981]">
        All Products
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {productsData.slice(0, visibleCount).map((product) => (
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

      {visibleCount < productsData.length && (
        <div className="text-center mt-12">
          <button
            onClick={handleLoadMore}
            className="btn btn-outline rounded-lg text-[#10B981] border-[#10B981] hover:bg-[#10B981] hover:text-white transition-colors"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
}

export default ProductList;
