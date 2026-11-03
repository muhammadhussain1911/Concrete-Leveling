import {
  businessName,
  phoneDisplay,
  email,
  city,
  state,
  domain,
  streetAddress,
  serviceAreaTowns,
  licenseNumber,
  yearsInBusiness,
  warrantyText,
} from '../config/site.ts';

export const businessId = `${domain}/#business`;
export const websiteId = `${domain}/#website`;

/**
 * Primary Local Business Schema (HomeAndConstructionBusiness)
 */
export function getBusinessSchema() {
  const schema: Record<string, any> = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': businessId,
    name: businessName,
    url: `${domain}/`,
    telephone: phoneDisplay,
    email: email,
    priceRange: '$$',
    currenciesAccepted: 'USD',
    paymentAccepted: 'Cash, Credit Card, Check, ACH',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '08:00',
        closes: '14:00',
      },
    ],
    areaServed: [
      {
        '@type': 'City',
        name: city,
        addressRegion: state,
      },
      ...serviceAreaTowns.map((town) => ({
        '@type': 'City',
        name: town.name,
        addressRegion: state,
        ...(town.county ? { containedInPlace: { '@type': 'AdministrativeArea', name: town.county } } : {}),
      })),
    ],
    knowsAbout: [
      'Polyurethane Foam Concrete Leveling',
      'Polyjacking',
      'Concrete Slab Lifting',
      'Subgrade Void Filling',
      'Sunken Driveway Repair',
      'Sidewalk Trip Hazard Repair',
      'Patio and Pool Deck Leveling',
      'Garage Floor Slab Leveling',
      'Warehouse Slab Stabilization',
      'Porch and Step Realignment',
    ],
    description: `Professional polyurethane foam concrete leveling and polyjacking contractor serving ${city}, ${state} and surrounding communities.`,
  };

  if (streetAddress) {
    schema.address = {
      '@type': 'PostalAddress',
      streetAddress: streetAddress,
      addressLocality: city,
      addressRegion: state,
      addressCountry: 'US',
    };
  }

  if (licenseNumber) {
    schema.hasCredential = {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Contractor License',
      identifier: licenseNumber,
    };
  }

  return schema;
}

/**
 * WebSite Schema with SearchAction
 */
export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': websiteId,
    url: `${domain}/`,
    name: businessName,
    inLanguage: 'en-US',
    publisher: {
      '@id': businessId,
    },
  };
}

/**
 * Service Schema for Money and Sub-Service Pages
 */
export function getServiceSchema(opts: {
  name: string;
  description: string;
  serviceType: string;
  canonicalPath: string;
  areaName?: string;
  countyName?: string;
}) {
  const serviceUrl = new URL(opts.canonicalPath, domain).toString();
  
  const area = opts.areaName
    ? {
        '@type': 'City',
        name: `${opts.areaName}, ${state}`,
        ...(opts.countyName ? { containedInPlace: { '@type': 'AdministrativeArea', name: opts.countyName } } : {}),
      }
    : [
        { '@type': 'City', name: `${city}, ${state}` },
        ...serviceAreaTowns.map((t) => ({ '@type': 'City', name: `${t.name}, ${state}` })),
      ];

  const schema: Record<string, any> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${serviceUrl}#service`,
    name: opts.name,
    serviceType: opts.serviceType,
    category: 'Concrete Leveling & Subgrade Stabilization',
    description: opts.description,
    url: serviceUrl,
    provider: {
      '@id': businessId,
    },
    areaServed: area,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: `${domain}/contact/`,
    },
  };

  if (warrantyText) {
    schema.termsOfService = warrantyText;
  }

  return schema;
}

/**
 * HowTo Schema for Step-by-Step Lifting Processes
 */
