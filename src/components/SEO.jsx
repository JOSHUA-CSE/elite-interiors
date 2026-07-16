import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, url, isArticle, structuredData }) {
  const siteName = "Elite Interiors";
  const defaultDescription = "Premier architectural fabrication and interior design company in Tamil Nadu. Specialists in modular kitchens, wardrobes, luxury villas, and turnkey interior solutions.";
  const siteUrl = "https://elite_interiors.vercel.app";
  const pageTitle = title ? `${title} | ${siteName}` : siteName;
  const pageDescription = description || defaultDescription;
  const pageUrl = url ? `${siteUrl}${url}` : siteUrl;

  const baseSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        "name": siteName,
        "url": siteUrl,
        "logo": {
          "@type": "ImageObject",
          "url": `${siteUrl}/logo.png`, // Optional: replace with actual logo
          "width": "112",
          "height": "112"
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": `${siteUrl}/#localbusiness`,
        "name": "Elite Interiors - Architectural Fabricators",
        "image": `${siteUrl}/logo.png`,
        "telephone": "+91 8807555436",
        "email": "elitinterirors@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "No 12 second floor, Podanur main road",
          "addressLocality": "Coimbatore",
          "addressRegion": "Tamil Nadu",
          "postalCode": "641023",
          "addressCountry": "IN"
        },
        "url": siteUrl,
        "priceRange": "$$$"
      }
    ]
  };

  // Merge extra structured data (like FAQPage, BlogPosting)
  const fullSchema = structuredData
    ? { ...baseSchema, "@graph": [...baseSchema["@graph"], ...structuredData] }
    : baseSchema;

  return (
    <Helmet>
      <html lang="en" />
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#000000" />
      <link rel="canonical" href={pageUrl} />

      {/* Geo Tags for Local SEO */}
      <meta name="geo.region" content="IN-TN" />
      <meta name="geo.placename" content="Coimbatore" />

      {/* OpenGraph */}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:type" content={isArticle ? "article" : "website"} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />

      {/* Search Engine Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content={siteName} />

      {/* Structured Data JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(fullSchema)}
      </script>
    </Helmet>
  );
}
