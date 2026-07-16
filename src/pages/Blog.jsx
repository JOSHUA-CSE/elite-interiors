import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import ImageLoader from "../components/ImageLoader";
import imageData from "../data/images.json";

export const blogPosts = [
  {
    slug: "top-interior-design-trends",
    title: "Top Interior Design Trends for Luxury Homes",
    date: "July 12, 2026",
    excerpt: "Discover the latest trends in high-end residential interiors, from fluted wooden panels to monochromatic smart kitchens.",
    image: imageData.find(img => img.id === "img-06") || { fallback: "" },
    category: "Design Inspiration"
  },
  {
    slug: "how-to-choose-interior-designer",
    title: "How to Choose the Right Interior Designer in Tamil Nadu",
    date: "June 28, 2026",
    excerpt: "A comprehensive guide on what to look for when hiring an interior architect for your dream villa or apartment.",
    image: imageData.find(img => img.id === "img-02") || { fallback: "" },
    category: "Guides"
  },
  {
    slug: "modular-kitchen-guide",
    title: "The Ultimate Modular Kitchen Design Guide",
    date: "May 15, 2026",
    excerpt: "Everything you need to know about materials, layouts, and appliances for a highly functional modular kitchen.",
    image: imageData.find(img => img.id === "img-04") || { fallback: "" },
    category: "Kitchens"
  },
  {
    slug: "luxury-wardrobe-planning",
    title: "Luxury Wardrobe Planning: Sliding Doors vs Walk-ins",
    date: "April 02, 2026",
    excerpt: "Compare sliding glass wardrobes and custom walk-in closets to determine the best storage solution for your bedroom.",
    image: imageData.find(img => img.id === "img-12") || { fallback: "" },
    category: "Bedrooms"
  }
];

export default function Blog() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-black">
      <SEO 
        title="Interior Design Blog | Trends, Tips & Inspiration" 
        description="Read the latest articles on luxury home design, modular kitchens, and turnkey interior solutions by Elite Interiors."
        url="/blog"
      />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-16">
          <span className="font-display text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4 block">
            JOURNAL
          </span>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white mb-6">
            Design <span className="italic text-gold">Insights.</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {blogPosts.map((post) => (
            <Link 
              to={`/blog/${post.slug}`} 
              key={post.slug}
              className="group block rounded-lg border border-white/10 bg-zinc-950 overflow-hidden hover:border-white/30 transition-colors duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <ImageLoader 
                  imageObj={post.image} 
                  alt={post.title} 
                  priority={false}
                  hoverZoom={true}
                />
              </div>
              <div className="p-8">
                <span className="font-display text-gold text-[10px] tracking-widest uppercase mb-3 block">
                  {post.category} • {post.date}
                </span>
                <h2 className="font-display text-2xl font-light text-white mb-4 group-hover:text-gold transition-colors">
                  {post.title}
                </h2>
                <p className="font-sans text-sm text-white/60 leading-relaxed">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center text-xs font-display tracking-widest text-white mt-6 group-hover:text-gold transition-colors">
                  READ ARTICLE &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