export function getHowToSchema(opts: {
  name: string;
  description: string;
  canonicalPath: string;
  steps: { title: string; text: string }[];
  totalTime?: string;
}) {
  const pageUrl = new URL(opts.canonicalPath, domain).toString();

  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    '@id': `${pageUrl}#howto`,
    name: opts.name,
    description: opts.description,
    totalTime: opts.totalTime || 'PT2H',
    tool: [
      { '@type': 'HowToTool', name: 'Rotary Hammer Drill with 5/8-inch Bit' },
      { '@type': 'HowToTool', name: 'Continuous Optical Laser Transit System' },
      { '@type': 'HowToTool', name: 'Heated Mobile Polyurethane Proportioning Unit' },
      { '@type': 'HowToTool', name: 'Mechanical Injection Packers' },
    ],
    supply: [
      { '@type': 'HowToSupply', name: 'Two-Component Closed-Cell Polyurethane Foam' },
      { '@type': 'HowToSupply', name: 'Color-Matched Polymer-Modified Hydraulic Mortar' },
    ],
    step: opts.steps.map((st, idx) => ({
      '@type': 'HowToStep',
      position: idx + 1,
      name: st.title,
      text: st.text,
      url: `${pageUrl}#step-${idx + 1}`,
    })),
  };
}

/**
 * TechArticle / Article Schema for Educational Guides
 */
export function getArticleSchema(opts: {
  title: string;
  description: string;
  canonicalPath: string;
  datePublished?: string;
  dateModified?: string;
}) {
  const articleUrl = new URL(opts.canonicalPath, domain).toString();

  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    '@id': `${articleUrl}#article`,
    headline: opts.title,
    description: opts.description,
    url: articleUrl,
    inLanguage: 'en-US',
    mainEntityOfPage: articleUrl,
    datePublished: opts.datePublished || '2026-01-15T08:00:00-05:00',
    dateModified: opts.dateModified || '2026-11-01T08:00:00-05:00',
    author: {
      '@id': businessId,
    },
    publisher: {
      '@id': businessId,
    },
  };
}

/**
 * FAQPage Schema
 */
export function getFaqSchema(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  };
}

/**
 * ContactPage Schema
 */
export function getContactPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${domain}/contact/#webpage`,
    url: `${domain}/contact/`,
    name: `Contact ${businessName}`,
    description: `Request an on-site concrete elevation inspection and written proposal in ${city}, ${state}.`,
    mainEntity: {
      '@id': businessId,
    },
  };
}

/**
 * AboutPage Schema
 */
export function getAboutPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${domain}/about/#webpage`,
    url: `${domain}/about/`,
    name: `About ${businessName}`,
    description: `Background, credentials, and concrete leveling philosophy of ${businessName} in ${city}, ${state}.`,
    mainEntity: {
      '@id': businessId,
    },
  };
}

/**
 * Contractor Past Work & ImageObject Gallery Schema
 */
export function getProjectGallerySchema(projects: Array<{
  title: string;
  summary: string;
  servicePageUrl: string;
  location: string;
  beforeAlt: string;
  afterAlt: string;
  beforeBadge: string;
  afterBadge: string;
}>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${businessName} Concrete Leveling Before and After Project Gallery`,
    description: `Verified case studies of polyurethane foam concrete leveling across Central Ohio.`,
    itemListElement: projects.map((p, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      item: {
        '@type': 'CreativeWork',
        name: p.title,
        description: p.summary,
        url: new URL(p.servicePageUrl, domain).toString(),
        provider: {
          '@id': businessId,
        },
        locationCreated: {
          '@type': 'Place',
          name: p.location,
          address: {
            '@type': 'PostalAddress',
            addressLocality: p.location.split(',')[0].trim(),
            addressRegion: 'OH',
            addressCountry: 'US',
          },
        },
        image: [
          {
            '@type': 'ImageObject',
            name: `${p.title} - Before Condition`,
            caption: p.beforeAlt,
            description: p.beforeBadge,
          },
          {
            '@type': 'ImageObject',
            name: `${p.title} - After Polyjacking Result`,
            caption: p.afterAlt,
            description: p.afterBadge,
          },
        ],
      },
    })),
  };
}

