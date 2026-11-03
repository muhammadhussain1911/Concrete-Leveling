# Contractor Rental Handover Checklist: Content & Verification Requirements

This document itemizes every data point, regulatory detail, media asset, and regional observation that the leasing contractor must supply or confirm before deploying this site live to production. All site text and schemas pull dynamically from `src/config/site.ts`.

---

## 1. Business Credentials & Rental Configuration (`src/config/site.ts`)

| Config Field | Current State | Contractor Action Required | Status |
| :--- | :--- | :--- | :--- |
| `businessName` | `Apex Concrete Leveling` | Provide legal trade name or DBA registered in the target state. | Pending Contractor |
| `phoneDisplay` | `(614) 555-0192` | Provide primary trackable local telephone number formatted for human reading. | Pending Contractor |
| `phoneTel` | `tel:6145550192` | Provide E.164 or numeric dial string matching `phoneDisplay`. | Pending Contractor |
| `email` | `estimates@...` | Provide monitored dispatch inbox for estimate form submissions. | Pending Contractor |
| `city`, `state` | `Columbus`, `OH` | Confirm primary operating metro and state licensing jurisdiction. | Pending Contractor |
| `domain` | `https://apexconcreteleveling.com` | Replace with live apex domain where DNS is pointed. | Pending Contractor |
| `licenseNumber` | `OH-HIC-2024-8841` | Provide registered state or municipal Home Improvement Contractor license number, or set `undefined` to suppress badge. | Verify |
| `insured` | `true` | Confirm active general liability and workers' compensation coverage ($1M+ typical). Set `false` if unverified. | Confirmed |
| `warrantyText` | `2-year residential...` | Confirm exact legal warranty length, exclusions (e.g. soil washouts, pre-existing subgrade subsidence), and transferable terms. | Verify |
| `yearsInBusiness` | `12` | Provide actual verified years of field operation or set to `undefined` to omit. | Verify |
| `streetAddress` | `undefined` (Service Area Business) | If contractor operates a staffed office or yard welcoming walk-ins, provide street address. Otherwise keep `undefined` to maintain Google SAB privacy compliance. | SAB Configured |
| `gbpUrl` | `undefined` | Paste direct Google Business Profile URL or Google Maps CID link once claimed/verified. | Pending Profile |
| `trackingScriptUrl` | `undefined` | Insert CallRail, Ringba, or WhatConverts dynamic number insertion (DNI) script URL. | Optional |
| `gaId` | `undefined` | Provide Google Analytics 4 Measurement ID (`G-XXXXXXXXXX`). | Optional |

---

## 2. Pricing Ranges & Quotation Standards

Site copy adheres to honest trade ranges rather than fixed deceptive quotes. Contractor must review and approve these ranges:

*   **Average Residential Slab Lift (Sidewalk / Entry Walk)**: $600 to $1,400 depending on void volume and slab thickness.
*   **Two-Car Driveway Settlement (2 to 4 panels)**: $1,200 to $2,800.
*   **Patio / Pool Deck Leveling**: $900 to $2,400.
*   **Mudjacking Price Comparison**: Polyurethane foam lifting typically costs 15% to 25% more in material than traditional mudjacking, but saves overall cost through 5/8" dime-sized drill holes, zero trench disruption, and 15-minute cure times.
*   **Full Replacement Comparison**: Foam leveling costs 40% to 70% less than tearing out and repouring concrete, avoiding dumpster fees, lawn damage, and 28-day curing downtime.

---

## 3. Real Job-Site Photography Requirements

**BANNED**: Stock photos of people in clean hardhats, generic 3D renders, or unverified work.
**REQUIRED**: The contractor must provide authentic, mobile-shot photos from real jobs:
1.  **Drill Hole Comparison Photo**: A 5/8-inch polyurethane drill hole next to a standard U.S. 10-cent dime, compared side-by-side with a 2-inch mudjacking core hole.
2.  **Driveway Apron Lift**: Sunken driveway slab at garage approach before injection and after flush alignment with garage floor.
3.  **Sidewalk Trip Hazard Elimination**: Municipal sidewalk panel lifted 2 inches flush with adjoining slab, eliminating an active trip hazard.
4.  **Patio Pitch Restoration**: Back patio sloping toward foundation lifted to direct rainfall away from the sill plate.

---

## 4. Local Town Details & Geological Factors

| Town / Suburb | County | Geological & Structural Conditions | Municipal / HOA Factors |
| :--- | :--- | :--- | :--- |
| **Dublin** | Franklin | Glacial till with heavy clay subbase. Summer shrinkage pulls clay away from foundation walls; spring saturation induces slab settlement. | Strict HOA sidewalk trip hazard regulations (Muirfield Village, Tartan Fields). |
| **Westerville** | Franklin & Delaware | High silty clay content near Hoover Reservoir basin. High groundwater saturation causes void erosion under driveway approaches. | City sidewalk inspection program requires homeowner remediation of offsets over 0.5 inches. |
| **Grove City** | Franklin | Compacted subgrades in recent housing subdivisions prone to uneven settling around utility trenches and backfill perimeters. | Driveway apron drop-offs common near curbs; garage floor separation. |
| **Hilliard** | Franklin | Mixed gravel pockets and dense clay strata. Soil shifting occurs during winter freeze-thaw cycles under front walkways and stoops. | Active township code enforcement for pedestrian walkways. |
| **Gahanna** | Franklin | Big Walnut Creek and Rocky Fork alluvial washouts. Sandy-silt subgrades easily erode beneath back patios and pool decks during storm surges. | High proportion of pool decks and expansive backyard concrete slabs. |

---

## 5. Keyword Map & Architecture

