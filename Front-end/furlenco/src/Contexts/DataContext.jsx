import { createContext } from "react";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
    const products = [{
        image: "https://assets.furlenco.com/s3-furlenco-images/lenco-icons/category-v2/ic-bedroom.svg",
        title: "BEDROOM",
        newlaunch: true,
    },
    {
        image: "https://assets.furlenco.com/s3-furlenco-images/lenco-icons/category-v2/ic-livingroom.svg",
        title: "LIVING ROOM",
    },
    {
        image: "https://assets.furlenco.com/s3-furlenco-images/lenco-icons/category-v2/ic-electronics.svg",
        title: "ELECTRONICS",
        newlaunch: true,
    },
    {
        image: "https://assets.furlenco.com/s3-furlenco-images/lenco-icons/category-v2/ic-appliances.svg",
        title: "APPLAINCES",
    },
    {
        image: "https://assets.furlenco.com/s3-furlenco-images/lenco-icons/category-v2/ic-fitness.svg",
        title: "FITNESS",
        newlaunch: true,
    },
    {
        image: "https://assets.furlenco.com/s3-furlenco-images/lenco-icons/category-v2/ic-fullhome.svg",
        title: "FULL HOME",
    },
    {
        image: "https://assets.furlenco.com/s3-furlenco-images/lenco-icons/category-v2/ic-storage.svg",
        title: "STORAGE",
    },
    {
        image: "https://assets.furlenco.com/s3-furlenco-images/lenco-icons/category-v2/ic-ws.svg",
        title: "WORKSTATION",
    },
    {
        image: "https://assets.furlenco.com/s3-furlenco-images/lenco-icons/category-v2/ic-kids.svg",
        title: "KIDS",
    },
    {
        image: "https://assets.furlenco.com/s3-furlenco-images/lenco-icons/category-v2/ic-diningroom.svg",
        title: "DINING ROOM",
    },
    {
        image: "https://assets.furlenco.com/s3-furlenco-images/lenco-icons/category-v2/ic-twowheeler.svg",
        title: "TWO WHEELERS",
        newlaunch: true,
    }
    ];
    const collections = [{
        image: "https://assets.furlenco.com/s3-furlenco-images/lenco-icons/collections-v2/ic-binge-watch.svg",
        title: "BINGE WATCH COLLECTION",
    },
    {
        image: "https://assets.furlenco.com/s3-furlenco-images/lenco-icons/category-v2/ic-specialdeals.svg",
        title: "SPECIAL DEALS",
        newlaunch: true,
    },
    {
        image: "https://assets.furlenco.com/s3-furlenco-images/lenco-icons/collections-v2/ic-most-popular.svg",
        title: "MOST POPULAR",
    },
    {
        image: "https://assets.furlenco.com/s3-furlenco-images/lenco-icons/collections-v2/ic-essentials.svg",
        title: "ESSENTIALS",
    },
    {
        image: "https://assets.furlenco.com/s3-furlenco-images/lenco-icons/collections-v2/ic-newlylaunched.svg",
        title: "NEWLY LAUNCHED",
    },
    {
        image: "https://assets.furlenco.com/s3-furlenco-images/lenco-icons/collections-v2/ic-storage.svg",
        title: "STORAGE",
    },
    {
        image: "https://assets.furlenco.com/s3-furlenco-images/lenco-icons/collections-v2/ic-awardwinners.svg",
        title: "AWARD WINNERS",
    },
    ];

    const comments = [{
        image: "https://assets.furlenco.com/f_auto,q_auto,dpr_auto/s3-furlenco-images/ugc/production/1607693288196.png",
        name: "Neha Agarwal",
        location: "Bengaluru",
        via: "Twitter",
        viaImg: "https://assets.furlenco.com/s3-furlenco-images/thorin/testimony/social-icons/twitter_icon.svg",
        description: "@FURLENCO Got it! Thanks for the on-time delivery and excellent work by the Furlenco team.",
    },
    {
        image: "https://assets.furlenco.com/f_auto,q_auto,dpr_auto/s3-furlenco-images/ugc/production/1607693885377.png",
        name: "Safal Singh",
        location: "Bengaluru",
        description: "Good Services, On time delivery, professionalism quality products",
        via: "Facebook",
        viaImg: "https://assets.furlenco.com/s3-furlenco-images/thorin/testimony/social-icons/facebook_icon.svg",
    },
    {
        image: "https://assets.furlenco.com/f_auto,q_auto,dpr_auto/s3-furlenco-images/ugc/production/1607692876921.png",
        name: "Sonali Singh",
        location: "Bengaluru",
        description: "Thank you @Furlenco for your great service and still going strong #furlenco ....read more",
        via: "Twitter",
        viaImg: "https://assets.furlenco.com/s3-furlenco-images/thorin/testimony/social-icons/twitter_icon.svg",
    }
    ]

    return (
        <DataContext.Provider value={{ products, collections, comments }}>
            {children}
        </DataContext.Provider>
    )
}