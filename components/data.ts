// Site content for Ooty Cabs — car rental & taxi service in Ooty, Nilgiris

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#popular", label: "Our Fleet" },
  { href: "#featured", label: "Book A Cab" },
  { href: "#offer", label: "Offers" },
] as const;

// Local hill-road / Ooty drive clips for the hero background slider.
// Drop 3 short mp4 clips into public/assets/video with these exact names,
// or edit the paths below to match whatever files you use.
export const videos = [
  "/assets/video/ooty-road-1.mp4",
  "/assets/video/ooty-tea-estate.mp4",
  "/assets/video/ooty-hills.mp4",
];

// Swiper carousel — "Our Fleet"
export const popularCars = [
  {
    title: "Toyota",
    subtitle: "Glanza",
    price: "₹10 / km",
    img: "/assets/img/glanza.png",
  },
  {
    title: "Toyota",
    subtitle: "Innova Crysta",
    price: "₹13 / km",
    img: "/assets/img/innova.png",
  },
  {
    title: "Maruti Suzuki",
    subtitle: "Swift Dzire",
    price: "₹9 / km",
    img: "/assets/img/swift.png",
  },
  {
    title: "Swaraj Mazda",
    subtitle: "Tempo Traveller (12-Seater)",
    price: "₹18 / km",
    img: "/assets/img/swaraj-mazda.png",
  },
];

// Filterable grid — "Book A Cab". brand must match a filter id below.
export const featuredCars = [
  {
    title: "Toyota",
    subtitle: "Glanza",
    price: "₹10 / km",
    img: "/assets/img/glanza-side.png",
    brand: "glanza",
  },
  {
    title: "Toyota",
    subtitle: "Innova Crysta",
    price: "₹13 / km",
    img: "/assets/img/innova-side.png",
    brand: "innova",
  },
  {
    title: "Maruti Suzuki",
    subtitle: "Swift Dzire",
    price: "₹9 / km",
    img: "/assets/img/swift-side.png",
    brand: "swift",
  },
  {
    title: "Swaraj Mazda",
    subtitle: "Tempo Traveller",
    price: "₹18 / km",
    img: "/assets/img/swaraj-side.png",
    brand: "swaraj",
  },
];

export const filters = [
  { id: "all", label: "All" },
  { id: "glanza", label: "Glanza" },
  { id: "innova", label: "Innova" },
  { id: "swift", label: "Swift" },
  { id: "swaraj", label: "Swaraj Mazda" },
] as const;

// Brand logo strip
export const logos = [
  "/assets/img/logo-toyota.png",
  "/assets/img/logo-maruti-suzuki.png",
  "/assets/img/logo-swaraj-mazda.png",
];