"use client";

import Script from "next/script";

export default function JsonLd() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Ds Nexa Solutions",
    "alternateName": "DS Nexa",
    "url": "https://dsnexasolutions.co.in",
    "logo": "https://dsnexasolutions.co.in/brand/logo.png",
    "description": "Premium software studio specializing in high-scale distributed systems, AI integrations, custom Shopify apps, and immersive product engineering.",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ahmedabad",
      "addressRegion": "Gujarat",
      "addressCountry": "IN"
    },
    "founder": {
      "@type": "Organization",
      "name": "Ds Nexa Solutions"
    },
    "sameAs": [
      "https://github.com/iamdeepakg21", // Based on user's GitHub username in deployment logs
      // Add other social media links as needed
    ],
    "service": [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Software Engineering",
        "description": "Custom distributed systems, cloud-native architecture, and edge computing."
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "E-commerce Solutions",
        "description": "High-fidelity custom Shopify storefronts and Liquid development."
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "AI Integrations",
        "description": "Custom AI models and automation for business efficiency."
      }
    ]
  };

  return (
    <Script
      id="json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
    />
  );
}
