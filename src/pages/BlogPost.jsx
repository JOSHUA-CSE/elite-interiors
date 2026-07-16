import { useParams, Navigate, Link } from "react-router-dom";
import { blogPosts } from "./Blog";
import SEO from "../components/SEO";
import ImageLoader from "../components/ImageLoader";

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Schema.org BlogPosting
  const articleSchema = {
    "@type": "BlogPosting",
    "headline": post.title,
    "datePublished": "2026-07-12T08:00:00+08:00", // Placeholder ISO
    "dateModified": "2026-07-12T08:00:00+08:00",
    "author": {
      "@type": "Organization",
      "name": "Elite Interiors"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Elite Interiors",
      "logo": {
        "@type": "ImageObject",
        "url": "https://elite-interiors.vercel.app/logo.png"
      }
    },
    "image": post.image.fallback,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://elite-interiors.vercel.app/blog/${post.slug}`
    }
  };

  return (
    <article className="min-h-screen pt-32 pb-24 bg-black">
      <SEO 
        title={post.title} 
        description={post.excerpt}
        url={`/blog/${post.slug}`}
        isArticle={true}
        structuredData={[articleSchema]}
      />
      
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12">
          <Link to="/blog" className="font-display text-gold text-xs tracking-widest uppercase hover:text-white transition-colors">
            &larr; Back to Journal
          </Link>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white mt-8 mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center text-xs font-sans text-white/50 space-x-4">
            <span>By Elite Interiors</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span className="uppercase tracking-wider text-gold">{post.category}</span>
          </div>
        </div>

        <div className="w-full h-64 md:h-96 rounded-lg overflow-hidden border border-white/10 mb-12 relative">
           <ImageLoader 
              imageObj={post.image} 
              alt={post.title} 
              priority={true}
           />
        </div>

        {/* Dummy Blog Content designed for SEO */}
        <div className="prose prose-invert prose-lg max-w-none font-sans font-light text-white/70 leading-relaxed">
          <p className="lead text-xl text-white/90">
            {post.excerpt}
          </p>
          <h2>The Evolution of Modern Interiors</h2>
          <p>
            In recent years, the landscape of interior design has shifted dramatically towards minimalism blended with warm, natural textures.
            Homeowners are increasingly looking for <strong>turnkey interior solutions</strong> that remove the hassle of coordinating with multiple vendors while guaranteeing a premium finish.
          </p>
          <h3>Why Materials Matter</h3>
          <p>
            Selecting the right materials is paramount. High-density water-resistant boards (HDHMR), acoustic-grade glass, and 
            precision-engineered UPVC or Aluminium profiles are now standard in luxury homes across Tamil Nadu.
          </p>
          <ul>
            <li><strong>Sustainability:</strong> Eco-friendly paints and sustainable wood sources.</li>
            <li><strong>Durability:</strong> Scratch-resistant acrylics and PU finishes for modular kitchens.</li>
            <li><strong>Aesthetics:</strong> Seamless fluted panels and smart LED integrations.</li>
          </ul>
          <h2>Space Planning for the Future</h2>
          <p>
            Whether designing a sprawling villa in Coimbatore or a modern apartment, intelligent space planning ensures that every square foot is functional. 
            Custom-built wardrobes with sliding mechanisms, concealed lighting, and integrated media units play a huge role in optimizing the living area.
          </p>
          <div className="mt-16 p-8 border border-white/10 bg-zinc-950 rounded-lg text-center">
            <h3 className="font-display text-xl text-white mb-4">Ready to upgrade your space?</h3>
            <p className="text-sm mb-6 text-white/60">Contact Elite Interiors today for a free design consultation.</p>
            <Link to="/#contact" className="inline-block px-8 py-3 bg-white text-black font-display text-xs tracking-widest uppercase hover:bg-gold hover:text-white transition-colors">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