| Target URL | Primary Target Keyword | Secondary Keywords | Primary H1 Title | Minimum Word Target |
| :--- | :--- | :--- | :--- | :--- |
| `/` | concrete leveling {{CITY}} | polyjacking {{CITY}}, concrete lifting {{CITY}}, slab leveling {{STATE}} | Concrete Leveling in {{CITY}}, {{STATE}} | 900+ words |
| `/concrete-leveling/` | concrete leveling services {{CITY}} | slab lifting services, poly foam concrete repair | Concrete Leveling Services in {{CITY}} | 900+ words |
| `/concrete-leveling/polyurethane-foam-lifting/` | polyurethane foam concrete leveling | polyjacking {{CITY}}, high density foam lifting, foam slab jacking | Polyurethane Foam Concrete Leveling (Polyjacking) in {{CITY}} | 1,600+ words |
| `/concrete-leveling/driveways/` | sunken driveway repair | driveway leveling {{CITY}}, lift sunken driveway slab | Sunken Driveway Repair & Leveling in {{CITY}} | 900+ words |
| `/concrete-leveling/sidewalks/` | sidewalk leveling | trip hazard repair {{CITY}}, walkway lifting, ADA concrete repair | Sidewalk Leveling & Trip Hazard Repair in {{CITY}} | 900+ words |
| `/concrete-leveling/patios-and-pool-decks/` | patio and pool deck leveling | sunken patio lifting, pool deck leveling {{CITY}}, concrete slab pitch | Patio and Pool Deck Concrete Leveling in {{CITY}} | 900+ words |
| `/concrete-leveling/garage-and-warehouse-floors/` | garage floor leveling | warehouse slab lifting, industrial concrete leveling {{CITY}} | Garage and Warehouse Floor Slab Leveling | 900+ words |
| `/concrete-leveling/porches-and-steps/` | sunken porch repair | concrete step leveling, front stoop lifting {{CITY}} | Concrete Porch and Step Leveling in {{CITY}} | 900+ words |
| `/service-areas/` | concrete leveling service areas {{CITY}} | concrete lifters near me, central {{STATE}} concrete repair | Concrete Leveling Service Areas in {{CITY}} Metro | 600+ words |
| `/service-areas/dublin/` | concrete leveling Dublin {{STATE}} | polyjacking Dublin, driveway repair Dublin | Concrete Leveling in Dublin, {{STATE}} | 600+ words |
| `/service-areas/westerville/` | concrete leveling Westerville {{STATE}} | sidewalk leveling Westerville, polyjacking Westerville | Concrete Leveling in Westerville, {{STATE}} | 600+ words |
| `/service-areas/grove-city/` | concrete leveling Grove City {{STATE}} | driveway slab lifting Grove City, poly foam repair | Concrete Leveling in Grove City, {{STATE}} | 600+ words |
| `/service-areas/hilliard/` | concrete leveling Hilliard {{STATE}} | sunken concrete repair Hilliard, sidewalk repair Hilliard | Concrete Leveling in Hilliard, {{STATE}} | 600+ words |
| `/service-areas/gahanna/` | concrete leveling Gahanna {{STATE}} | patio leveling Gahanna, concrete lifting Gahanna | Concrete Leveling in Gahanna, {{STATE}} | 600+ words |
| `/concrete-leveling-cost/` | concrete leveling cost {{CITY}} | how much does concrete leveling cost, polyjacking cost vs replacement | Concrete Leveling Cost in {{CITY}}: Honest Pricing Guide | 900+ words |
| `/guides/` | concrete leveling guides | polyjacking resources, concrete maintenance guides | Concrete Leveling & Slab Maintenance Guides | 600+ words |
| `/guides/mudjacking-vs-polyjacking/` | mudjacking vs polyjacking | polyurethane vs mudjacking, slab jacking comparison | Mudjacking vs. Polyjacking: Which Method Works Better? | 1,000+ words |
| `/guides/why-concrete-sinks/` | why concrete sinks | causes of sunken concrete, soil settlement under slabs | Why Concrete Sinks: Subgrade Soil Settlement Explained | 1,000+ words |
| `/guides/signs-your-slab-needs-leveling/` | signs concrete slab needs leveling | when to lift concrete, trip hazards, pooling water | 6 Signs Your Concrete Slab Needs Leveling | 1,000+ words |
| `/guides/how-long-foam-lifting-lasts/` | how long does foam lifting last | polyurethane foam concrete lifespan, polyjacking durability | How Long Does Polyurethane Foam Concrete Lifting Last? | 1,000+ words |
| `/guides/concrete-leveling-in-winter/` | concrete leveling in winter | can you lift concrete in cold weather, winter polyjacking | Can Concrete Leveling Be Done in Winter? | 1,000+ words |
| `/about/` | about {{businessName}} | concrete leveling contractor {{CITY}}, licensed concrete lifter | About {{businessName}} | 600+ words |
| `/contact/` | concrete leveling estimate {{CITY}} | request quote concrete leveling, free inspection | Request a Concrete Leveling Inspection in {{CITY}} | 500+ words |
| `/privacy/` | privacy policy | data policy, form submission privacy | Privacy Policy | 500+ words |
| `/thank-you/` | inspection request received | thank you concrete leveling | Inspection Request Received | Noindex |
| `/404/` | page not found | 404 error | Page Not Found | Noindex |

---

## 6. Gaps Flagged for Contractor Handover

*   [ ] **Phone Verification**: Currently set to placeholder `(614) 555-0192`. Must be swapped to live telephone tracking line before advertising.
*   [ ] **Netlify Forms Hookup**: Production Netlify team must enable form notifications to route lead emails to `estimates@...`.
*   [ ] **Real Photos**: Swap SVG placeholders with contractor's real drill-hole and before/after job photos.
*   [ ] **Reviews**: No fake reviews or AggregateRating schema have been output. Provide authentic Google Review text only when available.
