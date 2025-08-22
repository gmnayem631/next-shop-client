import Image from "next/image";
import { motion } from "framer-motion";
import heroImg from "@/public/about-hero.jpg";
import team1 from "@/public/team1.jpg";
import team2 from "@/public/team2.jpg";
import team3 from "@/public/team3.jpg";
import team4 from "@/public/team4.jpg";
import ourStory from "@/public/our-story.jpg";

const teamMembers = [
  { name: "Alice Johnson", role: "CEO", image: team1 },
  { name: "Bob Smith", role: "CTO", image: team2 },
  { name: "Carol Lee", role: "Product Manager", image: team3 },
  { name: "David Kim", role: "Designer", image: team4 },
];

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 space-y-24">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-[#10B981]">
          About NextShop
        </h1>
        <p className="text-[#64748B] text-lg md:text-xl max-w-2xl mx-auto">
          NextShop is dedicated to bringing you high-quality products with a
          seamless online shopping experience. Our mission is to make shopping
          effortless, enjoyable, and reliable.
        </p>
        <button className="btn bg-[#10B981] rounded-lg text-white hover:bg-[#0d966f] transition-colors">
          Explore Products
        </button>
        <div className="mt-6">
          <Image
            src="/about-hero.jpg"
            alt="About Hero"
            width={800}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Our Story Section */}
      <section className="md:flex md:items-center md:gap-12 space-y-6 md:space-y-0">
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-3xl font-semibold text-[#10B981]">Our Story</h2>
          <p className="text-[#64748B]">
            Founded in 2025, NextShop started with a vision to revolutionize
            online shopping. We focus on quality, reliability, and customer
            satisfaction.
          </p>
          <p className="text-[#64748B]">
            Shopping should be intuitive and stress-free. Our platform is
            designed to help you find what you need quickly and confidently.
          </p>
        </div>
        <div className="md:w-1/2">
          <Image
            src={ourStory}
            alt="Our Story"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Team Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-semibold text-[#10B981] text-center">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="text-center">
              <Image
                src={member.image}
                alt={member.name}
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4 shadow-lg"
              />
              <h3 className="font-semibold text-[#10B981]">{member.name}</h3>
              <p className="text-[#64748B]">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold text-[#10B981] mb-4">
          Ready to Explore?
        </h2>
        <button className="btn bg-[#10B981] text-white hover:bg-[#F87171] transition-colors">
          Browse Products
        </button>
      </section>
    </div>
  );
}
