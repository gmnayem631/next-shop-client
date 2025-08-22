import React from "react";

export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-[#10B981]">Contact Us</h1>
        <p className="text-[#64748B] text-lg">
          Have questions or need support? Reach out to us and we’ll get back to
          you as soon as possible.
        </p>
      </section>

      {/* Contact Form */}
      <section className="bg-white rounded-lg shadow-lg p-8">
        <form className="space-y-6">
          <div>
            <label className="block text-[#64748B] mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#10B981]"
            />
          </div>

          <div>
            <label className="block text-[#64748B] mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#10B981]"
            />
          </div>

          <div>
            <label className="block text-[#64748B] mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Your Message"
              rows={5}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#10B981]"
            />
          </div>

          <button
            type="submit"
            className="btn bg-[#10B981] text-white hover:bg-[#F87171] transition-colors w-full"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Company Info */}
      <section className="text-center space-y-2">
        <h2 className="text-2xl font-semibold text-[#10B981]">Our Office</h2>
        <p className="text-[#64748B]">123 NextShop Street, Dhaka, Bangladesh</p>
        <p className="text-[#64748B]">Email: support@nextshop.com</p>
        <p className="text-[#64748B]">Phone: +880 123 456 789</p>
      </section>
    </div>
  );
}
