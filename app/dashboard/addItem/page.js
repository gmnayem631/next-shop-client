"use client";

import { useForm } from "react-hook-form";

export default function AddItemForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Form Data:", data);

    reset();
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Add New Item</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block font-medium mb-1">Name</label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className="input input-bordered w-full"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        {/* Description */}
        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea
            {...register("description", {
              required: "Description is required",
            })}
            className="textarea textarea-bordered w-full"
          />
          {errors.description && (
            <p className="text-red-500">{errors.description.message}</p>
          )}
        </div>

        {/* Price */}
        <div>
          <label className="block font-medium mb-1">Price</label>
          <input
            type="number"
            step="0.01"
            {...register("price", { required: "Price is required" })}
            className="input input-bordered w-full"
          />
          {errors.price && (
            <p className="text-red-500">{errors.price.message}</p>
          )}
        </div>

        {/* Category */}
        <div>
          <label className="block font-medium mb-1">Category</label>
          <input
            type="text"
            {...register("category", { required: "Category is required" })}
            className="input input-bordered w-full"
          />
          {errors.category && (
            <p className="text-red-500">{errors.category.message}</p>
          )}
        </div>

        {/* Image URL */}
        <div>
          <label className="block font-medium mb-1">Image URL</label>
          <input
            type="url"
            {...register("image", { required: "Image URL is required" })}
            className="input input-bordered w-full"
          />
          {errors.image && (
            <p className="text-red-500">{errors.image.message}</p>
          )}
        </div>

        {/* Stock */}
        <div>
          <label className="block font-medium mb-1">Stock</label>
          <input
            type="number"
            {...register("stock", { required: "Stock is required" })}
            className="input input-bordered w-full"
          />
          {errors.stock && (
            <p className="text-red-500">{errors.stock.message}</p>
          )}
        </div>

        {/* Rating */}
        <div>
          <label className="block font-medium mb-1">Rating</label>
          <input
            type="number"
            step="0.1"
            {...register("rating", { required: "Rating is required" })}
            className="input input-bordered w-full"
          />
          {errors.rating && (
            <p className="text-red-500">{errors.rating.message}</p>
          )}
        </div>

        {/* Submit */}
        <button type="submit" className="btn btn-primary w-full">
          Add Item
        </button>
      </form>
    </div>
  );
}
