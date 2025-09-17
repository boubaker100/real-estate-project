
import { IconData, MenuItem, Slide, Realization, TimelineItem, Property, City } from "@/types";


export const Icons: IconData[] = [
    { id: 1, icon_url: "/assets/homepage/icons/point.svg", icon_description: "Prime Locations" },
    { id: 2, icon_url: "/assets/homepage/icons/list.svg", icon_description: "Wide Property Listings" },
    { id: 3, icon_url: "/assets/homepage/icons/keys.svg", icon_description: "Ready-to-Move Homes" },
    { id: 4, icon_url: "/assets/homepage/icons/hands.svg", icon_description: "Trusted Partnerships" },
];

export const MenuItems: MenuItem[] = [
    { site_url: "/", site_name: "Home" },
    { site_url: "/apartments", site_name: "Apartments" },

];

export const Slides: Slide[] = [
    { id: 1, content: "Modern Designs" },
    { id: 2, content: "Premium Locations" },
    { id: 3, content: "Affordable Prices" },
    { id: 4, content: "High Quality" },
    { id: 5, content: "Smart Solutions" },
    { id: 6, content: "Sustainable Living" },
    { id: 7, content: "Elegant Interiors" },
];

export const Realizations: Realization[] = [
    {
        id: 1,
        description: `A modern residential project designed with comfort and functionality in mind. Perfectly located in the city center with access to all urban amenities.`,
        ImageUrl: "/assets/realizations/house.webp",
        Location: "alg",
        title: "Urban Comfort Apartments",
    },
    {
        id: 2,
        description: `A stylish housing development combining contemporary architecture with green surroundings. Ideal for families seeking peace and convenience.`,
        ImageUrl: "/assets/realizations/house.webp",
        Location: "oran",
        title: "Green Living Residences",
    },
    {
        id: 3,
        description: `Premium-class apartments located in one of the most historic districts of the city. A unique combination of tradition and modern comfort.`,
        ImageUrl: "/assets/realizations/house.webp",
        Location: "el euod",
        title: "Heritage Luxury Homes",
    },
];

export const TimelineData: TimelineItem[] = [
    {
        title: "Initial Consultation",
        description: "We start with a personalized consultation to understand your housing needs, lifestyle, and budget. This helps us tailor the best property options for you.",
        image: "/assets/adverts/room.png",
    },
    {
        title: "Property Selection",
        description: "Our team presents a curated list of properties that match your preferences, including location, size, and amenities.",
        image: "/assets/adverts/room.png",
    },
    {
        title: "Site Visits",
        description: "We arrange guided tours of selected properties so you can evaluate the spaces and neighborhoods firsthand.",
        image: "/assets/adverts/room.png",
    },
    {
        title: "Financial Planning",
        description: "We assist you with mortgage options, payment plans, and provide full financial transparency before making a decision.",
        image: "/assets/adverts/room.png",
    },
    {
        title: "Final Agreement",
        description: "Once you’ve chosen your property, we handle the documentation, legal support, and ensure a smooth purchasing process.",
        image: "/assets/adverts/room.png",
    },
    {
        title: "Move-In & Support",
        description: "After purchase, we continue supporting you with move-in assistance and after-sales services to make your transition seamless.",
        image: "/assets/adverts/room.png",
    },
];

