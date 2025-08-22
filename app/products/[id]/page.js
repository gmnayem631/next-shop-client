"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import products from "@/data/products.json";

const ProductDetailsPage = (props) => {
  // Unwrap params for future-proof Next.js 15+
  const { id } = React.use(props.params);

  // Find product by ID
  const product = products.find((p) => p.id === Number(id));
  if (!product) notFound();

  return (
    <motion.section
      className="max-w-5xl mx-auto px-4 py-16"
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.2 }}
    >
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Image */}
        <motion.div
          className="relative w-full lg:w-1/2 h-80 lg:h-[400px] rounded-2xl shadow-md overflow-hidden"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Info */}
        <motion.div
          className="lg:w-1/2 flex flex-col justify-between"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <motion.h1
              className="text-3xl font-bold text-gray-800 mb-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {product.name}
            </motion.h1>
            <motion.p
              className="text-[#64748B] mb-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {product.description}
            </motion.p>
            <motion.p
              className="text-[#10B981] font-bold text-2xl mb-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              ${product.price}
            </motion.p>
            <motion.p
              className="text-gray-600 mb-2"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="font-semibold">Category:</span>{" "}
              {product.category}
            </motion.p>
            <motion.p
              className="text-gray-600 mb-2"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <span className="font-semibold">Stock:</span> {product.stock}{" "}
              units
            </motion.p>
            <motion.p
              className="text-gray-600 mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <span className="font-semibold">Rating:</span> {product.rating} ⭐
            </motion.p>
          </div>

          {/* Buttons */}
          <motion.div
            className="flex gap-4 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} className="flex-1">
              <Link
                href="/products"
                className="btn btn-outline rounded-lg text-[#10B981] border-[#10B981] hover:bg-[#10B981] hover:text-white transition-colors w-full text-center"
              >
                Back to Products
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="flex-1">
              <button className="btn bg-[#10B981] text-white hover:bg-[#0d966f] transition-colors rounded-lg w-full">
                Add to Cart
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProductDetailsPage;
