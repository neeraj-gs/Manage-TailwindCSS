import { instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";


export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '10k+', label: 'Brands' },
    { value: '100+', label: 'Stores' },
    { value: '250k+', label: 'Happy Customers' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Nike Air Jordan",
        price: "₹2.5k",
    },
    {
        imgURL: shoe5,
        name: "Adidas Trainers",
        price: "₹4.5k",
    },
    {
        imgURL: shoe6,
        name: "Nike Casuals",
        price: "₹3.2k",
    },
    {
        imgURL: shoe7,
        name: "New Balance SPort",
        price: "₹5.5k",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free Delivery",
        subtext: "Enjoy seamless Super Fast Delivery in One Day."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions, with All mothords of payments."
    },
    {
        imgURL: support,
        label: "Customer Support",
        subtext: "Our dedicated team is here to assist you every step 24/7."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Nike", link: "/" },
            { name: "Puma", link: "/" },
            { name: "Addidas", link: "/" },
            { name: "Louis Vuitton", link: "/" },
            { name: "Under Armour", link: "/" },
            { name: "Reebok", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },

        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "gsneeraj2002@gmail.com", link: "gsneeraj2002@gmail.com" },
            { name: " Download SourceCode", link: "/https://github.com/neeraj-gs/ShoeBox-TailwindCSS" },
        ],
    },
];

export const socialMedia = [
    { src: twitter, alt: "twitter logo",link:"/https://twitter.com/neeraj_gs_05" },
    { src: instagram, alt: "instagram logo",link:"https://www.instagram.com/neeraj_gs/" },
    // { src: <FaGithub />,alt:"github",link:"/https://github.com/neeraj-gs/ShoeBox-TailwindCSS"}
];