// =============================================================================
// OOTY CABS - UNIFIED BUSINESS & SEO CONFIGURATION
// Single configuration file for all business, SEO, and contact details.
// Update placeholders here to update site-wide schemas, metadata, and contacts.
// =============================================================================

export const siteConfig = {
  // Business Identity
  businessName: "Ooty Cabs",
  legalName: "Ooty Cabs - Nivesh",
  tagline: "Car Rental, Sightseeing Tours & Cab Service in Ooty",
  domain: "https://super-car-website-beryl.vercel.app",

  // Physical Location & Address
  address: {
    street: "Nivesh, Ketti",
    locality: "Ketti",
    city: "Ooty",
    district: "Nilgiris",
    region: "Tamil Nadu",
    postalCode: "643215",
    country: "IN",
    full: "Nivesh, Ketti, Ooty, Nilgiris, Tamil Nadu 643215, India",
  },

  // Contact Information
  phone: "+91 7806882556",
  phoneDisplay: "7806882556",
  phoneTel: "+917806882556",
  whatsapp: "+91 8489322556",
  whatsappUrl: "https://wa.me/918489322556",
  email: "ootytripplanners22@gmail.com",

  // Operational Hours
  openingHours: "Mon-Sun 00:00-23:59",
  openingHoursSpecification: [
    {
      days: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  ],

  // Geo Coordinates
  geo: {
    latitude: 11.381,
    longitude: 76.736,
  },

  // Social & Map Profiles
  socialProfiles: {
    instagram: "https://www.instagram.com/hustler_155?stkn=MmRhcWtqd2VrM2c4",
    facebook: "", // [PLACEHOLDER - Add Facebook page URL when available]
    googleMaps: "https://share.google/BxZohRlybux7qbeDN",
  },
  sameAs: [
    "https://www.instagram.com/hustler_155?stkn=MmRhcWtqd2VrM2c4",
    "https://share.google/BxZohRlybux7qbeDN",
  ],

  // Service Areas
  serviceArea: [
    "Ooty",
    "Ketti",
    "Coonoor",
    "Kotagiri",
    "Nilgiris",
    "Coimbatore",
    "Mettupalayam",
    "Mysore",
    "Bangalore",
  ],

  // Pricing & Currencies
  priceRange: "₹₹",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, UPI, Net Banking, Credit Card, Debit Card",

  // Verification & Analytics Hooks
  googleSiteVerification: [
    "aC6rAZQgrYDaM6gAD91cZWQEJeRqfkMSnDwdRtOkAR8",
    "tC_g2oM8aRhEgUfJDhuq1Wghrf2K-V8R3c5443mn6FI",
  ],
  gaMeasurementId: "", // [PLACEHOLDER - Replace with your GA4 Measurement ID, e.g. G-XXXXXXXXXX]
  gtmId: "", // [PLACEHOLDER - Replace with your GTM Container ID, e.g. GTM-XXXXXXX]
};

// Backward-compatible site object used throughout components
export const site = {
  name: siteConfig.businessName,
  legalName: siteConfig.legalName,
  phoneDisplay: siteConfig.phoneDisplay,
  phoneTel: siteConfig.phoneTel,
  whatsapp: siteConfig.whatsappUrl,
  email: siteConfig.email,
  addressLine: siteConfig.address.full,
  locality: siteConfig.address.locality,
  city: siteConfig.address.city,
  district: siteConfig.address.district,
  state: siteConfig.address.region,
  postalCode: siteConfig.address.postalCode,
  country: siteConfig.address.country,
  url: siteConfig.domain,
  geo: siteConfig.geo,
  openingHours: siteConfig.openingHours,
  serviceArea: siteConfig.serviceArea,
  socialProfiles: siteConfig.socialProfiles,
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/tours", label: "Tours" },
  { href: "/transfers", label: "Transfers" },
  { href: "/vehicles", label: "Vehicles" },
  { href: "/packages", label: "Packages" },
  { href: "/hotels", label: "Stay" },
];

export type RentalVehicle = {
  id: string;
  slug: string;
  brand: string;
  name: string;
  model: string;
  vehicleModelDate: string;
  fuelType: string;
  seats: string;
  seatingCapacity: number;
  priceStarting: number;
  priceFormatted: string;
  img: string;
  width: number;
  height: number;
  note: string;
  alt: string;
};

export const vehicles: RentalVehicle[] = [
  {
    id: "glanza",
    slug: "glanza",
    brand: "Toyota",
    name: "Glanza",
    model: "Glanza 1.2L",
    vehicleModelDate: "2023",
    fuelType: "Petrol",
    seats: "4 seater",
    seatingCapacity: 4,
    priceStarting: 2500,
    priceFormatted: "₹2,500 onwards",
    img: "/assets/img/home5.png",
    width: 1536,
    height: 1024,
    note: "Modern compact sedan for couples and small families.",
    alt: "Toyota Glanza cab rental in Ooty Nilgiris",
  },
  {
    id: "swift",
    slug: "swift-dzire",
    brand: "Maruti Suzuki",
    name: "Swift / Dzire",
    model: "Swift Dzire",
    vehicleModelDate: "2023",
    fuelType: "Petrol / Diesel",
    seats: "4 seater",
    seatingCapacity: 4,
    priceStarting: 2500,
    priceFormatted: "₹2,500 onwards",
    img: "/assets/img/featured2.png",
    width: 715,
    height: 429,
    note: "Economical sedan for sightseeing and drop taxis.",
    alt: "Maruti Suzuki Swift Dzire taxi in Ooty",
  },
  {
    id: "innova",
    slug: "innova-crysta",
    brand: "Toyota",
    name: "Innova / Crysta / Hycross",
    model: "Innova Crysta",
    vehicleModelDate: "2023",
    fuelType: "Diesel / Hybrid",
    seats: "7 seater",
    seatingCapacity: 7,
    priceStarting: 3500,
    priceFormatted: "₹3,500 onwards",
    img: "/assets/img/featured3.png",
    width: 728,
    height: 485,
    note: "Spacious SUV for families and longer hill journeys.",
    alt: "Toyota Innova Crysta SUV rental in Ooty",
  },
  {
    id: "mazda",
    slug: "tempo-traveller",
    brand: "Swaraj Mazda",
    name: "Tempo / Group van",
    model: "Tempo Traveller",
    vehicleModelDate: "2022",
    fuelType: "Diesel",
    seats: "12–18 seater",
    seatingCapacity: 18,
    priceStarting: 5000,
    priceFormatted: "₹5,000 onwards",
    img: "/assets/img/featured1.png",
    width: 500,
    height: 348,
    note: "Group travel, weddings, and Tempo Traveller style trips.",
    alt: "Swaraj Mazda Tempo Traveller rental in Ooty for group tours",
  },
];

export type SaleVehicle = {
  id: string;
  slug: string;
  brand: string;
  name: string;
  model: string;
  vehicleModelDate: string;
  mileageFromOdometer: string;
  mileageValue: number;
  fuelType: string;
  itemCondition: "https://schema.org/UsedCondition" | "https://schema.org/NewCondition";
  price: number;
  priceCurrency: "INR";
  priceFormatted: string;
  availability: "https://schema.org/InStock" | "https://schema.org/SoldOut";
  seats: number;
  img: string;
  note: string;
};

// Sale vehicles structure ready for inventory & Schema.org rich results
export const saleVehicles: SaleVehicle[] = [
  {
    id: "used-innova-crysta-2021",
    slug: "used-toyota-innova-crysta-ooty",
    brand: "Toyota",
    name: "Innova Crysta 2.4 VX",
    model: "Innova Crysta",
    vehicleModelDate: "2021",
    mileageFromOdometer: "48,000 km",
    mileageValue: 48000,
    fuelType: "Diesel",
    itemCondition: "https://schema.org/UsedCondition",
    price: 1850000,
    priceCurrency: "INR",
    priceFormatted: "₹18,50,000",
    availability: "https://schema.org/InStock",
    seats: 7,
    img: "/assets/img/featured3.png",
    note: "Single owner, well-maintained Nilgiris hill certified used car with full service record.",
  },
  {
    id: "used-swift-dzire-2022",
    slug: "used-maruti-swift-dzire-ooty",
    brand: "Maruti Suzuki",
    name: "Swift Dzire VXI",
    model: "Swift Dzire",
    vehicleModelDate: "2022",
    mileageFromOdometer: "32,000 km",
    mileageValue: 32000,
    fuelType: "Petrol",
    itemCondition: "https://schema.org/UsedCondition",
    price: 680000,
    priceCurrency: "INR",
    priceFormatted: "₹6,80,000",
    availability: "https://schema.org/InStock",
    seats: 5,
    img: "/assets/img/featured2.png",
    note: "Excellent condition certified used car in Ooty with comprehensive insurance.",
  },
];

export const mainServices = [
  { href: "/tours/ooty", label: "Ooty local sightseeing tours" },
  { href: "/tours/coonoor", label: "Coonoor sightseeing tours" },
  { href: "/tours/pykara", label: "Pykara sightseeing trips" },
  { href: "/tours/avalanche", label: "Avalanche tours" },
  { href: "/tours/mudumalai", label: "Mudumalai and Masinagudi tour packages" },
  { href: "/transfers", label: "Ooty airport and railway station transfers" },
  { href: "/transfers", label: "Mettupalayam to Ooty transfers" },
  { href: "/transfers", label: "Coimbatore Airport to Ooty transfers" },
  { href: "/transfers", label: "Mysore and Bangalore to Ooty transfers" },
  { href: "/vehicles", label: "Sedan and SUV cab rentals" },
  { href: "/vehicles", label: "Tempo Traveller rental" },
  { href: "/vehicles", label: "Force Urbania rental" },
  { href: "/toy-train", label: "Toy Train ticket assistance" },
  { href: "/hotels", label: "Ooty hotel booking" },
  { href: "/hotels", label: "Homestays and cottages" },
  { href: "/packages", label: "Food and accommodation assistance" },
  { href: "/packages", label: "Acting driver service" },
  { href: "/packages", label: "Tourist guide service" },
  { href: "/packages", label: "South India tour packages" },
];

export const ootySightseeingTariff = {
  caption: "Ooty Sightseeing Tariff",
  headers: ["Vehicle", "Starting Tariff", "Duration"],
  rows: [
    ["Dzire / Glanza / Etios", "₹2,500 onwards", "Up to 8 Hours"],
    ["Innova", "₹3,500 onwards", "Up to 8 Hours"],
    ["Innova Crysta", "₹5,500 onwards", "Up to 8 Hours"],
    ["Innova Hycross", "₹6,000 onwards", "Up to 8 Hours"],
    ["Tempo Traveller", "₹5,000 onwards", "Up to 8 Hours"],
    ["Tempo Traveller", "₹5,500 onwards", "Up to 8 Hours"],
    ["Tempo Traveller", "₹6,000 onwards", "Up to 8 Hours"],
    ["Force Urbania", "On Request", "As per itinerary"],
  ],
};

export const coonoorDropFare = {
  caption: "Ooty to Coonoor Drop Taxi Fare",
  headers: ["Cabs", "Fare"],
  rows: [
    ["4 Seater", "Rs. 1,300"],
    ["7 Seater", "Rs. 2,300"],
    ["12 Seater", "Rs. 3,500"],
    ["18 Seater", "Rs. 5,000"],
  ],
};

export const mettupalayamDropFare = {
  caption: "Ooty to Mettupalayam Drop taxi fare",
  headers: ["Cabs", "Tariff"],
  rows: [
    ["4 Seater", "Rs. 2,500"],
    ["7 Seater", "Rs. 3,500"],
    ["12 Seater", "Rs. 6,000"],
    ["18 Seater", "Rs. 7,500"],
  ],
};

export const coimbatoreFare = {
  caption: "Ooty to Coimbatore One-way Taxi Fare",
  headers: ["Cabs", "Price"],
  rows: [
    ["4 Seater", "Rs. 3,500"],
    ["7 Seater", "Rs. 5,500"],
    ["12 Seater", "Rs. 8,500"],
    ["18 Seater", "Rs. 9,500"],
  ],
};

export const coonoorRouteTable = {
  caption: "Coonoor to Ooty & Ooty to Coonoor Travel",
  headers: ["Route", "Travel Option", "Suitable For"],
  rows: [
    ["Coonoor → Ooty", "Private Cab", "Families & couples"],
    ["Coonoor → Ooty", "Toy Train", "Scenic railway experience"],
    ["Ooty → Coonoor", "Private Cab", "Flexible sightseeing"],
    ["Ooty → Coonoor", "Toy Train", "Leisure travellers"],
    ["Ooty ↔ Coonoor", "Round-Trip Cab", "Full-day tour"],
    ["Ooty ↔ Coonoor", "Tempo Traveller", "Groups"],
  ],
};

export const toyTrainTimings = {
  caption: "Approximate Coonoor to Ooty Toy Train Timings",
  headers: ["Route", "Approx. Departure", "Approx. Arrival"],
  rows: [
    ["Coonoor → Ooty", "Around 7:45 AM", "Around 9:05 AM"],
    ["Coonoor → Ooty", "Around 12:35 PM", "Around 1:50 PM"],
    ["Coonoor → Ooty", "Around 4:30 PM", "Around 5:45 PM"],
  ],
};

export const sharingTours = {
  caption: "Ooty Sharing Mini Bus Sightseeing Packages",
  headers: ["Tour Package", "Fare Per Head", "Pickup & Drop", "Timing"],
  rows: [
    ["Ooty Sightseeing", "₹475 / Person", "Ooty Bus Stand", "9:30 AM – 6:00 PM"],
    ["Coonoor Sightseeing", "₹475 / Person", "Ooty Bus Stand", "9:30 AM – 6:00 PM"],
    ["Pykara Sightseeing", "₹475 / Person", "Ooty Bus Stand", "9:30 AM – 6:00 PM"],
    ["Mudumalai Sightseeing", "₹750 / Person", "Ooty Bus Stand", "9:30 AM – 6:00 PM"],
  ],
};

export const tariffNote =
  "The above prices are starting tariffs and may vary depending on season, travel date, vehicle availability, route, sightseeing requirements and local operating conditions. Parking charges, entrance tickets, boating charges, special permits and personal expenses may be additional unless specifically mentioned in the booking.";

export type TourPage = {
  slug: string;
  title: string;
  subtitle: string;
  seoTitle: string;
  seoDescription: string;
  description: string[];
  placesTitle: string;
  places: string[];
  extra?: string[];
};

export const tours: TourPage[] = [
  {
    slug: "ooty",
    title: "Local Ooty Sightseeing",
    subtitle: "Queen of Hills day tour from Ketti & Ooty",
    seoTitle: "Ooty Sightseeing Cab – Day Tour Packages | Ooty Cabs",
    seoDescription:
      "Book private Ooty sightseeing cabs for Botanical Garden, Lake, Doddabetta & Pine Forest. Glanza, Innova & Tempo Travellers available. Call now to reserve!",
    description: [
      "Ooty sightseeing is an ideal way to explore the famous attractions of the Queen of Hills in one day. Depending on the route and available time, your tour can include Ooty Lake, Botanical Garden, Rose Garden, Doddabetta Peak, Tea Factory, Tea Museum, Pine Forest, 6th Mile, 9th Mile, Shooting Point and other popular attractions.",
      "Ooty Cabs provides private cab services for local sightseeing. Our vehicles are suitable for couples, families and small groups. For larger groups, Tempo Travellers and Force Urbania vehicles are available according to requirement and availability.",
      "The route can be adjusted for families, couples, senior citizens and groups.",
    ],
    placesTitle: "Popular Ooty Attractions",
    places: [
      "Ooty Lake",
      "Government Botanical Garden",
      "Government Rose Garden",
      "Doddabetta Peak",
      "Tea Factory and Tea Museum",
      "Pine Forest",
      "Shooting Point",
      "6th Mile",
      "9th Mile",
      "Kamaraj Sagar Dam",
      "Emerald Lake",
      "Wenlock Downs",
    ],
  },
  {
    slug: "coonoor",
    title: "Coonoor Sightseeing Tour from Ooty",
    subtitle: "Tea estates, viewpoints and Nilgiri roads",
    seoTitle: "Coonoor Sightseeing Cab from Ooty & Nilgiris | Ooty Cabs",
    seoDescription:
      "Explore Sim's Park, Dolphin's Nose & tea estates with our Coonoor cab from Ooty. Affordable tariffs for families and groups. Book your Coonoor tour today!",
    description: [
      "Coonoor is one of the most beautiful hill stations in the Nilgiris and is well known for tea plantations, mountain viewpoints and the historic Nilgiri Mountain Railway.",
      "Ooty Cabs can arrange a private cab or Tempo Traveller for a Coonoor day trip from Ooty. A private cab provides flexibility to stop at viewpoints and tea estates, while the Nilgiri Mountain Railway offers a memorable heritage railway experience.",
    ],
    placesTitle: "Coonoor Tourist Attractions",
    places: [
      "Sim’s Park",
      "Lamb’s Rock",
      "Dolphin’s Nose",
      "Tea Estates",
      "Tea Factory",
      "Catherine Falls viewpoint",
      "Wellington",
      "Coonoor town",
      "Scenic Nilgiri mountain roads",
    ],
  },
  {
    slug: "pykara",
    title: "Pykara Sightseeing Tour",
    subtitle: "Lake, waterfalls and pine forest",
    seoTitle: "Pykara Lake Sightseeing Cab Tour from Ooty | Ooty Cabs",
    seoDescription:
      "Visit Pykara Lake, waterfalls & Pine Forest with private Ooty taxi services. Starting tariffs from ₹2,500 for up to 8 hours. Book your Pykara cab today!",
    description: [
      "Pykara is a popular excursion from Ooty, known for its lake, waterfalls, forests and scenic mountain surroundings. Pykara can be combined with other attractions on the same sightseeing route depending on the available time.",
    ],
    placesTitle: "Pykara Tour Highlights",
    places: [
      "Pykara Lake",
      "Pykara Boat House",
      "Pykara Waterfalls",
      "Pykara Dam",
      "Pine Forest",
      "Shooting Point",
      "6th Mile",
      "9th Mile",
      "Wenlock Downs",
    ],
  },
  {
    slug: "avalanche",
    title: "Avalanche Sightseeing Tour",
    subtitle: "Quiet forests, lakes and mountain scenery",
    seoTitle: "Avalanche Sightseeing Cab Tour from Ooty | Ooty Cabs",
    seoDescription:
      "Private cab service to Avalanche Lake, Emerald and scenic Nilgiris mountain forests. Sanitized vehicles and experienced hill drivers. Book your trip now!",
    description: [
      "Avalanche is known for its peaceful mountain scenery, forests, lakes and natural surroundings. It is an excellent destination for travellers who prefer quieter landscapes away from the busiest tourist areas.",
      "An Avalanche trip may include permitted sightseeing areas around Avalanche, Emerald and surrounding mountain landscapes. Access conditions can vary, so the route should be confirmed before travel.",
      "Ooty Cabs provides suitable cabs and group vehicles for Avalanche sightseeing according to passenger requirements.",
    ],
    placesTitle: "Avalanche Tour",
    places: [
      "Avalanche permitted viewpoints",
      "Emerald surroundings",
      "Mountain forest landscapes",
    ],
  },
  {
    slug: "mudumalai",
    title: "Mudumalai & Masinagudi Tour Packages",
    subtitle: "From the hills to forest landscapes",
    seoTitle: "Mudumalai Safari & Masinagudi Cab from Ooty | Ooty Cabs",
    seoDescription:
      "Book Ooty to Mudumalai and Masinagudi wildlife taxi tours. Comfortable private cars and Tempo Travellers for forest safaris. Contact us to book your trip!",
    description: [
      "The journey from Ooty towards Gudalur, Mudumalai and Masinagudi offers a dramatic change from the high mountains to forest landscapes.",
      "Visitors may encounter elephants, deer, bison and other wildlife, but wildlife sightings are naturally subject to conditions and cannot be guaranteed.",
      "Ooty Cabs can arrange transportation for one-day trips or customized multi-day itineraries.",
    ],
    placesTitle: "Mudumalai Tour Highlights",
    places: [
      "Ooty",
      "Gudalur",
      "Mudumalai surroundings",
      "Masinagudi",
      "Theppakadu",
      "Moyar region",
      "Forest landscapes",
      "Wildlife safari options",
    ],
  },
];

export const southIndiaDestinations = [
  "Ooty",
  "Coonoor",
  "Kotagiri",
  "Mettupalayam",
  "Coimbatore",
  "Mysore",
  "Bangalore",
  "Coorg",
  "Wayanad",
  "Kochi",
  "Munnar",
  "Alleppey",
  "Kodaikanal",
  "Valparai",
  "Pollachi",
  "Madurai",
  "Kanyakumari",
];
