export const site = {
  name: "Ooty Cabs",
  legalName: "Ooty Cabs - Nivesh",
  phoneDisplay: "7806882556",
  phoneTel: "+917806882556",
  whatsapp: "https://wa.me/918489322556",
  email: "ootytripplanners22@gmail.com",
  addressLine: "Nivesh, Ketti, Ooty, Nilgiris, Tamil Nadu 643215",
  locality: "Ketti",
  city: "Ooty",
  district: "Nilgiris",
  state: "Tamil Nadu",
  postalCode: "643215",
  country: "IN",
  url: "https://ootycabs.vercel.app",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/tours", label: "Tours" },
  { href: "/transfers", label: "Transfers" },
  { href: "/vehicles", label: "Vehicles" },
  { href: "/packages", label: "Packages" },
  { href: "/hotels", label: "Stay" },
];

export const vehicles = [
  {
    id: "glanza",
    brand: "Toyota",
    name: "Glanza",
    seats: "4 seater",
    img: "/assets/img/home5.png",
    note: "Modern compact sedan for couples and small families.",
  },
  {
    id: "swift",
    brand: "Maruti Suzuki",
    name: "Swift / Dzire",
    seats: "4 seater",
    img: "/assets/img/featured2.png",
    note: "Economical sedan for sightseeing and drop taxis.",
  },
  {
    id: "innova",
    brand: "Toyota",
    name: "Innova / Crysta / Hycross",
    seats: "7 seater",
    img: "/assets/img/featured3.png",
    note: "Spacious SUV for families and longer hill journeys.",
  },
  {
    id: "mazda",
    brand: "Swaraj Mazda",
    name: "Tempo / Group van",
    seats: "12–18 seater",
    img: "/assets/img/featured1.png",
    note: "Group travel, weddings, and Tempo Traveller style trips.",
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
