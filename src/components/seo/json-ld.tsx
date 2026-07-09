export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://azva.us/#organization",
        name: "AZVA",
        url: "https://azva.us",
        logo: "https://azva.us/brand/azva-logo.png",
        description:
          "AZVA is a strategic transformation and operational intelligence platform helping leaders align strategy, operations, technology, and capital into enduring value.",
        sameAs: [],
      },
      {
        "@type": "WebSite",
        "@id": "https://azva.us/#website",
        url: "https://azva.us",
        name: "AZVA",
        publisher: {
          "@id": "https://azva.us/#organization",
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://azva.us/#service",
        name: "AZVA",
        url: "https://azva.us",
        areaServed: "North America",
        serviceType: [
          "Strategic Advisory",
          "Enterprise Transformation",
          "Operational Intelligence",
          "Venture Partnerships",
          "Automation Readiness Assessment",
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}