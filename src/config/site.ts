/**
 * Rental Contractor Site Configuration
 * All business details, service areas, and contact points originate from here.
 * Any section that depends on an empty optional field must not render.
 */

export interface ServiceTown {
  name: string;
  slug: string;
  distanceMiles?: number;
  county?: string;
  landmarks?: string[];
  soilCharacteristics?: string;
}

export const businessName = "Apex Concrete Leveling";
export const phoneDisplay = "(614) 555-0192";
export const phoneTel = "tel:6145550192";
export const email = "estimates@apexconcreteleveling.com";
export const city = "Columbus";
export const state = "OH";

export const serviceAreaTowns: ServiceTown[] = [
  {
    name: "Dublin",
    slug: "dublin",
    distanceMiles: 14,
    county: "Franklin County",
    landmarks: ["Bridge Park", "Muirfield Village", "Historic Dublin"],
    soilCharacteristics: "Dense glacial till and clay loam prone to seasonal water saturation and shrink-swell settling.",
  },
  {
    name: "Westerville",
    slug: "westerville",
    distanceMiles: 16,
    county: "Franklin and Delaware Counties",
    landmarks: ["Uptown Westerville", "Hoover Reservoir", "Otterbein University area"],
    soilCharacteristics: "Silty clay subgrades with high moisture retention around reservoir drainages.",
  },
  {
    name: "Grove City",
    slug: "grove-city",
    distanceMiles: 11,
    county: "Franklin County",
    landmarks: ["Town Center", "Beulah Park", "Stringtown Corridor"],
    soilCharacteristics: "Compacted backfill over low-permeability clay, common near newer subdivisions.",
  },
  {
    name: "Hilliard",
    slug: "hilliard",
    distanceMiles: 13,
    county: "Franklin County",
    landmarks: ["Old Hilliard", "Norwich Township", "Homestead Metro Park area"],
    soilCharacteristics: "Glacial gravel pockets combined with surface clays, creating void pockets underneath uncompacted driveway aprons.",
  },
  {
    name: "Gahanna",
    slug: "gahanna",
    distanceMiles: 12,
    county: "Franklin County",
    landmarks: ["Creekside", "Big Walnut Creek basin", "Rocky Fork area"],
    soilCharacteristics: "Creek floodplain alluvial soils that shift during heavy spring rains, causing sidewalk and patio voids.",
  },
];

export const domain = "https://apexconcreteleveling.com";

// Optional configuration fields (last six are optional)
export const licenseNumber: string | undefined = "OH-HIC-2024-8841";
export const insured: boolean = true;
export const warrantyText: string | undefined = "2-year residential warranty on slab stability under normal subgrade soil conditions";
export const yearsInBusiness: number | undefined = 12;
export const streetAddress: string | undefined = undefined; // Service-area business by default
export const gbpUrl: string | undefined = undefined;
export const trackingScriptUrl: string | undefined = undefined;
export const gaId: string | undefined = undefined;

export default {
  businessName,
  phoneDisplay,
  phoneTel,
  email,
  city,
  state,
  serviceAreaTowns,
  domain,
  licenseNumber,
  insured,
  warrantyText,
  yearsInBusiness,
  streetAddress,
  gbpUrl,
  trackingScriptUrl,
  gaId,
};
