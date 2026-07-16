import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import FeaturedProjects from "../components/FeaturedProjects";
import PortfolioGallery from "../components/PortfolioGallery";
import WhyChooseUs from "../components/WhyChooseUs";
import ProcessTimeline from "../components/ProcessTimeline";
import Statistics from "../components/Statistics";
import InstagramShowcase from "../components/InstagramShowcase";
import Contact from "../components/Contact";
import SEO from "../components/SEO";

export default function Home() {
  const structuredData = [
    {
      "@type": "InteriorDesigner",
      "@id": "https://elite-interiors.vercel.app/#interiordesigner",
      "name": "Elite Interiors",
      "image": "https://elite-interiors.vercel.app/logo.png",
      "description": "Premium interior designers in Tamil Nadu offering turnkey interior solutions, modular kitchens, wardrobes, and luxury false ceilings.",
      "telephone": "+918807555436",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "No 12 second floor, Podanur main road",
        "addressLocality": "Coimbatore",
        "addressRegion": "Tamil Nadu",
        "postalCode": "641023",
        "addressCountry": "IN"
      },
      "areaServed": "Tamil Nadu",
      "url": "https://elite-interiors.vercel.app"
    }
  ];

  return (
    <main>
      <SEO 
        title="Luxury Interior Designers in Tamil Nadu | Modular Kitchens & Turnkey Solutions" 
        description="Elite Interiors provides premium home and office interior design services in Tamil Nadu. Specialists in modular kitchens, wardrobes, and modern architectural solutions."
        url="/"
        structuredData={structuredData}
      />
      <Hero />
      <About />
      <Services />
      <FeaturedProjects />
      <PortfolioGallery />
      <WhyChooseUs />
      <ProcessTimeline />
      <Statistics />
      <InstagramShowcase />
      <Contact />
    </main>
  );
}
