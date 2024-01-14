export const PRODUCT_CATEGORIES = [
    {
        label:"UI Kits",
        value:"ui kits" as const,
        featured: [
            {
                name:"Editor's Picks",
                href: "#",
                imageSrc: '/nav/ui-kits/mixed.jpg',
            },
            {
                name:"New Arrivals",
                href: "#",
                imageSrc: '/nav/ui-kits/blue.jpg',
            },
            {
                name:"Best Sellers",
                href: "#",
                imageSrc: '/nav/ui-kits/purple.jpg',
            },
        ],
    },
    {
        label:"Icons",
        value:"Icons" as const,
        featured: [
            {
                name:"Favourite Icon Picks",
                href: "#",
                imageSrc: '/nav/icons/picks.jpg',
            },
            {
                name:"New Icons",
                href: "#",
                imageSrc: '/nav/icons/new.jpg',
            },
            {
                name:"Best Selling Icons",
                href: "#",
                imageSrc: '/nav/icons/bestsellers.jpg',
            },
            
        ],
    },
]