export const propertiesData: Property[] = [
    {
        id: 1, location: "Algiers", title: "Apartment for Sale in Algiers", flatNumber: "1", roomsAmount: "2", metrics: 85, description: "Beautiful apartment near downtown.", type: "For Sale", ImageUrl: "/assets/adverts/flats/flat1.webp", price: 35000000, coordinates: [36.7538, 3.0588],  isAvailable: true,ownerEmail: "email@example.com", phone: "+213 553 99 59 31"

    },
    {
        id: 2, location: "Oran", title: "Villa for Rent in Oran", flatNumber: "Ground Floor", roomsAmount: "3", metrics: 110, description: "Spacious and bright.", type: "For Rent", ImageUrl: "/assets/adverts/flats/flat2.webp", price: 45000, coordinates: [35.6911, -0.6417], isAvailable: true,ownerEmail: "email@example.com", phone: "+213 553 99 59 31"
    },
    {
        id: 3, location: "Constantine", title: "House for Sale in Constantine", flatNumber: "2", roomsAmount: "4", metrics: 150, description: "Amazing panoramic view.", type: "For Sale", ImageUrl: "/assets/adverts/flats/flat3.webp", price: 25000000, coordinates: [36.3562, 6.6146], isAvailable: true,ownerEmail: "email@example.com", phone: "+213 553 99 59 31"
    },
    {
        id: 4, location: "Annaba", title: "House for Sale in Annaba", flatNumber: "2", roomsAmount: "5", metrics: 881, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", type: "For Sale", ImageUrl: "/assets/adverts/houses/house_photo2.webp", price: 120000, coordinates: [36.9009, 7.7601], isAvailable: true,ownerEmail: "email@example.com", phone: "+213 553 99 59 31"
    },
    {
        id: 5, location: "Blida", title: "House for Sale in Blida", flatNumber: "3", roomsAmount: "7", metrics: 831, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", type: "For Sale", ImageUrl: "/assets/adverts/houses/house_photo3.webp", price: 55000, coordinates: [36.4731, 2.8178], isAvailable: true,ownerEmail: "email@example.com", phone: "+213 553 99 59 31"
    },
    {
        id: 6, location: "Batna", title: "Appartement Batna", flatNumber: "2", roomsAmount: "5", metrics: 612, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", type: "For Rent", ImageUrl: "/assets/adverts/houses/house_photo4.webp", price: 60000, coordinates: [35.5550, 6.1736], isAvailable: true,ownerEmail: "email@example.com", phone: "+213 553 99 59 31"
    },
    {
        id: 7, location: "Tlemcen", title: "Appartement Tlemcen", flatNumber: "1", roomsAmount: "3", metrics: 533, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", type: "For Rent", ImageUrl: "/assets/adverts/houses/house_photo4.webp", price: 50000, coordinates: [34.8825, -1.3167], isAvailable: true,ownerEmail: "email@example.com", phone: "+213 553 99 59 31"
    },
    {
        id: 8, location: "Setif", title: "Appartement Setif", flatNumber: "1", roomsAmount: "5", metrics: 784, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", type: "For Rent", ImageUrl: "/assets/adverts/houses/house_photo2.webp", price: 75000, coordinates: [36.1911, 5.4137], isAvailable: true,ownerEmail: "email@example.com", phone: "+213 553 99 59 31"
    },
    {
        id: 9, location: "Tizi Ouzou", title: "Appartement Tizi Ouzou", flatNumber: "1", roomsAmount: "4", metrics: 400, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", type: "For Rent", ImageUrl: "/assets/adverts/houses/house_photo3.webp", price: 62000, coordinates: [36.7118, 4.0456], isAvailable: true,ownerEmail: "email@example.com", phone: "+213 553 99 59 31"
    },
    {
        id: 10, location: "Bejaia", title: "Appartement Bejaia", flatNumber: "2", roomsAmount: "5", metrics: 580, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", type: "For Sale", ImageUrl: "/assets/adverts/houses/house_photo2.webp", price: 90000, coordinates: [36.7500, 5.0667], isAvailable: true,ownerEmail: "email@example.com", phone: "+213 553 99 59 31"
    },
];

export const citiesData: City[] = [
    { name: "Algiers", latitude: 36.7538, longitude: 3.0588 },
    { name: "Oran", latitude: 35.6969, longitude: -0.633 },
    { name: "Constantine", latitude: 36.365, longitude: 6.6147 },
    { name: "Annaba", latitude: 36.9000, longitude: 7.7667 },
    { name: "Blida", latitude: 36.4731, longitude: 2.8178 },
    { name: "Tlemcen", latitude: 34.8825, longitude: -1.3167 },
    { name: "Batna", latitude: 35.5550, longitude: 6.1736 },
    { name: "Setif", latitude: 36.1911, longitude: 5.4137 },
    { name: "Tizi Ouzou", latitude: 36.7118, longitude: 4.0456 },
    { name: "Bejaia", latitude: 36.7500, longitude: 5.0667 },
    { name: "Skikda", latitude: 36.8667, longitude: 6.9000 },
    { name: "Mostaganem", latitude: 35.9333, longitude: 0.1667 },
    { name: "Jijel", latitude: 36.8197, longitude: 5.7656 },
    { name: "Bouira", latitude: 36.3773, longitude: 3.8967 },
    { name: "Tebessa", latitude: 35.4056, longitude: 8.1242 },
    { name: "Relizane", latitude: 35.7333, longitude: 0.5500 },
    { name: "Sidi Bel Abbes", latitude: 35.1956, longitude: -0.6406 },
    { name: "El Oued", latitude: 33.3500, longitude: 6.8667 },
];