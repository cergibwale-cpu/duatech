import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import LeadForm from "../components/LeadForm";

const Home = () => {
  return (
    <div>
      <Hero />

      <section className="mt-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-orange-600">
          Our Services
        </h2>
        <Services />
      </section>

      <section className="mt-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-800">Get a Quote</h2>
        <LeadForm />
      </section>
    </div>
  );
};

export default Home;
