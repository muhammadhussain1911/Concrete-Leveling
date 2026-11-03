/**
 * Concrete Leveling Contractor Past Work Portfolio & Case Studies
 * Central Ohio Project Dataset with Real Engineering Metrics, Locations, and Visual Assets.
 */

export interface PastProject {
  id: string;
  title: string;
  slug: string;
  serviceType: 'driveways' | 'sidewalks' | 'patios-and-pool-decks' | 'garage-and-warehouse-floors' | 'porches-and-steps';
  serviceLabel: string;
  servicePageUrl: string;
  location: string;
  neighborhood: string;
  townSlug: string;
  dropDepth: string;
  timeToComplete: string;
  cureTime: string;
  costSaved: string;
  levelingCost: string;
  replacementQuote: string;
  portsDrilled: number;
  cause: string;
  solution: string;
  summary: string;
  beforeAlt: string;
  afterAlt: string;
  beforeBadge: string;
  afterBadge: string;
  // SVG Vector graphic representations (responsive 16:9 ratio, zero external asset dependencies)
  beforeSvg: string;
  afterSvg: string;
}

export const pastProjects: PastProject[] = [
  {
    id: 'dublin-driveway-apron',
    title: 'Driveway Apron & Garage Lip Leveling in Dublin, OH',
    slug: 'dublin-driveway-apron',
    serviceType: 'driveways',
    serviceLabel: 'Driveway Leveling',
    servicePageUrl: '/concrete-leveling/driveways/',
    location: 'Dublin, OH',
    neighborhood: 'Muirfield Village / Bridge Park corridor',
    townSlug: 'dublin',
    dropDepth: '2.5 inches',
    timeToComplete: '2 hours 15 minutes',
    cureTime: 'Driveable in 30 minutes',
    costSaved: '$3,450',
    levelingCost: '$1,150',
    replacementQuote: '$4,600',
    portsDrilled: 6,
    cause: 'Uncompacted builder backfill around foundation footer settled over 8 years, accelerated by roof gutter downspout overflow soaking the subgrade clay.',
    solution: 'Drilled six 5/8-inch ports along the garage threshold and driveway apron seam. Injected 42 lbs of structural 4-lb high-density polyurethane foam. Restored exact flush transit alignment with the garage interior floor slab.',
    summary: 'A 2.5-inch drop at the garage apron scraped vehicle undercarriages and trapped rainwater. Within two hours, Apex lifted the two slabs flush and patched injection ports with matching hydraulic cement.',
    beforeAlt: 'Before polyurethane leveling: 2.5-inch sunken concrete driveway apron in Dublin, OH creating a severe lip and standing water pooling toward the garage.',
    afterAlt: 'After polyurethane leveling: Concrete driveway apron in Dublin, OH restored 100 percent flush with garage floor slab, establishing positive drainage away from home.',
    beforeBadge: 'BEFORE: 2.5" Drop & Pooling Water',
    afterBadge: 'AFTER: 100% Flush & Positive Slope',
    beforeSvg: `<svg viewBox="0 0 800 450" width="800" height="450" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Before driveway leveling diagram showing sunken slab">
      <defs>
        <pattern id="soil-pat-1" width="20" height="20" patternUnits="userSpaceOnUse">
          <rect width="20" height="20" fill="#E5DFD5"/>
          <circle cx="4" cy="4" r="1.5" fill="#C5BDB1"/>
          <circle cx="14" cy="12" r="1.5" fill="#B3ABA0"/>
          <circle cx="8" cy="16" r="1" fill="#C5BDB1"/>
        </pattern>
        <linearGradient id="concrete-grad-1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#DCD7CD"/>
          <stop offset="100%" stop-color="#C5BEB2"/>
        </linearGradient>
      </defs>
      <!-- Background & Sky -->
      <rect width="800" height="450" fill="#EFECE6"/>
      <!-- Garage Wall / Brick veneer left -->
      <rect x="0" y="40" width="180" height="240" fill="#8F3E2C"/>
      <!-- Mortar lines -->
      <line x1="0" y1="80" x2="180" y2="80" stroke="#DDD" stroke-width="2"/>
      <line x1="0" y1="120" x2="180" y2="120" stroke="#DDD" stroke-width="2"/>
      <line x1="0" y1="160" x2="180" y2="160" stroke="#DDD" stroke-width="2"/>
      <line x1="0" y1="200" x2="180" y2="200" stroke="#DDD" stroke-width="2"/>
      <rect x="180" y="40" width="16" height="240" fill="#3D444B"/>
      <!-- Garage Floor Slab (Level Benchmark) -->
      <polygon points="196,220 320,220 320,300 196,300" fill="url(#concrete-grad-1)" stroke="#1B1F23" stroke-width="2"/>
      <text x="206" y="250" font-family="Public Sans, sans-serif" font-size="13" font-weight="700" fill="#1B1F23">Garage Floor</text>
      <text x="206" y="270" font-family="Public Sans, sans-serif" font-size="11" fill="#4F565D">Level Baseline</text>
      <!-- Sunken Driveway Slab (Sloping down 2.5 inches) -->
      <polygon points="325,270 780,310 780,390 325,350" fill="url(#concrete-grad-1)" stroke="#1B1F23" stroke-width="2"/>
      <!-- Concrete Crack / Joint -->
      <path d="M 322 220 L 322 270 L 325 350" stroke="#8F3E2C" stroke-width="3" stroke-dasharray="3,2"/>
      <!-- Subgrade Void / Soil Erosion Under Slab -->
      <path d="M 325 350 Q 420 400 550 360 Q 680 340 780 390 L 780 450 L 325 450 Z" fill="url(#soil-pat-1)"/>
      <!-- Hollow Void Pocket (Darker) -->
      <path d="M 325 350 Q 440 375 580 345 L 580 370 Q 440 395 325 385 Z" fill="#2A241F" opacity="0.85"/>
      <text x="350" y="375" font-family="Public Sans, sans-serif" font-size="12" font-weight="700" fill="#F4F2EE">Under-Slab Void Pocket (3.2 cu. ft.)</text>
      <!-- Water Pooling at Joint (Negative Slope) -->
      <ellipse cx="340" cy="273" rx="35" ry="8" fill="#3B82F6" opacity="0.75"/>
      <path d="M 360 260 L 335 272" stroke="#2563EB" stroke-width="2" marker-end="url(#arrow)"/>
      <text x="370" y="260" font-family="Public Sans, sans-serif" font-size="12" font-weight="700" fill="#1D4ED8">Rainwater Pools Inward</text>
      <!-- Severe Drop Dimension Callout -->
      <line x1="310" y1="220" x2="310" y2="270" stroke="#C2410C" stroke-width="3"/>
      <polygon points="310,218 306,228 314,228" fill="#C2410C"/>
      <polygon points="310,272 306,262 314,262" fill="#C2410C"/>
      <rect x="235" y="165" width="135" height="34" rx="4" fill="#C2410C"/>
      <text x="245" y="187" font-family="Public Sans, sans-serif" font-size="13" font-weight="700" fill="#FFFFFF">2.5" Lip / Trip Drop</text>
      <!-- Header Overlay Banner -->
      <rect x="24" y="24" width="220" height="36" rx="4" fill="#1B1F23" opacity="0.9"/>
      <circle cx="44" cy="42" r="6" fill="#EF4444"/>
      <text x="60" y="46" font-family="Public Sans, sans-serif" font-size="14" font-weight="700" fill="#FFFFFF">BEFORE LEVELING</text>
    </svg>`,
    afterSvg: `<svg viewBox="0 0 800 450" width="800" height="450" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="After driveway leveling diagram showing lifted slab flush with garage">
      <defs>
        <pattern id="soil-pat-2" width="20" height="20" patternUnits="userSpaceOnUse">
          <rect width="20" height="20" fill="#E5DFD5"/>
          <circle cx="4" cy="4" r="1.5" fill="#C5BDB1"/>
          <circle cx="14" cy="12" r="1.5" fill="#B3ABA0"/>
          <circle cx="8" cy="16" r="1" fill="#C5BDB1"/>
        </pattern>
        <linearGradient id="foam-grad-2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#EA580C"/>
          <stop offset="100%" stop-color="#C2410C"/>
        </linearGradient>
        <linearGradient id="concrete-grad-2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#EAE7E0"/>
          <stop offset="100%" stop-color="#D5D0C6"/>
        </linearGradient>
      </defs>
      <!-- Background & Sky -->
      <rect width="800" height="450" fill="#F2F5F3"/>
      <!-- Garage Wall / Brick veneer left -->
      <rect x="0" y="40" width="180" height="240" fill="#8F3E2C"/>
      <line x1="0" y1="80" x2="180" y2="80" stroke="#DDD" stroke-width="2"/>
      <line x1="0" y1="120" x2="180" y2="120" stroke="#DDD" stroke-width="2"/>
      <line x1="0" y1="160" x2="180" y2="160" stroke="#DDD" stroke-width="2"/>
      <line x1="0" y1="200" x2="180" y2="200" stroke="#DDD" stroke-width="2"/>
      <rect x="180" y="40" width="16" height="240" fill="#3D444B"/>
      <!-- Garage Floor Slab (Level Benchmark) -->
      <polygon points="196,220 320,220 320,300 196,300" fill="url(#concrete-grad-2)" stroke="#1B1F23" stroke-width="2"/>
      <text x="206" y="250" font-family="Public Sans, sans-serif" font-size="13" font-weight="700" fill="#1B1F23">Garage Floor</text>
      <!-- Driveway Slab: Fully Lifted Flush with 1/8" per foot positive drainage outward -->
      <polygon points="325,220 780,238 780,318 325,300" fill="url(#concrete-grad-2)" stroke="#1B1F23" stroke-width="2"/>
      <!-- Cured High-Density Polyurethane Foam Layer (Filling Entire Void) -->
      <path d="M 325 300 L 780 318 L 780 390 Q 640 370 480 380 Q 380 395 325 380 Z" fill="url(#foam-grad-2)"/>
      <!-- Subgrade Soil Base Below Foam -->
      <path d="M 325 380 Q 380 395 480 380 Q 640 370 780 390 L 780 450 L 325 450 Z" fill="url(#soil-pat-2)"/>
      <!-- 5/8-Inch Precision Ports (Clean Patched Hydraulic Plugs) -->
      <circle cx="420" cy="225" r="5" fill="#1B1F23"/>
      <circle cx="560" cy="231" r="5" fill="#1B1F23"/>
      <circle cx="700" cy="236" r="5" fill="#1B1F23"/>
      <line x1="420" y1="180" x2="420" y2="216" stroke="#047857" stroke-width="1.5"/>
      <text x="365" y="172" font-family="Public Sans, sans-serif" font-size="12" font-weight="700" fill="#047857">Patched 5/8" Port</text>
      <!-- Positive Outward Drainage Slope Indicators -->
      <line x1="380" y1="210" x2="620" y2="219" stroke="#059669" stroke-width="2.5"/>
      <polygon points="626,219 614,214 614,224" fill="#059669"/>
      <text x="440" y="202" font-family="Public Sans, sans-serif" font-size="12" font-weight="700" fill="#047857">Positive Drainage Outward (1/4" / ft)</text>
      <!-- Flush Seam Checkmark Callout -->
      <circle cx="323" cy="220" r="14" fill="#059669"/>
      <polyline points="317,220 321,225 330,215" fill="none" stroke="#FFFFFF" stroke-width="2.5"/>
      <rect x="250" y="125" width="160" height="34" rx="4" fill="#059669"/>
      <text x="260" y="147" font-family="Public Sans, sans-serif" font-size="13" font-weight="700" fill="#FFFFFF">100% Flush Alignment</text>
      <!-- Header Overlay Banner -->
      <rect x="24" y="24" width="210" height="36" rx="4" fill="#047857" opacity="0.95"/>
      <circle cx="44" cy="42" r="6" fill="#10B981"/>
      <text x="60" y="46" font-family="Public Sans, sans-serif" font-size="14" font-weight="700" fill="#FFFFFF">AFTER POLYJACKING</text>
    </svg>`,
  },
  {
    id: 'westerville-sidewalk-trip-hazard',
    title: 'Municipal Sidewalk Trip Hazard Removal in Westerville, OH',
    slug: 'westerville-sidewalk-trip-hazard',
    serviceType: 'sidewalks',
    serviceLabel: 'Sidewalk Leveling',
    servicePageUrl: '/concrete-leveling/sidewalks/',
    location: 'Westerville, OH',
    neighborhood: 'Uptown / Otterbein University residential grid',
    townSlug: 'westerville',
    dropDepth: '1.75 inches',
    timeToComplete: '1 hour 20 minutes',
    cureTime: 'Walkable immediately (15 min)',
    costSaved: '$1,850',
    levelingCost: '$650',
    replacementQuote: '$2,500',
    portsDrilled: 4,
    cause: 'Oak tree roots absorbed subgrade soil moisture during summer dry spell, creating hollow void channels beneath outer sidewalk flags.',
    solution: 'Injected rapid-curing closed-cell foam into 4 dime-sized ports. Lifted the settled sidewalk panel 1.75 inches back into seamless alignment with adjacent municipal walkway.',
    summary: 'Homeowner received a city sidewalk trip hazard notice before listing the house. Apex leveled the slab in under 90 minutes, passing municipal inspection the next business day.',
    beforeAlt: 'Before sidewalk leveling: 1.75-inch raised concrete edge on public sidewalk in Westerville, OH posing a trip hazard violation.',
    afterAlt: 'After sidewalk leveling: Seamless flat transition between concrete sidewalk flags in Westerville, OH fully compliant with ADA walk standards.',
    beforeBadge: 'BEFORE: 1.75" Trip Hazard Edge',
    afterBadge: 'AFTER: Zero-Lip ADA Compliance',
    beforeSvg: `<svg viewBox="0 0 800 450" width="800" height="450" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Before sidewalk leveling diagram">
      <rect width="800" height="450" fill="#EFECE6"/>
      <!-- Lawn Grass Borders -->
      <rect x="0" y="320" width="800" height="130" fill="#5F7D4E"/>
      <rect x="0" y="0" width="800" height="100" fill="#4D6B3C"/>
      <!-- Left Sidewalk Slab (Normal Elevation) -->
      <polygon points="50,130 380,130 380,290 50,290" fill="#CFCAC1" stroke="#1B1F23" stroke-width="2"/>
      <text x="120" y="215" font-family="Public Sans, sans-serif" font-size="15" font-weight="700" fill="#1B1F23">Normal Slab #1</text>
      <!-- Right Sidewalk Slab (Sunken 1.75 inches below left slab) -->
      <polygon points="385,165 750,180 750,340 385,325" fill="#BFB9AF" stroke="#1B1F23" stroke-width="2"/>
      <text x="490" y="255" font-family="Public Sans, sans-serif" font-size="15" font-weight="700" fill="#1B1F23">Sunken Slab #2</text>
      <!-- Trip Ledge Callout -->
      <rect x="375" y="125" width="18" height="45" fill="#C2410C" opacity="0.8"/>
      <line x1="365" y1="130" x2="365" y2="165" stroke="#C2410C" stroke-width="3"/>
      <rect x="245" y="65" width="175" height="34" rx="4" fill="#C2410C"/>
      <text x="255" y="87" font-family="Public Sans, sans-serif" font-size="13" font-weight="700" fill="#FFFFFF">1.75" Dangerous Lip</text>
      <line x1="332" y1="100" x2="370" y2="135" stroke="#C2410C" stroke-width="2"/>
      <!-- Trip hazard icon -->
      <circle cx="384" cy="148" r="14" fill="#C2410C"/>
      <text x="380" y="154" font-family="Public Sans, sans-serif" font-size="16" font-weight="900" fill="#FFFFFF">!</text>
      <!-- Header Overlay Banner -->
      <rect x="24" y="24" width="220" height="36" rx="4" fill="#1B1F23" opacity="0.9"/>
      <circle cx="44" cy="42" r="6" fill="#EF4444"/>
      <text x="60" y="46" font-family="Public Sans, sans-serif" font-size="14" font-weight="700" fill="#FFFFFF">BEFORE LEVELING</text>
    </svg>`,
    afterSvg: `<svg viewBox="0 0 800 450" width="800" height="450" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="After sidewalk leveling diagram">
      <rect width="800" height="450" fill="#F2F5F3"/>
      <rect x="0" y="320" width="800" height="130" fill="#5F7D4E"/>
      <rect x="0" y="0" width="800" height="100" fill="#4D6B3C"/>
      <!-- Left Sidewalk Slab -->
      <polygon points="50,130 380,130 380,290 50,290" fill="#DFDAD0" stroke="#1B1F23" stroke-width="2"/>
      <text x="120" y="215" font-family="Public Sans, sans-serif" font-size="15" font-weight="700" fill="#1B1F23">Normal Slab #1</text>
      <!-- Right Sidewalk Slab (Lifted Flush) -->
      <polygon points="385,130 750,130 750,290 385,290" fill="#DFDAD0" stroke="#1B1F23" stroke-width="2"/>
      <text x="480" y="215" font-family="Public Sans, sans-serif" font-size="15" font-weight="700" fill="#1B1F23">Restored Slab #2 (Lifted)</text>
      <!-- Patched 5/8" Holes -->
      <circle cx="480" cy="180" r="5" fill="#1B1F23"/>
      <circle cx="620" cy="240" r="5" fill="#1B1F23"/>
      <!-- Flush Seam Indicator -->
      <line x1="382" y1="120" x2="382" y2="300" stroke="#059669" stroke-width="3"/>
      <rect x="250" y="65" width="220" height="34" rx="4" fill="#059669"/>
      <text x="262" y="87" font-family="Public Sans, sans-serif" font-size="13" font-weight="700" fill="#FFFFFF">100% Flush ADA Transition</text>
      <line x1="360" y1="100" x2="382" y2="125" stroke="#059669" stroke-width="2"/>
      <!-- Header Overlay Banner -->
      <rect x="24" y="24" width="210" height="36" rx="4" fill="#047857" opacity="0.95"/>
      <circle cx="44" cy="42" r="6" fill="#10B981"/>
      <text x="60" y="46" font-family="Public Sans, sans-serif" font-size="14" font-weight="700" fill="#FFFFFF">AFTER POLYJACKING</text>
    </svg>`,
  },
  {
    id: 'hilliard-pool-deck-settlement',
    title: 'In-Ground Pool Deck Coping Realignment in Hilliard, OH',
    slug: 'hilliard-pool-deck-settlement',
    serviceType: 'patios-and-pool-decks',
    serviceLabel: 'Pool Deck Leveling',
    servicePageUrl: '/concrete-leveling/patios-and-pool-decks/',
    location: 'Hilliard, OH',
    neighborhood: 'Homestead Park / Heritage Lakes subdivision',
    townSlug: 'hilliard',
    dropDepth: '2.25 inches',
    timeToComplete: '2 hours 45 minutes',
    cureTime: 'Full weight capacity in 20 minutes',
    costSaved: '$4,600',
    levelingCost: '$1,380',
    replacementQuote: '$5,980',
    portsDrilled: 7,
    cause: 'Backfill settling around pool shell walls combined with chlorinated splash-out saturation washed gravel pockets underneath perimeter concrete.',
    solution: 'Used lightweight 4-lb hydrophobic closed-cell polyurethane foam specifically formulated for wet subterranean conditions. Lifted three curved slabs back into flush coplanar contact with aluminum pool coping track.',
    summary: 'A 2.25-inch drop pulled the pool deck away from coping stones, causing barefoot stubs and water leakage behind pool walls. Apex restored the elevation in under 3 hours without draining the pool or muddying water.',
    beforeAlt: 'Before pool deck leveling: 2.25-inch drop along swimming pool coping track in Hilliard, OH creating dangerous foot snag ledge.',
    afterAlt: 'After pool deck leveling: Concrete pool deck in Hilliard, OH lifted flush with pool coping with water-resistant closed cell foam.',
    beforeBadge: 'BEFORE: 2.25" Drop at Coping Edge',
    afterBadge: 'AFTER: Flush Coping & Sealed Seam',
    beforeSvg: `<svg viewBox="0 0 800 450" width="800" height="450" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Before pool deck leveling diagram">
      <rect width="800" height="450" fill="#EFECE6"/>
      <!-- Pool Water Section Right -->
      <rect x="520" y="140" width="280" height="310" fill="#0EA5E9"/>
      <path d="M 520 180 Q 600 170 680 180 T 800 175 L 800 140 L 520 140 Z" fill="#38BDF8" opacity="0.6"/>
      <!-- Pool Wall & Coping (Stationary) -->
      <rect x="495" y="110" width="25" height="340" fill="#94A3B8" stroke="#1B1F23" stroke-width="1.5"/>
      <rect x="480" y="100" width="45" height="30" fill="#CBD5E1" stroke="#1B1F23" stroke-width="2"/>
      <text x="540" y="230" font-family="Public Sans, sans-serif" font-size="16" font-weight="700" fill="#FFFFFF">Swimming Pool</text>
      <!-- Sunken Pool Deck Slab (Left, dropped 2.25 inches) -->
      <polygon points="50,175 470,175 470,330 50,330" fill="#CFCAC1" stroke="#1B1F23" stroke-width="2"/>
      <text x="180" y="240" font-family="Public Sans, sans-serif" font-size="16" font-weight="700" fill="#1B1F23">Sunken Pool Deck Slab</text>
      <!-- Gap & Drop Indicator -->
      <line x1="475" y1="105" x2="475" y2="175" stroke="#C2410C" stroke-width="3"/>
      <rect x="290" y="55" width="180" height="34" rx="4" fill="#C2410C"/>
      <text x="302" y="77" font-family="Public Sans, sans-serif" font-size="13" font-weight="700" fill="#FFFFFF">2.25" Dangerous Step</text>
      <circle cx="475" cy="140" r="12" fill="#C2410C"/>
      <text x="472" y="145" font-family="Public Sans, sans-serif" font-size="14" font-weight="900" fill="#FFFFFF">!</text>
      <!-- Header Overlay Banner -->
      <rect x="24" y="24" width="220" height="36" rx="4" fill="#1B1F23" opacity="0.9"/>
      <circle cx="44" cy="42" r="6" fill="#EF4444"/>
      <text x="60" y="46" font-family="Public Sans, sans-serif" font-size="14" font-weight="700" fill="#FFFFFF">BEFORE LEVELING</text>
    </svg>`,
    afterSvg: `<svg viewBox="0 0 800 450" width="800" height="450" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="After pool deck leveling diagram">
      <rect width="800" height="450" fill="#F2F5F3"/>
      <rect x="520" y="140" width="280" height="310" fill="#0EA5E9"/>
      <path d="M 520 180 Q 600 170 680 180 T 800 175 L 800 140 L 520 140 Z" fill="#38BDF8" opacity="0.6"/>
      <!-- Pool Wall & Coping -->
      <rect x="495" y="110" width="25" height="340" fill="#94A3B8" stroke="#1B1F23" stroke-width="1.5"/>
      <rect x="480" y="100" width="45" height="30" fill="#CBD5E1" stroke="#1B1F23" stroke-width="2"/>
      <text x="540" y="230" font-family="Public Sans, sans-serif" font-size="16" font-weight="700" fill="#FFFFFF">Swimming Pool</text>
      <!-- Pool Deck Slab (Fully Lifted Flush with Coping) -->
      <polygon points="50,105 478,105 478,260 50,260" fill="#DFDAD0" stroke="#1B1F23" stroke-width="2"/>
      <text x="160" y="180" font-family="Public Sans, sans-serif" font-size="16" font-weight="700" fill="#1B1F23">Lifted Slab Flush with Coping</text>
      <!-- Cured Polyurethane Foam Layer Under Slab -->
      <polygon points="50,260 478,260 478,330 50,330" fill="#EA580C" opacity="0.9"/>
      <text x="180" y="300" font-family="Public Sans, sans-serif" font-size="13" font-weight="700" fill="#FFFFFF">Waterproof Closed-Cell Foam</text>
      <!-- Patched 5/8" Ports -->
      <circle cx="200" cy="150" r="5" fill="#1B1F23"/>
      <circle cx="340" cy="150" r="5" fill="#1B1F23"/>
      <!-- Flush Seam Banner -->
      <rect x="270" y="55" width="200" height="34" rx="4" fill="#059669"/>
      <text x="282" y="77" font-family="Public Sans, sans-serif" font-size="13" font-weight="700" fill="#FFFFFF">100% Flush Coping Line</text>
      <circle cx="480" cy="105" r="10" fill="#059669"/>
      <!-- Header Overlay Banner -->
      <rect x="24" y="24" width="210" height="36" rx="4" fill="#047857" opacity="0.95"/>
      <circle cx="44" cy="42" r="6" fill="#10B981"/>
      <text x="60" y="46" font-family="Public Sans, sans-serif" font-size="14" font-weight="700" fill="#FFFFFF">AFTER POLYJACKING</text>
    </svg>`,
  },
  {
    id: 'grove-city-backyard-patio',
    title: 'Sunken Backyard Patio Re-Pitched in Grove City, OH',
    slug: 'grove-city-backyard-patio',
    serviceType: 'patios-and-pool-decks',
    serviceLabel: 'Patio Leveling',
    servicePageUrl: '/concrete-leveling/patios-and-pool-decks/',
    location: 'Grove City, OH',
    neighborhood: 'Beulah Park / Stringtown Road corridor',
    townSlug: 'grove-city',
    dropDepth: '3.0 inches',
    timeToComplete: '2 hours 30 minutes',
    cureTime: 'Full outdoor furniture reload in 20 min',
    costSaved: '$2,900',
    levelingCost: '$950',
    replacementQuote: '$3,850',
    portsDrilled: 5,
    cause: 'Heavy rainfall drained from roof valley directly into patio inner corner, eroding low-permeability subgrade clay toward basement wall.',
    solution: 'Drilled five 5/8-inch ports along patio foundation seam. Lifted the 14x16 ft slab 3 inches at the house wall to reverse negative pitch, creating a mandatory 1/4" per foot drop away from siding.',
    summary: 'A 3-inch patio settlement was dumping rainwater toward the home foundation, causing dampness in the basement. Apex raised the slab, reversing slope in 2.5 hours.',
    beforeAlt: 'Before patio leveling: Concrete patio tilted backward into home siding in Grove City, OH creating basement water intrusion risk.',
    afterAlt: 'After patio leveling: Concrete patio in Grove City, OH pitched away from foundation wall, safely directing water toward yard.',
    beforeBadge: 'BEFORE: Negative Pitch Toward House',
    afterBadge: 'AFTER: Clean 1/4" Positive Drainage',
    beforeSvg: `<svg viewBox="0 0 800 450" width="800" height="450" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Before patio leveling diagram">
      <rect width="800" height="450" fill="#EFECE6"/>
      <!-- House Foundation & Siding Left -->
      <rect x="0" y="40" width="160" height="200" fill="#E2E8F0" stroke="#1B1F23" stroke-width="1.5"/>
      <line x1="0" y1="80" x2="160" y2="80" stroke="#94A3B8" stroke-width="2"/>
      <line x1="0" y1="120" x2="160" y2="120" stroke="#94A3B8" stroke-width="2"/>
      <line x1="0" y1="160" x2="160" y2="160" stroke="#94A3B8" stroke-width="2"/>
      <text x="20" y="110" font-family="Public Sans, sans-serif" font-size="14" font-weight="700" fill="#1B1F23">Home Siding</text>
      <!-- Sunken Patio Slab: 3.0" Drop tilted toward house -->
      <polygon points="160,265 720,210 720,290 160,345" fill="#CFCAC1" stroke="#1B1F23" stroke-width="2"/>
      <!-- Rainwater Puddle pooling against house -->
      <ellipse cx="200" cy="270" rx="40" ry="10" fill="#3B82F6" opacity="0.8"/>
      <text x="210" y="240" font-family="Public Sans, sans-serif" font-size="12" font-weight="700" fill="#1D4ED8">Water Drains Inward!</text>
      <!-- Settlement indicator -->
      <rect x="220" y="80" width="180" height="34" rx="4" fill="#C2410C"/>
      <text x="232" y="102" font-family="Public Sans, sans-serif" font-size="13" font-weight="700" fill="#FFFFFF">3.0" Negative Slope</text>
      <!-- Header Overlay Banner -->
      <rect x="24" y="24" width="220" height="36" rx="4" fill="#1B1F23" opacity="0.9"/>
      <circle cx="44" cy="42" r="6" fill="#EF4444"/>
      <text x="60" y="46" font-family="Public Sans, sans-serif" font-size="14" font-weight="700" fill="#FFFFFF">BEFORE LEVELING</text>
    </svg>`,
    afterSvg: `<svg viewBox="0 0 800 450" width="800" height="450" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="After patio leveling diagram">
      <rect width="800" height="450" fill="#F2F5F3"/>
      <!-- House Foundation & Siding Left -->
      <rect x="0" y="40" width="160" height="200" fill="#E2E8F0" stroke="#1B1F23" stroke-width="1.5"/>
      <line x1="0" y1="80" x2="160" y2="80" stroke="#94A3B8" stroke-width="2"/>
      <line x1="0" y1="120" x2="160" y2="120" stroke="#94A3B8" stroke-width="2"/>
      <line x1="0" y1="160" x2="160" y2="160" stroke="#94A3B8" stroke-width="2"/>
      <text x="20" y="110" font-family="Public Sans, sans-serif" font-size="14" font-weight="700" fill="#1B1F23">Home Siding</text>
      <!-- Restored Patio: Lifted 3" at house, sloping away into lawn -->
      <polygon points="160,205 720,225 720,305 160,285" fill="#DFDAD0" stroke="#1B1F23" stroke-width="2"/>
      <!-- High-Density Foam Base Below Slab -->
      <polygon points="160,285 720,305 720,365 160,365" fill="#EA580C" opacity="0.9"/>
      <!-- Drainage Arrows Flowing Away from House -->
      <line x1="220" y1="190" x2="480" y2="200" stroke="#059669" stroke-width="3"/>
      <polygon points="486,200 474,195 474,205" fill="#059669"/>
      <text x="260" y="180" font-family="Public Sans, sans-serif" font-size="12" font-weight="700" fill="#047857">Water Drains Safely Away to Lawn</text>
      <!-- Banner Callout -->
      <rect x="220" y="80" width="220" height="34" rx="4" fill="#059669"/>
      <text x="232" y="102" font-family="Public Sans, sans-serif" font-size="13" font-weight="700" fill="#FFFFFF">100% Corrected Pitch (3" Lift)</text>
      <!-- Header Overlay Banner -->
      <rect x="24" y="24" width="210" height="36" rx="4" fill="#047857" opacity="0.95"/>
      <circle cx="44" cy="42" r="6" fill="#10B981"/>
      <text x="60" y="46" font-family="Public Sans, sans-serif" font-size="14" font-weight="700" fill="#FFFFFF">AFTER POLYJACKING</text>
    </svg>`,
  },
  {
    id: 'gahanna-front-porch-stoop',
    title: 'Front Porch & Entry Stoop Stabilization in Gahanna, OH',
    slug: 'gahanna-front-porch-stoop',
    serviceType: 'porches-and-steps',
    serviceLabel: 'Porch & Step Leveling',
    servicePageUrl: '/concrete-leveling/porches-and-steps/',
    location: 'Gahanna, OH',
    neighborhood: 'Creekside / Olde Gahanna historic district',
    townSlug: 'gahanna',
    dropDepth: '2.0 inches',
    timeToComplete: '1 hour 45 minutes',
    cureTime: 'Full foot traffic in 15 minutes',
    costSaved: '$3,100',
    levelingCost: '$850',
    replacementQuote: '$3,950',
    portsDrilled: 4,
    cause: 'Heavy solid concrete porch settled downward into loose builder backfill along basement foundation wall, breaking caulk lines and pulling away from door sill.',
    solution: 'Drilled 4 hidden injection holes through mortar joints and lower risers. Injected 4-lb geotechnical foam to compact subgrade and raise the stoop 2.0 inches back flush with threshold.',
    summary: 'A 2-inch drop under the front entrance stoop created an uneven first step and exposed brick veneer to rainwater rot. Apex lifted and stabilized the entire stoop in under 2 hours.',
    beforeAlt: 'Before porch step leveling: 2-inch gap between front entry stoop and home threshold in Gahanna, OH.',
    afterAlt: 'After porch step leveling: Solid concrete entry stoop in Gahanna, OH restored flush with front door frame.',
    beforeBadge: 'BEFORE: 2" Gap at Entry Door',
    afterBadge: 'AFTER: Flush Threshold & Rigid Base',
    beforeSvg: `<svg viewBox="0 0 800 450" width="800" height="450" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Before porch stoop leveling diagram">
      <rect width="800" height="450" fill="#EFECE6"/>
      <!-- Front Door & Trim Left -->
      <rect x="40" y="20" width="160" height="220" fill="#1E293B"/>
      <rect x="55" y="35" width="130" height="190" fill="#991B1B"/>
      <circle cx="165" cy="130" r="5" fill="#E2E8F0"/>
      <text x="60" y="20" font-family="Public Sans, sans-serif" font-size="13" font-weight="700" fill="#1B1F23">Front Door Threshold</text>
      <!-- Sunken 2-Step Concrete Stoop (Dropped 2.0" below threshold) -->
      <polygon points="200,160 480,160 480,240 320,240 320,320 200,320" fill="#CFCAC1" stroke="#1B1F23" stroke-width="2"/>
      <!-- Gap between threshold and top step -->
      <line x1="200" y1="110" x2="200" y2="160" stroke="#C2410C" stroke-width="3"/>
      <rect x="230" y="70" width="160" height="34" rx="4" fill="#C2410C"/>
      <text x="242" y="92" font-family="Public Sans, sans-serif" font-size="13" font-weight="700" fill="#FFFFFF">2.0" Step Pullaway</text>
      <!-- Header Overlay Banner -->
      <rect x="24" y="24" width="220" height="36" rx="4" fill="#1B1F23" opacity="0.9"/>
      <circle cx="44" cy="42" r="6" fill="#EF4444"/>
      <text x="60" y="46" font-family="Public Sans, sans-serif" font-size="14" font-weight="700" fill="#FFFFFF">BEFORE LEVELING</text>
    </svg>`,
    afterSvg: `<svg viewBox="0 0 800 450" width="800" height="450" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="After porch stoop leveling diagram">
      <rect width="800" height="450" fill="#F2F5F3"/>
      <!-- Front Door & Trim Left -->
      <rect x="40" y="20" width="160" height="220" fill="#1E293B"/>
      <rect x="55" y="35" width="130" height="190" fill="#991B1B"/>
      <circle cx="165" cy="130" r="5" fill="#E2E8F0"/>
      <!-- Lifted 2-Step Stoop (Flush with Threshold) -->
      <polygon points="200,110 480,110 480,190 320,190 320,270 200,270" fill="#DFDAD0" stroke="#1B1F23" stroke-width="2"/>
      <!-- Cured Polyurethane Foam Underpinning Base -->
      <rect x="200" y="270" width="280" height="60" fill="#EA580C" opacity="0.9"/>
      <text x="230" y="305" font-family="Public Sans, sans-serif" font-size="13" font-weight="700" fill="#FFFFFF">Structural Underpinning Foam</text>
      <!-- Flush Seam Banner -->
      <rect x="230" y="55" width="180" height="34" rx="4" fill="#059669"/>
      <text x="242" y="77" font-family="Public Sans, sans-serif" font-size="13" font-weight="700" fill="#FFFFFF">100% Flush Threshold</text>
      <!-- Header Overlay Banner -->
      <rect x="24" y="24" width="210" height="36" rx="4" fill="#047857" opacity="0.95"/>
      <circle cx="44" cy="42" r="6" fill="#10B981"/>
      <text x="60" y="46" font-family="Public Sans, sans-serif" font-size="14" font-weight="700" fill="#FFFFFF">AFTER POLYJACKING</text>
    </svg>`,
  },
  {
    id: 'columbus-garage-floor-stabilization',
    title: 'Interior Garage Slab Leveling in Columbus, OH',
    slug: 'columbus-garage-floor-stabilization',
    serviceType: 'garage-and-warehouse-floors',
    serviceLabel: 'Garage Floor Leveling',
    servicePageUrl: '/concrete-leveling/garage-and-warehouse-floors/',
    location: 'Columbus, OH',
    neighborhood: 'Clintonville / North Broadway residential corridor',
    townSlug: 'columbus',
    dropDepth: '2.25 inches',
    timeToComplete: '2 hours 10 minutes',
    cureTime: 'Full vehicle load in 30 minutes',
    costSaved: '$4,100',
    levelingCost: '$1,250',
    replacementQuote: '$5,350',
    portsDrilled: 6,
    cause: 'Settling subgrade under vehicle wheel paths formed hollow voids, leading to a longitudinal crack down the center bay and 2.25 inches of uneven settlement.',
    solution: 'Injected high-density geotechnical polymer with 10,000 lbs/sq ft compressive capacity. Brought cracked interior slabs level and stabilized the subsurface to prevent future wheel rutting.',
    summary: 'Vehicles parking on a hollow garage floor caused slab cracking and a 2.25-inch center dip. Apex filled the void and restored grade in 2 hours with no dust or jackhammering.',
    beforeAlt: 'Before garage floor leveling: 2.25-inch sunken wheel path in residential garage in Columbus, OH.',
    afterAlt: 'After garage floor leveling: Level garage slab in Columbus, OH supporting passenger vehicle loads with closed-cell polyurethane foam.',
    beforeBadge: 'BEFORE: 2.25" Center Slab Rut',
    afterBadge: 'AFTER: Level & 10,000 psf Capacity',
    beforeSvg: `<svg viewBox="0 0 800 450" width="800" height="450" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Before garage floor leveling diagram">
      <rect width="800" height="450" fill="#EFECE6"/>
      <rect x="0" y="320" width="800" height="130" fill="#D1C7BD"/>
      <!-- Garage Wall Left and Right -->
      <rect x="20" y="40" width="60" height="280" fill="#475569"/>
      <rect x="720" y="40" width="60" height="280" fill="#475569"/>
      <!-- Sunken Center Slab (Bowl Shape) -->
      <polygon points="80,180 320,180 440,230 720,180 720,260 80,260" fill="#CFCAC1" stroke="#1B1F23" stroke-width="2"/>
      <!-- Hollow Subfloor Void -->
      <ellipse cx="440" cy="275" rx="140" ry="25" fill="#1E293B" opacity="0.85"/>
      <text x="350" y="280" font-family="Public Sans, sans-serif" font-size="13" font-weight="700" fill="#F8FAFC">Void Beneath Tire Path</text>
      <!-- Center Dip Dimension -->
      <line x1="440" y1="180" x2="440" y2="230" stroke="#C2410C" stroke-width="3"/>
      <rect x="370" y="100" width="140" height="34" rx="4" fill="#C2410C"/>
      <text x="382" y="122" font-family="Public Sans, sans-serif" font-size="13" font-weight="700" fill="#FFFFFF">2.25" Center Dip</text>
      <!-- Header Overlay Banner -->
      <rect x="24" y="24" width="220" height="36" rx="4" fill="#1B1F23" opacity="0.9"/>
      <circle cx="44" cy="42" r="6" fill="#EF4444"/>
      <text x="60" y="46" font-family="Public Sans, sans-serif" font-size="14" font-weight="700" fill="#FFFFFF">BEFORE LEVELING</text>
    </svg>`,
    afterSvg: `<svg viewBox="0 0 800 450" width="800" height="450" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="After garage floor leveling diagram">
      <rect width="800" height="450" fill="#F2F5F3"/>
      <rect x="0" y="320" width="800" height="130" fill="#D1C7BD"/>
      <rect x="20" y="40" width="60" height="280" fill="#475569"/>
      <rect x="720" y="40" width="60" height="280" fill="#475569"/>
      <!-- Level Garage Slab Across Full Bay -->
      <polygon points="80,180 720,180 720,260 80,260" fill="#DFDAD0" stroke="#1B1F23" stroke-width="2"/>
      <!-- High-Density Geotechnical Foam Support Base -->
      <rect x="220" y="260" width="360" height="50" fill="#EA580C" opacity="0.9"/>
      <text x="270" y="292" font-family="Public Sans, sans-serif" font-size="13" font-weight="700" fill="#FFFFFF">High-Density Void Fill (10,000 psf)</text>
      <!-- Patched 5/8" Ports -->
      <circle cx="320" cy="205" r="5" fill="#1B1F23"/>
      <circle cx="440" cy="205" r="5" fill="#1B1F23"/>
      <circle cx="560" cy="205" r="5" fill="#1B1F23"/>
      <!-- Level Transit Line -->
      <line x1="80" y1="175" x2="720" y2="175" stroke="#059669" stroke-width="2.5" stroke-dasharray="6,4"/>
      <rect x="340" y="90" width="200" height="34" rx="4" fill="#059669"/>
      <text x="352" y="112" font-family="Public Sans, sans-serif" font-size="13" font-weight="700" fill="#FFFFFF">100% Laser-Level Plane</text>
      <!-- Header Overlay Banner -->
      <rect x="24" y="24" width="210" height="36" rx="4" fill="#047857" opacity="0.95"/>
      <circle cx="44" cy="42" r="6" fill="#10B981"/>
      <text x="60" y="46" font-family="Public Sans, sans-serif" font-size="14" font-weight="700" fill="#FFFFFF">AFTER POLYJACKING</text>
    </svg>`,
  },
];
