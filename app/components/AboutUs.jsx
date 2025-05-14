'use client';

export default function AboutUs() {
  return (
    <section
      id="about"
      className="w-full bg-white text-black py-28 px-6 md:px-24 font-raleway"
    >
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold">
          About Us
        </h2>
        <p className="text-base md:text-lg opacity-80 leading-relaxed max-w-3xl mx-auto">
          Geekshive is a company built by geeks, for geeks. With over 15 years in the e-commerce world, we’ve grown from a passion project into a full-scale distribution and logistics partner for global brands.
        </p>
        <p className="text-base md:text-lg opacity-80 leading-relaxed max-w-3xl mx-auto">
          We specialize in marketplace strategy, product positioning, and fulfillment — always focused on making geek culture accessible and engaging for customers across the Americas.
        </p>
      </div>
    </section>
  );
}
